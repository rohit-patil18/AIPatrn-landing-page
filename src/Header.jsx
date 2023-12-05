// import React from "react";
import { kebabCase } from "lodash";
import downArrow from "./assets/icons/caret-down-solid.svg";
import { Link } from "react-router-dom";
const navLinks = [
  "Home page",
  "About us",
  "Generator",
  "Features",
  "Pricing-plan",
  "Collection-2023",
  "Blog - News",
  "Career",
];

function Header() {
  return (
    <header className="px-12 pt-8 flex">
      <h1 className="font-bold flex-1">AIPatrn</h1>
      <nav className="flex flex-1">
        <ul className="flex flex-2 flex-wrap w-400 justify-around">
          {navLinks.map((navLink) => (
            <Link key={navLink} to={`/${kebabCase(navLink)}`}>
              <li className="text-gray-500 w-40">{navLink}</li>
            </Link>
          ))}
        </ul>
        <div className="flex-1 flex items-start justify-center">
          <button className="flex items-center gap-2 border border-gray-300 rounded-full pr-10 pl-8 py-3">
            <p className="font-medium">Menu</p>
            <img src={downArrow} alt="Menu" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
