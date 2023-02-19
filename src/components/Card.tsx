import { useGetMovieData } from "@/utility/useRequest";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

type Props = {
  movieId: number | undefined;
};

export const Card = ({ movieId }: Props) => {
  const { movieData, movieError } = useGetMovieData(movieId);

  if (movieError) {
    console.log("Could not load movie data");
  }

  if (movieError) {
    return (
      <div className="">
        <h2 className="">
          🤕 Sorry! We could not get the card for this movie. Please try another
          one.
        </h2>
      </div>
    );
  }

  if (!movieData) {
    return <></>;
  }

  return (
    <Tilt
      className="mx-0 mt-16 rounded-2xl md:mx-24 md:mt-0"
      scale={1.2}
      glareEnable
      glareMaxOpacity={0.2}
      glarePosition="all"
      glareBorderRadius="1rem"
    >
      <div className="flex flex-col rounded-2xl bg-neutral-900 p-4 shadow-[0px_0px_40px_20px_rgba(0,0,0,0.3)]">
        <div className="relative max-w-[467px]">
          <div className="mb-4 flex items-end justify-between">
            <h1 className="mr-4 rounded-br-3xl rounded-tr-lg border-2 bg-neutral-500 p-2 text-3xl">
              {movieData.genres[0].name.toUpperCase()}
            </h1>
            <div className="flex items-end">
              <p className="mr-1 text-2xl">HP</p>
              <p className="text-6xl">{movieData.runtime}</p>
            </div>
          </div>
          <Image
            src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
            alt="evil dead"
            width={467}
            height={700}
            className="border-2"
            draggable={"false"}
            priority
          />
          <div className="absolute bottom-0 left-0 flex w-full flex-col bg-white bg-opacity-20 p-4 text-center">
            <p>&quot;{movieData.tagline}&quot;</p>
            <div className="mt-4 flex justify-around tracking-widest text-white">
              <p className="mr-1 rounded-md bg-neutral-500 p-1">
                POWER: {Math.round(movieData.popularity)}
              </p>
              <p className="rounded-md bg-neutral-500 p-1">
                {movieData.release_date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};
