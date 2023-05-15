
import {devToolsEnhancer} from "redux-devtools-extension"
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import employeeReducer from './employee';
import taskReducer from './tasks'
import log from "../middlewares/log";
import error from "../middlewares/error";



const store = configureStore({reducer : {
    tasks : taskReducer,
    employees : employeeReducer
},
middleware :(getDefaultMiddleware=> [...getDefaultMiddleware(), error])

});

export default store;