import { createSlice, nanoid } from "@reduxjs/toolkit";
import intial_state from "./intial_state";


// console.log(intial_state)
let initialState = intial_state;

// If using nanoid for page & active page IDs initially:
// initialState.workspace.pages[0].id = nanoid();
initialState.workspace.activePageId = initialState.workspace.pages[0].id;

export const dataSlice = createSlice({
  name: "data",
  initialState: initialState.localStorage
    ? localStorage.getItem("Data")
      ? JSON.parse(saved)
      : initialState
    : initialState,
  reducers: {
    update: (state, action) => {
      // wrong -> return {...state, pages: pages.push(actions.payload)};

      // Updation slice method code with check before accessing pages
      if (state?.workspace?.pages) {
        state.workspace.pages.push(action.payload);
      }
    },
    setActiveID: (state, pageID) => {
      state.workspace.activePageId = pageID.payload;
    },
    updateBlock: (state, blockData) => {
      let activePgID = state.workspace.activePageId;
      const currPg = state.workspace.pages.filter((page) => {
        if (page.id == activePgID) {
          page.blocks = [blockData.payload];
        }
      });
    },
  },
});

export const { update, setActiveID, updateBlock } = dataSlice.actions;

export default dataSlice.reducer;
