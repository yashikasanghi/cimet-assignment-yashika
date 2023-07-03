import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  productsLoading: true,
  productsError: {},
};

const base_url = "http://localhost:3000";

export const fetchData = createAsyncThunk("/fetchData/get", async () => {
  const result = await axios.get(`${base_url}`);
  return result.data.data;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.productsLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.productList = action.payload;
        state.productsLoading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.productsError = action.error.message;
        state.productsLoading = false;
      });
  },
});

export default productSlice.reducer;
