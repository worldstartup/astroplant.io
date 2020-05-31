![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/week-12.png)

Thank you for taking the time to read this week's update. As you can see in the following table, I have a couple of activities planned that I will do in order to get my desired result: Research & Planning.

| Activities               | Finalized |
| :----------------------- | :-------: |
| Getting started          |     ✅     |
| Initialising the project |     ✅     |
| Building the website     |     ✅     |

# Getting started

in order for me to get started and learn all about Next.js, the lightweight production ready React framework, I followed their tutorial on their [website](https://nextjs.org/learn/basics/create-nextjs-app). During this tutorial I learnt a lot about what a Next.js app is, how the navigation works, how to fetch data and do routing. Eventually it showed me how to deploy on Vercel!

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

**_app.js** - This is my custom version of the application file. The reason I declared it is because I wanted to have global styling in my application. I'll dive deeper into the styling setup later on.

**_document.js** - This page is especially handy becomes it allows me to alter the default state of the HTML `lang` attribute and other `<meta>` tags I want, for every page.

**index.js** - As you may have guessed already, this is the default page. It's my home page and will house all of the sections. I will go deeper into the sections later on.

### Components

What is the components folder? Normally, within React, I create *reusable* components. This comes in handy when I create elements such as a header, footer or buttons. I can reuse them and make them dynamically callable. This means they can have their own instance.

### Styling

Within the components folder is a **modules** folder. It houses the CSS module files. Each component will have its own `ComponentName.module.css` file, that has scoped styling for that component, making sure there are no conflicts with other components in the application.

Next to that I have a `global.css` file that is housed in the `public` folder of my repo, so that any component can access that global styling.

### Public

The public folder has all the files that can be exposed to the web, such as images, videos, fonts and other files.

# Building the website

Introduce the design again, divided into sections, and show how you built each of them.

![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/landingpage-mockup-sections.png)

## Sections

### Header

### Hero section

### Community section

### Supporters section

### CTA section

### Footer

---

This week has been a very informative and exciting week.  I can't wait to jump into next [week](https://github.com/Meet-Miles/astroplant/blob/master/docs/week-13.md) and start filling up the website with some markdown data that other users could enter. It's going to be exciting!

# Resources

| Resource                                                                                                                                     | Note                                               |
| :------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------- |
| [Next.js tutorial](https://nextjs.org/learn/basics/create-nextjs-app?utm_source=next-site&utm_medium=homepage-cta&utm_campaign=next-website) | Used to learn about the Next.js framework          |
| [Next.js docs](https://nextjs.org/docs/getting-started)                                                                                      | Used for whenever I needed help with the framework |


