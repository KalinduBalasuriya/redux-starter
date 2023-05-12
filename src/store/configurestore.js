
import { configureStore } from '@reduxjs/toolkit';
import {devToolsEnhancer} from "redux-devtools-extension"
import reducer from './tasks';
import { createReducer } from '@reduxjs/toolkit';

const store = configureStore({reducer});

export default store