import { useState } from "react";
import Tippy from "@tippyjs/react";

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
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <header className="px-12 pt-8 flex md:flex-row flex-col">
      <h1 className="font-bold flex-1 text-3xl md:text-base">AIPatrn</h1>
      <nav className="flex flex-1 md:flex-row flex-col">
        <ul className="flex flex-2 flex-wrap w-auto md:w-400 justify-between md:justify-around">
          {navLinks.map((navLink) => (
            <Link key={navLink} to={`/${kebabCase(navLink)}`}>
              <li className="text-gray-500 md:w-40 w-24">{navLink}</li>
            </Link>
          ))}
        </ul>
        <div className="flex-1 flex items-start justify-center">
          <Tippy
            content={<span>This is Menu</span>}
            visible={visible}
            onClickOutside={hide}
          >
            <button
              onClick={visible ? hide : show}
              className="flex items-center gap-2 border border-gray-300 rounded-full pr-10 pl-8 py-3 md:m-0 my-2"
            >
              <p className="font-medium">Menu</p>
              <img
                src={downArrow}
                alt="Menu"
                style={{
                  transform: visible ? "rotate(180deg)" : "",
                }}
              />
            </button>
          </Tippy>
        </div>
      </nav>
    </header>
  );
}

export default Header;
