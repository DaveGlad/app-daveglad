import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

declare global {
  type RootState = ReturnType<typeof store.getState>;
}

// Thanks to that you will have ability to use useSelector hook with state value
declare module "react-redux" {
  interface DefaultRootState extends RootState {}
}
