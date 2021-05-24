import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
// import counterReducer from "./features/userSlice";
import userReducer from "../features/userSlice";
export const store = configureStore({
  reducer: {
    app: userReducer,
    // counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
