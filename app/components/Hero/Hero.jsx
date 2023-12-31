import banner from "~/assets/imgs/banner.jpg";

export default function Hero({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32"
      id="inicio">
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
          <h2
            className="text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-5xl"
            data-aos="fade-up"
            data-aos-delay="500">
            Centro de Rehabilitación Daseb
          </h2>
          <p
            className="mt-4 text-base text-gray-200"
            data-aos="fade-up"
            data-aos-delay="1000">
            ¡Bienvenidos! En nuestra clínica te brindamos atención médica de
            calidad, en el momento que más lo necesites.
          </p>

          <button
            data-aos="fade-up"
            data-aos-delay="1500"
            type="button"
            className="inline-block rounded-lg text-white w-full mt-8 py-2.5 border-2 border-primary-100 px-6 pb-[6px] text-base font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-neutral-500 hover:bg-opacity-10 focus:border-primary-accent-100 focus:outline-none focus:ring-0 active:border-primary-accent-200"
            data-te-ripple-init>
            <a
              href="https://wa.me/+522713175582?text=Hola,%20estoy%20interesado%20en%20solicitar%20sus%20servicios.%20¿Podrían%20proporcionarme%20más%20información?"
              target="_blank"
              rel="noreferrer">
              Agendar cita por whatsapp
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
