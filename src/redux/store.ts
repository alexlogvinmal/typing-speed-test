import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { setCharsReducer } from "./reducer/setChars";
import { setWordsReducer } from './reducer/setWords';
import { setAccuracyReducer } from './reducer/setAccuracy';
import { setIsRunningReducer } from './reducer/setIsRunning';

const rootReducer = combineReducers({
    setCharsReducer, setWordsReducer, setAccuracyReducer, setIsRunningReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']