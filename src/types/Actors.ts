export interface RootActors {
  status: string;
  currentPage: number;
  pageSize: number;
  totalItem: number;
  data: DaumActors[];
}

export interface DaumActors {
  id: number;
  name: string;
}
