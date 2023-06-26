import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserInfo {
  memberId: string | null;
  email: string | null;
  displayName: string | null;
  location: string | null;
  title: string | null;
  aboutme: string | null;
}

const initialState = {
  memberId: JSON.parse(localStorage.getItem('memberId')!),
  email: null, // ?
  displayName: JSON.parse(localStorage.getItem('displayName')!),
  location: null,
  title: null,
  aboutme: null,
};

const userInfoSlice = createSlice({
  name: 'changeInfo',
  initialState,
  reducers: {
    UPDATE: (state: UserInfo, action: any) => {
      return action.payload;
    },
  },
});

export const { UPDATE } = userInfoSlice.actions;
export default userInfoSlice.reducer;
