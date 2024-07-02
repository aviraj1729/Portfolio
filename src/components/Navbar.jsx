import React from "react";
import logo from "../assets/logo-dark.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const links = [
  {
    name: "Download CV",
    path: "/Avi Raj_USAR.pdf",
  },
  {
    name: <FaLinkedin />,
    path: "https://www.linkedin.com/in/aviraj1729",
  },
  {
    name: <FaGithub />,
    path: "https://github.com/hawkjack1729",
  },
  {
    name: <FaSquareXTwitter />,
    path: "https://x.com/hawkjack1729",
  },
];

const Navbar = () => {
  return (
    <nav className="xl:mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center h-1">
        <img className="mx-2 lg:h-8 h-5" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex flex-wrap justify-center">
        <div className="flex flex-row items-center gap-4 text-2xl">
          {links.map((link, index) => (
            <a
              href={link.path}
              key={index}
              target="_blank"
              className="hover:text-gray-600"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
