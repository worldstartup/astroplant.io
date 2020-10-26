export default {
  name: "contribute",
  title: "Contribute Page",
  type: "document",
  fieldsets: [{ name: "pageDetails", title: "Page details" }],
  fields: [
    // hero section
    {
      name: "name",
      title: "Page Name",
      type: "string",
      fieldset: "pageDetails",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      fieldset: "pageDetails",
    },
  ],
};
