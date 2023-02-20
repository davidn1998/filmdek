import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MenuToggle } from "./MenuToggle";
import { NavLink } from "./NavLink";

type Props = {
  setContentHidden: (hide: boolean) => void;
};

type NavLink = {
  label: string;
  path: string;
};

const menu = {
  open: {
    scaleY: 1,
    transition: {
      duration: 0.25,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};

const menuBar = {
  open: {
    backgroundColor: "rgba(0,0,0,0.6)",
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  closed: {
    backgroundColor: "rgba(0,0,0,0)",
    transition: {
      duration: 0.1,
      ease: "easeInOut",
    },
  },
};

const navList = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const NavBar = ({ setContentHidden }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const navLinks: NavLink[] = [
    { label: "HOME", path: "/" },
    { label: "COLLECTION", path: "/collection" },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
    setContentHidden(false);
  }, [router.asPath, setContentHidden]);

  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
    setContentHidden(!isMenuOpen);
  };

  return (
    <nav className="z-50 m-8 flex h-12 items-center justify-between text-2xl">
      <div id="mobile-menu" className="w-full md:hidden">
        <motion.div
          animate={isMenuOpen ? "open" : "closed"}
          variants={menuBar}
          className="relative z-10 flex items-center justify-between bg-opacity-60 p-2"
        >
          <MenuToggle toggle={toggleMenuOpen} />
          <Image
            src="/logo.png"
            alt="logo"
            width={250}
            height={25}
            className="ml-4"
          />
        </motion.div>
        <motion.div
          initial={false}
          animate={isMenuOpen ? "open" : "closed"}
          variants={menu}
          className="absolute left-0 top-0 bottom-0 right-0 z-0 flex items-center justify-center bg-[url('/staticbg.jpeg')]"
        >
          <motion.ul
            variants={navList}
            className="flex list-none flex-col items-center justify-center bg-black bg-opacity-60 p-4 text-white"
          >
            {navLinks.map((navLink, i) => (
              <NavLink key={i} label={navLink.label} path={navLink.path} />
            ))}
          </motion.ul>
        </motion.div>
      </div>
      <div className="hidden w-full justify-between md:flex">
        <ul className="flex list-none items-center justify-center">
          {navLinks.map((navLink, i) => (
            <NavLink key={i} label={navLink.label} path={navLink.path} />
          ))}
        </ul>
        <Image src="/logo.png" alt="logo" width={250} height={25} />
      </div>
    </nav>
  );
};
