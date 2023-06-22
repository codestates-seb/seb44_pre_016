import { combineReducers } from '@reduxjs/toolkit';
import PaginationReducer from './paginationReducer';

import userInfoReducer from './userInfoReducer';
import SearchReducer from './searchReducer';

const reducer = combineReducers({
  PaginationReducer,
  userInfoReducer,
  SearchReducer,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
