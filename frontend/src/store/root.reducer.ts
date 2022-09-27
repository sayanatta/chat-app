import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/authentication/store/authentication.slice';
export const rootReducer = combineReducers({
  auth: authReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
