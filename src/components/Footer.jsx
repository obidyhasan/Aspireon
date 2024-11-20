import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto px-5">
      <hr />
      <div className="py-10">
        <h1 className="font-bold text-2xl text-center">Aspireon</h1>
        <p className="max-w-2xl text-center text-sm mx-auto text-gray-500 my-3">
          Empowering your career journey with personalized guidance, expert
          advice, and resources to help you make informed decisions and achieve
          your goals.
        </p>
        <div className="mt-8 px-10">
          <ul className="flex justify-evenly gap-8 flex-wrap ">
            <Link to="/" className="hover:underline text-gray-600">
              Home
            </Link>
            <li className="hover:underline text-gray-600">Service</li>
            <li className="hover:underline text-gray-600">Connect Us</li>
            <li className="hover:underline text-gray-600">About Us</li>
            <Link to={"/profile"} className="hover:underline text-gray-600">
              Profile
            </Link>
          </ul>
        </div>

        <div className="flex items-center justify-center gap-8 my-6">
          <FaFacebook className="w-6 h-6" />
          <FaInstagram className="w-6 h-6" />
          <FaTwitter className="w-6 h-6" />
        </div>

        <p className="text-center text-sm text-gray-500">
          &#169; Aspireon. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
