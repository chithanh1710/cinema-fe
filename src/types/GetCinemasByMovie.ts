export interface RootGetCinemasByMovie {
  status: string;
  data: DaumGetCinemasByMovie[];
}

export interface DaumGetCinemasByMovie {
  id: number;
  name: string;
  city: string;
}
