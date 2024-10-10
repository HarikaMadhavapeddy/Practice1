import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice";
import { createLogger } from "redux-logger"; 
import SearchSlice from "./SearchSlice";

const logger=createLogger();
export const Store=configureStore({
    reducer:{
        TodoList : TodoSlice,
        Search:SearchSlice,
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),
    
});
//https://jsonplaceholder.typicode.com/posts