// src/components/CertificatesSection.jsx
import React from "react";
import Card from "./Card";
import { CERTIFICATES_DATA } from "../data/certificates"; // Importamos los datos

export default function CertificatesSection() {
  return (
    // Usamos CSS Grid: 1 columna en móvil, 2 en pantallas medianas (md), 3 en grandes (lg)
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {CERTIFICATES_DATA.map((cert) => (
        <Card key={cert.id} className="flex flex-col h-full p-6">
          {/* Contenido principal de la tarjeta */}
          <div className="grow flex flex-col justify-between">
            <div>
              {/* Título del certificado */}
              <h3 className="text-xl font-bold text-gray-100 mb-2 leading-tight">
                {cert.title}
              </h3>

              {/* Entidad emisora */}
              <p className="text-sm text-blue-400 font-medium mb-1">
                {cert.issuer}
              </p>

              {/* Fecha */}
              <p className="text-xs text-gray-500 mb-6">{cert.date}</p>
            </div>

            {/* Botón para abrir el PDF */}
            <a
              href={cert.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-[#164ae8] hover:bg-[#123bb8] text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-[0_4px_14px_0_rgba(22,74,232,0.39)] hover:shadow-[0_6px_20px_rgba(22,74,232,0.23)]"
            >
              Ver Certificado
              {/* Ícono SVG de flecha (opcional, le da un toque profesional) */}
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                ></path>
              </svg>
            </a>
          </div>
        </Card>
      ))}
    </div>
  );
}
