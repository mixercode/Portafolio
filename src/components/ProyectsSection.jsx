import React, { useState } from "react";
import SectionCard from "./SectionCard";
import Modal from "./ModalProjects";
import { RESTAURANT_DATA } from "../data/restaurant";
import { ADMIN_ARCHIVOS_DATA } from "../data/adminArchivos";
import { GASOLINERIA_DATA } from "../data/gasolineria";

/**
 * Componente modular para los títulos de sección.
 * Cumple con el principio DRY: define la interfaz visual una sola vez.
 */
const SectionHeader = ({ title }) => (
  <div className="flex flex-row items-center gap-4 mt-10 mb-6">
    <div
      aria-hidden="true"
      className="w-5 h-5 rounded-full border-[10px] border-[#164ae8] shadow-[0_0_8px_rgba(22,74,232,0.5)]"
    />
    <h2 className="text-3xl font-bold text-gray-100">{title}</h2>
  </div>
);

export default function ProjectsSection() {
  // Renombramos la variable de estado para mayor claridad (Clean Code)
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section className="w-full max-w-7xl mx-auto px-4">
      {/* Sección 1: Restaurante (Fila completa) */}
      {RESTAURANT_DATA && (
        <div className="mb-12">
          <SectionHeader title="Restaurante" />
          <SectionCard data={RESTAURANT_DATA} openModal={handleOpenModal} />
        </div>
      )}

      {/* Sección 2 y 3: Uso de CSS Grid para dividirlas en columnas.
        - grid-cols-1: En móviles ocupan 100% (una debajo de otra).
        - md:grid-cols-2: En tablets/escritorio se dividen a la mitad en una sola línea.
        - gap-8: Espacio uniforme y estético entre ambas tarjetas.
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ADMIN_ARCHIVOS_DATA && (
          <div className="flex flex-col h-full">
            <SectionHeader title="Admin de Archivos" />
            <SectionCard
              data={ADMIN_ARCHIVOS_DATA}
              openModal={handleOpenModal}
              gridClass="grid-cols-1 sm:grid-cols-2"
            />
          </div>
        )}

        {GASOLINERIA_DATA && (
          <div className="flex flex-col h-full">
            <SectionHeader title="Gasolineria" />
            <SectionCard
              data={GASOLINERIA_DATA}
              openModal={handleOpenModal}
              gridClass="grid-cols-1 sm:grid-cols-2"
            />
          </div>
        )}
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  );
}
