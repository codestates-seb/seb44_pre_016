import { combineReducers } from '@reduxjs/toolkit';
import PaginationReducer from './paginationReducer';
import userInfoReducer from './userInfoReducer';

const reducer = combineReducers({
  PaginationReducer,
  userInfoReducer,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
