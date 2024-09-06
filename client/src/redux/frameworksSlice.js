import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api";

export const fetchFrameworks = createAsyncThunk(
  "frameworks/fetchFrameworks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/frameworks");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const frameworksSlice = createSlice({
  name: "frameworks",
  initialState: {
    frameworks: [],
    status: "idle",
    error: null,
  },
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
        state.error = action.payload;
      });
  },
});

export default frameworksSlice.reducer;
