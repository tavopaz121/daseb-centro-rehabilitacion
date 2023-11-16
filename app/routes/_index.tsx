import type { MetaFunction } from "@remix-run/node";

import logo from "~/assets/imgs/logo.png";
import banner from "~/assets/imgs/banner.jpg";
import { useState } from "react";

import servicio2 from "~/assets/imgs/clinica-heridas-estomas-01-1.png";
import servicio3 from "~/assets/imgs/servicio-de-hospitalizacion.png";
import servicio5 from "~/assets/imgs/servicio-de-terapia-interna.png";
import Footer from "~/components/Footer/Footer";

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

        <section className="py-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16 mt-5">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid items-center grid-cols-1 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                  ¡Bienvenido a la recuperación que mereces!
                </h2>
                <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                  En DASEB, nos dedicamos apasionadamente a ayudar a las
                  personas a superar las limitaciones físicas y a recuperar su
                  calidad de vida. Nuestro centro, ubicado en la pintoresca
                  localidad de Motzorongo, en Tezonapa, es un faro de esperanza
                  para aquellos que buscan la rehabilitación integral.
                </p>
                <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                  Creemos en el poder del apoyo familiar. No solo trabajamos
                  contigo, sino que también proporcionamos información valiosa a
                  tus seres queridos para facilitar un manejo ambulatorio
                  exitoso en casa.
                </p>

                <p className="mt-4 text-xl text-gray-600 md:mt-8">
                  <span className="relative inline-block">
                    <span className="absolute inline-block w-full bottom-0.5 h-2 bg-blue-300"></span>
                    <span className="relative"> Tienes alguna duda? </span>
                  </span>
                  <br className="block sm:hidden" />
                  Habla con nosotros{" "}
                  <a
                    href="tel:2713175582"
                    title=""
                    className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline">
                    271 317 5582
                  </a>
                </p>
              </div>

              <div className="relative max-md:scale-75 max-md:-mt-[5.5rem]">
                <img
                  className="absolute inset-x-0 bottom-0 -mb-20 -translate-x-1/2 left-1/2"
                  src="https://static.vecteezy.com/system/resources/previews/010/857/182/original/organic-blob-shape-png.png"
                  alt=""
                />

                <img
                  className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                  src="https://univer.com.mx/wp-content/uploads/2022/12/Enfermera-PNG.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-white sm:py-0 lg:py-12 max-md:-mt-[3rem]">
          <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                Lydia Hall: Pionera en Enfermería y
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full h-2 bg-blue-300 bottom-1.5"></span>
                  <span className="relative"> Transformadora de Cuidados </span>
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 mt-8 md:mt-20 gap-y-4 md:grid-cols-2 gap-x-4">
              <div>
                <img
                  className="w-full mx-auto sm:max-w-xs"
                  src="https://s3.amazonaws.com/ogden_images/www.mariettatimes.com/images/2017/12/14233056/HALL-Lydia-tle.jpg"
                  alt=""
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Fue una estadounidense destacada en la enfermería con
                  especialidad en la rehabilitación, en la salud preventiva y en
                  la salud pública.
                </h3>
                <p className="mt-4 text-lg text-gray-700">
                  Afirmó que la atención individual se podía ver en tres áreas
                  diferentes: cuidado (el cuerpo), corazón (la persona) y cura
                  (la enfermedad). Esta teoría sirvió para poner los cimientos
                  de la enfermería moderna, en la que las enfermeras usan el
                  pensamiento crítico y el conocimiento médico, en lugar de solo
                  seguir órdenes médicas.
                </p>
                <p className="mt-4 text-lg text-gray-700">
                  El objetivo del paciente es recuperarse, esta es contribución
                  a la teoría de la enfermería, para el desarrollo y la
                  utilización de esta filosofía. Gracias a esto, se reconoció a
                  las enfermeras como profesionales y se les animó a que
                  contribuyeran a favorecer los resultados del paciente. La
                  teoría de Lydia Hall es la primera en priorizar la importancia
                  de la persona que necesita cuidado.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-white sm:py-16 lg:py-12">
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
                    src={servicio2}
                    className="w-[150px] h-[150px]"
                    alt="Cirujia"></img>
                </div>
                <p className="mt-4 text-base text-gray-600">
                  Recibe atención especializada en heridas y estomas. Nuestro
                  equipo experto está comprometido con tu recuperación y
                  bienestar.
                </p>
              </div>

              <div>
                <div className="relative flex items-center justify-center mx-auto">
                  <img
                    src={servicio3}
                    className="w-[150px] h-[150px]"
                    alt="Cirujia"></img>
                </div>

                <p className="mt-4 text-base text-gray-600">
                  Brindamos servicios de hospitalización con atención dedicada y
                  compasiva. Nuestro equipo médico experto garantiza un entorno
                  seguro para tu recuperación completa.
                </p>
              </div>

              <div>
                <div className="relative flex items-center justify-center mx-auto">
                  <img
                    src={servicio5}
                    className="w-[150px] h-[150px]"
                    alt="Cirujia"></img>
                </div>

                <p className="mt-4 text-base text-gray-600">
                  Terapia intensiva 24/7. Cuidados especializados para tu
                  recuperación total.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
