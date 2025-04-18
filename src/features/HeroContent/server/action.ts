import { client } from "@/sanity/lib/client";
import { HeroSchema } from "./schema";
import { IHero } from "../types";

// Constants
const CACHE_TTL = 60; // 1 minute
const QUERY_CACHE_TAG = "hero-content";

// Sanity Query
const query = `*[_type == "homePage"][0]{
  hero {
    title,
    headline,
    bio {
      text,
      highlight,
      highlightColor
    },
    image {
      alt,
      asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height,
            aspectRatio
          },
          lqip,
          palette {
            dominant {
              background,
              foreground,
              population,
              title
            },
            vibrant {
              background,
              foreground,
              population,
              title
            },
            darkVibrant {
              background,
              foreground,
              population,
              title
            },
            lightVibrant {
              background,
              foreground,
              population,
              title
            },
            muted {
              background,
              foreground,
              population,
              title
            },
            darkMuted {
              background,
              foreground,
              population,
              title
            },
            lightMuted {
              background,
              foreground,
              population,
              title
            }
          }
        }
      }
    },
    callToAction {
      text,
      url,
      variant,

    },
   
  }
}`;

export const GET_HERO_CONTENT = async (): Promise<IHero["hero"] | null> => {
  try {
    const response = await client.fetch<IHero["hero"]>(
      query,
      {},
      {
        next: {
          revalidate: CACHE_TTL,
          tags: [QUERY_CACHE_TAG],
        },
      }
    );

    if (!response) {
      return null;
    }

    // Validate against schema
    const parsed = HeroSchema.safeParse(response);
    
    if (!parsed.success) {
      console.error("Sanity HeroSchema Validation Error:", parsed.error);
      return null;
    }

    const data = parsed.data.hero as IHero["hero"];
    return data;
  } catch (error) {
    console.error("Failed to fetch hero content:", error);
    return null;
  }
};
