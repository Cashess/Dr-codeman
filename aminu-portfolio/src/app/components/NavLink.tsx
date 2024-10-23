import Link from "next/link";
import { usePathname } from "next/navigation";

// Define the type for the link prop
interface LinkProps {
  link: {
    url: string;
    title: string;
  };
}

const NavLink: React.FC<LinkProps> = ({ link }) => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <Link
      className={`rounded p-1 ${
        pathName === link.url ? "bg-black text-yellow-600" : ""
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
