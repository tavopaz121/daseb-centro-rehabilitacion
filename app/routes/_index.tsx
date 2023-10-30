import type { MetaFunction } from "@remix-run/node";

import logo from "~/assets/imgs/logo.png";
import banner from "~/assets/imgs/banner-rehabilitacion.webp";

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

export default function Index() {
  return (
    <>
      <header className="flex w-full justify-between items-center bg-slate-50">
        <figure>
          <a href="">
            <img
              src={logo}
              alt="DASEB - Centro de Rehabilitación"
              className="logo"
            />
          </a>
        </figure>
        <nav className="nav">
          <ul className="flex w-full gap-8 px-10 font-bold">
            <li>
              <a href="">Inicio</a>
            </li>
            <li>
              <a href="">Nosotros</a>
            </li>
            <li>
              <a href="">Servicios</a>
            </li>
            <li>
              <a href="">Especialidades</a>
            </li>
            <li>
              <a href="">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="banner">
          <img src={banner} alt="" className="w-full h-[550px] object-cover" />
          <p>
            ¡BIENVENIDOS! EN NUESTRA CLÍNICA TE BRINDAMOS ATENCIÓN MÉDICA DE
            CALIDAD, EN EL MOMENTO QUE MÁS LO NECESITES
          </p>
        </section>
      </main>
    </>
  );
}
