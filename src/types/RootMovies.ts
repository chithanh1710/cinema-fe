export interface Genre {
  id: number;
  name: string;
}

export interface Director {
  id: number;
  name: string;
}

export interface RootMovies {
  status: string;
  currentPage: number;
  pageSize: number;
  totalItem: number;
  totalPage: number;
  data: Movie[];
}

export interface Movie {
  id: number;
  name: string;
  star: number;
  old: number;
  type: string;
  genres: string[];
  actors: string[];
  show_times: ShowTime[];
  duration: string;
  trailer: string;
  thumbnail: string;
  description: string;
  director: Director;
  image: string;
  release_date: string;
}

export interface RootMovieDetails {
  status: string;
  data: MovieDetails[];
}

export interface MovieDetails {
  id: number;
  name: string;
  star: number;
  old: number;
  duration: string;
  type: string;
  trailer: string;
  thumbnail: string;
  genres: Genre[];
  description: string;
  director: Director;
  actors: any[];
  image: string;
  show_times: any[];
  release_date: string;
}

export interface ShowTime {
  time_start: string;
  cinemaName: string;
}
