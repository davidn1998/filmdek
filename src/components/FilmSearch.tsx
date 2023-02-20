import { ISearchRes } from "@/types";
import { useGetMovieSearch } from "@/utility/useRequest";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";

interface SearchData {
  movieName: string;
}

type Props = {
  setMovieId: Dispatch<SetStateAction<number | undefined>>;
};

export const FilmSearch = ({ setMovieId }: Props) => {
  const { register, handleSubmit } = useForm<SearchData>();
  const [searchQuery, setSearchQuery] = useState<string>();
  const [selectedMovie, setSelectedMovie] = useState<ISearchRes>();

  const { searchData, searchError } = useGetMovieSearch(searchQuery, 1);

  if (searchError) {
    console.log("Could not load movie data");
  }

  const onSubmit = (data: SearchData) => {
    setSearchQuery(data.movieName);
  };

  return (
    <div className="mt-8 flex flex-col md:mt-0 md:w-1/3">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex text-xl text-white"
      >
        <input
          {...register("movieName")}
          type="text"
          placeholder="Enter Movie Name"
          className="flex border-2 bg-neutral-900 p-2"
        />
        <button className="w-full border-2 bg-purple-500 p-2 transition-all duration-300 hover:bg-purple-700">
          Search
        </button>
      </form>
      <ul className="h-48 overflow-scroll border-2">
        {searchData?.results?.map((movie, i) => (
          <li
            key={i}
            onClick={(e) => setSelectedMovie(movie)}
            className="cursor-pointer p-2 hover:bg-purple-500"
          >
            {movie.title}
          </li>
        ))}
      </ul>
      <div className="mt-8 text-xl">
        {!selectedMovie && (
          <p>Please search for a movie and select it from the list above.</p>
        )}
        {selectedMovie && (
          <div>
            <h1>
              <span className="text-neutral-400">Selected Movie: </span>{" "}
              {selectedMovie.title}
            </h1>
            <h3>
              <span className="text-neutral-400">Release Date: </span>{" "}
              {selectedMovie?.release_date}
            </h3>
            <p>
              <span className="text-neutral-400">Overview: </span>
              {selectedMovie?.overview}
            </p>
            <button
              onClick={() => setMovieId(selectedMovie.id)}
              className="mt-4 w-1/2 border-2 bg-purple-500 p-2 transition-all duration-300 hover:bg-purple-700"
            >
              View Card
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
