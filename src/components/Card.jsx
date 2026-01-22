export default function Card({ children }) {
  return (
    <div
      className="flex bg-linear-to-b from-[#0f1422] to-[#090d17]
      shadow-[0_20px_60px_rgba(0,0,0,0.6)] border-[#1c2a56] p-10 border-3 rounded-4xl"
    >
      {children}
    </div>
  );
}
