import { createSlice } from '@reduxjs/toolkit';

type State = {
  totalPageCnt: number;
};

const test = createSlice({
  name: 'test',
  initialState: {
    totalPageCnt: 0,
  },
  reducers: {
    totalPageCntSet(state: State, action) {
      return { ...state, totalPageCnt: action.payload };
    },
  },
});

export const { totalPageCntSet } = test.actions;

export default test.reducer;
