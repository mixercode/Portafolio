import Card from "./Card";
import NavBar from "./NavBar";

export default function NavigationCard({ title, children }) {
  return (
    <Card className="relative w-full max-w-5xl mx-auto min-h-150 pt-24 px-12 pb-12">
      <div className="absolute top-0 right-0 z-10">
        <NavBar />
      </div>

      {/* Contenido Principal */}
      <div className="flex flex-col gap-8 h-full">
        {/* Título (Alineado a la izquierda como en la foto) */}
        <div className="relative">
          <h2 className="text-4xl font-bold text-gray-100 mb-2">{title}</h2>
          {/* Pequeña línea decorativa azul debajo del título */}
          <div className="h-1 w-16 bg-blue-500 rounded-full" />
        </div>

        {/* El contenido inyectado (texto, skillsets, etc) */}
        <div className="text-gray-300 leading-relaxed h-full">{children}</div>
      </div>
    </Card>
  );
}
