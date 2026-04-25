import React from "react";
import Card from "./Card";

export default function SectionCard({ data, openModal }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 w-full">
      {data.map((item) => (
        <Card
          key={item.id}
          isRounded={false}
          className="group cursor-pointer overflow-hidden transition-all duration-500 border-transparent hover:border-[#2A2F3E]/80"
        >
          <div
            className="relative w-full aspect-4/3 sm:aspect-square md:aspect-4/3 flex flex-col justify-end overflow-hidden bg-[#0d111a]"
            onClick={() => openModal(item)}
          >
            <img
              src={item.previewUrl}
              alt={`Vista previa de ${item.title}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-[#0d111a]/30 group-hover:bg-[#0d111a]/10 transition-colors duration-500" />

            <div className="absolute inset-0 bg-linear-to-t from-[#0d111a] via-[#0d111a]/80 to-transparent opacity-95 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 px-5 pt-5 pb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-xl font-bold text-white tracking-wide line-clamp-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                {item.title}
              </h3>

              <div className="flex items-center gap-2 mt-2 text-sm font-medium text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                <span>Ver detalles</span>
                <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                  &rarr;
                </span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
