// Designer Canvas Details — shared decorative flourishes for the
// Aurelia design-canvas presentations (Host app + Pulse internal ops)

export const Monogram = ({ className = "w-8 h-8 text-[#1E1611]" }: { className?: string }) => (
  <svg viewBox="0 0 60 60" className={`${className} stroke-[0.75] fill-none stroke-current`} aria-hidden="true">
    <circle cx="30" cy="30" r="24" strokeDasharray="1.5 2" />
    <path d="M30 15 L21 41 M30 15 L39 41 M25 32 H35" />
    <path d="M19 41 H23 M37 41 H41 M27 15 H33" strokeWidth="1.5" />
    <path d="M30 6 V9 M30 51 V54 M6 30 H9 M51 30 H54" strokeWidth="0.5" />
  </svg>
)

export const TornPaperEdge = ({ className = "", isBottom = false }: { className?: string; isBottom?: boolean }) => {
  const colorClass = className.includes("text-") ? "" : "fill-[#FAF8F5] text-[#FAF8F5]"
  return (
    <svg
      viewBox="0 0 120 12"
      preserveAspectRatio="none"
      className={`w-full h-4 absolute left-0 z-20 pointer-events-none ${isBottom ? "-bottom-0.5 rotate-180" : "-top-3.5"} ${colorClass} ${className}`}
    >
      <path d="M0,12 C8,6 15,9 23,5 C30,10 38,7 45,4 C52,9 60,5 68,7 C75,4 83,10 91,5 C98,8 106,4 120,12 Z" fill="currentColor" />
    </svg>
  )
}

export const MaskingTape = ({ className = "rotate-12 w-12 h-4" }: { className?: string }) => (
  <div className={`absolute bg-[#FAF8F5]/50 border-l border-r border-[#1E1611]/8 backdrop-blur-[0.5px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] z-30 pointer-events-none ${className}`} style={{ mixBlendMode: 'multiply' }} />
)

export const PushPin = ({ className = "" }: { className?: string }) => (
  <div className={`absolute w-3 h-3 rounded-full bg-[#EF4444] border border-[#DC2626] shadow-[0_1.5px_3.5px_rgba(0,0,0,0.35)] z-30 pointer-events-none ${className}`}>
    <div className="w-1 h-1 rounded-full bg-white/40 absolute top-0.5 left-0.5" />
    <div className="w-0.5 h-2 bg-neutral-400 absolute top-2 left-1.5 -translate-x-1/2 -rotate-12 origin-top" />
  </div>
)

export const CoffeeRing = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={`absolute w-28 h-28 stroke-[#8C6D58]/12 fill-none stroke-[0.75] pointer-events-none z-30 ${className}`}>
    <circle cx="50" cy="50" r="42" strokeDasharray="35 5 2 10 15 2 30 5" />
    <circle cx="48" cy="52" r="39" strokeDasharray="10 40 5 15 2 20" />
  </svg>
)
