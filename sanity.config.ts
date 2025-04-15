"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\guetix-panel\[[...tool]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { colorInput } from "@sanity/color-input";
import { codeInput } from "@sanity/code-input";
import { media } from "sanity-plugin-media";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./src/lib/sanity/env";
import { schema } from "./src/lib/sanity/schemaTypes";
import { structure } from "./src/lib/sanity/structure";

export default defineConfig({
  basePath: "/guetix-panel",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({ structure }),
    colorInput(),
    codeInput(),
    media(),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
