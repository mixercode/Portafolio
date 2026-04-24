import React, { useEffect, useState, useCallback } from "react";
import { IoIosClose } from "react-icons/io";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function ModalProjectDetails({ isOpen, onClose, project }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // 1. NUEVO: Creamos una única función responsable de cerrar y limpiar (SRP)
  const handleCloseModal = useCallback(() => {
    setActiveImageIndex(0); // Reseteamos el índice de la imagen inmediatamente
    onClose(); // Notificamos al padre que cierre el modal
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleCloseModal(); // Usamos la nueva función aquí
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleCloseModal]);

  // ELIMINAMOS el useEffect que causaba el error de renders en cascada.

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 transition-all duration-300"
      onClick={handleCloseModal} // Usamos la nueva función aquí
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-6xl h-[90vh] sm:h-[85vh] bg-[#151926] border border-[#2A2F3E] rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#2A2F3E] bg-[#1a1f2e] shrink-0">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-100 truncate pr-4 tracking-tight">
            {project.title}
          </h3>
          <button
            onClick={handleCloseModal} // Usamos la nueva función aquí
            className="text-gray-400 hover:text-white transition-all p-1 rounded-lg hover:bg-[#2A2F3E] active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          >
            <IoIosClose size={28} />
          </button>
        </div>

        {/* BODY - Diseño dividido (Grid / Flex) */}
        <div className="flex flex-col lg:flex-row grow overflow-y-auto lg:overflow-hidden bg-[#0d111a]">
          {/* SECCIÓN IZQUIERDA: Galería de Imágenes */}
          <div className="w-full lg:w-3/5 p-6 flex flex-col gap-4 border-b lg:border-b-0 lg:border-r border-[#2A2F3E] overflow-y-auto">
            {/* Imagen Principal */}
            <div className="relative w-full aspect-video bg-[#1a1f2e] rounded-xl overflow-hidden border border-[#2A2F3E]">
              <img
                src={project.images[activeImageIndex]}
                alt={`Captura principal de ${project.title}`}
                className="w-full h-full object-cover transition-opacity duration-300"
                loading="lazy"
              />
            </div>

            {/* Miniaturas (Thumbnails) */}
            {project.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#2A2F3E] scrollbar-track-transparent">
                {project.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative shrink-0 w-24 sm:w-32 aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                      activeImageIndex === index
                        ? "border-indigo-500 opacity-100"
                        : "border-transparent opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Miniatura ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* SECCIÓN DERECHA: Detalles y Enlaces */}
          <div className="w-full lg:w-2/5 p-6 flex flex-col gap-6 overflow-y-auto scrollbar-thin scrollbar-thumb-[#2A2F3E] scrollbar-track-transparent">
            {/* Descripción */}
            <div>
              <h4 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-2">
                Acerca del proyecto
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {project.description}
              </p>
            </div>

            {/* Tecnologías */}
            <div>
              <h4 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-3">
                Stack Tecnológico
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium text-gray-200 bg-[#1a1f2e] border border-[#2A2F3E] rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Enlaces (Botones de acción) */}
            <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors focus:ring-2 focus:ring-indigo-500/50"
                >
                  <FiExternalLink size={18} />
                  Ver Proyecto
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1a1f2e] hover:bg-[#2A2F3E] text-white font-medium rounded-lg border border-[#2A2F3E] transition-colors focus:ring-2 focus:ring-gray-500/50"
                >
                  <FiGithub size={18} />
                  Código Fuente
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
