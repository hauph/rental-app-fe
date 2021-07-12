type item = {
  property_id: string;
  name: string;
  state: string;
  city: string;
  area: string;
  code: number;
  description: string;
  property_type: string;
  prices: Array<number>;
  property_status: string;
  property_size: number | null;
  images: Array<string>;
  features: Array<string>;
  bathroom: number | null;
  bedroom: number | null;
  created_at: string;
  updated_at: string;
};

export type items = Array<item>;
