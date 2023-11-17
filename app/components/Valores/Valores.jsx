export default function Valores() {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-full mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 sm:text-4xl sm:leading-tight">
            En DASEB, nos regimos por una sólida base de valores que son la
            esencia de nuestra misión.
          </h2>
        </div>

        <div className="grid items-center max-w-4xl grid-cols-2 mx-auto mt-12 md:mt-20 md:grid-cols-4 gap-x-10 gap-y-16 text-center uppercase font-bold text-gray-500 text-xl tracking-wider">
          <div>
            <p>Humanismo</p>
          </div>

          <div>
            <p>Responsabilidad </p>
          </div>

          <div>
            <p>Respeto</p>
          </div>

          <div>
            <p>Solidaridad</p>
          </div>

          <div className="hidden md:block">
            <p>Profesionalidad</p>
          </div>

          <div className="hidden md:block">
            <p>Compromiso</p>
          </div>

          <div className="hidden md:block">
            <p>Confidencialidad</p>
          </div>

          <div className="hidden md:block">
            <p>Empatía</p>
          </div>
        </div>

        <div className="flex items-center justify-center mt-10 space-x-3 md:hidden">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-600 block"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
        </div>
      </div>
    </section>
  );
}
