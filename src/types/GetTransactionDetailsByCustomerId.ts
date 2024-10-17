export interface RootGetTransactionDetailsByCustomerId {
  status: string;
  data: DaumGetTransactionDetailsByCustomerId[];
}

export interface DaumGetTransactionDetailsByCustomerId {
  TransactionId: number;
  TicketId: number;
  CustomerName: string;
  ShowTimeId: number;
  SeatId: number;
  SeatPrice: number;
  GenreSeat: string;
  FoodDrinkQuantity: number;
  FoodDrinkPrice: number;
  FoodDrinkName: string;
  TimeTransaction: any;
}
