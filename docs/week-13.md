![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/week-13.png)

Thank you for taking the time to read this week's update. As you can see in the following table, I have a couple of activities planned that I will do in order to get my desired result: Sanity.

| Activities     | Finalized |
| :------------- | :-------: |
| Sanity         |    ✅     |
| Setup          |    ✅     |
| Desk structure |    ✅     |
| Schemas        |    ✅     |

# The `.md` file

```markdown
#Hi there, Space Farmer!

Sadly, during this week I decided to not implement a `.md` data fetching system, due to the amount of content being extremely simple and straightforward. Most of the content is already dynamically loaded from `props` within all the components. My goal is to eventually in a couple weeks time sit together with some of the guys at ESA and connect a proper Content Management System to the website.

This doesn't mean I skipped this week. I learnt a lot, but for this one page website implementing `.md` is just not realistic and neccesary.
```

# Implementing

As I discussed in the `.md` file just now, I will not be implementing this system. Instead, I will implement a preloader!

# The preloader

What is a preloader good for, one might ask. Well, in today's day and age sometimes a persone has pretty slow internet and a webpage could take a long time to load. That's why I decided to add a preloader to the website, using a external library I found on [NPM](https://www.npmjs.com/package/react-preloaders). This preloader will finish loading when the person's browser has loaded all the content and is ready.

I chose one that has circulating planets, I found it pretty fitting. All it takes is the following:

```javascript
import Head from "next/head";
import { Header } from "../components/Header";
import { Spacer } from "../components/Spacer";
import { Hero } from "../components/Hero";
import { Community } from "../components/Community";
import { Supporters } from "../components/Supporters";
import { Earthlings } from "../components/Earthlings";
import { Footer } from "../components/Footer";
import dynamic from "next/dynamic";

const Loader = dynamic(() => import("react-preloaders").then((loaders) => loaders.Planets), {
    ssr: false,
});

export default function Home() {
    return (
        <>
            <Head>
                <title>Astroplant</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Loader />
            <Header></Header>
            <Hero></Hero>
            <Spacer height={"var(--spacer-height)"}></Spacer>
            <Community></Community>
            <Spacer height={"var(--spacer-height)"}></Spacer>
            <Supporters></Supporters>
            <Spacer height={"var(--spacer-height)"}></Spacer>
            <Earthlings></Earthlings>
            <Spacer bgColor={"black"} height={"var(--spacer-height)"}></Spacer>
            <Footer></Footer>
        </>
    );
}
```

On the `index.js` page I just imported the preloader, but using client side rendering, so that the rest of the website will render on the server. Then, I added `<Loader />` inside the `return()` function of `Home()`. It works like a charm!

![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/preloader.jpg)

---

This week has been a very informative and exciting week. I can't wait to jump into next [week](https://github.com/Meet-Miles/astroplant/blob/master/docs/week-14.md) and start loading in the Sanity data. It's going to be exciting!

# Resources

| Resource                                                     | Note                                                             |
| :----------------------------------------------------------- | :--------------------------------------------------------------- |
| [Preloaders](https://www.npmjs.com/package/react-preloaders) | Used to implement a React library that has a preloader built in. |
