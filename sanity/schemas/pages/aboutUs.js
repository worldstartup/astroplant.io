export default {
  name: "aboutUs",
  title: "About Us Page",
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
