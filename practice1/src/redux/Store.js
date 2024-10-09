import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice";
import { createLogger } from "redux-logger"; 

const logger=createLogger();
export const Store=configureStore({
    reducer:{
        TodoList : TodoSlice,
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),
    
});
//https://jsonplaceholder.typicode.com/posts