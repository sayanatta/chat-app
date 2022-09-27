import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  MyKnownError,
  UserDataRecieved,
  UserLoginPayload,
  UsersState,
} from '../types';
import authService from './authenticatio.service';

// Initial State
const INITIAL_STATE: UsersState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// login User
export const login = createAsyncThunk<
  UserDataRecieved,
  UserLoginPayload,
  { rejectValue: MyKnownError }
>('auth/login', async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data.data as MyKnownError);
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = action.payload.msg;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload?.msg;
        state.user = null;
      });
  },
});

export default authSlice.reducer;
