export interface IQueryCityParams {
  page?: number;
  limit?: number;
  countries?: string;
  cities?: string;
  showOnHomePage?: boolean;
  showInCityHome?: boolean;
  isHidden?: boolean;
}

export interface IQueryEventParams {
  page?: number;
  limit?: number;
  showOnHomePage?: boolean;
}

export interface ISearchEventParams {
  query?: string;
  dateStart?: string;
  dateEnd?: string;
  seatsMin: number;
  seatsMax: number;
  priceMin: number;
  priceMax: number;
  categories?: string | any;
  hasFreePlaces?: boolean;
}

export interface ICityDataResponse {
  cities: ICityItem[];
  totalCities: number;
  searchParams: any;
}

export interface IEventDataResponse {
  events: IEventItemResponse[];
  totalEvents: number;
  searchParams: any;
  cityId?: string;
}

export interface ISigninProps {
  email: string;
  password: string;
}

export interface IAuthDataResponse {
  accessToken: string;
}

export interface ICategoryItem {
  label: string;
  color: string;
}

export interface ICity {
  id: string;
  label: string;
  country: string;
  population: number;
}

export interface ICountry {
  _id: string;
  code: string;
  label: string;
  phone: string;
  cities: ICity[];
}

export interface INewCountry {
  code: string;
  label: string;
  phone: string;
  cities: ICity[];
}

export interface ISpeaker {
  id: string;
  firstname: string;
  lastname: string;
  age: number;
  about: string;
  email: string;
  topic: string;
  telephone: string;
}

export interface IEventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  seats: number;
  price: number;
  language: string;
  minAge: number;
  imagePath: string;
  categories: ICategoryItem[];
  speakers: ISpeaker[];
  showOnHomePage: boolean;
  showInCityHome: boolean;
  isHidden: boolean;
}

export interface IEventItemResponse extends IEventItem {
  country: ICountry;
  city: ICity;
}

export interface ICityItem {
  _id: string;
  country: ICountry;
  city: ICity;
  description: string;
  imagePath: string;
  totalEvents: number;
  showOnHomePage: boolean;
  isHidden: boolean;
  events: IEventItem[];
}