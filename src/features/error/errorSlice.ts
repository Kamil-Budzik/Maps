import { createSlice } from '@reduxjs/toolkit';

export interface ErrorState {
  isError: boolean;
  error: string;
}

const initialState: ErrorState = {
  isError: false,
  error: '',
};

export const ErrorSlice = createSlice({
  name: 'summary',
  initialState,
  reducers: {
    addError: (state, action) => {
      state.isError = true;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.isError = false;
      state.error = '';
    },
  },
});

export const { addError, clearError } = ErrorSlice.actions;

export default ErrorSlice.reducer;