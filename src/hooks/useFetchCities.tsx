import { useState, useEffect } from "react";
import { EventService } from "../services";
import { ICityItem, IQueryParams } from "../interfaces";

interface ICitiesData {
  cities: ICityItem[];
  totalCities: number;
}

interface IUseFetchCitiesProps {
  params: IQueryParams;
  loadMore?: boolean;
}

export type TypeFetchCitiesResult = [
  ICitiesData | null,
  boolean,
  string | null,
  (props: IUseFetchCitiesProps) => Promise<void>
];

export const useFetchCities = ({
  params,
  loadMore = false,
}: IUseFetchCitiesProps): TypeFetchCitiesResult => {
  const [data, setData] = useState<ICitiesData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async ({ params, loadMore }: IUseFetchCitiesProps) => {
    setIsLoading(true);
    try {
      const response = await EventService.getCities(params);

      if (loadMore && data) {
        setData({
          cities: [...data.cities, ...response.data.cities],
          totalCities: response.data.totalCities,
        });
      } else {
        setData({
          cities: response.data.cities,
          totalCities: response.data.totalCities,
        });
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData({ params, loadMore });
  }, []);

  return [data, isLoading, error, fetchData];
};
