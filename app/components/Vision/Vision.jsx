import misionImg from "~/assets/imgs/mison.jpg";

export default function Vision() {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
          <div className="2xl:pl-16">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              Visión
            </h2>
            <p className="text-xl leading-relaxed text-gray-900 mt-9">
              Aspiramos a ser reconocidos como uno de los principales centros de
              rehabilitación, no solo en el estado de Veracruz, sino a nivel
              global. Buscamos alcanzar los más altos estándares de calidad y
              satisfacción del paciente, guiados por nuestro excepcional
              personal de enfermería. Este equipo estará compuesto por
              profesionales con licenciatura, posgrado o diplomado, certificados
              a través de ReTHUS, asegurando un servicio de primer nivel y
              consolidando nuestra posición como referentes en el campo de la
              rehabilitación a nivel mundial. Nos esforzamos por superar las expectativas y
              marcar la pauta en la excelencia del cuidado y la recuperación.
            </p>
          </div>

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
          </div>
        </div>
      </div>
    </section>
  );
}
