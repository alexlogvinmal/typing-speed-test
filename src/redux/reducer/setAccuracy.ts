import { createSlice } from "@reduxjs/toolkit";


interface RootState {
    accuracy: number;
}

const initialState: RootState = {
    accuracy: 0,
};

export const setAccuracySlice = createSlice({
  name: 'accuracy',
  initialState,
  reducers: {
    setAccuracy: (state, action) => {
      state.accuracy = action.payload;
    }
  }
})

export const { setAccuracy } = setAccuracySlice.actions
export const setAccuracyReducer = setAccuracySlice.reducer