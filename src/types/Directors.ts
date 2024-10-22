export interface RootDirectors {
  status: string;
  currentPage: number;
  pageSize: number;
  totalItem: number;
  data: DaumDirectors[];
}

export interface DaumDirectors {
  id: number;
  name: string;
}
