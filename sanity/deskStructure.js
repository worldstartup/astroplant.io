import S from "@sanity/desk-tool/structure-builder";
import { GoCheck, GoMegaphone, GoMilestone, GoTools } from "react-icons/go";
import {
  MdAssignmentTurnedIn,
  MdAttachMoney,
  MdBuild,
  MdDomain,
  MdGroup,
  MdInfo,
} from "react-icons/md";
import { RiHome2Line, RiPagesLine } from "react-icons/ri";

export default () =>
  S.list()
    .title("Welcome, Space Farmer!")
    .items([
      // First pane
      S.listItem()
        .title("Pages")
        .icon(RiPagesLine)
        .child(
          // Second pane
          S.list()
            .title("All pages")
            .items([
              S.listItem()
                .title("Home")
                .icon(RiHome2Line)
                .child(
                  S.editor()
                    .schemaType("home")
                    .documentId("home")
                    .title("Edit Homepage")
                ),

              S.listItem()
                .title("About Us")
                .icon(MdInfo)
                .child(
                  S.editor()
                    .schemaType("aboutUs")
                    .documentId("4e2e1f5e-49e4-4921-aa08-57e451f581fc")
                    .title("Edit About Us Page")
                ),

              S.listItem()
                .title("Contribute")
                .icon(MdBuild)
                .child(
                  S.editor()
                    .schemaType("contribute")
                    .documentId("8ca56471-8713-43fe-8870-bf292680bd10")
                    .title("Edit Contribute Page")
                ),

              S.listItem()
                .title("Goals")
                .icon(MdAssignmentTurnedIn)
                .child(
                  S.editor()
                    .schemaType("goals")
                    .documentId("16f66fe0-6f3a-45c0-9df1-305444c31991")
                    .title("Edit Goals Page")
                ),

              S.listItem()
                .title("Shop")
                .icon(MdAttachMoney)
                .child(
                  S.editor()
                    .schemaType("shop")
                    .documentId("shop")
                    .title("Edit Shop Page")
                ),
            ])
        ),

      S.listItem()
        .title("Partners")
        .icon(MdDomain)
        .child(S.documentTypeList("partner")),

      S.listItem()
        .title("Teams")
        .icon(MdGroup)
        .child(
          S.list()
            .title("All teams")
            .items([
              S.listItem()
                .title("Core Team")
                .child(
                  S.documentTypeList("teamMember")
                    .title("Core Team Members")
                    .filter('memberOf == "Core Team"')
                ),
              S.listItem()
                .title("Advisor Team")
                .child(
                  S.documentTypeList("teamMember")
                    .title("Advisor Team Members")
                    .filter('memberOf == "Advisors"')
                ),
              S.listItem()
                .title("Former Team")
                .child(
                  S.documentTypeList("teamMember")
                    .title("Former Team Members")
                    .filter('memberOf == "Former Team"')
                ),
            ])
        ),

      S.listItem()
        .title("Achievements")
        .icon(GoCheck)
        .child(S.documentTypeList("achievement")),

      S.listItem()
        .title("Roadmap")
        .icon(GoMilestone)
        .child(S.documentTypeList("milestone")),

      S.listItem()
        .title("Call to Actions")
        .icon(GoMegaphone)
        .child(S.documentTypeList("cta")),

      S.listItem()
        .title("Kit")
        .icon(GoTools)
        .child(
          S.editor().schemaType("kit").documentId("kit").title("Edit Kit")
        ),
    ]);
