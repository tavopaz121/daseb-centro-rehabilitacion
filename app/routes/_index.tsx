import type { MetaFunction } from "@remix-run/node";

import logo from "~/assets/imgs/logo.png";
import banner from "~/assets/imgs/banner-rehabilitacion.webp";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "DASEB - Centro de Rehabilitación" },
    {
      name: "description",
      content:
        "DASEB: Tu centro de rehabilitación de enfermería de confianza. Ofrecemos cuidados especializados y apoyo durante tu recuperación. Nuestro equipo de enfermeros expertos está aquí para ayudarte a sanar y recuperarte. Descubre la atención dedicada que mereces en DASEB.",
    },
  ];
};

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

export default function Index() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className="shadow-md py-2 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px]">
        <div className="flex flex-wrap items-center justify-between gap-5 relative">
          <a href="">
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
      <main>
        <section className="banner">
          <img src={banner} alt="" className="w-full h-[550px] object-cover" />
          <div className="hero__banner">
            <p>
              ¡BIENVENIDOS! EN NUESTRA CLÍNICA TE BRINDAMOS ATENCIÓN MÉDICA DE
              CALIDAD, EN EL MOMENTO QUE MÁS LO NECESITES
            </p>
            <button className="relative inline-flex items-center justify-center mt-5 mr-2 overflow-hidden text-xl text-white font-semibold rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200">
              <span className="relative px-8 py-2.5 transition-all ease-in duration-75 bg-transparent rounded-md group-hover:bg-opacity-0">
                Agendar cita por whatsapp
              </span>
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
