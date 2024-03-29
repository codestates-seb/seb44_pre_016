import { createSlice } from '@reduxjs/toolkit';

type State = {
  totalQuestionCnt: number;
};

const PaginationReducer = createSlice({
  name: 'PaginationReducer',
  initialState: {
    totalQuestionCnt: 0,
  },
  reducers: {
    totalQuestionCntSet(state: State, action) {
      return { ...state, totalQuestionCnt: action.payload };
    },
  },
});

export const { totalQuestionCntSet } = PaginationReducer.actions;

export default PaginationReducer.reducer;
