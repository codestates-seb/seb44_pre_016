import { combineReducers } from '@reduxjs/toolkit';
import test from './test';

const reducer = combineReducers({
  test,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
