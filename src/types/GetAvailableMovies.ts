export interface RootGetAvailableMovies {
  status: string;
  data: DaumGetAvailableMovies[];
}

export interface DaumGetAvailableMovies {
  id: number;
  name: string;
  type: string;
}
