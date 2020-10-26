export default {
  name: "achievement",
  title: "Achievement",
  type: "document",
  fields: [
    {
      name: "cover",
      title: "Cover",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
  ],
};
