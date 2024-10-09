import {createSlice} from '@reduxjs/toolkit';
const InitialState={
    items:[],
};
const Todo=createSlice({
    name :'TodoUpdate',
    initialState: InitialState,
    reducers:{
        AddItem:(state,action)=>{
            console.log(action.payload);
            state.items.push(action.payload);
        },
        DeleteItem:(state,action)=>{
            state.items=state.items.filter(item=>item.id!==action.payload);
        },
    },

});
export default Todo.reducer;
export const {AddItem, DeleteItem }=Todo.actions;