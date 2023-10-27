import type { MetaFunction } from "@remix-run/node";
import Facebook from "../assets/icons/icons8-facebook (1).svg";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <main>
        <header >
          <nav>
            <ul>
              <li>Tratamiento Integral</li>
              <li>Realiza un Test</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>¿Hablamos?</li>
            </ul>
          </nav>

          <img src={Facebook} alt="icon-face" />
        </header>
      </main>
    </>
  );
}
