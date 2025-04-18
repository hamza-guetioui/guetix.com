import type { StructureResolver } from "sanity/structure";
import {
  VideoIcon,
  DocumentTextIcon,
  ProjectsIcon,
  MasterDetailIcon,
  CodeIcon,
  UserIcon,
} from "@sanity/icons";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Pages")
        .icon(MasterDetailIcon)
        .child(
          S.list()
            .title("Home Page")
            .items([S.documentTypeListItem("homePage")])
        ),

      S.listItem()
        .title("Projects")
        .icon(ProjectsIcon)
        .child(
          S.list()
            .title("Projects")
            .items([
              S.documentTypeListItem("project"),
              S.documentTypeListItem("projectCategory"),
            ])
        ),
      S.listItem()
        .title("Technologies")
        .icon(CodeIcon)
        .child(
          S.list()
            .title("Technologies")
            .items([
              S.documentTypeListItem("technology"),
            ])
        ),
      S.listItem()
        .title("Socials")
        .icon(UserIcon)
        .child(
          S.list()
            .title("Social Accounts")
            .items([S.documentTypeListItem("socialAccounts")])
        ),
      S.listItem()
        .title("Articles")
        .icon(DocumentTextIcon)
        .child(
          S.list()
            .title("Articles")
            .items([
              S.documentTypeListItem("article"),
              S.documentTypeListItem("articleCategory"),
              S.documentTypeListItem("articleTag"),
            ])
        ),
      S.listItem()
        .title("Videos")
        .icon(VideoIcon)
        .child(
          S.list()
            .title("Videos")
            .items([
              S.documentTypeListItem("video"),
              S.documentTypeListItem("videoPlaylist"),
              S.documentTypeListItem("videoTag"),
            ])
        ),
    ]);
