import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { setCharsReducer } from "./reducer/setChars";
import { setWordsReducer } from './reducer/setWords';
import { setAccuracyReducer } from './reducer/setAccuracy';
import { setIsRunningReducer } from './reducer/setIsRunning';
import { setOpenModalReducer } from './reducer/setOpenModal';

const rootReducer = combineReducers({
    setCharsReducer, setWordsReducer, setAccuracyReducer, setIsRunningReducer, setOpenModalReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']