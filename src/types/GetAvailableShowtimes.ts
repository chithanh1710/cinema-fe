export interface RootGetAvailableShowtimes {
  status: string;
  data: DaumGetAvailableShowtimes[];
}

export interface DaumGetAvailableShowtimes {
  id: number;
  time_start: string;
  time_end: string;
}
