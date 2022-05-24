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

//Get user leads
export const getLeads = createAsyncThunk(
  "leads/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await leadService.getLeads(token);
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

//Delete user lead
export const deleteLead = createAsyncThunk(
  "leads/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await leadService.deleteLead(id, token);
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
      })
      .addCase(getLeads.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLeads.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.leads = action.payload;
      })
      .addCase(getLeads.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteLead.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteLead.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.leads = state.leads.filter(
          (lead) => lead._id !== action.payload.id
        );
      })
      .addCase(deleteLead.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = leadSlice.actions;
export default leadSlice.reducer;
