import { client } from "@/sanity/lib/client";
import { TechnologySchema } from "./schema";
import { ITechnology } from "../types";

// Constants
const CACHE_TTL = 60; // 1 minute
const QUERY_CACHE_TAG = "technologies";

// Sanity Query
const query = `*[_type == "technology"]{
  _id,
  name,
  slug,
  type,
  description,
  logo {
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
  brandColor,
  website,
  isFeatured,
  proficiency,
  sortOrder
}`;

export const GET_TECHNOLOGIES = async (): Promise<ITechnology[] | null> => {
  try {
    const response = await client.fetch<ITechnology[]>(
      query,
      {},
      {
        next: { revalidate: CACHE_TTL, tags: [QUERY_CACHE_TAG] },
      }
    );

    if (!response) {
      return null;
    }


    const parsed = TechnologySchema.array().safeParse(response);

    if (!parsed.success) {
      console.error("Sanity Technologies Validation Error:", parsed.error);
      return null;
    }

    return parsed.data ;
  } catch (error) {
    console.error("Failed to fetch Technologies content:", error);
    return null;
  }
};
