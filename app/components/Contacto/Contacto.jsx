export default function Contacto({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      className="py-10 bg-white sm:py-16 lg:py-20"
      data-aos="fade-up"
      data-aos-delay="500">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-x-8 xl:gap-x-20">
          <div className="flex items-start">
            <svg
              className="flex-shrink-0 w-10 h-10 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <div className="ml-6">
              <p className="text-base font-medium text-black/50">LLamanos</p>
              <p className="mt-4 text-xl font-medium text-gray-900">
                271 317 5582
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <svg
              className="flex-shrink-0 w-10 h-10 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div className="ml-6">
              <p className="text-base font-medium text-black/50">
                Correo Electrónico
              </p>
              <p className="mt-4 text-xl font-medium text-gray-900">
                daseb@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <svg
              className="flex-shrink-0 w-10 h-10 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div className="ml-6">
              <p className="text-base font-medium text-black/50">Ubicación</p>
              <p className="mt-4 text-xl font-medium leading-relaxed text-gray-900">
                Motzorongo, Tezonapa, Ver
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
