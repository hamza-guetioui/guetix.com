// import { client } from "@/lib/sanity/lib/client";

// const query = `*[_type == "projects"]{
//     title,
//     headline,
//     bio {
//       text,
//       highlight
//     },
//     picture {
//     alt,
//     asset->{
//       _id,
//       url,
//       metadata {
//        dimensions {
//           width,
//           height
//         },
//         lqip,
//         palette
//       }
//     }
//       }
//   }`;

// export const GET_PROJECTS = async (): Promise<IHero | null> => {
//   try {
//     const response = await client.fetch(
//       query,
//       {},
//       {
//         cache: "force-cache",
//         next: { revalidate: 60 },
//       }
//     );
//     if (!response) return null;

//     const parsed = HeroSchema.safeParse(response);

//     if (!parsed.success) {
//       console.error("Sanity HomePage Validation Error:", parsed.error);
//       return null;
//     }

//     return parsed.data as IHero;
//   } catch (error) {
//     console.error("Failed to fetch HomePage content:", error);
//     return null;
//   }
// };
