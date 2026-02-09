export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-[#0f1422]  /* Fondo oscuro sólido o gradiente muy sutil */
        shadow-[0_20px_60px_rgba(0,0,0,0.6)] 
        border border-[#1c2a56] 
        rounded-[2.5rem] /* Curvatura pronunciada (40px aprox) */
        overflow-hidden
        ${className}
      `}
    >
      {children}
    </div>
  );
}
