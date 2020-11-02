export default {
  name: "component",
  title: "Component",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "picture",
      title: "Component Picture",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
  ],
};
