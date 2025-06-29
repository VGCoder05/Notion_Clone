import { nanoid } from "nanoid";

const getInitialData = () => {
  const saved = localStorage.getItem("Data");
  if (saved) {
    return JSON.parse(saved); // ✅ Use saved data with same IDs
  }

  // ❌ This only runs on first load (or if localStorage is cleared)
  return {
    // User information
    user: {
      id: nanoid(),
      name: "Guest",
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
          blocks: [{ type: "paragraph", data: { text: "" } }],
          // For page nesting
          parentId: null, // ID of the parent page, or null if top-level
          childPageIds: [], // Array of IDs of sub-pages
        },
      ],
    },
  };
};

export default getInitialData()