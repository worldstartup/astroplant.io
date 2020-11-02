export default {
  name: "specification",
  title: "Specification",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "value",
      title: "Specification Value",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "unit",
      title: "Specification Unit",
      type: "string",
    },
  ],
};
