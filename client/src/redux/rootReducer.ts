import { combineReducers } from '@reduxjs/toolkit';
import PaginationReducer from './paginationReducer';

const reducer = combineReducers({
  PaginationReducer,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
