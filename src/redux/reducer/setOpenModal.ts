import { createSlice } from "@reduxjs/toolkit";


interface RootState {
    openModal: boolean;
}

const initialState: RootState = {
    openModal: false,
};

export const setOpenModalSlice = createSlice({
  name: 'openModal',
  initialState,
  reducers: {
    setOpenModal: (state, action) => {
      state.openModal = action.payload;
    }
  }
})

export const { setOpenModal } = setOpenModalSlice.actions
export const setOpenModalReducer = setOpenModalSlice.reducer