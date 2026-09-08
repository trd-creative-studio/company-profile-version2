import svgPaths from "@/imports/LandingPage/svg-v9p06c6ec9";

export function ArrowRightIcon({ color = "white" }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path d={svgPaths.p2da47600} fill={color} />
    </svg>
  );
}

export function ChevronDown({ stroke = "#1E1E1E", className = "" }: { stroke?: string; className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
      <path d="M19 9L12 15L5 9" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

export function LightbulbSvg() {
  return (
    <svg width="20" height="20" viewBox="0 0 13.75 17.9167" fill="none">
      <path d={svgPaths.p3f0e1c00} stroke="#1E1E1E" strokeWidth="1.25" />
      <path d="M6.875 13.125V11.4583" stroke="#1E1E1E" strokeLinecap="round" strokeWidth="1.25" />
      <path d={svgPaths.pf362280} stroke="#1E1E1E" strokeLinecap="round" strokeWidth="1.25" />
    </svg>
  );
}

export function MedalSvg() {
  return (
    <svg width="20" height="20" viewBox="0 0 17.9154 17.0831" fill="none">
      <path d={svgPaths.p3592900} stroke="#1E1E1E" strokeWidth="1.25" />
      <path d={svgPaths.p2afb3900} stroke="#1E1E1E" strokeWidth="1.25" />
      <path d={svgPaths.p3ad42500} stroke="#1E1E1E" strokeWidth="1.25" />
      <path d={svgPaths.p1975c300} stroke="#1E1E1E" strokeWidth="1.25" />
    </svg>
  );
}

export function ForwardSvg() {
  return (
    <svg width="20" height="20" viewBox="0 0 17.9166 14.5835" fill="none">
      <path d={svgPaths.p1bd4ee00} stroke="#1E1E1E" strokeWidth="1.25" />
      <path d={svgPaths.p2099b600} stroke="#1E1E1E" strokeWidth="1.25" />
    </svg>
  );
}

export function CursorSvg() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d={svgPaths.p1d137e80} stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
    </svg>
  );
}

export function ArrowUpRight({ className = "", stroke = "#1E1E1E" }: { className?: string; stroke?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
      <path d="M6 18L18 6M9 6H18V15" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}
