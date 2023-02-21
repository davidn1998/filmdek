import { IMovie, ISearch } from "@/types";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useGetMovieData = (
  movieId: number | undefined
): { movieData: IMovie; movieError: any } => {
  const url = movieId
    ? `https://api.themoviedb.org/3/movie/${movieId}?api_key=171dbbdf31276d0a3c4a41f542b9717c`
    : "";

  const { data: movieData, error: movieError } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
  });

  return { movieData, movieError };
};

export const useGetMovieSearch = (
  searchQuery: string | undefined,
  pageNum: number,
  year?: number | undefined
): { searchData: ISearch; searchError: any } => {
  const url = searchQuery
    ? `https://api.themoviedb.org/3/search/movie?api_key=171dbbdf31276d0a3c4a41f542b9717c&query=${searchQuery}&page=${pageNum}&include_adult=false${
        year ? "&year=" + year : ""
      }`
    : null;

  const { data: searchData, error: searchError } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
  });

  return { searchData, searchError };
};
