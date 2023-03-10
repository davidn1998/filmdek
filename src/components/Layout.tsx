import { vt323 } from "@/fonts";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import { Meta } from "./Meta";
import { NavBar } from "./Navbar";
import TimeStamp from "./TimeStamp";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  const [contentHidden, setContentHidden] = useState(false);
  const { asPath } = useRouter();
  const transitionVariants = {
    out: {
      scaleY: 0,
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
    in: {
      scaleY: 1,
      transition: {
        duration: 0.75,
      },
    },
  };

  return (
    <div
      className={`flex min-h-screen flex-col ${vt323.className} border-black bg-black text-white md:border-[32px]`}
    >
      <AnimatePresence mode="wait" initial={true}>
        <motion.div
          key={asPath}
          variants={transitionVariants}
          initial="out"
          animate="in"
          exit="out"
          className="relative flex h-full flex-1 flex-col overflow-hidden bg-primary md:rounded-2xl"
        >
          <div className="absolute h-full w-full overflow-hidden">
            <motion.div
              animate={{ translateY: "2500px" }}
              transition={{
                from: "-100px",
                delay: 10,
                repeatDelay: 10,
                repeat: Infinity,
                duration: 2,
                type: "tween",
              }}
              className="h-20 w-full bg-neutral-200 opacity-50"
            ></motion.div>
          </div>
          <Meta />
          <NavBar setContentHidden={setContentHidden} />
          <main
            className={`${
              contentHidden ? "hidden" : "flex"
            } container mx-auto flex-1 flex-col px-8 lg:max-w-5xl`}
          >
            {children}
          </main>
          <div
            className={`${
              contentHidden ? "hidden" : "flex"
            } text-md items-end justify-between md:text-xl`}
          >
            <p className="m-8 tracking-widest">David Nwachukwu &copy; 2023</p>
            <TimeStamp />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
