import { createSlice } from "@reduxjs/toolkit";
type TAuthState = {
  user: null | object;
  token: null | string;
};

const initialState: TAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state: TAuthState, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },

    logout: (state: TAuthState) => {
      state.token = null;
      state.user = null;
    },
  },
});
export const { logout, setUser } = authSlice.actions;

export default authSlice.reducer;
