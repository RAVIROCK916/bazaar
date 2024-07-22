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
    <footer className="my-8 px-32">
      <table className="mb-12 w-full table-fixed border-separate border-spacing-4">
        <thead className="text-left text-lg">
          <tr>
            <th>
              <Logo />
            </th>
            <th>About Us</th>
            <th>Terms</th>
            <th>Help Center</th>
          </tr>
        </thead>
        <tbody className="text-sm *:my-8">
          <tr>
            <td></td>
            <td>Contact</td>
            <td>Privacy</td>
            <td>Account</td>
          </tr>
          <tr>
            <td></td>
            <td>Support</td>
            <td>Shipping</td>
            <td>Wishlist</td>
          </tr>
          <tr>
            <td></td>
            <td>FAQ</td>
            <td>Returns</td>
            <td>Order History</td>
          </tr>
          <tr>
            <td></td>
            <td>Blog</td>
            <td>Track Order</td>
            <td>Featured Products</td>
          </tr>
          <tr>
            <td></td>
            <td>Careers</td>
            <td>Customer Service</td>
            <td>New Arrivals</td>
          </tr>
        </tbody>
      </table>
      <div className="mb-6 h-px bg-neutral-900"></div>
      <div className="flex justify-between">
        <div className="flex gap-x-12 *:text-xs">
          <small>Copyright © 2024 Bazaar. All rights reserved.</small>
          <ul className="flex items-center gap-x-8">
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
