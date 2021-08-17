type item = {
  id: string;
  title: string;
  state: string;
  city: string;
  area: string;
  zipcode: string | number;
  description: string;
  type: string;
  price: number;
  status: string;
  property_size: number | null;
  images: Array<string>;
  post_feature: Array<string>;
  bathrooms: number | null;
  bedrooms: number | null;
  created_at: string;
  updated_at: string;
  phone: string;
};

export type items = Array<item>;
