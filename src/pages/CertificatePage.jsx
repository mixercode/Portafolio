import CertificatesSection from "../components/CertificatesSection";
import NavigationCard from "../components/NavigationCard";

export default function CertificatePage() {
  return (
    <>
      <NavigationCard title={"Certificados"}>
        <div className="flex flex-row gap-10">
          <p className="w-full text-left">
            Como apacionado por el aprendizaje continuo, he obtenido diversos
            certificados que respaldan mis habilidades y conocimientos en el
            campo de la programación. Estos certificados reflejan mi compromiso
            con la excelencia y mi dedicación para mantenerme actualizado en las
            últimas tecnologías y prácticas de desarrollo. Cada certificado
            representa un hito importante en mi trayectoria profesional,
            demostrando mi capacidad para adquirir nuevas habilidades y
            aplicarlas de manera efectiva en proyectos reales.
          </p>
        </div>
      </NavigationCard>
      <div className="flex flex-row items-center gap-4 mt-10 mb-6">
        <div
          aria-hidden="true"
          className="w-5 h-5 rounded-full border-10 border-[#164ae8] shadow-[0_0_8px_rgba(22,74,232,0.5)]"
        />
        <h2 className="text-3xl font-bold text-gray-100 ">Certificados</h2>
      </div>
      <CertificatesSection />
    </>
  );
}
