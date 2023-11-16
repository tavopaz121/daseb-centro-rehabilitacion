export default function Team() {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Conoce Nuestro Equipo de Profesionales
          </h2>
          <p className="max-w-full mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Creemos en el poder de la atención personalizada y
            especializada. Con orgullo presentamos a nuestro equipo de
            enfermeras y profesionales de la salud, cuya dedicación y
            experiencia son fundamentales para tu proceso de rehabilitación.
          </p>
        </div>

        <div className="grid grid-cols-2 mt-8 text-center sm:mt-16 lg:mt-20 sm:grid-cols-4 gap-y-8 lg:grid-cols-9 gap-x-0">
          <div>
            <img
              className="object-cover mx-auto rounded-lg w-28 h-28"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-1.jpg"
              alt=""
            />
            <p className="mt-8 text-lg font-semibold leading-tight text-black">
              Alondra Castillo
            </p>
            <p className="mt-1 text-base leading-tight text-gray-600">
              Founder
            </p>
          </div>

          <div className="hidden lg:block"></div>

          <div>
            <img
              className="object-cover mx-auto rounded-lg w-28 h-28"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-2.jpg"
              alt=""
            />
            <p className="mt-8 text-lg font-semibold leading-tight text-black">
              Victoria Eucario
            </p>
            <p className="mt-1 text-base leading-tight text-gray-600">CTO</p>
          </div>

          <div className="hidden lg:block"></div>

          <div>
            <img
              className="object-cover mx-auto rounded-lg w-28 h-28"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-3.jpg"
              alt=""
            />
            <p className="mt-8 text-lg font-semibold leading-tight text-black">
              Diana Enríquez
            </p>
            <p className="mt-1 text-base leading-tight text-gray-600">CMO</p>
          </div>

          <div className="hidden lg:block"></div>

          <div>
            <img
              className="object-cover mx-auto rounded-lg w-28 h-28"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-4.jpg"
              alt=""
            />
            <p className="mt-8 text-lg font-semibold leading-tight text-black">
              Estefany Tobón
            </p>
            <p className="mt-1 text-base leading-tight text-gray-600">
              Senior Developer
            </p>
          </div>

          <div className="hidden lg:block"></div>

          <div>
            <img
              className="object-cover mx-auto rounded-lg w-28 h-28"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-5.jpg"
              alt=""
            />
            <p className="mt-8 text-lg font-semibold leading-tight text-black">
              Sandra Sánchez
            </p>
            <p className="mt-1 text-base leading-tight text-gray-600">
              Product Designer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
