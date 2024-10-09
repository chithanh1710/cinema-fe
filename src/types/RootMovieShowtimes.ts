export interface RootMovieShowtimes {
  status: string;
  data: MovieShowtimes[];
}

export interface MovieShowtimes {
  cinema_name: string;
  city_name: string;
  screen_rooms: ScreenRoom[];
}

export interface ScreenRoom {
  screen_room_name: string;
  show_dates: ShowDate[];
}

export interface ShowDate {
  show_time_date: string;
  show_times: ShowTime[];
}

export interface ShowTime {
  show_time_start: string;
  show_time_end: string;
}
