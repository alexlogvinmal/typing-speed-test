import { createSlice } from "@reduxjs/toolkit";


interface RootState {
  words: number;
}

const initialState: RootState = {
  words: 0,
};

export const setWordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    setWords: (state, action) => {
      state.words = action.payload;
    }
  }
})

export const { setWords } = setWordsSlice.actions
export const setWordsReducer = setWordsSlice.reducer