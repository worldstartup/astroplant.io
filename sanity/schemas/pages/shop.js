export default {
  name: "shop",
  title: "Shop Page",
  type: "document",
  fieldsets: [{ name: "heroSection", title: "Hero Section" }],
  fields: [
    // hero section
    {
      name: "heroSectionTitle",
      title: "Hero Section Title",
      type: "string",
      fieldset: "heroSection",
    },
    {
      name: "heroSectionDescription",
      title: "Hero Section Description",
      type: "text",
      fieldset: "heroSection",
    },
    {
      name: "heroSectionImage",
      title: "Hero Section Image",
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
  ],
};
