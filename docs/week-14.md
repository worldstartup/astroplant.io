![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/week-14.png)

Thank you for taking the time to read this week's update. As you can see in the following table, I have a couple of activities planned that I will do in order to get my desired result: Loading the Data.

| Activities                                    | Finalized |
| :-------------------------------------------- | :-------: |
| Cleaning some props                           |    ✅     |
| Loading data using a middleman                |    ✅     |
| Extending the middleman with helper functions |    ✅     |
| Queries                                       |    ✅     |
| getStaticProps()                              |    ✅     |

# Cleaning some props

Now that I have finalized the front end of the website, I jumped back in and tried to make a few components a bit more reusable and clean.

## Spacer

```javascript
export function Spacer(props = { height }) {
    return <div style={{ height: props.height }}></div>;
}
```

This component was used to create spacing between the sections. However, I noticed that near the footer of the website, I needed a background color on this component. I added that:

```javascript
export function Spacer(props = { height, bgColor }) {
    return <div style={{ height: props.height, backgroundColor: props.bgColor }}></div>;
}
```

Now I was able to add a background color easily!

## Spacer

```javascript
import s from "./modules/Button.module.css";
import Link from "next/link";

export function Button(
    props = {
        label,
    }
) {
    return <button className={s.button}>{props.label}</button>;
}
```

As you can see in this component I was fully dependent on the `.css` styling. However, when calling the button, I wanted to be able to tweak certain things for that instance.

To achieve this I added the extra props and turned the component into this:

```javascript
import s from "./modules/Button.module.css";
import Link from "next/link";

export function Button(
    props = {
        label,
        bgColor,
        color,
        href,
    }
) {
    return (
        <Link href={`#` + props.href}>
            <button
                className={s.button}
                style={{ backgroundColor: props.bgColor, color: props.color }}
            >
                {props.label}
            </button>
        </Link>
    );
}
```

Now I could specify a link, a background color and a text color, giving me the change to create any type of button when calling it!

All of my components are now ready to start receiving data from Sanity. Let's do that!

# Loading data using a middleman

It's important to note that we are working with an API, Sanity's API actually, and in order to be able to communicate with that API from my Next.js front end I need to create a middleman file. This file lives in the root of the repository:

![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/middleman-location.jpg)

To start off, I will require the Sanity JavaScript client, and create an instance to initialize the connection:

```javascript
// middleman.js

const sanityClient = require("@sanity/client");

const client = sanityClient({
    projectId: "4iykv1c5",
    dataset: "production",
    token: "enter your token here",
    useCdn: false, // `false` if you want to ensure fresh data
});
```

This imports/requires the `sanityClient` so that I can create the `client` variable. Within that variable I define the projectId, dataset and token. The token is left out here for security reasons, but you can create one in the Sanity project management settings.

# Extending the middleman with helper functions

Next up are the helper functions that will make formatting of the Sanity data easy. They are both from Sanity themselves and are pretty straightforward to use.

**@sanity/image-url**

The holy grail of image url processing. Just kidding, but it makes retrieving images from the studio easy because it will transform them in useable url's with `.png` or `.jpg` on the end.

```javascript
// middleman.js

// import the imageUrlBuilder from Sanity
import imageUrlBuilder from "@sanity/image-url";

// create an instance of the imageUrlBuilder
const imageBuilder = imageUrlBuilder(client);

// helper function that I can access in the front end
export function imageUrlFor(source) {
    return imageBuilder.image(source);
}
```

By calling `imageUrlFor()` with a image argument it will return a nice and easy to use link.

**@sanity/block-content-to-react**

In Sanity, you can create "block" content field types. These act as rich text fields but are much more powerful. However, in order to get usable data from them to display in the front end, I need to use this helper function. It will return an array of `<p>`, `<h1>` and other markup tags that can be displayed on the front end.

```javascript
// middleman.js

// require the block content module from Sanity
const BlockContent = require("@sanity/block-content-to-react");

// helper function that I can access in the front end
export function renderRichText(richText) {
    const serializers = {
        types: {
            code: (props) => (
                <pre data-language={props.node.language}>
                    <code>{props.node.code}</code>
                </pre>
            ),
            image: (props) => {
                return <img src={imageUrlFor(props.node).url()} />;
            },
        },
    };

    return <BlockContent blocks={richText} serializers={serializers} />;
}
```

As you can see it accepts "type serializers". These are used to define which type of content is creatable within the studio. It also uses `imageUrlFor()` nicely if it detects an image in the block content.

I can simply call `renderRichText()` with a block content data type and it will return usable markup.

# Queries - the final part of the middleman

Now, of course, the above is all very handy, but I still have no data being fetched. Sanity uses a query language called GROQ. I won't go into the specifics of the language but in order to get the data from my `home.js` schema, I will need to create a function that runs the query:

```javascript
// middleman.js

export async function getHome() {
    try {
        const query = `*[_type == "home"] {
            // hero section
            planetImage,
            heroTitle,
            heroSubTitle,
            heroDescription,
            
            // community section
            communityTitle,
            communitySubTitle,
            communityImages,
            communityDescription,

            // supporters section
            supportersTitle,
            supportersSubTitle,
            partnerImages,

            // cta section
            ctaTitle,
            ctaSubTitle,
            ctaDescription,

            // footer section
            footerSlogan,
            footerSubSlogan
        }
          `;

        let home = await client.fetch(query);
        home = home ? (home.length ? home[0] : null) : null;

        return home;
    } catch (error) {
        console.log(error);
        return null;
    }
}
```

This may look like it comes straight out of the wizarding world of Harry Potter, but let me elaborate.

I first create an _async_ function called `getHome()`. This is important as it will allow me to do a `try` and `catch` operation. Then, the first thing I define is a `query` that holds the GROQ syntax for fetching all of the fields from the `home.js` schema type. Next up, I make sure to store the results of the query in a variable called `home`. Because there could be empty fields, I need to make sure to return `null` if that's the case. Lastly, I return the `home` variable so that I can access it in my front end.

Pretty cool right? Here's the full code for Mr. Middleman:

```javascript
// import the Sanity client and create the connection
const sanityClient = require("@sanity/client");

const client = sanityClient({
    projectId: "4iykv1c5",
    dataset: "production",
    token:
        "skj6Yyyaldstk1oUvu84vB7wM3ORDgKiMNQol8RWQbtkaqoPMS2wcOSwuJTj6zShxRaddOH2YdwSB956C9hV5bmyBv69lvQxqQO6cMbO5asIkv2lwCpBRiTqwsdq27pdQwKOcGiY2AaIXsxJzmdZx05GSRwkaeQqZQXAKqQHADaKB43tTHak", // or leave blank to be anonymous user
    useCdn: false, // `false` if you want to ensure fresh data
});

// import the imageUrlBuilder from Sanity
import imageUrlBuilder from "@sanity/image-url";

// create an instance of the imageUrlBuilder
const imageBuilder = imageUrlBuilder(client);

// helper function that I can access in the front end
export function imageUrlFor(source) {
    return imageBuilder.image(source);
}

// require the block content module from Sanity
const BlockContent = require("@sanity/block-content-to-react");

// helper function that I can access in the front end
export function renderRichText(richText) {
    const serializers = {
        types: {
            code: (props) => (
                <pre data-language={props.node.language}>
                    <code>{props.node.code}</code>
                </pre>
            ),
            image: (props) => {
                return <img src={imageUrlFor(props.node).url()} />;
            },
        },
    };

    return <BlockContent blocks={richText} serializers={serializers} />;
}

// page queries

export async function getHome() {
    try {
        const query = `*[_type == "home"] {
            // hero section
            planetImage,
            heroTitle,
            heroSubTitle,
            heroDescription,
            
            // community section
            communityTitle,
            communitySubTitle,
            communityImages,
            communityDescription,

            // supporters section
            supportersTitle,
            supportersSubTitle,
            partnerImages,

            // cta section
            ctaTitle,
            ctaSubTitle,
            ctaDescription,

            // footer section
            footerSlogan,
            footerSubSlogan
        }
          `;

        let home = await client.fetch(query);
        home = home ? (home.length ? home[0] : null) : null;

        return home;
    } catch (error) {
        console.log(error);
        return null;
    }
}
```

# getStaticProps()

We have arrived at the final stage of this week's development, namely, loading the data using the function I created earlier, and displaying it in my Next.js front end. Next.js specifies a few different ways of fetching data:

-   `getStaticProps()`
-   `getServerSideProps()`

In short, these two differ in the fact that one fetches data a _build_ time and the other at every _request_. For this website's data it's not important to fetch at every request as changes to the content will only happen occasionally.

So, what I learned was that I you can only call `getStaticProps()` on _page_ files, and not in individual components. Let's take a look at how we can use it on the homepage.

```javascript
// index.js

// import the getHome function from Mr. Middleman
import { getHome } from "../services/middleman";

// ---------------------
// the other code that defines the page, such as the components...
// ---------------------

// create an async function to get the data and store it in a prop, that I can pass to the page
export async function getStaticProps() {
    return {
        props: {
            home: await getHome(),
        },
    };
}
```

Now that we have that setup, it's time to add a `console.log` to the `getHome()` function so that we can test if data is being fetched correctly:

```javascript
// middleman.js

let home = await client.fetch(query);
home = home ? (home.length ? home[0] : null) : null;

console.log(home);

return home;
```

![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/console-success.jpg)

Yay! It works. Now for the fun part, passing the `home` data as a prop to the page:

```javascript
// index.js

// passing the fetched data as a prop, called home
export default function Home({ home }) {
    // rest of the code...
```

Because I passed it to the page, I can now use it in any of the components that I am using there, however, there is a catch. I still need to edit the components themselves so that they are ready to receive the data.

Because this is the same for all of them I will illustrate the hero section component:

```javascript
import s from "./modules/Hero.module.css";

import { Video } from "./Video";
import { TintedText } from "./TintedText";

// import the helper functions

import { imageUrlFor, renderRichText } from "../services/middleman";

// create a prop called data
export function Hero(props = { data }) {
    React.useEffect(() => {
        // define and assign a function to the hero top padding
        const setHeroPadding = () => {
            // get the height of the header
            const headerHeight = document.querySelector("#header").clientHeight;

            // find the hero section DOM element and set its padding top to the height of the header
            document.querySelector("#hero").style.paddingTop = `${headerHeight}px`;

            // equal padding to the bottom
            document.querySelector("#hero").style.paddingBottom = `${headerHeight}px`;
        };

        setHeroPadding();
    });

    return (
        <section id='hero' className={s.heroSection}>
            <div className={s.stars}></div>
            <div className={s.planetHolder}>
                {/* get the image and transform it into a url */}
                <img src={imageUrlFor(props.data.planetImage)} className={s.mars} />
                {/* get the heroTitle */}
                <h1 className={s.heroTitle}>{props.data.heroTitle}</h1>
            </div>
            <div className={s.videoHolder}>
                {/* get the heroSubTitle */}
                <h3 className={s.subTitle}>{props.data.heroSubTitle}</h3>
                <Video source='/astro-intro.mp4'></Video>
            </div>
            {/* get heroDescription and use the helper function to transform it */}
            <TintedText
                text={renderRichText(props.data.heroDescription)}
                color={"#E9DEFF"}
                margin={"3rem auto 0 auto"}
            ></TintedText>
        </section>
    );
}
```

Now that the components are edited to receive their data, I need to add the attributes to the component instances in the `index.js` file:

```javascript
// index.js

//other components

// passing the home prop as the data for the component
<Hero data={home}></Hero>

// other components
```

When looking at the website, it correctly fetches and displays the data!

![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/fetch-success.jpg)

Something important to note is that the video is still being loaded in locally, as I am going to implement a Mux video API connection next week, so that I can upload videos in the studio and display them on the website.

If you are interested in seeing how I implemented the data fetching into the other components, be sure to visit my [GitHub repository](https://github.com/Meet-Miles/astroplant).

---

This week has been a very informative and exciting week. I can't wait to jump into next [week](https://github.com/Meet-Miles/astroplant/blob/master/docs/week-15.md) and finally deploy the website!. It's going to be exciting!

# Resources

| Resource                                                              | Note                                                            |
| :-------------------------------------------------------------------- | :-------------------------------------------------------------- |
| [React props](https://reactjs.org/docs/components-and-props.html)     | Used to learn more about the props in React.                    |
| [Data fetching](https://nextjs.org/docs/basic-features/data-fetching) | Used to learn more about data fetching in Next.js               |
| [GROQ docs](https://www.sanity.io/docs/groq)                          | Used to learn the GROQ query language to fetch data from Sanity |
