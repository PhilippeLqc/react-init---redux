import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    password: null,
    email: null,
    decouvert: Boolean,
    amount: Number,
    sold: Number,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setDecouvert: (state, action) => {
      state.decouvert = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    setSold: (state, action) => {
      state.sold = action.payload;
    },
  },
});

export const {
  login,
  logout,
  setPassword,
  setEmail,
  setDecouvert,
  setAmount,
  setSold,
} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
