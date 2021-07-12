interface City {
  value: string;
  label: string;
}

type CityList = Array<City>;

interface State {
  [key: string]: CityList;
}

export const mockData: State;
