import { Button } from "./Button";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex justify-between border-b border-b-primary bg-white px-32 py-4">
      <ul className="flex items-center gap-6">
        <li>
          <Logo />
        </li>
        <li>Shop now</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>More</li>
      </ul>
      <div className="flex gap-4">
        <Button intent="outline" size="sm">
          Login
        </Button>
        <Button size="sm">Sign Up</Button>
      </div>
    </header>
  );
};
export default Header;
