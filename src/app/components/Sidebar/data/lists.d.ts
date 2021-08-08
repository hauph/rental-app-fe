type item = {
  from: number;
  to: number;
  label: string;
};

type price = Array<item>;

type size = Array<item>;

export type priceSize = {
  price;
  size;
};
