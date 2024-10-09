export interface FilterMainProps {
  nameQuery: string;
  title: string;
  filterList: {
    name: string;
    value: string;
  }[];
}

export interface FilterMainLinkProps {
  title: string;
  filterList: {
    name: string;
    value: string;
  }[];
}
