import { type SchemaTypeDefinition } from "sanity";
import { homePage } from "./homePageContent";
import { project } from "./project";
import { projectCategory } from "./projectCategory";
import { socialAccounts } from "./socialAccounts";
import { technology } from "./technology";

import { article } from "./article";
import { articleCategory } from "./articleCategory";
import { articleTag } from "./articleTag";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homePage,
    project,
    projectCategory,
    socialAccounts,
    technology,
    article,
    articleCategory,
    articleTag,
  ],
};
