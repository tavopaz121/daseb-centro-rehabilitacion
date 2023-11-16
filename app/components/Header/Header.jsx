import { useState } from "react";
import logo from "~/assets/imgs/logo.png";
const navLinks = [
  {
    name: "inicio",
    target: "#home",
  },
  {
    name: "nosotros",
    target: "#home",
  },
  {
    name: "especialidades",
    target: "#home",
  },
  {
    name: "contacto",
    target: "#home",
  },
];
export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="shadow-md py-1 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px]">
      <div className="flex flex-wrap items-center justify-between gap-5 relative">
        <a href="/">
          <img src={logo} alt="logo" className="w-[180px] max-md:w-[120px]" />
        </a>
        <button
          className="lg:hidden ml-7"
          onClick={() => setShowMenu(!showMenu)}>
          <svg
            className="w-7 h-7"
            fill="#000"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"></path>
          </svg>
        </button>
        <ul
          className={`flex lg:space-x-5 max-lg:space-y-2 max-lg:hidden max-lg:w-full ${
            showMenu && "show__menu"
          }`}>
          {navLinks.map((link) => (
            <li
              className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded"
              key={link.name}>
              <a
                href={link.target}
                className="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px] capitalize">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
