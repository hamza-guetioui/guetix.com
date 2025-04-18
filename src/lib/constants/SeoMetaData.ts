// types/seo.ts
export interface ISeo {
  title: string;
  meta: (
    | {
        name: string;
        content: string;
        charSet?: string;
      }
    | {
        charSet: string;
        name?: string;
        content?: string;
      }
  )[];
  openGraph: {
    type: string;
    title: string;
    description: string;
    image: string;
    url: string;
    siteName: string;
  };
}

// data/seo.ts

const SEO_DATA: Record<string, ISeo> = {
  home: {
    title: "HAMZA GUETIOUI – Full Stack Developer Portfolio",
    meta: [
      {
        name: "description",
        content:
          "Discover the work and expertise of HAMZA GUETIOUI – a full stack developer specializing in building high-quality web applications.",
      },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { charSet: "UTF-8" },
      { name: "author", content: "John Doe" },
      {
        name: "keywords",
        content:
          "HAMZA GUETIOUI, full stack developer, portfolio, web development, React, Next.js",
      },
    ],
    openGraph: {
      type: "website",
      title: "HAMZA GUETIOUI – Full Stack Developer Portfolio",
      description:
        "Explore the professional portfolio of HAMZA GUETIOUI, featuring web development projects and client collaborations.",
      image: "/images/og-home.jpg",
      url: "https://guetix.com",
      siteName: "HAMZA GUETIOUI Portfolio",
    },
  },

  blog: {
    title: "Blog – Insights & Tutorials by HAMZA GUETIOUI",
    meta: [
      {
        name: "description",
        content:
          "Read tutorials, tech articles, and insights on web development from HAMZA GUETIOUI, a passionate full stack developer.",
      },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { charSet: "UTF-8" },
      { name: "author", content: "HAMZA GUETIOUI" },
      {
        name: "keywords",
        content:
          "blog, web development, tutorials, JavaScript, React, backend, frontend, tips",
      },
    ],
    openGraph: {
      type: "website",
      title: "Blog – Insights & Tutorials by HAMZA GUETIOUI",
      description:
        "Stay updated with the latest insights and tutorials in the world of web development.",
      image: "/images/og-blog.jpg",
      url: "https://guetix.com/blog",
      siteName: "HAMZA GUETIOUI Blog",
    },
  },
};

export default SEO_DATA;
