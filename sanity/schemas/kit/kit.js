export default {
  name: "kit",
  title: "Kit",
  type: "document",
  fields: [
    {
      name: "components",
      title: "Components",
      type: "array",
      of: [{ type: "component" }],
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "feature" }],
    },
    {
      name: "specifications",
      title: "Specifications",
      type: "array",
      of: [{ type: "specification" }],
    },
    {
      name: "reviews",
      title: "Reviews",
      type: "array",
      of: [{ type: "review" }],
    },
  ],
};
