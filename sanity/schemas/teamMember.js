export default {
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    {
      name: "picture",
      title: "Picture",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          options: {
            isHighlighted: true,
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) =>
        Rule.max(140).error("max number of character is 140."),
    },
    {
      name: "linkedinProfile",
      title: "Linkedin Profile",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "memberOf",
      title: "Member Of",
      type: "string",
      options: {
        list: ["Core Team", "Advisors", "Former Team"],
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  initialValue: {
    linkedinProfile: "https://linkedin.com/",
  },
};
