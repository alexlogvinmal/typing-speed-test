import { createSlice } from "@reduxjs/toolkit";


interface RootState {
  chars: number;
}

const initialState: RootState = {
  chars: 0,
};

export const setCharsSlice = createSlice({
  name: 'chars',
  initialState,
  reducers: {
    setChars: (state, action) => {
      state.chars = action.payload;
    }
  }
})

export const { setChars } = setCharsSlice.actions
export const setCharsReducer = setCharsSlice.reducer