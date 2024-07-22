import Link from "next/link";
import { Button } from "./Button";
import Logo from "./Logo";
import { useContext } from "react";
import { AuthContext } from "@/app/(root)/layout";
import { FaUser } from "react-icons/fa6";

const Header = () => {
  const auth = useContext(AuthContext);

  return (
    <header className="flex justify-between border-b border-b-primary bg-white px-32 py-4">
      <ul className="flex items-center gap-x-12">
        <li>
          <Link href="/">
            <Logo />
          </Link>
        </li>
        <li>
          <Link href="products">Shop now</Link>
        </li>
        <li>About Us</li>
        <li>Contact</li>
        <li>More</li>
      </ul>
      <div className="flex gap-4">
        {auth.isAuthenticated ? (
          <Link href="/profile">
            <Button className="rounded-full p-2.5">
              <FaUser />
            </Button>
          </Link>
        ) : (
          <>
            <Link href="/login">
              <Button intent="outline" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};
export default Header;
