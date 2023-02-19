import Image from "next/image";

type Props = {};

export const Card = (props: Props) => {
  return (
    <div className="rounded-lg bg-neutral-900 p-4 pb-16 shadow-lg">
      {/* <div className="relative flex h-[525px] w-[350px] flex-col border-2"> */}
      <Image
        src="https://image.tmdb.org/t/p/original/1gDV0Lm9y8ufIKzyf0h0GBgb9Zj.jpg"
        alt="evil dead"
        width={350}
        height={525}
        className="border-2 object-cover"
      />
      {/* </div> */}
      <div className="flex w-[350px] border-2 bg-white bg-opacity-20 p-4 text-center">
        <h1>HORROR</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
          sunt aliquam modi id velit nihil? lorem50
        </p>
      </div>
    </div>
  );
};
