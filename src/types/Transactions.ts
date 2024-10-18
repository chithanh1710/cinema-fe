export interface RootTransactions {
  status: string;
  data: DaumTransactions[];
}

export interface DaumTransactions {
  id: number;
  total_amount: number;
  time_transaction: string;
  customer: Customer;
  ticket: Ticket;
  foods_drinks: FoodsDrink[];
  movie: Movie;
  cinema: Cinema;
  sreenroom: Sreenroom;
  showtime: Showtime;
}

export interface Customer {
  id: number;
  name: string;
}

export interface Ticket {
  id: number;
  genre_seats: string;
  number_of_column: number;
  number_of_row: string;
}

export interface FoodsDrink {
  quantity: number;
  name: string;
}

export interface Movie {
  name: string;
  thumbnail: string;
  old: number;
  star: number;
}

export interface Cinema {
  name: string;
}

export interface Sreenroom {
  name: string;
}

export interface Showtime {
  time_start: string;
}
