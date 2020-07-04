![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/week-15.png)

Thank you for taking the time to read this week's update. As you can see in the following table, I have a couple of activities planned that I will do in order to get my desired result: Time for deployment with Vercel.

| Activities                  | Finalized |
| :-------------------------- | :-------: |
| Video file type             |    ✅     |
| Vercel deployment           |    ✅     |
| Re-deploy on Sanity publish |    ✅     |

# Video file type

As I have mentioned last week, the video in the hero section of the Astroplant website is still being served locally. You can't change it from the studio. This is quite a hassle and needs to be fixed.

Looking around the docs for a solution I quickly found one that offers exactly what I need. The `file` type, which you can use in schemas.

## Adding to the schema

I first created the `file` type field. I then added it to the `home.js` fieldset called `hero`.

```javascript
// Video file type

{
    title: "Video file",
    name: "video",
    type: "file"
}
```

```javascript
// home.js

fields: [
        // hero section
        // other fields
        {
            title: "Video file",
            name: "video",
            type: "file",
            fieldset: "hero",
        },
        // other fields
```

When I launched the studio I was greeted with the following, where I can upload the video file:

![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/mux-api-greeting.jpg)

## Displaying in the front end

Now that it's uploaded, I can adjust my query I did earlier to also include the video:

```javascript
const query = `*[_type == "home"] {
            // hero section
            planetImage,
            heroTitle,
            heroSubTitle,
            "video": video.asset->url,
            heroDescription,
            }`;
```

As you can see, I am getting the url from the `video.assets`, so that I can use it in the `src` attribute of the `<Video />` component:

```javascript
// get the video URL
<Video source={props.data.video}></Video>
```

![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/video-proof.jpg)

It works!

# The deployment process

![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/deployment-process.jpg)

As you can see, it's extremely easy to deploy. All I need to do is that I make sure the GitHub repo is linked to my Vercel account, push my code to the master branch, and then it will automatically deploy!

This is what that looks like in Vercel:

![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/vercel1.jpg)

I can even see the build logs for each push!

![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/vercelbuild.jpg)

To finish off this week I invite you to take a look at the [finalized website](https://astroplant.now.sh/). Created with Next.js, deployed with Vercel :)

# Re-deploy on Sanity publish

Because I am using `getStaticProps()`, the data from the studio will only be fetched when the website is built. This can happen manually, by pushing to the repository, or by integrating a hook. This hook will listen for changes in the studio, and automatically re-deploy the website on Vercel. Let's get started:

## Creating the hook

I first created the deployment trigger hook in Vercel:

![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/deploy-hook-vercel.jpg)

I then entered it in the studio settings in Sanity:

![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/deploy-hook-sanity.jpg)

## Testing the hook

And voila! It starts re-deploying with the latest changes from the studio:

![image](https://raw.githubusercontent.com/Meet-Miles/astroplant/master/docs/images/deploying.jpg)

---

I've had so much fun learning this new platform! It went extremely well. The only thing I do want to dive deeper in with the portfolio website for block 4 of this minor, is the Markdown as a data source. Should be a lot of fun :)

# Resources

| Resource                                                           | Note                                    |
| :----------------------------------------------------------------- | :-------------------------------------- |
| [Vercel](https://vercel.com)                                       | Used to deploy the website              |
| [Mux](https://mux.com)                                             | Used as the video API                   |
| [Mux input](https://www.sanity.io/plugins/sanity-plugin-mux-input) | Used to integrate Mux into the studio   |
| [Mux player](https://github.com/sanity-io/sanity-mux-player)       | Used to play the video in the front end |
