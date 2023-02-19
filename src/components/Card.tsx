import Image from "next/image";
import Tilt from "react-parallax-tilt";

type Props = {};

export const Card = (props: Props) => {
  return (
    <Tilt
      className="z-20 mt-16 rounded-2xl"
      scale={1.2}
      glareEnable
      glareMaxOpacity={0.2}
      glarePosition="all"
      glareBorderRadius="1rem"
    >
      <div className="z-20 flex flex-col rounded-2xl bg-neutral-900 p-4 shadow-[0px_0px_40px_20px_rgba(0,0,0,0.3)]">
        <div className="relative max-w-[467px]">
          <div className="mb-4 flex items-end justify-between">
            <h1 className="mr-4 rounded-br-3xl rounded-tr-lg border-2 bg-neutral-500 p-2 text-3xl">
              HORROR
            </h1>
            <div className="flex items-end">
              <p className="mr-1 text-2xl">HP</p>
              <p className="text-6xl">96</p>
            </div>
          </div>
          <Image
            src="https://image.tmdb.org/t/p/original/1gDV0Lm9y8ufIKzyf0h0GBgb9Zj.jpg"
            alt="evil dead"
            width={467}
            height={700}
            className="border-2"
            draggable={"false"}
          />
          <div className="absolute bottom-0 left-0 flex w-full flex-col bg-white bg-opacity-20 p-4 text-center">
            <p>
              &quot;The Most Terrifying Film You Will Ever Experience.&quot;
            </p>
            <div className="mt-4 flex justify-around tracking-widest text-white">
              <p className="mr-1 rounded-md bg-neutral-500 p-1">POWER: 61</p>
              <p className="rounded-md bg-neutral-500 p-1">APRIL 04 2013</p>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};
