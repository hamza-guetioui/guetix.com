import { client } from "@/sanity/lib/client";
import { SocialSchema } from "./schema";
import { ISocial } from "../types";

// Constants
const CACHE_TTL = 60; // 1 minute
const QUERY_CACHE_TAG = "socials";

// Sanity Query
const query = `*[_type == "socialAccounts" && isActive == true] | order(sortOrder asc){
  _id,
  platform,
  username,
  profileUrl,
  icon {
    alt,
    asset->{
      _id,
      url,
      metadata {
        dimensions {
          width,
          height
        },
        lqip,
        palette
      }
    }
  },
  color,
  isActive,
  isFeatured,
  sortOrder
}`;

export const GET_SOCIALS = async (): Promise<ISocial[] | null> => {
  try {
    const response = await client.fetch<ISocial[]>(
      query,
      {},
      {
        next: { revalidate: CACHE_TTL, tags: [QUERY_CACHE_TAG] },
      }
    );

    if (!response) {
      return null;
    }

    const parsed = SocialSchema.array().safeParse(response);

    if (!parsed.success) {
      console.error("Sanity Socials Validation Error:", parsed.error);
      return null;
    }
    return parsed.data;
  } catch (error) {
    console.error("Failed to fetch Socials content:", error);
    return null;
  }
};
