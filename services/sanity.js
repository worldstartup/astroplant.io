// import the Sanity client and create the connection
const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: "4iykv1c5",
  dataset: "production",
  useCdn: true,
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
      "video": video.asset->url,
      heroDescription,
                
      // supporters section
      partnersTitle,
      partners[]->{
        _id,
        name,
        "logo": logo.asset->url
      },

      // community section
      communityTitle,
      communityImages,
      communityDescription,
      
      // platform section
      platformTitle,
      platformDescription,
      platformImage,
      
      // cta section
      ctaTitle,
      ctaDescription,
      ctas[]->{
        _id,
        "slug": slug.current,
        title,
        description,
        "cover": cover.asset->url,
      }
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
