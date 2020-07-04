import S from "@sanity/desk-tool/structure-builder";

// icons
import pagesIcon from "react-icons/lib/md/book";

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
                            // Landing page
                            S.listItem()
                                .title("Home")
                                .child(
                                    S.editor()
                                        .schemaType("home")
                                        .documentId("home")
                                        .title("Edit Homepage")
                                ),
                        ])
                ),
        ]);
