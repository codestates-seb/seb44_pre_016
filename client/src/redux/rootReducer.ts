import { combineReducers } from '@reduxjs/toolkit';
import PaginationReducer from './paginationReducer';
import SearchReducer from './searchReducer';

const reducer = combineReducers({
  PaginationReducer,
  SearchReducer,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
