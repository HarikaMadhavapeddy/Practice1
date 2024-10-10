import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: "",
};
export const FetchData = createAsyncThunk("fetchData", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
});
const SearchSlice = createSlice({
  name: "Search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(FetchData.pending, (state) => {
      state.loading = true;
    })
    .addCase(FetchData.fulfilled,(state,action)=>{
        state.loading=false;
        state.data=action.payload;
    })
    .addCase(FetchData.rejected,(state,action)=>{
        state.error=action.payload;
    })

  },
});
export default SearchSlice.reducer;

