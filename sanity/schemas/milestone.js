export default {
  name: "milestone",
  title: "Milestone",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      options: {
        dateFormat: "YYYY-MM",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "cover",
      title: "Cover",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
  ],
  orderings: [
    {
      title: "Date, Recent",
      name: "DateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
};
