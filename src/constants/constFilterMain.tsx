import { FilterMainLinkProps, FilterMainProps } from "@/types/FilterMainProps";

export const filterLinkMovie: FilterMainLinkProps = {
  title: "Phim",
  filterList: [
    {
      name: "Đang chiếu",
      value: "/movie-showing",
    },
    {
      name: "Sắp chiếu",
      value: "/movie-upcoming",
    },
  ],
};

export const filterMovie: FilterMainProps = {
  nameQuery: "type-movie",
  title: "Phim",
  filterList: [
    {
      name: "Đang chiếu",
      value: "showing",
    },
    {
      name: "Sắp chiếu",
      value: "upcoming",
    },
  ],
};

export const filterBlogs: FilterMainProps = {
  nameQuery: "type-blog",
  title: "Góc điện ảnh",
  filterList: [
    {
      name: "Bình luận phim",
      value: "comment-movie",
    },
    {
      name: "Blog điện ảnh",
      value: "blog-movie",
    },
  ],
};
