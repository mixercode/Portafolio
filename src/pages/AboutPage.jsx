import NavigationCard from "../components/NavigationCard";
import WindowsCard from "../components/WindowsCard";

export default function AboutPage() {
  return (
    <NavigationCard title="About me">
      <div className="flex flex-col md:flex-row items-start gap-12">
        <article className="flex-[1.5] space-y-4">
          <p className="text-lg leading-relaxed text-white/90 text-left">
            Mi nombre es{" "}
            <span className="text-white font-semibold">Miguel</span>, tengo 27
            años y soy graduado en Sistemas Computacionales. Apasionado por la
            tecnología y con un firme compromiso con el aprendizaje continuo.
          </p>
          <p className="text-base leading-relaxed text-white/80 text-left">
            Poseo una sólida base en sistemas, respaldada por mi formación
            académica. Mi entusiasmo por las últimas tendencias tecnológicas y
            mi habilidad para adaptarme rápidamente a nuevas herramientas me
            permiten mantenerme actualizado en un entorno de constante
            evolución.
          </p>
        </article>

        <div className="flex-1 w-full opacity-90 hover:opacity-100 transition-opacity duration-300">
          <WindowsCard>
            <div className="font-mono text-xs sm:text-sm lg:text-base text-[#d4d4d4] p-2">
              <div className="flex">
                <span className="w-8 select-none text-gray-500">1</span>
                <p>
                  <span className="text-[#c586c0]">const</span>{" "}
                  <span className="text-[#4fc1ff]">developerSkills</span>{" "}
                  <span className="text-[#d4d4d4]">=</span> {"{"}
                </p>
              </div>

              <div className="flex">
                <span className="w-8 select-none text-gray-500">2</span>
                <p className="pl-4">
                  <span className="text-[#9cdcfe]">backend:</span> {"["}
                  <span className="text-[#ce9178]">'Node.js'</span>,{" "}
                  <span className="text-[#ce9178]">'Next.js'</span>,{" "}
                  <span className="text-[#ce9178]">'AWS'</span>, {"],"}
                </p>
              </div>

              <div className="flex">
                <span className="w-8 select-none text-gray-500">3</span>
                <p className="pl-4">
                  <span className="text-[#9cdcfe]">frontend:</span> {"["}
                  <span className="text-[#ce9178]">'React'</span>,{" "}
                  <span className="text-[#ce9178]">'Next.js'</span>,{" "}
                  <span className="text-[#ce9178]">'Tailwind'</span>
                  {"],"}
                </p>
              </div>

              <div className="flex">
                <span className="w-8 select-none text-gray-500">4</span>
                <p className="pl-4">
                  <span className="text-[#9cdcfe]">mobile:</span> {"["}
                  <span className="text-[#ce9178]">'React Native'</span>
                  {"]"}
                </p>
              </div>

              <div className="flex">
                <span className="w-8 select-none text-gray-500">5</span>
                <p>{"};"}</p>
              </div>
            </div>
          </WindowsCard>
        </div>
      </div>
    </NavigationCard>
  );
}
