import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "4iykv1c5",
  dataset: "production",
  useCdn: true,
});

const imageBuilder = imageUrlBuilder(client);

export function imageUrlFor(source) {
  return imageBuilder.image(source);
}

/**
 * Creates a url based on parameters to fetches optimized image from sanity
 * @param {string} url of the sanity image "https://cdn.sanity.io/images/..."
 * @param {object} params of the image to fetch more info at https://www.sanity.io/docs/image-urls
 */
export function optimizeImage(url, params = {}) {
  params = { auto: "format", ...params };

  let urlParams = Object.keys(params)
    .map((key) => {
      if (typeof params[key] !== "undefined") {
        return key + "=" + params[key];
      }
    })
    .join("&");

  const optimizedUrl = url + "?" + urlParams;

  return optimizedUrl;
}

/**
 * Renders rich text from sanity
 * @param {*} richText
 */
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

/*****************************************
 *                  PAGES                *
 *****************************************/

const imgModel = `{
        	"url": asset -> url,
        	caption
        }`;

const linkModel = `{
        _key,
        label,
        type,
        to
      }`;

const partnerModel = `{
        _id,
        name,
        logo ${imgModel},
        website
      }`;

export async function getHome() {
  try {
    const query = `*[_type == "home"] {
      // hero section
      planetImage ${imgModel},
      heroTitle,
      video,
      heroDescription,
                
      // supporters section
      partnersTitle,
      partners[]->${partnerModel},
      partnersLink ${linkModel},

      // community section
      communityTitle,
      communityImages[]{
        _key,
        "url": asset->url,
        caption
      },
      communityDescription,
      communityLink ${linkModel},
      
      // platform section
      platformTitle,
      platformDescription,
      platformImage ${imgModel},
      platformLinks[] ${linkModel},
      
      // cta section
      ctaTitle,
      ctaDescription,
      ctaImage ${imgModel},
      ctas[]->{
        _id,
        "slug": slug.current,
        title,
        description,
        cover ${imgModel},
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

export async function getAboutUsContent() {
  try {
    const query = `*[_type == "aboutUs"] {
      name,
      description,
    }
    `;

    let res = await client.fetch(query);

    return res[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getContributeContent() {
  try {
    const query = `*[_type == "contribute"] {
      name,
      description,
      waysToContributeSectionTitle,
      waysToContribute[]{
        _key,
        content,
        title,
        cover ${imgModel},
        links[]${linkModel},
      },
      requirementSectionTitle,
      requirementDescription
    }
    `;

    let res = await client.fetch(query);

    return res[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getGoalsContent() {
  try {
    const query = `*[_type == "goals"] {
      name,
      description,
      goals{
        _id,
        content,
        title,
        cover ${imgModel},
        links[]${linkModel},
      },
    }
    `;

    let res = await client.fetch(query);

    return res[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getShopContent() {
  try {
    const query = `*[_type == "shop"] {
      "title": heroSectionTitle,
      "description": heroSectionDescription,
      "image": heroSectionImage ${imgModel},
    }`;

    let res = await client.fetch(query);

    return res[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}

/*****************************************
 *               ACHIEVEMENTS            *
 *****************************************/

export async function getAchievements() {
  try {
    const query = `*[_type == "achievement"] {
      _id,
      title,
      description,
      cover ${imgModel}
    }`;

    let res = await client.fetch(query);

    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
}

/*****************************************
 *             TEAM MEMBERS              *
 *****************************************/

export async function getCoreTeamMembers() {
  try {
    const query = `*[_type == "teamMember" && memberOf == "Core Team"]{
      _id,
      fullName,
      role,
      description,
      picture ${imgModel},
      linkedinProfile,
      memberOf,
    }`;

    let res = await client.fetch(query);

    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getOtherTeamMembers() {
  try {
    const query = `*[_type == "teamMember" && memberOf != "Core Team"]{
      _id,
      fullName,
      role,
      picture ${imgModel},
      linkedinProfile,
      memberOf,
    }`;

    let res = await client.fetch(query);

    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
}

/*****************************************
 *              PARTNERS                 *
 *****************************************/

export async function getPartners() {
  try {
    const query = `*[_type == "partner"]${partnerModel}`;

    let res = await client.fetch(query);

    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
}

/*****************************************
 *              MILESTONES               *
 *****************************************/

export async function getMilestones() {
  try {
    const query = `*[_type == "milestone"] | order(date asc){
      _id,
      title,
      date,
      cover ${imgModel},
      description,
    }`;

    let res = await client.fetch(query);

    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
}

/*****************************************
 *                  KIT                  *
 *****************************************/

export async function getKitDetails() {
  try {
    const query = `*[_type == "kit"] {
      components[]{
        _key,
        name,
        picture ${imgModel}
      },
      features[]{
        _key,
        order,
        name,
        description,
        icon ${imgModel}
      },
      specifications[]{
        _key,
        name,
        value,
        unit,
      },
      reviews[]{
        _key,
        authorJob,
        authorName,
        authorPicture ${imgModel},
        content,
      },
    }`;

    let res = await client.fetch(query);

    return res[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}
