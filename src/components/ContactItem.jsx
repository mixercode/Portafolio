export default function ContactItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-xl p-1 hover:bg-[#121b36] transition-colors">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#121b36]">
        <Icon size={18} className="text-[#164ae8]" />
      </div>

      <div className="flex flex-col">
        <span className="text-sm font-light text-gray-400">{label}</span>
        <span className="text-xs text-white">{value}</span>
      </div>
    </div>
  );
}
