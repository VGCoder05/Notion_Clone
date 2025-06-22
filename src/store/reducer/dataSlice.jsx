import { createSlice, nanoid } from "@reduxjs/toolkit";

let initialState = {
  data: {
    id: nanoid(),
    user: "Vanshit",
    pages: [{
      id: nanoid(),
      page_name: "page 01",
      page_data: [{}]
    }]
  }
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    update: (state, action) => {
      // wrong -> return {...state, pages: pages.push(actions.payload)};
      state.data.pages.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { update } = dataSlice.actions;

export default dataSlice.reducer;
