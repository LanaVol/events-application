import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryOperations } from "./category.operations";
import { ICountry } from "../../interfaces";

export interface ICategoryState {
  country: { data: ICountry[]; isLoading: boolean; error: string | null };
}
const initialState: ICategoryState = {
  country: {
    data: [],
    isLoading: false,
    error: null,
  },
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(CategoryOperations.getCountries.pending, (state) => {
      state.country.isLoading = true;
      state.country.error = null;
    });
    builder.addCase(
      CategoryOperations.getCountries.fulfilled,
      (state, action) => {
        state.country.data = action.payload;
        state.country.isLoading = false;
        state.country.error = null;
      }
    );
    builder.addCase(
      CategoryOperations.getCountries.rejected,
      (state, action: PayloadAction<any>) => {
        state.country.error = action.payload;
        state.country.isLoading = false;
      }
    );
    builder.addCase(CategoryOperations.addCountry.pending, (state) => {
      state.country.isLoading = true;
      state.country.error = null;
    });
    builder.addCase(
      CategoryOperations.addCountry.fulfilled,
      (state, action) => {
        state.country.data = action.payload;
        state.country.isLoading = false;
        state.country.error = null;
      }
    );
    builder.addCase(
      CategoryOperations.addCountry.rejected,
      (state, action: PayloadAction<any>) => {
        state.country.error = action.payload;
        state.country.isLoading = false;
      }
    );
    builder.addCase(CategoryOperations.updateCountry.pending, (state) => {
      state.country.isLoading = true;
      state.country.error = null;
    });
    builder.addCase(
      CategoryOperations.updateCountry.fulfilled,
      (state, action) => {
        state.country.data = action.payload;
        state.country.isLoading = false;
        state.country.error = null;
      }
    );
    builder.addCase(
      CategoryOperations.updateCountry.rejected,
      (state, action: PayloadAction<any>) => {
        state.country.error = action.payload;
        state.country.isLoading = false;
      }
    );
    builder.addCase(CategoryOperations.deleteCountry.pending, (state) => {
      state.country.isLoading = true;
      state.country.error = null;
    });
    builder.addCase(
      CategoryOperations.deleteCountry.fulfilled,
      (state, action) => {
        state.country.data = action.payload;
        state.country.isLoading = false;
        state.country.error = null;
      }
    );
    builder.addCase(
      CategoryOperations.deleteCountry.rejected,
      (state, action: PayloadAction<any>) => {
        state.country.error = action.payload;
        state.country.isLoading = false;
      }
    );
  },
});

export default categorySlice.reducer;