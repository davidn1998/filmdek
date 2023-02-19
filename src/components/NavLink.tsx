import { cva, VariantProps } from "cva";
import Link from "next/link";
import { useRouter } from "next/router";

const linkDecoration = cva(
  "absolute top-10 left-0 h-[2px] w-full bg-white transition-all duration-300 ease-in-out content-[''] group-hover:scale-x-100",
  {
    variants: {
      active: {
        true: "scale-x-1",
        false: "scale-x-0",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

interface Props extends VariantProps<typeof linkDecoration> {
  label: string;
  path: string;
}

export const NavLink = ({ label, path }: Props) => {
  const router = useRouter();

  return (
    <li className="mx-4 flex flex-1 justify-center transition-all hover:cursor-pointer">
      <Link href={path} scroll={false} className="group relative">
        {label}
        <span
          className={linkDecoration({ active: router.asPath === path })}
        ></span>
        <p></p>
      </Link>
    </li>
  );
};
