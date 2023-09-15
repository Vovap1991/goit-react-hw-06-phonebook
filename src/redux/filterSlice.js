const { createSlice } = require('@reduxjs/toolkit');

const initialFilterValue = '';

export const slice = createSlice({
  name: 'filter',
  initialState: {
    filter: initialFilterValue,
  },
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const filterReducer = slice.reducer;
export const { changeFilter } = slice.actions;
