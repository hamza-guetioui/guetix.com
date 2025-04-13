import { client } from "@/lib/sanity/lib/client";
import {  TechnologySchema } from "./schema";
import {  ITechnology } from "../types";

const query = `*[_type == "technology"]{
_id,
   name,
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
     website,
  isFeatured
     
  }`;

export const GET_TECHNOLOGIES = async (): Promise<ITechnology[] | null> => {
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

    const parsed = TechnologySchema.array().safeParse(response);

    if (!parsed.success) {
      console.error("Sanity Technologies Validation Error:", parsed.error);
      return null;
    }

    return parsed.data as ITechnology[];
  } catch (error) {
    console.error("Failed to fetch Technologies content:", error);
    return null;
  }
};
