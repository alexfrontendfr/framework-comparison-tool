import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  frameworks: [],
  status: "idle",
  error: null,
};

export const fetchFrameworks = createAsyncThunk(
  "frameworks/fetchFrameworks",
  async () => {
    const response = await axios.get("http://localhost:5000/api/frameworks");
    return response.data;
  }
);

const frameworksSlice = createSlice({
  name: "frameworks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFrameworks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFrameworks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.frameworks = action.payload;
      })
      .addCase(fetchFrameworks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default frameworksSlice.reducer;
