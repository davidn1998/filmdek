import { ISearchRes } from "@/types";
import { formatDate } from "@/util/dateUtil";
import { useGetMovieSearch } from "@/util/useRequest";
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
    <div className="mt-8 flex w-full flex-shrink-0 flex-col lg:mt-0 lg:w-[350px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex text-xl text-white"
      >
        <input
          {...register("movieName")}
          type="text"
          placeholder="Enter Movie Name"
          className="flex w-full border-2 bg-neutral-900 p-2"
        />
        <button className=" w-full border-2 bg-purple-500 p-2 transition-all duration-300 hover:bg-purple-700">
          Search
        </button>
      </form>
      <ul className="h-48 overflow-auto border-2">
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
            <div className="flex">
              <h4 className="mr-1 text-neutral-400">Selected Movie: </h4>
              <p>{selectedMovie.title}</p>
            </div>
            <div className="flex">
              <h4 className="mr-1 text-neutral-400">Release Date: </h4>
              <p>
                {selectedMovie?.release_date
                  ? formatDate(selectedMovie.release_date)
                  : ""}
              </p>
            </div>
            <div className="flex flex-col">
              <h4 className="mr-1 text-neutral-400">Overview: </h4>
              <p className="max-h-52 overflow-auto">
                {selectedMovie?.overview}
              </p>
            </div>
            <button
              onClick={() => setMovieId(selectedMovie.id)}
              className="my-4 w-1/2 border-2 bg-purple-500 p-2 transition-all duration-300 hover:bg-purple-700"
            >
              View Card
            </button>
            <p className="font-bold">Hover over card to inspect</p>
          </div>
        )}
      </div>
    </div>
  );
};
