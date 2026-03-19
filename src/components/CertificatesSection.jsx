import React, { useState } from "react";
import Card from "./Card";
import Modal from "./Modal"; // Importamos el nuevo Modal
import { CERTIFICATES_DATA } from "../data/certificates";

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (cert) => setSelectedCert(cert);
  const closeModal = () => setSelectedCert(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {CERTIFICATES_DATA.map((cert) => (
          <Card key={cert.id} className="flex flex-col h-full overflow-hidden">
            <div className="w-full h-48 overflow-hidden relative group">
              <img
                src={cert.previewUrl}
                alt={`Vista previa de ${cert.title}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
            </div>

            <div className="p-6 grow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-100 mb-2 leading-tight">
                  {cert.title}
                </h3>
              </div>

              <button
                onClick={() => openModal(cert)}
                className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-[#164ae8] hover:bg-[#123bb8] text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-[0_4px_14px_0_rgba(22,74,232,0.39)] hover:shadow-[0_6px_20px_rgba(22,74,232,0.23)]"
              >
                Ver Certificado
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
              </button>
            </div>
          </Card>
        ))}
      </div>

      <Modal
        isOpen={!!selectedCert}
        onClose={closeModal}
        pdfUrl={selectedCert?.pdfUrl}
        title={selectedCert?.title}
      />
    </>
  );
}
