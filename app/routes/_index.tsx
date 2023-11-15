import type { MetaFunction } from "@remix-run/node";

import logo from "~/assets/imgs/logo.png";
import banner from "~/assets/imgs/banner.jpg";
import { useState } from "react";

import servicio1 from "~/assets/imgs/servicio-de-ciguria.png";
// import servicio2 from "~/assets/imgs/clinica-heridas-estomas-01-1.png";
// import servicio3 from "~/assets/imgs/servicio-de-hospitalizacion.png";
// import servicio4 from "~/assets/imgs/servicio-de-laboratorio-de-analisis-clinicos.png";
// import servicio5 from "~/assets/imgs/servicio-de-terapia-interna.png";
// import servicio6 from "~/assets/imgs/servicio-de-clinica-de-diabetes.png";

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

        <section className="py-10 bg-white sm:py-16 lg:py-24">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl mb-[4rem]">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Nuestros servicios
              </h2>
              <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
                Ofrecemos un tratamiento completo de alto nivel
              </p>
            </div>
          </div>

          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
              <div>
                <div className="relative flex items-center justify-center mx-auto">
                  <img
                    src={servicio1}
                    className="w-[150px] h-[150px]"
                    alt="Cirujia"></img>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-black">
                  Secured Payments
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>

              <div>
                <div className="relative flex items-center justify-center mx-auto">
                  <svg
                    className="text-orange-100"
                    width="62"
                    height="64"
                    viewBox="0 0 62 64"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z" />
                  </svg>
                  <svg
                    className="absolute text-orange-600 w-9 h-9"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">
                  Fast & Easy to Load
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>

              <div>
                <div className="relative flex items-center justify-center mx-auto">
                  <svg
                    className="text-green-100"
                    width="66"
                    height="68"
                    viewBox="0 0 66 68"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z" />
                  </svg>
                  <svg
                    className="absolute text-green-600 w-9 h-9"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">
                  Light & Dark Version
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>

              <div>
                <div className="relative flex items-center justify-center mx-auto">
                  <svg
                    className="text-purple-100"
                    width="66"
                    height="68"
                    viewBox="0 0 66 68"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z" />
                  </svg>
                  <svg
                    className="absolute text-purple-600 w-9 h-9"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">
                  Light & Dark Version
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>

              <div>
                <div className="relative flex items-center justify-center mx-auto">
                  <svg
                    className="text-gray-100"
                    width="65"
                    height="70"
                    viewBox="0 0 65 70"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M64.5 26C64.5 46.4345 56.4345 70 36 70C15.5655 70 0 53.9345 0 33.5C0 13.0655 13.0655 0 33.5 0C53.9345 0 64.5 5.56546 64.5 26Z" />
                  </svg>
                  <svg
                    className="absolute text-gray-600 w-9 h-9"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">
                  Fast & Easy to Load
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>

              <div>
                <div className="relative flex items-center justify-center mx-auto">
                  <p>Fast</p>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">
                  Secured Ppapa
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>

              <div>
                <div className="relative flex items-center justify-center mx-auto">
                  <svg
                    className="text-gray-100"
                    width="62"
                    height="64"
                    viewBox="0 0 62 64"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z"></path>
                  </svg>
                  <svg
                    className="absolute text-gray-600 w-9 h-9"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">
                  Light & Dark Version
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>

              <div>
                <div className="relative flex items-center justify-center mx-auto">
                  <svg
                    className="text-rose-100"
                    width="72"
                    height="75"
                    viewBox="0 0 72 75"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
                  </svg>
                  <svg
                    className="absolute text-rose-600 w-9 h-9"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                    />
                  </svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">
                  Secured Payments
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>

              <div>
                <div className="relative flex items-center justify-center mx-auto">
                  <svg
                    className="text-lime-100"
                    width="62"
                    height="65"
                    viewBox="0 0 62 65"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.0264C0 33.4609 8.06546 64.0264 28.5 64.0264C48.9345 64.0264 62 50.4604 62 30.0259C62 9.59135 59.4345 4.0256 39 4.0256C18.5655 4.0256 0 -7.40819 0 13.0264Z" />
                  </svg>

                  <svg
                    className="absolute text-lime-600 w-9 h-9"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">
                  Fast & Easy to Load
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
