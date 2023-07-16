import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { CategoryService } from "../../services";
import { ICountry, INewCountry } from "../../interfaces";

export class CategoryOperations {
  static getCountries = createAsyncThunk(
    "category/getCountries",
    async (_, { rejectWithValue }) => {
      try {
        const { data } = await CategoryService.getCountry();
        return data;
      } catch (error) {
        const err = error as AxiosError;
        return rejectWithValue(
          err.message || "An error occurred with the network"
        );
      }
    }
  );

  static addCountry = createAsyncThunk(
    "category/addCountry",
    async (country: INewCountry, { rejectWithValue }) => {
      try {
        const { data } = await CategoryService.addCountry(country);
        return data;
      } catch (error) {
        const err = error as AxiosError;
        return rejectWithValue(
          err.message || "An error occurred with the network"
        );
      }
    }
  );

  static updateCountry = createAsyncThunk(
    "category/updateCountry",
    async (
      {
        countryId,
        updatedCountry,
      }: { countryId: any; updatedCountry: INewCountry },
      { rejectWithValue }
    ) => {
      try {
        const { data } = await CategoryService.updateCountry({
          countryId,
          updatedCountry,
        });
        return data;
      } catch (error) {
        const err = error as AxiosError;
        return rejectWithValue(
          err.message || "An error occurred with the network"
        );
      }
    }
  );

  static deleteCountry = createAsyncThunk(
    "category/deleteCountry",
    async (countryId: string, { rejectWithValue }) => {
      try {
        const { data } = await CategoryService.deleteCountry(countryId);
        return data;
      } catch (error) {
        const err = error as AxiosError;
        return rejectWithValue(
          err.message || "An error occurred with the network"
        );
      }
    }
  );
}