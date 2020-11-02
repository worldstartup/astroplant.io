const GRAPHQL_URL = "https://community-api.astroplant.sda-projects.nl/graphql";

export const API_URL = "https://community-api.astroplant.sda-projects.nl";

export async function getFeaturedArticles() {
  const query = `{
    articles(
      where: { published: true }
      sort: "published_at:desc"
      start: 0,
      limit: 2,
    ) {
      id
      slug
      published_at
      title
      preview
      cover {
        url
        alternativeText
      }
    }
  }`;

  try {
    const res = await fetch(GRAPHQL_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: query }),
    }).then((res) => res.json());

    return res.data.articles;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function getKitFAQs() {
  const query = `{ 
    helpSection(id: 7) {
      faqs {
        id
        question 
        answer
      }
    } 
  }`;

  try {
    const res = await fetch(GRAPHQL_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: query }),
    }).then((res) => res.json());

    return res.data.helpSection.faqs;
  } catch (err) {
    console.log(err);
    return null;
  }
}
