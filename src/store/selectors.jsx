// For active page ID
export const selectActivePageId = (state) => state.data.workspace.activePageId;

// For usesrs all pages
export const selectAllPages = (state) => state.data.workspace.pages;

// find page by the ID of page
export const selectPageById = (state, pageId) =>
    state.data.workspace.pages.find((page) => page.id === pageId);

// all blocks of active page
export const selectBlocksForPage = (state, pageId) => {
  const page = selectPageById(state, pageId);
  return page ? page.blocks : [];
};

// If you have activePageId, you can create a selector for its blocks:
export const selectBlocksForActivePage = (state) => {
  const activeId = selectActivePageId(state);
  if (!activeId) return [];
  const page = selectPageById(state, activeId);
  return page ? page.blocks : [];
};

export const selectCompData = (state)=> state.data;

// User Data
export const selectUser = (state) => state.data.user;

