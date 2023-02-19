import { vt323 } from "@/fonts";
import { ReactNode } from "react";
import { Meta } from "./Meta";
import { NavBar } from "./Navbar";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className={`flex min-h-screen flex-col ${vt323.className} text-4xl`}>
      <Meta />
      <NavBar />
      <main className="container mx-auto mt-16 flex flex-1 flex-col px-8 lg:max-w-5xl">
        {children}
      </main>
    </div>
  );
};
