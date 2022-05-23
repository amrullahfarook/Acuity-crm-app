import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import leadService from "./leadService";

const initialState = {
  leads: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

//Create new lead
export const createLead = createAsyncThunk(
  "leads/create",
  async (leadData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await leadService.createLead(leadData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const leadSlice = createSlice({
  name: "lead",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createLead.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createLead.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.leads.push(action.payload);
      })
      .addCase(createLead.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = leadSlice.actions;
export default leadSlice.reducer;
