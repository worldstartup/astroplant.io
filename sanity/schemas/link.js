export default {
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    {
      name: "label",
      title: "label",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "type",
      title: "type",
      type: "string",
      options: {
        list: ["internal", "external"],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "to",
      title: "To",
      description: "Where the link leads",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
