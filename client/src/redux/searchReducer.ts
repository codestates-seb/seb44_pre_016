import { createSlice } from '@reduxjs/toolkit';

type State = {
  keyword: string;
  types: string;
};

const SearchReducer = createSlice({
  name: 'SearchReducer',
  initialState: {
    keyword: '',
    types: '',
  },
  reducers: {
    searchSet(state: State, action) {
      return {
        ...state,
        keyword: action.payload.keyword,
        types: action.payload.types,
      };
    },
  },
});

export const { searchSet } = SearchReducer.actions;

export default SearchReducer.reducer;
