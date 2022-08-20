import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

//!INTERFACES
import { UserInterface } from "./../../common/interfaces";

// Define a type for the slice state
interface AuthInitialState {
  user: UserInterface | null;
}
// Define the initial state using that type
const initialState: AuthInitialState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

export const {} = authSlice.actions;

export default authSlice.reducer;
