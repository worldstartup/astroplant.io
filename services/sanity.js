import imageUrlBuilder from "@sanity/image-url";

const sanityClient = require("@sanity/client");
const BlockContent = require("@sanity/block-content-to-react");

const client = sanityClient({
  projectId: "4iykv1c5",
  dataset: "production",
  useCdn: true,
});

const imageBuilder = imageUrlBuilder(client);

export function imageUrlFor(source) {
  return imageBuilder.image(source);
}

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

/*****************************************
 *                  PAGES                *
 *****************************************/

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
      "platformImage": platformImage.asset->url,
      
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
        "cover": cover.asset -> url
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
        "cover": cover.asset -> url
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

/*****************************************
 *               ACHIEVEMENTS            *
 *****************************************/

export async function getAchievements() {
  try {
    const query = `*[_type == "achievement"] {
      _id,
      title,
      description,
      "cover": cover.asset -> url
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
      "picture": picture.asset -> url,
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
      "picture": picture.asset -> url,
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
    const query = `*[_type == "partner"]{
      _id,
      name,
      "logo": logo.asset->url
    }`;

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
      "cover": cover.asset -> url,
      description,
    }`;

    let res = await client.fetch(query);

    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
}
