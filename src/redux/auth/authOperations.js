import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorHandler } from 'redux/error/errorHandler';
import {
  registerUserApi,
  loginUserApi,
  logoutUserApi,
  refreshTokenApi,
  token,
  getUserInfoApi,
  // authGoogle,
} from 'services/kapustaApi';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userForm, { rejectWithValue }) => {
    try {
      await registerUserApi(userForm);
      const { data } = await loginUserApi(userForm);
      token.set(data.accessToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (userForm, { rejectWithValue }) => {
    try {
      const { data } = await loginUserApi(userForm);
      token.set(data.accessToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      await logoutUserApi();
      token.unset();
    } catch (error) {
      setTimeout(() => {
        dispatch(errorHandler({ error, cb: logoutUser }));
      }, 0);
      return rejectWithValue(error.message);
    }
  }
);

export const getAuthUser = createAsyncThunk(
  'auth/getAuthUser',
  async (_, { getState, rejectWithValue, dispatch }) => {
    const userToken = getState.accessToken.token;
    token.set(userToken);
    try {
      const { data } = await getUserInfoApi();
      return data;
    } catch (error) {
      setTimeout(() => {
        dispatch(errorHandler({ error, cb: getAuthUser }));
      }, 0);
      return rejectWithValue(error.message);
    }
  }
);

export const refreshToken = createAsyncThunk(
  'auth/refreshToken',
  async (cb, { getState, rejectWithValue, dispatch }) => {
    const { refreshToken, sid } = getState().auth;
    try {
      token.set(refreshToken);
      const { data } = await refreshTokenApi({ sid });
      token.set(data.newAccessToken);
      setTimeout(() => {
        dispatch(cb());
      }, 0);
      return data;
    } catch (error) {
      setTimeout(() => {
        dispatch(logoutUser);
      }, 0);
      return rejectWithValue(error.message);
    }
  }
);
