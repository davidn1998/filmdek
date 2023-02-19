import { vt323 } from "@/fonts";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { Meta } from "./Meta";
import { NavBar } from "./Navbar";
import TimeStamp from "./TimeStamp";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
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
              animate={{ translateY: "2000px" }}
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
          <NavBar />
          <main className="container mx-auto flex flex-1 flex-col px-8 lg:max-w-5xl">
            {children}
          </main>
          <TimeStamp />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
