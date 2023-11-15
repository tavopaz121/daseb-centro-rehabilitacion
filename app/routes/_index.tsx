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

        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24 w-full">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 w-full">
            <div className=" w-full">
              <h2 className="text-3xl text-center font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Justificaión
              </h2>

              <div className="mt-10">
                <p className="text-base text-black  md:text-3xl mt-4">
                  Teniendo en cuenta el presente proyecto sobre el diseño de un
                  programa de salud (clínica), debe decirse que la motivación
                  principal radica en la necesidad que ha evidenciado algunas
                  entidades, las cuales carecen de estos servicios.
                </p>
                <p className="text-base text-black  md:text-3xl mt-4">
                  La rehabilitación es el cuidado que se recibe para recuperar,
                  mantener o mejorar las capacidades necesarias para la vida
                  diaria. Estas capacidades pueden ser físicas.
                </p>
                <p className="text-base text-black  md:text-3xl mt-4">
                  Cualquier persona puede necesitar rehabilitación en algún
                  momento de su vida, como consecuencia de una lesión,
                  intervención quirúrgica o enfermedad, o porque su capacidad de
                  movilidad o funcionamiento de una o varias extremidades o
                  procesos, se ha reducido con la edad.
                </p>
                <p className="text-base text-black  md:text-3xl mt-4">
                  De acuerdo con el Censo de Población y Vivienda 2020, en
                  México hay 6,179,890 personas con algún tipo de discapacidad,
                  lo que representa 4.9 % de la población total del país, del
                  cual 53% son mujeres y 47% son hombres.
                </p>
                <p className="text-base text-black  md:text-3xl mt-4">
                  El mismo determinó que en Veracruz viven 214,300 personas con
                  discapacidad física, considerado a personas que tienen
                  bastante dificultad para realizar actividades cotidianas como
                  caminar, subir o bajar, o simplemente no puede realizarlas.
                  Específicamente en Orizaba se contaba con 3430 personas con
                  discapacidad, mientras que en Córdoba había 4090.
                </p>
              </div>
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
                    src={servicio4}
                    className="w-[150px] h-[150px]"
                    alt="Cirujia"></img>
                </div>

                <p className="mt-4 text-base text-gray-600">
                  Descubre precisión en salud con nuestro laboratorio de
                  análisis clínicos. Resultados confiables y atención centrada
                  en tu bienestar.
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
    </>
  );
}
