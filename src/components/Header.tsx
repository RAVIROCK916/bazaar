import Link from "next/link";
import { Button } from "./Button";
import Logo from "./Logo";
import { FaUser } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { profile_popup_items } from "@/data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useRouter } from "next/navigation";
import SearchBar from "./SearchBar";
import { Search } from "./Search";

const Header = () => {
  const Router = useRouter();
  const auth = useSelector((state: RootState) => state.auth);

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-b-primary bg-white/70 px-32 py-4 backdrop-blur">
      <ul className="flex items-center gap-x-12">
        <li>
          <Link href="/">
            <Logo />
          </Link>
        </li>
        <li>
          <Link href="/products">Shop now</Link>
        </li>
        <li>About Us</li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>More</li>
      </ul>
      <div className="flex items-center gap-4">
        <Search />
        {/* <SearchBar /> */}
        {auth.isAuthenticated ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="flex size-8 items-center justify-center rounded-full bg-primary p-2.5 text-white outline-none hover:bg-primary/90">
              {/* <span className="rounded-full bg-primary p-2.5 outline-none"> */}
              {/* <Button > */}
              <FaUser />
              {/* </Button> */}
              {/* </span> */}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {profile_popup_items.map((item) => (
                <DropdownMenuItem
                  key={item.label}
                  className="cursor-pointer text-primary"
                  onClick={() => item.onClick(Router)}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  <span>{item.label}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
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
