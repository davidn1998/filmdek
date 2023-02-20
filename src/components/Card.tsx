/* eslint-disable @next/next/no-img-element */
import { formatDate } from "@/utility/dateUtil";
import { useGetMovieData } from "@/utility/useRequest";
import Tilt from "react-parallax-tilt";

type Props = {
  movieId: number | undefined;
};

export const Card = ({ movieId }: Props) => {
  const { movieData, movieError } = useGetMovieData(movieId);

  if (movieError || (movieData && !movieData.poster_path)) {
    return (
      <h2 className="p-4 text-xl">
        🤕 Sorry! We could not get the card for this movie. Please try another
        one.
      </h2>
    );
  }

  if (!movieData) {
    return <></>;
  }

  return (
    <Tilt
      className="group relative mx-0 mt-16 rounded-2xl lg:mx-24 lg:mt-0"
      scale={1.2}
      glareEnable={false}
    >
      <div className="absolute left-0 right-0 top-0 bottom-0 z-50 overflow-hidden rounded-2xl">
        <div className="absolute top-0 left-0 h-full w-20 translate-x-[1000%] skew-x-[45deg] bg-opacity-50 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.5)] to-transparent duration-700 group-hover:-translate-x-[600%]"></div>
      </div>
      <div className="flex flex-col rounded-2xl bg-neutral-900 p-4 shadow-[0px_0px_40px_20px_rgba(0,0,0,0.3)]">
        <div className="relative">
          <div className="mb-4 flex items-end justify-between">
            {movieData.genres[0] && (
              <h1 className="mr-4 rounded-br-3xl rounded-tr-lg border-2 bg-neutral-500 p-2 text-3xl">
                {movieData.genres[0].name?.toUpperCase()}
              </h1>
            )}
            <div className="flex items-end">
              <p className="mr-1 text-2xl">RUNTIME</p>
              <p className="text-6xl">{movieData.runtime}</p>
            </div>
          </div>
          <img
            src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
            alt={movieData.title || "movie poster"}
            draggable={"false"}
            className="w-full border-2"
          />
          <div className="absolute bottom-0 left-0 flex w-full flex-col bg-white bg-opacity-20 p-4 text-center">
            <p>{movieData.tagline && '"' + movieData.tagline + '"'}</p>
            <div className="mt-4 flex justify-around tracking-widest text-white">
              {movieData.popularity && (
                <p className="mr-1 rounded-md bg-neutral-500 p-1">
                  SCORE: {Math.round(movieData.popularity)}
                </p>
              )}
              {movieData.release_date && (
                <p className="rounded-md bg-neutral-500 p-1">
                  {formatDate(movieData.release_date)}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};
