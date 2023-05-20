import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addTransactionExpenseApi,
  getTransactionExpenseApi,
  addTransactionIncomeApi,
  deleteTransactionApi,
  getTransactionIncomeApi,
} from 'services/kapustaApi';

export const getTransactionIncome = createAsyncThunk(
  'transaction/income/get',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getTransactionIncomeApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTransactionIncome = createAsyncThunk(
  'transaction/income/add',
  async (transactionForm, { rejectWithValue }) => {
    try {
      const { data } = await addTransactionIncomeApi(transactionForm);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTransactionExpense = createAsyncThunk(
  'transaction/expense/get',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getTransactionExpenseApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTransactionExpense = createAsyncThunk(
  'transaction/expense/add',
  async (transactionForm, { rejectWithValue }) => {
    try {
      const { data } = await addTransactionExpenseApi(transactionForm);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transaction/delete',
  async (transactionId, { rejectWithValue }) => {
    try {
      const { data } = await deleteTransactionApi(transactionId);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
