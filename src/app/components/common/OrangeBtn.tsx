export function OrangeBtn({ label, className = "", onClick, type = "button", disabled = false }: { label: string; className?: string; onClick?: (e?: any) => void; type?: "button" | "submit" | "reset"; disabled?: boolean }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-[#eb5503] hover:bg-[#d44c02] text-white px-4 py-2 rounded-full font-mono text-xs md:text-sm font-regular tracking-wider flex items-center justify-center gap-4 transition-all duration-200 ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${className}`}
    >
      <span>{label}</span>
      <span className="text-[10px]">▶</span>
    </button>
  );
}
