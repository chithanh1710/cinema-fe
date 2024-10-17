export interface RootFoodDrink {
  status: string;
  totalItem: number;
  data: FoodDrink[];
}

export interface FoodDrink {
  id: number;
  name: string;
  price: number;
  category: string;
  image_url: string;
  stock_quantity: number;
}
