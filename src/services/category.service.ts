import API from "../config/axios.api.js";
import { AxiosResponse } from "axios";
import { ICountry, INewCountry } from "../interfaces/index.js";

export class CategoryService {
  static async getCountry(): Promise<AxiosResponse> {
    return API.get("/categories/country");
  }

  static async addCountry(country: INewCountry): Promise<AxiosResponse> {
    return API.post("/categories/country", country);
  }

  static async updateCountry({
    countryId,
    updatedCountry,
  }: {
    countryId: string;
    updatedCountry: INewCountry;
  }): Promise<AxiosResponse> {
    return API.patch(`/categories/country/${countryId}`, updatedCountry);
  }
  static async deleteCountry(countryId: string): Promise<AxiosResponse> {
    return API.delete(`/categories/country/${countryId}`);
  }
}