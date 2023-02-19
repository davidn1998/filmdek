import { NavLink } from "./NavLink";
import { ThemeToggler } from "./ThemeToggler";

type NavLink = {
  label: string;
  path: string;
};

export const NavBar = ({}) => {
  const navLinks: NavLink[] = [
    { label: "HOME", path: "/" },
    { label: "COLLECTION", path: "/collection" },
  ];

  return (
    <nav className="mb-16 flex h-12 items-center justify-between p-2.5 pt-8">
      <ul className="flex list-none items-center justify-center">
        {navLinks.map((navLink, i) => (
          <NavLink key={i} label={navLink.label} path={navLink.path} />
        ))}
      </ul>
      <ThemeToggler />
    </nav>
  );
};
