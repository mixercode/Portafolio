import Card from "./Card";
import NavBar from "./NavBar";

export default function NavigationCard({ title, children }) {
  return (
    <Card className="relative w-full max-w-5xl mx-auto min-h-150 p-14">
      <div className="absolute top-0 left-0 z-10">
        <NavBar />
      </div>

      {/* Contenido Principal */}
      <div className="flex flex-col gap-8 h-full w-full">
        {/* Título (Alineado a la izquierda como en la foto) */}
        <div className="relative">
          <h2 className="text-4xl font-bold text-gray-100 mb-2">{title}</h2>
          {/* Pequeña línea decorativa azul debajo del título */}
          <div className="h-0.5 w-full bg-gradient-to-r from-[#164AE8] from-0% to-[#164AE800] to-100% opacity-20 " />
        </div>

        {/* El contenido inyectado (texto, skillsets, etc) */}
        <div className="text-gray-300 leading-relaxed h-full">{children}</div>
      </div>
    </Card>
  );
}
