import { client } from "@/lib/sanity/lib/client";
import { ProjectSchema } from "./schema";
import { IProject } from "../types";

const query = `*[_type == "project"]{
  _id,
  title,
  slug,
  description,
  image {
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
  category->{
    _id,
    title
  },
  technologies[]->{
    _id,
    name,
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
    website,
    isFeatured
  },
  content[]{
    ...,
    asset->
  },
  externalLinks {
    liveUrl,
    repository
  },
  isPublished,
  isFeatured,
  sortOrder
}`;

export const GET_PROJECTS = async (): Promise<IProject[] | null> => {
  try {
    const response = await client.fetch(
      query,
      {},
      {
        cache: "force-cache",
        next: { revalidate: 60 },
      }
    );
    if (!response) return null;

    const parsed = ProjectSchema.array().safeParse(response);

    if (!parsed.success) {
      console.error("Sanity Projects Validation Error:", parsed.error);
      return null;
    }

    return parsed.data as IProject[];
  } catch (error) {
    console.error("Failed to fetch Projects content:", error);
    return null;
  }
};
