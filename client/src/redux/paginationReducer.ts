import { createSlice } from '@reduxjs/toolkit';

type State = {
  totalPageCnt: number;
};

const PaginationReducer = createSlice({
  name: 'PaginationReducer',
  initialState: {
    totalPageCnt: 0,
  },
  reducers: {
    totalPageCntSet(state: State, action) {
      return { ...state, totalPageCnt: action.payload };
    },
  },
});

export const { totalPageCntSet } = PaginationReducer.actions;

export default PaginationReducer.reducer;
