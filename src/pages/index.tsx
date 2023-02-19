import { Card } from "@/components/Card";
import { FilmSearch } from "@/components/FilmSearch";
import { useState } from "react";

type Props = {};

const Index = (props: Props) => {
  const [movieId, setMovieId] = useState<number>();

  return (
    <div className="z-20 mt-16 flex flex-col-reverse justify-center md:flex-row">
      <FilmSearch setMovieId={setMovieId} />
      <Card movieId={movieId} />
    </div>
  );
};

export default Index;
