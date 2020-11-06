export default {
  name: "contribute",
  title: "Contribute Page",
  type: "document",
  fieldsets: [
    { name: "pageDetails", title: "Page details" },
    { name: "requirementSection", title: "Requirement section" },
    { name: "waysToContributeSection", title: "Ways to contribute section" },
  ],
  fields: [
    // page datails
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

    // Ways to contribute section
    {
      name: "waysToContributeSectionTitle",
      title: "Ways to contribute title",
      type: "string",
      fieldset: "waysToContributeSection",
    },
    {
      name: "waysToContribute",
      title: "Ways To Contribute",
      type: "array",
      of: [{ type: "contentBlock" }],
      fieldset: "waysToContributeSection",
    },

    // Requirement section
    {
      name: "requirementSectionTitle",
      title: "Requirement section title",
      type: "string",
      fieldset: "requirementSection",
    },
    {
      name: "requirementDescription",
      title: "Requirement Description",
      type: "array",
      of: [{ type: "block" }],
      fieldset: "requirementSection",
    },
  ],
};
