import { createSlice } from "@reduxjs/toolkit";


interface RootState {
    isRunning: boolean;
}

const initialState: RootState = {
    isRunning: false,
};

export const setIsRunningSlice = createSlice({
  name: 'isRunning',
  initialState,
  reducers: {
    setIsRunning: (state, action) => {
      state.isRunning = action.payload;
    }
  }
})

export const { setIsRunning } = setIsRunningSlice.actions
export const setIsRunningReducer = setIsRunningSlice.reducer