import { Button } from "./Button";

const Header = () => {
  return (
    <header className="flex justify-between bg-white px-16 py-4">
      <ul className="flex gap-6">
        <li>Logo</li>
        <li>Shop now</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>More</li>
      </ul>
      <div className="flex gap-4">
        <Button intent="outline">Login</Button>
        <Button>Sign Up</Button>
      </div>
    </header>
  );
};
export default Header;
