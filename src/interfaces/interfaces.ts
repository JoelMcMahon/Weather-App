export type city = {
  name: string;
  forecast: any[];
};

export interface ICity {
  cities: city[];
  setCities: React.Dispatch<React.SetStateAction<city[]>>;
}
