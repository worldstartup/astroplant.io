export default {
    name: "home",
    title: "Home page",
    type: "document",
    fieldsets: [
        { name: "hero", title: "Hero section" },
        { name: "community", title: "Community section" },
        { name: "supporters", title: "Supporters section" },
        { name: "cta", title: "CTA section" },
        { name: "footer", title: "Footer section" },
    ],
    fields: [
        // hero section
        {
            name: "planetImage",
            title: "Planet image",
            type: "image",
            fieldset: "hero",
        },
        {
            name: "heroTitle",
            title: "Title",
            type: "string",
            fieldset: "hero",
        },
        {
            name: "heroSubTitle",
            title: "Subtitle",
            type: "string",
            fieldset: "hero",
        },
        {
            name: "heroDescription",
            title: "Description",
            type: "array",
            of: [{ type: "block" }],
            fieldset: "hero",
        },
        // community section
        {
            name: "communityTitle",
            title: "Title",
            type: "string",
            fieldset: "community",
        },
        {
            name: "communitySubTitle",
            title: "Subtitle",
            type: "string",
            fieldset: "community",
        },
        {
            name: "communityImages",
            title: "Images",
            type: "array",
            of: [{ type: "image" }],
            fieldset: "community",
        },
        {
            name: "communityDescription",
            title: "Description",
            type: "array",
            of: [{ type: "block" }],
            fieldset: "community",
        },
        // supporters section
        {
            name: "supportersTitle",
            title: "Title",
            type: "string",
            fieldset: "supporters",
        },
        {
            name: "supportersSubTitle",
            title: "Subtitle",
            type: "string",
            fieldset: "supporters",
        },
        {
            name: "partnerImages",
            title: "Partners",
            type: "array",
            of: [{ type: "image" }],
            fieldset: "supporters",
        },
        // cta section
        {
            name: "ctaTitle",
            title: "Title",
            type: "string",
            fieldset: "cta",
        },
        {
            name: "ctaSubTitle",
            title: "Subtitle",
            type: "string",
            fieldset: "cta",
        },
        {
            name: "ctaDescription",
            title: "Description",
            type: "array",
            of: [{ type: "block" }],
            fieldset: "cta",
        },
        // footer section
        {
            name: "footerSlogan",
            title: "Slogan",
            type: "string",
            fieldset: "footer",
        },
        {
            name: "footerSubSlogan",
            title: "Sub slogan",
            type: "string",
            fieldset: "footer",
        },
    ],
};
