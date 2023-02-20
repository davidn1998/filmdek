import { Card } from "@/components/Card";
import { FilmSearch } from "@/components/FilmSearch";
import { useState } from "react";

const Index = () => {
  const [movieId, setMovieId] = useState<number>();

  return (
    <div className="z-20 mt-16 flex w-full flex-col items-center justify-center lg:flex-row lg:items-start">
      <FilmSearch setMovieId={setMovieId} />
      <Card movieId={movieId} />
    </div>
  );
};

export default Index;
