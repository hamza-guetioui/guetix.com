import { client } from "@/sanity/lib/client";
import { ProjectSchema } from "./schema";
import { IProject } from "../types";

// Constants
const CACHE_TTL = 60; // 1 minute
const QUERY_CACHE_TAG = "projects";

// Sanity Query
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
    name,
    description,
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
    color
  },
  technologies[]->{
    _id,
    name,
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
    isFeatured
  },
  content[]{
    ...,
    asset->
  },
  links {
    demoUrl,
    sourceCodeUrl
  },

  isPublished,
  isFeatured,
  sortOrder
}`;

export const GET_PROJECTS = async (): Promise<IProject[] | null> => {
  try {
    const response = await client.fetch<IProject[]>(
      query,
      {},
      {
        next: { revalidate: CACHE_TTL, tags: [QUERY_CACHE_TAG] },
      }
    );

    if (!response) {
      return null;
    }
 
    // Validate against schema
    const parsed = ProjectSchema.array().safeParse(response);

    if (!parsed.success) {
      console.error("Sanity Projects Validation Error:", parsed.error);
      return null;
    }
    const data = parsed.data;
    return data;
  } catch (error) {
    console.error("Failed to fetch Projects content:", error);
    return null;
  }
};
