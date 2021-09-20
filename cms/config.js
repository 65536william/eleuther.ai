module.exports = {
  // We want to manually init the config file
  cms_manual_init: true,

  // Backend configuration, in this case with git
  backend: {
    name: "main",
    branch: "master",
    squash_merges: true,
  },

  // Local backend is used during development
  local_backend: true,

  // Where to store the images
  media_folder: "public/images/",

  // Where to link the images
  public_folder: "public/images/",

  // The Pages collection
  collections: [
    {
      name: "Blog",
      label: "Blog",
      editor: { preview: false },
      label_singular: "Blog",
      folder: "content/blog",
      create: true,
      slug: "{{slug}}",
      extension: "md",
      format: "yaml-frontmatter",
      fields: [
        {
          label: "Title",
          name: "title",
          widget: "string",
          required: true,
        },
        {
          label: "Date",
          name: "date",
          widget: "datetime",
          required: true,
        },
        {
          label: "Authors",
          name: "authors",
          widget: "list",
          default: ["Contributor A, Contributor B"],
        },
        {
          label: "Cover",
          name: "cover",
          widget: "image",
          required: false,
        },
        {
          label: "Description",
          name: "description",
          widget: "text",
          required: true,
        },
        {
          label: "Body",
          name: "body",
          widget: "markdown",
          required: true,
        },
      ],
    },
    {
      name: "Publications",
      label: "Publications",
      editor: { preview: false },
      label_singular: "Publication",
      folder: "content/publications",
      create: true,
      slug: "{{slug}}",
      extension: "md",
      format: "yaml-frontmatter",
      fields: [
        {
          label: "Title",
          name: "title",
          widget: "string",
          required: true,
        },
        {
          label: "Date",
          name: "date",
          widget: "datetime",
          required: true,
        },
        {
          label: "Authors",
          name: "authors",
          widget: "list",
          default: ["Contributor A, Contributor B"],
        },
        {
          label: "Description",
          name: "description",
          widget: "text",
          required: true,
        },
        {
          label: "Link",
          name: "link",
          widget: "string",
          required: true,
        },
      ],
    },
  ],
};
