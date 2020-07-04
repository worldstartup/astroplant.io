const sanityClient = require("@sanity/client");
import imageUrlBuilder from "@sanity/image-url";
const BlockContent = require("@sanity/block-content-to-react");

const client = sanityClient({
    projectId: "4iykv1c5",
    dataset: "production",
    token:
        "skj6Yyyaldstk1oUvu84vB7wM3ORDgKiMNQol8RWQbtkaqoPMS2wcOSwuJTj6zShxRaddOH2YdwSB956C9hV5bmyBv69lvQxqQO6cMbO5asIkv2lwCpBRiTqwsdq27pdQwKOcGiY2AaIXsxJzmdZx05GSRwkaeQqZQXAKqQHADaKB43tTHak", // or leave blank to be anonymous user
    useCdn: false, // `false` if you want to ensure fresh data
});

const imageBuilder = imageUrlBuilder(client);

export function imageUrlFor(source) {
    return imageBuilder.image(source);
}

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

// queries for content

// page queries

export async function getBo() {
    try {
        const query = `*[_type == "boPortfolio"] {
            sidebar,
            content
        }
          `;

        let boPortfolio = await client.fetch(query);
        boPortfolio = boPortfolio ? (boPortfolio.length ? boPortfolio[0] : null) : null;

        return boPortfolio;
    } catch (error) {
        console.log(error);
        return null;
    }
}
