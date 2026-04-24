import React, { useState } from "react";
import SectionCard from "./SectionCard";
import Modal from "./ModalProjects";
import { RESTAURANT_DATA } from "../data/restaurant";
import { ADMIN_ARCHIVOS_DATA } from "../data/adminArchivos";

export default function ProyectsSection() {
  const [project, setProject] = useState(null);

  const openModal = (pro) => setProject(pro);
  const closeModal = () => setProject(null);

  return (
    <>
      {RESTAURANT_DATA && (
        <>
          <div className="flex flex-row items-center gap-4 mt-10 mb-6">
            <div
              aria-hidden="true"
              className="w-5 h-5 rounded-full border-10 border-[#164ae8] shadow-[0_0_8px_rgba(22,74,232,0.5)]"
            />
            <h2 className="text-3xl font-bold text-gray-100 ">Restaurante</h2>
          </div>
          <SectionCard data={RESTAURANT_DATA} openModal={openModal} />
        </>
      )}
      {ADMIN_ARCHIVOS_DATA && (
        <>
          <div className="flex flex-row items-center gap-4 mt-10 mb-6">
            <div
              aria-hidden="true"
              className="w-5 h-5 rounded-full border-10 border-[#164ae8] shadow-[0_0_8px_rgba(22,74,232,0.5)]"
            />
            <h2 className="text-3xl font-bold text-gray-100 ">
              Admin de Archivos
            </h2>
          </div>
          <SectionCard data={ADMIN_ARCHIVOS_DATA} openModal={openModal} />
        </>
      )}

      <Modal isOpen={!!project} onClose={closeModal} project={project} />
    </>
  );
}
