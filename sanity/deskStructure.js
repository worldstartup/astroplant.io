import S from "@sanity/desk-tool/structure-builder";

// icons
import pagesIcon from "react-icons/lib/md/book";
import partnerIcon from "react-icons/lib/md/domain";
import homeIcon from "react-icons/lib/fa/home";
import aboutIcon from "react-icons/lib/fa/info-circle";
import contributeIcon from "react-icons/lib/md/touch-app";
import goalsIcon from "react-icons/lib/md/assignment-turned-in";
import ctaIcon from "react-icons/lib/go/megaphone";
import milestoneIcon from "react-icons/lib/go/milestone";
import achievementIcon from "react-icons/lib/go/check";
import teamIcon from "react-icons/lib/md/group";

export default () =>
  S.list()
    .title("Welcome, Space Farmer!")
    .items([
      // First pane
      S.listItem()
        .title("Pages")
        .icon(pagesIcon)
        .child(
          // Second pane
          S.list()
            .title("All pages")
            .items([
              S.listItem()
                .title("Home")
                .icon(homeIcon)
                .child(
                  S.editor()
                    .schemaType("home")
                    .documentId("home")
                    .title("Edit Homepage")
                ),

              S.listItem()
                .title("About Us")
                .icon(aboutIcon)
                .child(
                  S.editor()
                    .schemaType("aboutUs")
                    .documentId("4e2e1f5e-49e4-4921-aa08-57e451f581fc")
                    .title("Edit About Us Page")
                ),

              S.listItem()
                .title("Contribute")
                .icon(contributeIcon)
                .child(
                  S.editor()
                    .schemaType("contribute")
                    .documentId("8ca56471-8713-43fe-8870-bf292680bd10")
                    .title("Edit Contribute Page")
                ),

              S.listItem()
                .title("Goals")
                .icon(goalsIcon)
                .child(
                  S.editor()
                    .schemaType("goals")
                    .documentId("16f66fe0-6f3a-45c0-9df1-305444c31991")
                    .title("Edit Goals Page")
                ),
            ])
        ),

      S.listItem()
        .title("Partners")
        .icon(partnerIcon)
        .child(S.documentTypeList("partner")),

      S.listItem()
        .title("Teams")
        .icon(teamIcon)
        .child(S.documentTypeList("teamMember")),

      S.listItem()
        .title("Achievements")
        .icon(achievementIcon)
        .child(S.documentTypeList("achievement")),

      S.listItem()
        .title("Roadmap")
        .icon(milestoneIcon)
        .child(S.documentTypeList("milestone")),

      S.listItem()
        .title("Call to Actions")
        .icon(ctaIcon)
        .child(S.documentTypeList("cta")),
    ]);
