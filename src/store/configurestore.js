
import {devToolsEnhancer} from "redux-devtools-extension"
import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employee';
import taskReducer from './tasks'



const store = configureStore({reducer : {
    tasks : taskReducer,
    employees : employeeReducer
}});

export default store;