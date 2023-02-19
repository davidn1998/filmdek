import { NavLink } from "./NavLink";

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
    <nav className="m-8 flex h-12 items-center justify-between text-2xl">
      <ul className="flex list-none items-center justify-center">
        {navLinks.map((navLink, i) => (
          <NavLink key={i} label={navLink.label} path={navLink.path} />
        ))}
      </ul>
      <h1>FILMDEK</h1>
    </nav>
  );
};
