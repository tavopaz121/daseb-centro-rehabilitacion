import type { MetaFunction } from "@remix-run/node";

import logo from "~/assets/imgs/logo.png";
import banner from "~/assets/imgs/banner.jpg";
import { useState } from "react";

import servicio1 from "~/assets/imgs/servicio-de-ciguria.png";
import servicio2 from "~/assets/imgs/clinica-heridas-estomas-01-1.png";
import servicio3 from "~/assets/imgs/servicio-de-hospitalizacion.png";
import servicio4 from "~/assets/imgs/servicio-de-laboratorio-de-analisis-clinicos.png";
import servicio5 from "~/assets/imgs/servicio-de-terapia-interna.png";
import servicio6 from "~/assets/imgs/servicio-de-clinica-de-diabetes.png";

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
      <header className="shadow-md py-1 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px]">
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
        <section className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
          <div className="absolute inset-0">
            <img
              className="w-full object-contain max-md:object-cover h-full md:object-left md:scale-150 md:origin-top-left"
              src={banner}
              alt=""
            />
          </div>

          <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

          <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

          <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl max-md:mt-5">
            <div className="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left mt-8 hero">
              <h2 className="text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
                Centro de Rehabilitación Daseb
              </h2>
              <p className="mt-4 text-base text-gray-200">
                ¡Bienvenidos! En nuestra clínica te brindamos atención médica de
                calidad, en el momento que más lo necesites.
              </p>

              <button
                type="button"
                className="inline-block rounded-lg text-white w-full mt-8 py-2.5 border-2 border-primary-100 px-6 pb-[6px] text-base font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-neutral-500 hover:bg-opacity-10 focus:border-primary-accent-100 focus:outline-none focus:ring-0 active:border-primary-accent-200"
                data-te-ripple-init>
                Agendar cita por whatsapp
              </button>
            </div>
          </div>
        </section>

        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Nuestros servicios
              </h2>
              <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
                Ofrecemos un tratamiento completo de alto nivel
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="overflow-hidden bg-white rounded shadow">
                <div className="p-8">
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 w-12 h-auto"
                      src={servicio1}
                      alt=""
                    />
                    <div className="ml-5 mr-auto">
                      <p className="text-xl font-semibold text-black">Gmail</p>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed text-gray-600 mt-7">
                    Lorem ipsum dolor sit amet, consectetur adipis cing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden bg-white rounded shadow">
                <div className="p-8">
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 w-12 h-auto"
                      src={servicio2}
                      alt=""
                    />
                    <div className="ml-5 mr-auto">
                      <p className="text-xl font-semibold text-black">Slack</p>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed text-gray-600 mt-7">
                    Lorem ipsum dolor sit amet, consectetur adipis cing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden bg-white rounded shadow">
                <div className="p-8">
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 w-12 h-auto"
                      src={servicio3}
                      alt=""
                    />
                    <div className="ml-5 mr-auto">
                      <p className="text-xl font-semibold text-black">
                        Shopify
                      </p>
                    </div>
                    <svg
                      className="hidden w-5 h-5 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                  <p className="text-base leading-relaxed text-gray-600 mt-7">
                    Lorem ipsum dolor sit amet, consectetur adipis cing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden bg-white rounded shadow">
                <div className="p-8">
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 w-12 h-auto"
                      src={servicio4}
                      alt=""
                    />
                    <div className="ml-5 mr-auto">
                      <p className="text-xl font-semibold text-black">
                        Intercom
                      </p>
                    </div>
                    <svg
                      className="hidden w-5 h-5 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                  <p className="text-base leading-relaxed text-gray-600 mt-7">
                    Lorem ipsum dolor sit amet, consectetur adipis cing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden bg-white rounded shadow">
                <div className="p-8">
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 w-12 h-auto"
                      src={servicio5}
                      alt=""
                    />
                    <div className="ml-5 mr-auto">
                      <p className="text-xl font-semibold text-black">
                        Twitter
                      </p>
                    </div>
                    <svg
                      className="hidden w-5 h-5 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                  <p className="text-base leading-relaxed text-gray-600 mt-7">
                    Lorem ipsum dolor sit amet, consectetur adipis cing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden bg-white rounded shadow">
                <div className="p-8">
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 w-12 h-auto"
                      src={servicio6}
                      alt=""
                    />
                    <div className="ml-5 mr-auto">
                      <p className="text-xl font-semibold text-black">Sketch</p>
                    </div>
                    <svg
                      className="hidden w-5 h-5 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                  <p className="text-base leading-relaxed text-gray-600 mt-7">
                    Lorem ipsum dolor sit amet, consectetur adipis cing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
