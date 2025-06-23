import { nanoid } from 'nanoid';

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
          {
            id: nanoid(),
            type: 'heading',
            level: 1,
            content: 'Welcome to Page 01!',
            properties: {}
          },
          {
            id: nanoid(),
            type: 'paragraph',
            content: 'This is the first paragraph on your new page. You can start typing here.',
            properties: { color: 'default' }
          },
          {
            id: nanoid(),
            type: 'todo',
            content: 'Add more block types.',
            properties: { checked: false }
          }
        ],
        // For page nesting 
        parentId: null, // ID of the parent page, or null if top-level
        childPageIds: [] // Array of IDs of sub-pages
      },
    ],
    
  }

};