export default {
  name: "home",
  title: "Home page",
  type: "document",
  fieldsets: [
    { name: "heroSection", title: "Hero section" },
    { name: "communitySection", title: "Community section" },
    { name: "partnersSection", title: "Partners section" },
    { name: "platformSection", title: "Platform section" },
    { name: "ctaSection", title: "CTA section" },
  ],
  fields: [
    // hero section
    {
      name: "planetImage",
      title: "Planet image",
      type: "image",
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          options: {
            isHighlighted: true,
          },
        },
      ],
      fieldset: "heroSection",
    },
    {
      name: "heroTitle",
      title: "Title",
      type: "string",
      fieldset: "heroSection",
    },
    {
      title: "Youtube URL",
      name: "video",
      type: "url",
      fieldset: "heroSection",
    },
    {
      name: "heroDescription",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      fieldset: "heroSection",
    },

    // partners section
    {
      name: "partnersTitle",
      title: "Title",
      type: "string",
      fieldset: "partnersSection",
    },
    {
      name: "partners",
      title: "Partners",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "partner" }],
        },
      ],
      fieldset: "partnersSection",
    },
    {
      name: "partnersLink",
      title: "Link",
      type: "link",
      fieldset: "partnersSection",
    },

    // community section
    {
      name: "communityTitle",
      title: "Title",
      type: "string",
      fieldset: "communitySection",
    },
    {
      name: "communityImages",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
      fieldset: "communitySection",
    },
    {
      name: "communityDescription",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      fieldset: "communitySection",
    },
    {
      name: "communityLink",
      title: "Link",
      type: "link",
      fieldset: "communitySection",
    },

    // platform section
    {
      name: "platformTitle",
      title: "Title",
      type: "string",
      fieldset: "platformSection",
    },
    {
      name: "platformDescription",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      fieldset: "platformSection",
    },
    {
      name: "platformImage",
      title: "Platform Image",
      type: "image",
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          options: {
            isHighlighted: true,
          },
        },
      ],
      fieldset: "platformSection",
    },
    {
      name: "platformLinks",
      title: "Links",
      type: "array",
      of: [{ type: "link" }],
      fieldset: "platformSection",
    },

    // cta section
    {
      name: "ctaTitle",
      title: "Title",
      type: "string",
      fieldset: "ctaSection",
    },
    {
      name: "ctaImage",
      title: "Title",
      type: "image",
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          options: {
            isHighlighted: true,
          },
        },
      ],
      fieldset: "ctaSection",
    },
    {
      name: "ctaDescription",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      fieldset: "ctaSection",
    },
    {
      name: "ctas",
      title: "Call to actions",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "cta" }],
        },
      ],
      fieldset: "ctaSection",
    },
  ],
};
