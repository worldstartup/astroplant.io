export default {
  name: "review",
  title: "review",
  type: "object",
  fields: [
    {
      name: "authorPicture",
      title: "Author Picture",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "authorName",
      title: "Author",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "authorJob",
      title: "Author Job",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Review",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
  ],
};
