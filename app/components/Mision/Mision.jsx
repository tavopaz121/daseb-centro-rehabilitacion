import misionImg from "~/assets/imgs/mison.jpg";

export default function Mision() {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
          <div className="relative lg:mb-12">
            <img
              className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg"
              alt=""
            />
            <div className="pl-12 pr-6">
              <img
                className="relative h-[500px] object-cover"
                src={misionImg}
                alt=""
              />
            </div>
            <div className="absolute left-0 pr-12 bottom-8 xl:bottom-20">
              <div className="max-w-xs bg-blue-500 rounded-lg sm:max-w-md xl:max-w-md">
                <div className="px-3 py-4 sm:px-5 sm:py-8">
                  <div className="flex items-center">
                    <blockquote className="">
                      <p className="text-sm font-medium text-white sm:text-lg">
                        "Salud, Cercanía y Calidad Profesional"
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="2xl:pl-16">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              Misión
            </h2>
            <p className="text-xl leading-relaxed text-gray-900 mt-9">
              Nuestra misión es contribuir al bienestar de las personas mediante
              servicios profesionales de máxima calidad. Nos comprometemos a
              proporcionar atención cercana y accesible, respaldada por un
              personal de enfermería capacitado y comprometido. Buscamos generar
              bienestar y seguridad tanto para nuestros usuarios como para sus
              familias, destacando la calidez de nuestro talento humano.
            </p>
            <p className="mt-6 text-xl leading-relaxed text-gray-900">
              Enfocados en el paciente, ofrecemos exploración, tratamiento y
              seguimiento correctos, colocando siempre al paciente en el centro
              de nuestras actuaciones. Nos esforzamos por contribuir activamente
              a minimizar o retrasar los efectos discapacitantes de enfermedades
              crónicas. En [Nombre del Centro], tu salud y bienestar son nuestra
              prioridad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
