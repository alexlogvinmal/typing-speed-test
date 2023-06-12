import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TypingTestState {
  startTime: number;
  endTime: number;
}

const initialState: TypingTestState = {
  startTime: 0,
  endTime: 0,
};

export const typingTestSlice = createSlice({
  name: 'typingTest',
  initialState,
  reducers: {
    startTyping: (state) => {
      state.startTime = Date.now();
    },
    finishTyping: (state) => {
      state.endTime = Date.now();
    },
  },
});

export const { startTyping, finishTyping } = typingTestSlice.actions;
export const typingReducer =  typingTestSlice.reducer;

