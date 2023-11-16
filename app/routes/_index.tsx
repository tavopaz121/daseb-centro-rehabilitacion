import type { MetaFunction } from "@remix-run/node";

import servicio2 from "~/assets/imgs/clinica-heridas-estomas-01-1.png";
import servicio3 from "~/assets/imgs/servicio-de-hospitalizacion.png";
import servicio5 from "~/assets/imgs/servicio-de-terapia-interna.png";
import Footer from "~/components/Footer/Footer";
import Header from "~/components/Header/Header";
import Hero from "~/components/Hero/Hero";
import Naturaleza from "~/components/Naturaleza/Naturaleza";
import Team from "~/components/Team/Team";
import Mision from "~/components/Mision/Mision";
import Vision from "~/components/Vision/Vision";

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
      <Header />
      <main>
        <Hero />
        <Naturaleza />

        <Team />

        <section className="py-10 bg-white sm:py-16 lg:py-12">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl mb-[4rem]">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Nuestros servicios
              </h2>
              <p className="max-w-full mx-auto mt-4 text-base leading-relaxed text-gray-600">
                Te ayudamos a recuperar, mantener y mejorar tus habilidades
                esenciales. Nuestro enfoque integral minimiza los efectos de
                enfermedades crónicas, ofreciendo estrategias de autogestión y
                ayudas técnicas para optimizar tu calidad de vida. Tu bienestar
                es nuestra misión.
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

        <Mision />
        <Vision />
      </main>

      <Footer />
    </>
  );
}
