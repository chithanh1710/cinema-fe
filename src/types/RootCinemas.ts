export interface RootCinema {
  status: string;
  currentPage: number;
  pageSize: number;
  totalItem: number;
  totalPage: number;
  data: Cinema[];
}

export interface Cinema {
  id: number;
  name: string;
  address: string;
  city: string;
  amount_rooms: number;
  sreenRooms: SreenRoom[];
}

export interface SreenRoom {
  id: number;
  name: string;
  amount_seats: number;
}
