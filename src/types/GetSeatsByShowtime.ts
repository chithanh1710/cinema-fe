export type RootGetSeatsByShowtime = Seat[];

export interface Seat {
  id_seat: number;
  reservedBy: number;
  number_of_column: number;
  number_of_row: string;
  genre_seats: string;
  status: string;
}
