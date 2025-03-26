import { type SchemaTypeDefinition } from "sanity";
import { homePage } from "./home_page";
import { project } from "./project";
import { projectCategory } from "./project_category";
import { technology } from "./technology";
import { article } from "./article";
import { articleCategory } from "./article_category";
import { socialAccounts } from "./social_account";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homePage,
    project,
    projectCategory,
    technology,
    article,
    articleCategory,
    socialAccounts,
  ],
};
