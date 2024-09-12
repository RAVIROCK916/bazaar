import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="p-8 sm:px-32">
      <table className="mb-4 w-full table-fixed border-separate border-spacing-1 sm:mb-12 sm:border-spacing-4">
        <thead className="text-left text-sm sm:text-lg">
          <tr>
            <th>
              <Logo />
            </th>
            <th>About Us</th>
            <th>Terms</th>
            <th>Help Center</th>
          </tr>
        </thead>
        <tbody className="text-xs sm:text-sm">
          <tr className="*:line-clamp-1 *:table-cell *:text-wrap">
            <td>
              <span></span>
            </td>
            <td>
              <span className="cursor-pointer">Contact</span>
            </td>
            <td>
              <span className="cursor-pointer">Privacy</span>
            </td>
            <td>
              <span className="cursor-pointer">Account</span>
            </td>
          </tr>
          <tr className="*:line-clamp-1 *:table-cell *:text-wrap">
            <td>
              <span></span>
            </td>
            <td>
              <span className="cursor-pointer">Support</span>
            </td>
            <td>
              <span className="cursor-pointer">Shipping</span>
            </td>
            <td>
              <span className="cursor-pointer">Wishlist</span>
            </td>
          </tr>
          <tr className="*:line-clamp-1 *:table-cell *:text-wrap">
            <td>
              <span></span>
            </td>
            <td>
              <span className="cursor-pointer">Blog</span>
            </td>
            <td>
              <span className="cursor-pointer">Track Order</span>
            </td>
            <td>
              <span className="cursor-pointer">Featured</span>
            </td>
          </tr>
          <tr className="*:line-clamp-1 *:table-cell *:text-wrap">
            <td>
              <span></span>
            </td>
            <td>
              <span className="cursor-pointer">FAQ</span>
            </td>
            <td>
              <span className="cursor-pointer">Returns</span>
            </td>
            <td>
              <span className="cursor-pointer">Order History</span>
            </td>
          </tr>
          <tr className="*:line-clamp-1 *:table-cell *:text-wrap">
            <td>
              <span></span>
            </td>
            <td>
              <span>Careers</span>
            </td>
            <td>
              <span>Service</span>
            </td>
            <td>
              <span>New Arrivals</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mb-3 h-px bg-neutral-900 sm:mb-6"></div>
      <div className="justify-between space-y-2 sm:flex sm:space-y-0">
        <div className="flex gap-x-12 *:text-xs">
          <small>Copyright © 2024 Bazaar. All rights reserved.</small>
          <ul className="hidden items-center gap-x-8 sm:flex">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Settings</li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-x-4">
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaXTwitter />
            </li>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaYoutube />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
