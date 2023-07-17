import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { persistReducer } from "redux-persist";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import storage from "redux-persist/lib/storage";
import authSlice, { IAuthState } from "./auth/auth.slice";
import eventSlice, { IEventState } from "./event/event.slice";
import themeSlice, { IThemeState } from "./theme/theme.slice";
import categorySlice, { ICategoryState } from "./category/category.slice";

const persistAuthConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken", "isLogged"],
};

const persistThemeConfig = {
  key: "mode",
  storage,
};

export interface RootState {
  auth: IAuthState;
  theme: IThemeState;
  events: IEventState;
  categories: ICategoryState;
}

export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;

export const store = configureStore({
  reducer: {
    auth: persistReducer<IAuthState>(persistAuthConfig, authSlice),
    theme: persistReducer<IThemeState>(persistThemeConfig, themeSlice),
    events: eventSlice,
    categories: categorySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);