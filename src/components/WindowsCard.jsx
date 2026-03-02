import { RxDotFilled } from "react-icons/rx";

const WINDOW_CONTROLS = [
  { id: "close", color: "#7e2b2f" },
  { id: "minimize", color: "#7b6311" },
  { id: "maximize", color: "#176c3c" },
];

export default function WindowCard({ children }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-[#2A2F3E] bg-[#00000033]">
      <div className="flex items-center px-3 pt-2 -space-x-3">
        {WINDOW_CONTROLS.map((control) => (
          <RxDotFilled
            key={control.id}
            color={control.color}
            size={35}
            className="transition duration-200 hover:brightness-200 cursor-pointer"
            aria-hidden="true"
          />
        ))}
      </div>
      <div className="px-2 pb-2">{children}</div>
    </div>
  );
}
