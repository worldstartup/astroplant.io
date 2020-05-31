![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/week-12.png)

Thank you for taking the time to read this week's update. As you can see in the following table, I have a couple of activities planned that I will do in order to get my desired result: Next.js.

| Activities               | Finalized |
| :----------------------- | :-------: |
| Getting started          |    ✅     |
| Initialising the project |    ✅     |
| Building the website     |    ✅     |

# Getting started

In order for me to get started and learn all about Next.js, the lightweight production ready React framework, I followed their tutorial on their [website](https://nextjs.org/learn/basics/create-nextjs-app). During this tutorial I learnt a lot about what a Next.js app is, how the navigation works, how to fetch data and do routing. Eventually it showed me how to deploy on Vercel!

# Initialising the project

Now that I have learned how to use Next.js and how I can start a project with it I did the first obvious steps. I created a repository on GitHub for AstroPlant and cloned it to my pc, locally. Next, I entered the terminal and setup the following command:

```
\GitHub\astroplant npx create-next-app
```

This command created a project for me with all of the basics setup.

## Project structure

When I first started this project I found out that the folder structure was still a bit barebones for my needs, so I added more folders that I will explain in more detail later on in this week's documentation. Here's a screenshot of the folder structure:

![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/folder-structure.jpg)

### Pages

The `Pages` folder holds all of the pages for the website. Each page is also a route. This means that each page is a place you can go in the addressbar of the browser. In my case, it holds a couple of files:

**\_app.js** - This is my custom version of the application file. The reason I declared it is because I wanted to have global styling in my application. I'll dive deeper into the styling setup later on.

**\_document.js** - This page is especially handy becomes it allows me to alter the default state of the HTML `lang` attribute and other `<meta>` tags I want, for every page.

**index.js** - As you may have guessed already, this is the default page. It's my home page and will house all of the sections. I will go deeper into the sections later on.

### Components

What is the components folder? Normally, within React, I create _reusable_ components. This comes in handy when I create elements such as a header, footer or buttons. I can reuse them and make them dynamically callable. This means they can have their own instance.

### Styling

Within the components folder is a **modules** folder. It houses the CSS module files. Each component will have its own `ComponentName.module.css` file, that has scoped styling for that component, making sure there are no conflicts with other components in the application.

Next to that I have a `global.css` file that is housed in the `public` folder of my repo, so that any component can access that global styling:

```css
* {
    user-select: none;
    margin: 0;
    padding: 0;
    font-family: "Inter var";
}

@font-face {
    font-family: "Inter var";
    font-weight: 100 900;
    font-display: swap;
    font-style: normal;
    font-named-instance: "Regular";
    src: url("Inter.var.woff2?v=3.13") format("woff2");
}

:root {
    --main-color: #839cdb;
    --main-color-darker: #6f85bd;
    --main-color-darkest: #6073a4;
    --green: #8bffac;
    --bg-gradient: linear-gradient(
        180deg,
        #000000 0%,
        #110823 26.04%,
        #152a53 49.48%,
        #052113 89.06%,
        #000000 100%
    );
    --medium: 500;
    --bold: 700;
    --extra-bold: 900;
    --default-2s: all 0.2s ease;
    --title: 60px;
    --subTitle: 24px;
    --footnote: 18px;
    --tinted-text: 0.75;
    --border-radius: 10px;
    --spacer-height: 22rem;
}

@media only screen and (max-width: 1024px) {
    :root {
        --spacer-height: 6rem;
    }
}

@media only screen and (max-width: 600px) {
    :root {
        --title: 36px;
        --subTitle: 18px;
    }
}

body {
    background: var(--bg-gradient);
    background-repeat: no-repeat;
}

a {
    color: white;
    font-size: 16px;
    font-weight: var(--medium);
    cursor: pointer;
    opacity: 0.75;
    transition: var(--default-2s);
    text-decoration: none;
}

a:hover {
    opacity: 1;
}
```

### Public

The public folder has all the files that can be exposed to the web, such as images, videos, fonts and other files.

# Building the website

Before I start building the website let me show you the design I've shown earlier, but that is now edited to contain the sections. This will help me divide it up in components and sub components.

![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/landingpage-mockup-sections.png)

## Sections

Based on the image in the previous part of this week's documentation you can see I am going to create a couple of components and subcomponents, that will all live in my `index.js` file. I think it's important to note that all the styling has been done in the `module` files for each component, but because it's very basic, I will not dive deep into styling. You can view the modules if you [want](https://github.com/Meet-Miles/astroplant/tree/master/components/modules).

Let's start with the header!

As a heads up: each component description here will have my code shown first, and then an explanation. I won't paste the subcomponents as well, as it's better to take a look at the components folder itself [here](https://github.com/Meet-Miles/astroplant/tree/master/components) where you will have a clickthrough ability provided by GitHub.

### Header

![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/header.jpg)

```javascript
import s from "./modules/Header.module.css";
import { Button } from "./Button";

import Link from "next/link";

export function Header() {
    return (
        <header className={s.header} id='header'>
            <div className={s.container}>
                <Link href='/'>
                    <img src='/images/logo.png' className={s.logo} />
                </Link>

                <div className={s.nav}>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                    <Button href='earthlings' label='Join the Community'></Button>
                </div>
            </div>
        </header>
    );
}
```

As you can see I went about the normal way of creating a component in Next.js by exporting it as a function. I am also importing the `<Button />` component within `Header.js`. `Button.js` looks like this:

```javascript
import s from "./modules/Button.module.css";
import Link from "next/link";

export function Button(
    props = {
        label,
        className,
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

An important difference you can see here is that I am using `props` within the [`<Button />`](https://github.com/Meet-Miles/astroplant/blob/master/components/Button.js) component so that I can alter things when calling it such as the textual value, the href attribute, the background color and color of the text. By default the button is purple and has white text.

### Hero section

![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/hero-section.jpg)

```javascript
import s from "./modules/Hero.module.css";

import { Video } from "./Video";
import { TintedText } from "./TintedText";

export function Hero() {
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
                <img src='/images/mars.png' className={s.mars} />
                <h1 className={s.heroTitle}>Grow Plants in Space</h1>
            </div>
            <div className={s.videoHolder}>
                <h3 className={s.subTitle}>Time to start your journey.</h3>
                <Video source='/astro-intro.mp4'></Video>
            </div>
            <TintedText
                text={
                    "AstroPlant is an educational citizen science project in collaboration with the European Space Agency to engage a new generation of Space Farmers, collect data and ideas for agriculture on Mars, develop open source research equipment and create awareness of regenerative and closed-loop life support systems."
                }
                color={"#E9DEFF"}
                margin={"3rem auto 0 auto"}
            ></TintedText>
        </section>
    );
}
```

Within the Hero section you can see two main important things. Firstly, the padding of the hero section is based on the height of the header. In order to achieve this I needed to use `React.useEffect` to see when the DOM has loaded and then extract those values and set them accordingly.

The [`<Video />`](https://github.com/Meet-Miles/astroplant/blob/master/components/Video.js) component is also easy to use, which I created.

Secondly I created a component called [`<TintedText />`](https://github.com/Meet-Miles/astroplant/blob/master/components/TintedText.js) which I will use in order to create paragraphs of text easily with customizability within JSX:

```javascript
import s from "./modules/TintedText.module.css";

export function TintedText(props = { text, color }) {
    return (
        <p className={s.text} style={{ color: props.color, margin: props.margin }}>
            {props.text}
        </p>
    );
}
```

Other than the props, it should be pretty clear what this component does!

### Community section

![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/community-section.jpg)

```javascript
import s from "./modules/Community.module.css";

import { ImageGrid } from "./ImageGrid";
import { TintedText } from "./TintedText";
import { IntroText } from "./IntroText";

export function Community() {
    return (
        <section id='community' className={s.communitySection}>
            <IntroText
                title='Grow with the Community'
                subTitle='There’s a whole galaxy out there.'
                subTitleColor='E0E4FF'
            ></IntroText>
            <ImageGrid></ImageGrid>
            <TintedText
                text={
                    "AstroPlant is an open source project meaning that it is open to everyone, and is building for everyone. There are many ways of contributing to the project. You can buy one of the kits, tinker with it and collect valuable data, or you can help us improve our community platform. You can teach or learn biology, plant carrots or simply follow our news feed, and spread the word about our amazing community of Space Farmers.\n\n" +
                    "Everyone can be a Space Farmer."
                }
                color={"#DEE8FF"}
                margin={"3rem auto"}
            ></TintedText>
        </section>
    );
}
```

Here you can see the Community section component. It also has the [`<IntroText />`](https://github.com/Meet-Miles/astroplant/blob/master/components/Footnote.js) component that holds a tilte and subtitle for easy access. For the images I created the [`<ImageGrid />`](https://github.com/Meet-Miles/astroplant/blob/master/components/Footnote.js) component.

From now on you get the idea of the subcomponents, so I will advise you to go to the [components folder](https://github.com/Meet-Miles/astroplant/tree/master/components) for an overview of all.

### Supporters section

![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/supporters-section.jpg)

The next important section is the Supporters section:

```javascript
import s from "./modules/Supporters.module.css";

import { SupporterBar } from "./SupporterBar.js";
import { IntroText } from "./IntroText";

export function Supporters() {
    return (
        <section className={s.supportersSection}>
            <IntroText
                title='Some of our Supporters'
                subTitle='See who’s lending us a helping hand.'
                subTitleColor='D6ECFF'
            ></IntroText>
            <SupporterBar></SupporterBar>
        </section>
    );
}
```

It consists of a [`<SupportersBar />`](https://github.com/Meet-Miles/astroplant/blob/master/components/SupportersBar.js) component that holds all the supporters for the AstroPlant project.

### CTA section

![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/cta-section.jpg)

```javascript
import s from "./modules/Earthlings.module.css";
import { IntroText } from "./IntroText";
import { Footnote } from "./Footnote";
import { Card } from "./Card";
import { KitCard } from "./KitCard";

export function Earthlings() {
    return (
        <section id='earthlings' className={s.earthlings}>
            <div className={s.introHolder}>
                <IntroText
                    title='AstroPlant is for all Earthlings'
                    subTitle='All the ways you can become a Space Farmer. There’s no better time than now.'
                    subTitleColor='E5FFFE'
                ></IntroText>
            </div>
            <div className={s.earthSection}>
                <img className={s.earth} src='/images/earth.png' />
                <div className={s.gradient}></div>
                <div className={s.holder}>
                    <Card
                        image={"/images/card1.jpg"}
                        title={"Community"}
                        greenTitle={"Free"}
                        text={
                            "Grow with the community on Slack. Exchange ideas and talk about AstroPlant.\n\n" +
                            "The Sky’s the limit!"
                        }
                        buttonLabel={"Join"}
                    ></Card>
                    <KitCard
                        image={"/images/card2.png"}
                        title={"The Kit"}
                        greenTitle={"€ 249,-"}
                        text={"A customizable plant station."}
                        primaryButton={"Order"}
                        secondaryButton={"Donate"}
                    ></KitCard>
                    <Card
                        image={"/images/card3.png"}
                        title={"Developers"}
                        greenTitle={"Free"}
                        text={
                            "You can  help develop a rigorous and tested product by contributing to the AstroPlant source code.\n\n" +
                            "Check it out on GitHub."
                        }
                        buttonLabel={"Contribute"}
                    ></Card>
                </div>
                <Footnote text='Become a Space Farmer and act now!'></Footnote>
            </div>
        </section>
    );
}
```

> please note, I named the component "Earthlings"

This is by far the largest component I have built for the project, especially as it's importing the [`<Card />`](https://github.com/Meet-Miles/astroplant/blob/master/components/Card.js) and [`<KitCard />`](https://github.com/Meet-Miles/astroplant/blob/master/components/KitCard.js) components. It also has a [`<Footnote />`](https://github.com/Meet-Miles/astroplant/blob/master/components/Footnote.js) component that I use for the text on the bottom.

### Footer

![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/footer.jpg)

```javascript
import s from "./modules/Footer.module.css";

import Link from "next/link";
import { Button } from "./Button";

export function Footer() {
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <div className={s.left}>
                    <img alt='Astroplant logo' className={s.logo} src='/images/logo.png' />
                    <div className={s.nav}>
                        <Link href='/'>
                            <a>Home</a>
                        </Link>
                        <Link href='#'>
                            <a>Community</a>
                        </Link>
                        <Link href='#'>
                            <a>The Kit</a>
                        </Link>
                        <Link href='#'>
                            <a>Developers</a>
                        </Link>
                    </div>
                    <div className={s.socials}>
                        <a href='' target='_blank'>
                            <img className={s.icon} alt='social icon' src='/images/insta.png' />
                        </a>
                        <a href='' target='_blank'>
                            <img className={s.icon} alt='social icon' src='/images/twitter.png' />
                        </a>
                        <a href='' target='_blank'>
                            <img className={s.icon} alt='social icon' src='/images/fb.png' />
                        </a>
                    </div>
                </div>
                <div className={s.right}>
                    <h1 className={s.title}>Growing a New Generation of Space Farmers</h1>
                    <h2 className={s.subTitle}>Grow with the community on Slack.</h2>
                    <div className={s.buttons}>
                        <Button label='Join'></Button>
                        <Button label='View GitHub' bgColor='white' color='black'></Button>
                    </div>
                    <div className={s.miles}>
                        <img src='/images/miles.svg' className={s.milesLogo} alt='miles logo' />
                        <p>was here.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
```

Now that we have arrived at the bottom of the page I have created the Footer. Nothing special about this at all, but it does look sleek :)

---

This week has been a very informative and exciting week. I can't wait to jump into next [week](https://github.com/Meet-Miles/astroplant/blob/master/docs/week-13.md) and start filling up the website with some markdown data that other users could enter. It's going to be exciting!

# Resources

| Resource                                                                                                                                     | Note                                               |
| :------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------- |
| [Next.js tutorial](https://nextjs.org/learn/basics/create-nextjs-app?utm_source=next-site&utm_medium=homepage-cta&utm_campaign=next-website) | Used to learn about the Next.js framework          |
| [Next.js docs](https://nextjs.org/docs/getting-started)                                                                                      | Used for whenever I needed help with the framework |
