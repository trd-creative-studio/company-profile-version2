import { ArrowRightIcon } from "./Icons";

export function OrangeBtn({ label, className = "", onClick, type = "button", disabled = false }: { label: string; className?: string; onClick?: (e?: any) => void; type?: "button" | "submit" | "reset"; disabled?: boolean }) {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`bg-[#eb5503] flex gap-2.5 items-center justify-center px-5 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:opacity-90"} ${className}`}>
      <span className="font-mono font-light text-white text-base leading-normal">{label}</span>
      <ArrowRightIcon color="white" />
    </button>
  );
}
