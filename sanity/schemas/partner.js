export default {
  name: "partner",
  title: "Partner",
  type: "document",
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "website",
      title: "Website",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "isMainPartner",
      title: "Main Partner",
      type: "boolean",
    },
  ],
};
