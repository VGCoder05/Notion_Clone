import { nanoid } from "nanoid";

export default {
  // User information
  user: {
    id: nanoid(),
    name: "Vanshit",
  },

  // Workspace/App Data
  workspace: {
    id: nanoid(),
    activePageId: null, // ID of the currently viewed page (useful for routing/loading)
    pages: [
      {
        id: nanoid(),
        title: "Page 01",
        icon: "📄",
        coverImage: null, // URL to a cover image
        // 'blocks' represent paragraph, heading, images etc.
        blocks: [
          {}
        ],
        // For page nesting
        parentId: null, // ID of the parent page, or null if top-level
        childPageIds: [], // Array of IDs of sub-pages
      },
    ],
  },
};
