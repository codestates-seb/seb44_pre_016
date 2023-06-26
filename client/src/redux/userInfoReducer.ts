import { createSlice } from '@reduxjs/toolkit';

interface UserInfo {
  memberId: string | null;
  email: string | null;
  displayName: string | null;
  location: string | null;
  title: string | null;
  aboutme: string | null;
  accessToken: string | null;
  profileContent: string | null;
  profileImage: string | null;
  profileTitle: string | null;
}

const initialState = {
  memberId: JSON.parse(localStorage.getItem('memberId')!),
  email: null, // ?
  displayName: JSON.parse(localStorage.getItem('displayName')!),
  location: null,
  title: null,
  aboutme: null,
  accessToken: localStorage.getItem('accessToken'),
  profileContent: null,
  profileImage: null,
  profileTitle: null,
};

const userInfoSlice = createSlice({
  name: 'changeInfo',
  initialState,
  reducers: {
    userinfoLogin: (state: UserInfo, action) => {
      return {
        ...state,
        memberId: action.payload.memberId,
        accessToken: action.payload.accessToken,
      };
    },
    userinfoGet: (state: UserInfo, action) => {
      return {
        ...state,
        displayName: action.payload.displayName,
        location: action.payload.location,
        profileContent: action.payload.profileContent,
        profileImage: action.payload.profileImage,
        profileTitle: action.payload.profileTitle,
      };
    },
    userinfoDelete: (state: UserInfo, action) => {
      return {
        ...state,
        memberId: action.payload.memberId,
        accessToken: action.payload.accessToken,
      };
    },
  },
});

export const { userinfoLogin } = userInfoSlice.actions;
export const { userinfoGet } = userInfoSlice.actions;
export default userInfoSlice.reducer;
