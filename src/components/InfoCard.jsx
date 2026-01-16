export default function InfoCard({ name, description, email }) {
  return (
    <div className="w-80 h-80 bg-[#151926] border-2 border-[#2a2f3e] columns-1">
      <a>{name}</a>
      <p className="text-sm mt-2">{description}</p>
      <p className="text-xs mt-4">{email}</p>
    </div>
  );
}
