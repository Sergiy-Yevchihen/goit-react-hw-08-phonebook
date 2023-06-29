import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

//utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

//utility to remove JWT
const clearAuthHeader = token => {
  axios.defaults.headers.common.Authorization = '';
};

//POST - ​/users​/signup (create a new user)
//body - {"name": "Adrian Cross", "email": "across@mail.com", "password": "12345"}
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('users/signup', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//POST - /users/login (login user)
//body - {"email": "string", "password": "string"}
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//POST - ​/users​/logout (logout user)
//header - token
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

//GET - /users/current (Get information about the current use)
////header - token
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const { token } = thunkAPI.getState().auth;

    if (!token) {
      return thunkAPI.rejectWithValue('No valid token!!!');
    }

    try {
      setAuthHeader(token);
      const { data } = await axios.get('users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
