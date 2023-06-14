import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { setCharsReducer } from "./reducer/setChars";
import { setWordsReducer } from './reducer/setWords';
import { setAccuracyReducer } from './reducer/setAccuracy';
import { setIsRunningReducer } from './reducer/setIsRunning';
import { setOpenModalReducer } from './reducer/setOpenModal';
import { setUpdateReducer } from './reducer/setUpdate';
import { fetchReducer } from './fetchData/action';

const rootReducer = combineReducers({
    setCharsReducer, setWordsReducer, setAccuracyReducer, setIsRunningReducer, setOpenModalReducer, setUpdateReducer, fetchReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']