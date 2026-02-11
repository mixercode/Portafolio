import { RxDotFilled } from "react-icons/rx";

export default function WindowsCard({ children }) {
  return (
    <div className="flex flex-col rounded-2xl border border-[#2A2F3E] bg-[#00000033]">
      <div className="flex items-center px-3 py-1">
        <RxDotFilled
          color="#7e2b2f"
          size={30}
          className="hover:brightness-200 transition"
        />
        <RxDotFilled
          color="#7b6311"
          size={30}
          className="hover:brightness-200 transition"
        />
        <RxDotFilled
          color="#176c3c"
          size={30}
          className="hover:brightness-200 transition"
        />
      </div>
      <div className="px-5">{children}</div>
    </div>
  );
}
