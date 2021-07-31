import { useState } from "react";
import { Link } from "wouter";
import { PLANETS as LINKS } from "../../types/Planets";
import "./navbar.css";

export const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);

  const handleClick = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <nav className="h-16 px-8 border-b-2 border-gray-700 flex justify-between items-center">
      <h1 className="text-xl font-bold tracking-tight uppercase md:text-2xl">
        the planets
      </h1>
      <button
        onClick={handleClick}
        className={`p-2 rounded flex flex-col gap-1 relative z-20 lg:hidden hover:bg-gray-600 hover:bg-opacity-40 ${
          openLinks ? "cross" : ""
        }`}
      >
        <div className="burger"></div>
        <div className="burger"></div>
        <div className="burger"></div>
      </button>
      <ul id="navbar-menu" className={`navbar-menu ${openLinks ? "open" : ""}`}>
        {LINKS.map((link, i) => (
          <li key={i}>
            <Link
              href={`/planet/${link}`}
              className="navbar-link"
              onClick={() => setOpenLinks(false)}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
