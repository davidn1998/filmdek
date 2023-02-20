import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface Props {
  label: string;
  path: string;
}

export const NavLink = ({ label, path }: Props) => {
  const router = useRouter();

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      className="mx-4 mb-8 flex justify-center text-3xl tracking-widest transition-all hover:cursor-pointer md:mb-0"
    >
      <Link href={path} scroll={false} className="group relative">
        <div
          id="glitchBefore"
          className={`${
            router.asPath === path ? "block" : "hidden"
          } absolute top-[45%] left-[45%] -z-10 -translate-x-1/2 -translate-y-1/2 text-glitchCol1 opacity-60 group-hover:block`}
        >
          {label}
        </div>
        {label}
        <div
          id="glitchAfter"
          className={`${
            router.asPath === path ? "block" : "hidden"
          } absolute top-[55%] left-[55%] -z-10 -translate-x-1/2 -translate-y-1/2 text-glitchCol2 opacity-60 group-hover:block`}
        >
          {label}
        </div>
      </Link>
    </motion.li>
  );
};
