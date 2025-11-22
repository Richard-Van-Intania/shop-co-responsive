export { v4 as uuidv4 } from "uuid";

export interface ItemData {
  source: string;
  label: string;
  rating: number;
  price: number;
  discounted: number | null;
}
