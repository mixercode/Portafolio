export default function Card({ children, className = "" }) {
  return (
    <div
      className={`backdrop-blur-md bg-[#151926cc] border border-[#2A2F3E] rounded-[48px]  overflow-hidden drop-shadow-2xl
${className} `}
    >
      {children}
    </div>
  );
}
