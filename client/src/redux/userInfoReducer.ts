import { createSlice } from '@reduxjs/toolkit';

interface UserInfo {
  memberId: string | null;
  email: string | null;
  displayName: string | null;
  location: string | null;
  title: string | null;
  aboutme: string | null;
  token: string | null;
}

const initialState = {
  memberId: JSON.parse(localStorage.getItem('memberId')!),
  email: null, // ?
  displayName: JSON.parse(localStorage.getItem('displayName')!),
  location: null,
  title: null,
  aboutme: null,
  token: JSON.parse(localStorage.getItem('accessToken')!),
};

const userInfoSlice = createSlice({
  name: 'changeInfo',
  initialState,
  reducers: {
    userinfoUPDATE: (state: UserInfo, action) => {
      return {
        ...state,
        memberId: action.payload.memberId,
        token: action.payload.token,
      };
    },
  },
});

export const { userinfoUPDATE } = userInfoSlice.actions;
export default userInfoSlice.reducer;
