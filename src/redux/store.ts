import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { typingReducer } from "./reducer/typingTestSlice";

const rootReducer = combineReducers({
    typingReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']