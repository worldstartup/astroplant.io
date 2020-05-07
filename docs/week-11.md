![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/week-11.png)

Thank you for taking the time to read this week's update. As you can see in the following table, I have a couple of activities planned that I will do in order to get my desired result: Research & Planning.

|Activities|Finalized|
|:---|:---:|
|Setting up|✅|
|Research the JAMstack|✅|
|Planning for the upcoming weeks|✅|

# Setting up

For this project I am going to describe a couple of processes I went through. This week's all about setting up the project, doing my research and plan ahead.

## Learning goal and Deliverable

The first part is all about defining the learning goal and deliverable.

For this part of the minor I am going to dive deep into the **JAMstack**, a technology stack to create fast, responsive, secure, robust, lightweight apps & websites with JavaScript, APIs, and Markup; the serverless way.

And thus my learning goal shall be:

> Learn the in's and out's of JAMstack and how to work with it.

In order to test my learnings I have a deliverable set, namely:

> The landing page for a startup, called Astroplant.

## Choosing a theme

> Choosing a theme for the deliverable

My theme will revolve around the Astroplant Kit, that is in need of a new landingpage to attract more customers and tell it's story. You can view their current website [here](astroplant.io).

## Situation & Problem

Astroplant is a kit that people can purchase and use to grow plants and food. The startup is quite small and has sold a couple dozen of kits. However, now that [ESA](https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/AstroPlant_citizen_science_for_growing_plants_in_space) is showing interest, it is becoming clear that the current website is in need of a replacement. Miles, my company, has done the rebranding of Astroplant and came up with a design for the landingpage. 

![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/rebrand.png)
![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/landingpage-mockups.png)

And thus, from this situation arises the following problem: the current website doesn't tell the story of Astroplant and customers often don't go through with the order. With the new design for the website that Miles made both points have been touched upon. Given this part of the minor is focused on front-end development, I will be building the website, for both this minor as well as Miles. Two birds with one stone, you may say.

In short, to solve this problem, I will plan activities (which you can see further on in this week's documentation) to do for the upcoming weeks that will help me code and evaluate the website with my team members at Miles that work on Astroplant. To facilitate this, I will be having a weekly check-in with the members of my team to see if everything aligns and work on any feedback that's provided. I will do my best to record these meetings where possible.

### The design I will be working with

You saw it earlier in this week's documentation, but the design I will be working with has been made by Miles. You can view the Figma file [here](insert figma link).

### The needs for the website

Based on this design I had a co-creation session with Daniel, Ezra and Romain my team members for Astroplant. We sat down and decided what the needs for the website would be, technically. We came up with the following list:

* need 1

### The goal for the website

With the needs for the website in place, we can now define the goal for the website. 

> goal of the website

With the needs and goals defined I have a clear point of reference to work with later on in the development process.

# Research the JAMstack

Now that I have a clear understanding of the current situation and problem it's time to do my research on the JAMstack, and decide what my planning is going to look like. When looking at the JAMstack it becomes very clear that there are a lot of different companies marketing the same thing. A lot of frameworks, CMS'es and build systems. I think it's important to first understand what the JAMstack is.

In the lecture I attended given by Tim, we learned that there are a few key players in the game. One of them being Netlify. Netlify originated the term JAMstack and explains it as follows:

![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/jamstack.png)

As you can see there are no databases or web servers neccesary, as is the case with WordPress and other "platforms". You can easily switch your front end and back end based on your needs while still having a very easy to setup project. Aside from Netlify there are also other build and hosting platforms, such as Vercel.

From this research I came to the conclusion that there are a couple of main things that every JAMstack website needs:

* A static site generator
* A data source (this can be a CMS that can connect to any front end system or for example, `.md` files)
* A build and hosting service

So as you might think, my quest to find the right tools started. I came accross a website that lists all the [static site generators](https://www.staticgen.com) based on popularity.

![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/nextjs-markdown.png)

When looking at that website it became clear to me that there was a lot of choice. That's why I consulted Tim and asked for help. He pointed me in the right direction and for the static site generator I am going to try out [Next.js](https://nextjs.org/). It's a framework based on React (which I already have some experience with) and has a lot of cool stuff built in such as SEO tools. For the data I am going to keep it simple, and will use `.md` (markdown) files to supply the website with content.

Lastly, in order to build the website and deploy it somewhere I am going to go with [Vercel](https://vercel.com/). Reason being is that it is free and is made by the developers that are behind Next.js. It also has a GitHub integration that will work very well with my project and is free to use, even with a SSL certificate for the custom domain name.

Now that I have an idea of the tools I am going to use it's time to plan out the upcoming weeks.

# Planning for the upcoming weeks

As always, I am going to think out the next few weeks, a planning. You can find this planning on the [README.md](https://github.com/Meet-Miles/astroplant) page as well for the overall project.

|When|What|Finalized|
|:---|:---|:---:|
|Week 11|[Research & Planning](https://github.com/Meet-Miles/astroplant/blob/master/docs/week-11.md)|✅|
|Week 12|[Next.js](https://github.com/mwdossantos/Meet-Miles/astroplant/docs/week-12.md)|✅|
|Week 13|[Markdown data](https://github.com/Meet-Miles/astroplant/blob/master/docs/week-13.md)||
|Week 14|[Refactoring](https://github.com/Meet-Miles/astroplant/blob/master/docs/week-14.md)||
|Week 15|[Time for deployment with Vercel](https://github.com/Meet-Miles/astroplant/blob/master/docs/week-15.md)||

---

This week has been a very informative and exciting week. I really do think JAMstack is in some way the future of web development, and I'm already seeing it's changing my thinking about web development as a whole. I can't wait to jump into next [week](https://github.com/mwdossantos/Meet-Miles/astroplant/docs/week-12.md) and start building the website using Next.js. It's going to be exciting!

# Resources

|Resource|Note|
|:---|:---|
|[What the f* is JAMstack?](https://jamstack.wtf/)|A cool website that gave me layman information|
|[Next.js](https://nextjs.org/)|The react framework I will be using to build the website|
|[`.md` data in Next.js](https://nextjs.org/learn/basics/data-fetching/blog-data)|Very handy way of loading in the Markdown data|
|[Netlify explanation](https://www.netlify.com/jamstack/)|To learn more about the way Netlify handles the JAMstack|
|[Static site generators](https://www.staticgen.com)|A collection of all static site generators. Quite overwhelming|
|[Headless CMS'es](https://headlesscms.org)|A collection of open source and closed source headless CMS'es|
|[JAMstack conference](https://jamstackconf.com/)|I will attend this virtual conference and dive even deeper into the topic|
|[Medium article](https://medium.com/kongsberg-digital/jamstack-in-action-e9e13cd5a27)|A medium article I found about an example project built with the JAMstack|
|[O'Reilly - Modern Development on the JAMstack](https://github.com/mwdossantos/miles/blob/master/docs/oreilly-modern-web-development-on-the-jamstack.pdf)|I read this book to learn more about the JAMstack|

