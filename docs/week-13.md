![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/week-13.png)

Thank you for taking the time to read this week's update. As you can see in the following table, I have a couple of activities planned that I will do in order to get my desired result: Sanity.

| Activities     | Finalized |
| :------------- | :-------: |
| Sanity         |    ✅     |
| Setup          |    ✅     |
| Desk structure |    ✅     |
| Schemas        |    ✅     |

# Sanity

As you saw last week I finished the front end of the website. Made purely in Next.js, the result was better than expected and aligned very well to the design I got from Miles. It is now time to start laying the groundwork for the CMS that I will be using, Sanity.

What Sanity does, is give you a customizable front end _studio_, that can be used by anybody with an account. Using this studio they can edit information on the website. The data itself is hosted on Sanity's end. Then using their API, I can load in the data in the Next.js front end next week.

// image of this structure

To get started, I opened up my project and ran `sanity init`. This created a folder inside of my repository, called "Sanity". Everything related to the Sanity studio lives there. Here's a look of the folder structure:

![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/sanity-folder-structure.jpg)

Of course, you can also keep the Sanity folder in a completely different repository. This can help with much larger projects. For Astroplant, keeping it in the same "Astroplant" repository is more than fine.

# Setup

Now that the Sanity folder has initialized and is included in the project, it's a good time to elaborate on the base commands I can run.

In order to view my studio, I can run `sanity start` in the Sanity folder. This will open up a localhost port to display the studio. The first time it is still a bit empty:

![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/sanity-empty-desk.jpg)

Another important command is `sanity deploy`. This will deploy the studio to a Sanity hosted link, so that the studio can be accessed out of localhost.

![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/sanity-deployed.jpg)

# Desk structure

As you saw earlier, the studio desk is still very empty. That's where the "Desk structure" comes in. It allows me to create my own custom structure within the studio.

In order to get this to work, I need to make sure the `desk tool` is included in the `sanity.json` file as a part of the studio and links to the custom `deskStructure.js` file I created in the root of the Sanity folder:

```json
// sanity.json
{
    "name": "part:@sanity/desk-tool/structure",
    "path": "./deskStructure.js"
}
```

Now, let's load up the `deskStructure.js` file and start working with it:

```javascript
// deskStructure.js

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
                            S.listItem().title("Home").child(),
                        ])
                ),
        ]);
```

To get a direct insight in what this looks like, here's a screenshot:

![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/sanity-initial-desk.jpg)

So, let's dive a bit deeper in the code above. First of all, we import the `structure-builder` as `S`. This will allow us to refer to the builder later on. Because I know the "Pages" section of the studio will have an icon, I included it from `react-icons`. Because this is still JavaScript, we can then export a default function, and start building the structure using a combination of `S.list()` and `S.listItem()` elements. The `S.list()` elements are the panes themselves, such as the pane that says "Welcome, Space Farmer". The `S.listItem()` elements are items within the `S.list()`. Easy enough right?

The structure I created here is everything I need for now. However, the `S.listItem().title("home")` has a `.child()`. This child will need to contain a _schema_. We will dive deeper into this in the next section of this week's documentation.

# Schemas

As we saw in the previous section the `S.listItem().title("home").child()` needs a schema. This is because the pane will be empty otherwise, as the studio won't know what _editing_ capabilities to display. So, step one, let's create a schema first.

Within the Sanity folder you will find a folder called "schemas". It currently only houses one file, `schema.js`:

```javascript
// schema.js

// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: "default",
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        /* Your types here! */
    ]),
});
```

Within this file I will need to include any custom _schema types_ I create in the "schemas" folder, so let's do that first and call it "home":

```javascript
// schema.js

// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import home from "./home";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: "default",
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        /* Your types here! */
        home,
    ]),
});
```

Now, for the actual schema itself:

```javascript
// home.js

export default {
    name: "home",
    title: "Homepage",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
    ],
};
```

I created the file called `home.js` which lives in the schemas folder. Now I can start adding fields to this schema so that they are editable in the studio.

The last step is to include the newly created schema `home.js` in the `deskStructure.js` file:

```javascript
// deskStructure.js

.child(
    S.editor()
        .schemaType("home")
        .documentId("home")
        .title("Edit Homepage")
)
```

Now we get this:

![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/sanity-desk-schemafied.jpg)

Of course, this is not everything yet, as it only offers a field for the name of the page. Based on the front end I have made I will need to add the following field types:

**Hero section**

-   Planet image
-   Title
-   Subtitle
-   Video
-   Description

**Community section**

-   Title
-   Subtitle
-   Image array
-   Description

**Supporters section**

-   Title
-   Subtitle
-   Parters array

**CTA section**

-   Title
-   Subtitle
-   Description

**Footer section**

-   Slogan
-   Sub slogan

These field types will live in _fieldsets_, so that it will be clearer in the studio itself. Here's the final code for the `home.js` schema:

```javascript
// home.js

export default {
    name: "home",
    title: "Home page",
    type: "document",
    fieldsets: [
        { name: "hero", title: "Hero section" },
        { name: "community", title: "Community section" },
        { name: "supporters", title: "Supporters section" },
        { name: "cta", title: "CTA section" },
        { name: "footer", title: "Footer section" },
    ],
    fields: [
        // hero section
        {
            name: "planetImage",
            title: "Planet image",
            type: "image",
            fieldset: "hero",
        },
        {
            name: "heroTitle",
            title: "Title",
            type: "string",
            fieldset: "hero",
        },
        {
            name: "heroSubTitle",
            title: "Subtitle",
            type: "string",
            fieldset: "hero",
        },
        {
            name: "heroDescription",
            title: "Description",
            type: "array",
            of: [{ type: "block" }],
            fieldset: "hero",
        },
        // community section
        {
            name: "communityTitle",
            title: "Title",
            type: "string",
            fieldset: "community",
        },
        {
            name: "communitySubTitle",
            title: "Subtitle",
            type: "string",
            fieldset: "community",
        },
        {
            name: "communityImages",
            title: "Images",
            type: "array",
            of: [{ type: "image" }],
            fieldset: "community",
        },
        {
            name: "communityDescription",
            title: "Description",
            type: "array",
            of: [{ type: "block" }],
            fieldset: "community",
        },
        // supporters section
        {
            name: "supportersTitle",
            title: "Title",
            type: "string",
            fieldset: "supporters",
        },
        {
            name: "supportersSubTitle",
            title: "Subtitle",
            type: "string",
            fieldset: "supporters",
        },
        {
            name: "partnerImages",
            title: "Partners",
            type: "array",
            of: [{ type: "image" }],
            fieldset: "supporters",
        },
        // cta section
        {
            name: "ctaTitle",
            title: "Title",
            type: "string",
            fieldset: "cta",
        },
        {
            name: "ctaSubTitle",
            title: "Subtitle",
            type: "string",
            fieldset: "cta",
        },
        {
            name: "ctaDescription",
            title: "Description",
            type: "array",
            of: [{ type: "block" }],
            fieldset: "cta",
        },
        // footer section
        {
            name: "footerSlogan",
            title: "Slogan",
            type: "string",
            fieldset: "footer",
        },
        {
            name: "footerSubSlogan",
            title: "Sub slogan",
            type: "string",
            fieldset: "footer",
        },
    ],
};
```

# Result

Now you may wonder, what does it look like, with all the field types? I am happy to say that I have added them all and filled them in. The studio now looks like this:

![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/final-schema.png)

This week has been a real learning curve, but I am so happy that Sanity offered such thorough documentation. I did find the desk structure builder a bit confusing at first, with all the nesting and such. After some practice I managed to make it work!

---

This week has been a very informative and exciting week. I can't wait to jump into next [week](https://github.com/Meet-Miles/astroplant/blob/master/docs/week-14.md) and start loading in the Sanity data. It's going to be exciting!

# Resources

| Resource                                                                        | Note                                                    |
| :------------------------------------------------------------------------------ | :------------------------------------------------------ |
| [Sanity](https://www.sanity.io/)                                                | The CMS                                                 |
| [Sanity docs](https://www.sanity.io/docs)                                       | Used for reference                                      |
| [Schema docs](https://www.sanity.io/docs/schema-types)                          | Used as reference when building the schemas for the CMS |
| [Structure builder docs](https://www.sanity.io/docs/overview-structure-builder) | Used to define a custom desk structure                  |
| [React Icons](https://react-icons.github.io/react-icons/icons?name=md)          | Used for the icons in the studio desk                   |
