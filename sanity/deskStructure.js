import S from "@sanity/desk-tool/structure-builder";

// icons
import pagesIcon from "react-icons/lib/md/book";

export default () =>
    S.list()
        .title("Have a wonderful day!")
        .items([
            // First pane
            S.listItem()
                .title("Portfolios")
                .icon(pagesIcon)
                .child(
                    // Second pane
                    S.list()
                        .title("All portfolios")
                        .items([
                            // Home page
                            S.listItem()
                                .title("Bo")
                                .child(S.list().title("All portfolios").items([])),
                        ])
                ),
        ]);
