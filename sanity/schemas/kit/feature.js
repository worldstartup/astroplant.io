export default {
  name: "feature",
  title: "Feature",
  type: "object",
  fields: [
    {
      name: "order",
      title: "Order",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "icon",
      title: "Feature Icon",
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
      title: "Order, Ascending",
      name: "OrderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
};
