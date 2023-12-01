export default function Naturaleza() {
  return (
    <>
      <section
        className="py-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16 mt-5"
        data-aos="fade-left"
        data-aos-delay="500">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                ¡Bienvenido a la recuperación que mereces!
              </h2>
              <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                En DASEB, nos dedicamos apasionadamente a ayudar a las personas
                a superar las limitaciones físicas y a recuperar su calidad de
                vida. Nuestro centro, ubicado en la pintoresca localidad de
                Motzorongo, en Tezonapa, es un faro de esperanza para aquellos
                que buscan la rehabilitación integral.
              </p>
              <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                Creemos en el poder del apoyo familiar. No solo trabajamos
                contigo, sino que también proporcionamos información valiosa a
                tus seres queridos para facilitar un manejo ambulatorio exitoso
                en casa.
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

            <div
              className="relative max-md:scale-75 max-md:-mt-[3rem]"
              data-aos="fade-right"
              data-aos-delay="1000">
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
          <div
            className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center"
            data-aos="fade-in"
            data-aos-delay="500">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              Lydia Hall: Pionera en Enfermería y
              <span className="relative inline-block">
                <span className="absolute inline-block w-full h-2 bg-blue-300 bottom-1.5"></span>
                <span className="relative"> Transformadora de Cuidados </span>
              </span>
            </h2>
          </div>

          <div
            className="grid grid-cols-1 mt-8 md:mt-20 gap-y-4 md:grid-cols-2 gap-x-4"
            data-aos="fade-left"
            data-aos-delay="500">
            <div>
              <img
                className="w-full mx-auto sm:max-w-xs"
                src="https://s3.amazonaws.com/ogden_images/www.mariettatimes.com/images/2017/12/14233056/HALL-Lydia-tle.jpg"
                alt=""
              />
            </div>

            <div data-aos="fade-right" data-aos-delay="1000">
              <h3 className="text-lg font-semibold text-gray-900">
                Fue una estadounidense destacada en la enfermería con
                especialidad en la rehabilitación, en la salud preventiva y en
                la salud pública.
              </h3>
              <p className="mt-4 text-lg text-gray-700">
                Afirmó que la atención individual se podía ver en tres áreas
                diferentes: cuidado (el cuerpo), corazón (la persona) y cura (la
                enfermedad). Esta teoría sirvió para poner los cimientos de la
                enfermería moderna, en la que las enfermeras usan el pensamiento
                crítico y el conocimiento médico, en lugar de solo seguir
                órdenes médicas.
              </p>
              <p className="mt-4 text-lg text-gray-700">
                El objetivo del paciente es recuperarse, esta es contribución a
                la teoría de la enfermería, para el desarrollo y la utilización
                de esta filosofía. Gracias a esto, se reconoció a las enfermeras
                como profesionales y se les animó a que contribuyeran a
                favorecer los resultados del paciente. La teoría de Lydia Hall
                es la primera en priorizar la importancia de la persona que
                necesita cuidado.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
