// Pulse's visual system — built from the same DNA as the Host app
// (paper-grain, deckled-card, linen-shadow, torn-paper edges, tactile
// pill buttons, Cormorant/Plus Jakarta, #1E1611 ink / #FAF8F5 paper /
// #2F483A green / #C2410C rust) rather than a generic admin-dashboard
// palette. No tables, no pills-as-badges, no Lucide — hospitality
// objects instead: ledger lines, punch strips, departure-board markers,
// printed service sheets, and CTAs that feel like the Host app's own.

import type { ReactNode } from "react"
import { Monogram, TornPaperEdge } from "@/components/canvas-decor"
import { GuestSilhouetteIcon, RoomKeyIcon, HouseIcon, BellIcon, ThreadIcon, TeamIcon, StampIcon } from "@/components/pulse-icons"

export type Severity = "critical" | "attention" | "neutral"

const TONE: Record<Severity, string> = {
  critical: "#C2410C",
  attention: "#8A6D3B",
  neutral: "#1E1611",
}

const NAV_SECTIONS: { key: string; label: string; icon: ReactNode; count?: number }[] = [
  { key: "brief", label: "Morning Brief", icon: <HouseIcon className="w-4 h-4" />, count: 5 },
  { key: "conflicts", label: "Conflicts", icon: <ThreadIcon className="w-4 h-4" /> },
  { key: "overbooking", label: "Overbooking", icon: <RoomKeyIcon className="w-4 h-4" /> },
  { key: "vip", label: "VIP Arrival", icon: <BellIcon className="w-4 h-4" /> },
  { key: "team", label: "Team", icon: <TeamIcon className="w-4 h-4" /> },
  { key: "handled", label: "Handled", icon: <StampIcon className="w-4 h-4" /> },
]

const FEED_EVENTS = [
  "06:15 · Léa reported sick for the morning shift",
  "03:10 · Riser isolated, Room 304 offline",
  "02:40 · Guests relocated to Room 217",
  "02:00 · Water sensor triggered, Room 304",
]

const Sep = () => <span className="w-[3px] h-[3px] rounded-full bg-[#1E1611]/25 shrink-0" />

const TopStrip = () => (
  <div className="h-10 shrink-0 flex items-center gap-3 px-7 border-b border-[#1E1611]/8 font-sans text-[11px] text-[#1E1611]/55 relative z-10">
    <span className="font-serif text-[13px] text-[#1E1611] tracking-[0.08em] mr-1">Pulse</span>
    <Sep />
    <span>07:00 CET</span>
    <Sep />
    <span>−2°C · Heavy Snow</span>
    <Sep />
    <span>Funicular 07:20</span>
    <Sep />
    <span>3 / 4 Staff on Duty</span>
    <Sep />
    <span>100% Occupancy</span>
    <div className="flex-1" />
    <span className="text-[#2F483A] font-medium">Elena Moser · Morning Lead</span>
  </div>
)

const NavRail = ({ active }: { active: string }) => (
  <div className="w-[188px] shrink-0 flex flex-col border-r border-[#1E1611]/8 py-5">
    <div className="flex flex-col gap-1 px-3">
      {NAV_SECTIONS.map((s) => {
        const isActive = s.key === active
        return (
          <div
            key={s.key}
            className="flex items-center gap-3 px-3 py-2.5 rounded-[8px]"
            style={{ background: isActive ? "rgba(30,22,17,0.045)" : "transparent" }}
          >
            <span className="shrink-0" style={{ color: isActive ? "#2F483A" : "rgba(30,22,17,0.32)" }}>
              {s.icon}
            </span>
            <div className="min-w-0 flex-1">
              <div className={`text-[12.5px] leading-tight truncate ${isActive ? "text-[#1E1611] font-semibold" : "text-[#1E1611]/45"}`}>{s.label}</div>
              {s.count !== undefined && <div className="text-[9.5px] text-[#C2410C]/85 mt-0.5 font-mono">{s.count} open</div>}
            </div>
            {isActive && <span className="w-[5px] h-[5px] rounded-full bg-[#2F483A] shrink-0" />}
          </div>
        )
      })}
    </div>

    <div className="flex-1" />

    <div className="mx-3 pt-4 border-t border-dashed border-[#1E1611]/12 flex items-center gap-2.5 px-3">
      <div className="w-6 h-6 rounded-full bg-[#EBE5DA] flex items-center justify-center text-[9.5px] font-semibold text-[#1E1611] shrink-0">EM</div>
      <div className="min-w-0">
        <div className="text-[11px] font-medium text-[#1E1611] truncate">Elena Moser</div>
        <div className="text-[9.5px] text-[#1E1611]/40">On shift · Morning Lead</div>
      </div>
    </div>
    <div className="px-6 pt-4">
      <Monogram className="w-5 h-5 text-[#1E1611]/20" />
    </div>
  </div>
)

const OperationsFeed = () => (
  <div className="h-8 shrink-0 flex items-center gap-6 px-7 border-t border-[#1E1611]/8 overflow-hidden font-mono text-[9.5px] text-[#1E1611]/40 tracking-wide whitespace-nowrap">
    <span className="text-[#1E1611]/60 font-sans font-medium text-[9px] uppercase tracking-[0.1em] shrink-0">Operations Feed</span>
    {FEED_EVENTS.map((e, i) => (
      <span key={i} className="shrink-0">{e}</span>
    ))}
  </div>
)

export const PulseShell = ({ active, children }: { active: string; children: ReactNode }) => (
  <div className="w-[1360px] h-[860px] bg-[#FAF8F5] paper-grain rounded-[8px] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.3)] border border-[#1E1611]/10 flex flex-col relative">
    <TopStrip />
    <div className="flex flex-1 min-h-0">
      <NavRail active={active} />
      <div className="flex-1 flex min-w-0">{children}</div>
    </div>
    <OperationsFeed />
  </div>
)

export const ScreenTitle = ({ title, meta, right }: { title: string; meta?: string; right?: ReactNode }) => (
  <div className="h-[52px] shrink-0 flex items-baseline px-7 border-b border-[#1E1611]/8 gap-3">
    <h1 className="font-serif text-[19px] text-[#1E1611]">{title}</h1>
    {meta && <span className="text-[11.5px] text-[#1E1611]/40">{meta}</span>}
    <div className="flex-1" />
    {right}
  </div>
)

export const SectionLabel = ({ children }: { children: ReactNode }) => (
  <div className="text-[9.5px] font-semibold uppercase tracking-[0.14em] text-[#1E1611]/40">{children}</div>
)

export const PriorityMarker = ({ time, severity = "neutral" }: { time: string; severity?: Severity }) => (
  <div className="flex items-baseline gap-1.5">
    <span className="font-mono text-[12.5px] font-semibold tabular-nums" style={{ color: TONE[severity] }}>
      {time}
    </span>
    {severity !== "neutral" && <span className="w-[4px] h-[4px] rounded-full shrink-0" style={{ background: TONE[severity] }} />}
  </div>
)

export const LedgerEntry = ({
  time,
  severity = "neutral",
  icon,
  title,
  meta,
  owner,
  action,
  onActionClick,
}: {
  time: string
  severity?: Severity
  icon?: ReactNode
  title: string
  meta: string
  owner: string
  action: string
  onActionClick?: () => void
}) => (
  <div className="flex items-start gap-5 py-4 border-b border-[#1E1611]/7 last:border-0">
    <div className="w-[62px] pt-0.5 shrink-0">
      <PriorityMarker time={time} severity={severity} />
    </div>
    {icon && <div className="shrink-0 pt-1 text-[#1E1611]/30">{icon}</div>}
    <div className="flex-1 min-w-0">
      <div className="font-serif text-[15px] text-[#1E1611]">{title}</div>
      <div className="text-[11px] text-[#1E1611]/40 mt-1">{meta}</div>
    </div>
    <div className="w-[112px] shrink-0 text-[11.5px] text-[#1E1611]/55 pt-1">{owner}</div>
    <button 
      onClick={onActionClick}
      className="shrink-0 text-[12px] text-[#2F483A] font-medium pt-1 hover:opacity-70 transition-opacity"
    >
      {action} ›
    </button>
  </div>
)

export const EditorialStat = ({ value, label, tone }: { value: ReactNode; label: string; tone?: string }) => (
  <div className="flex flex-col gap-1">
    <span className="font-serif text-[28px] leading-none" style={{ color: tone ?? "#1E1611" }}>
      {value}
    </span>
    <span className="text-[9px] uppercase tracking-[0.12em] text-[#1E1611]/40">{label}</span>
  </div>
)

export const PunchStrip = ({ total, filled, label }: { total: number; filled: number; label: string }) => (
  <div className="flex flex-col gap-1.5 select-none">
    <div className="flex items-center justify-between text-[9px] font-sans font-semibold text-[#1E1611]/45 uppercase tracking-wide">
      <span>{label}</span>
      <span className="font-mono text-[9px] font-bold">{filled}/{total}</span>
    </div>
    <div className="flex gap-1 p-0.5 bg-[#1E1611]/3 rounded border border-[#1E1611]/8">
      {Array.from({ length: total }).map((_, i) => {
        const isFilled = i < filled
        return (
          <div 
            key={i} 
            className="h-3 flex-grow rounded-[2px] border border-[#1E1611]/5 flex items-center justify-center relative transition-all duration-[800ms]"
            style={{ 
              backgroundColor: isFilled ? "#2F483A" : "#FAF8F5",
              boxShadow: isFilled ? "inset 0 1px 2px rgba(47, 72, 58, 0.25)" : "none"
            }}
          >
            {/* Perforation hole punch center indicator */}
            <div 
              className={`w-1 h-1 rounded-full transition-all ${
                isFilled 
                  ? "bg-[#FAF8F5]/60" 
                  : "bg-[#1E1611]/15"
              }`} 
            />
          </div>
        )
      })}
    </div>
  </div>
)

// Paper-card container — gives a section presence against the page
// background without becoming a flat SaaS rectangle (deckled edge + inner line + metal eyelet).
export const Card = ({ children, className = "", tagEyelet = false }: { children: ReactNode; className?: string; tagEyelet?: boolean }) => (
  <div className={`deckled-card linen-shadow rounded-[10px] relative overflow-hidden bg-[#FAF8F5] border border-[#1E1611]/12 p-5 ${className}`}>
    {/* Optional metal eyelet hole for vintage file tag look */}
    {tagEyelet && (
      <div className="absolute top-3 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none select-none z-20">
        <div className="w-3.5 h-3.5 rounded-full bg-[#EBE3D2] border border-[#1E1611]/15 shadow-inner flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#FAF8F5] border border-[#1E1611]/8 shadow-[inset_0_1px_2px_rgba(0,0,0,0.15)]" />
        </div>
      </div>
    )}
    {/* Ledger double outer thin lining */}
    <div className="absolute inset-[3px] border border-[#1E1611]/6 rounded-[8px] pointer-events-none" />
    <div className="relative z-10 flex flex-col h-full">{children}</div>
  </div>
)

// Swiss mechanical watch dial style radial gauge with 30-degree graduations and a thin pointer needle
export const RadialGauge = ({
  value,
  valueLabel,
  label,
  tone = "#2F483A",
  size = 76,
}: {
  value: number
  valueLabel: string
  label: string
  tone?: string
  size?: number
}) => {
  const strokeW = 3.5
  const r = (size - 18) / 2
  const c = 2 * Math.PI * r
  const offset = c * (1 - Math.min(100, Math.max(0, value)) / 100)
  
  // Needle rotation (0% starts at -90deg, 100% ends at 270deg)
  const angle = (value / 100) * 360 - 90
  
  return (
    <div className="flex flex-col items-center gap-2 select-none">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="overflow-visible">
          {/* Dial ticks (12 tick marks at 30-deg intervals like a chronometer) */}
          <g transform={`translate(${size/2}, ${size/2})`} opacity="0.28" stroke="#1E1611" strokeWidth="0.75">
            {Array.from({ length: 12 }).map((_, i) => (
              <line key={i} x1="0" y1={-r - 4} x2="0" y2={-r - 1} transform={`rotate(${i * 30})`} />
            ))}
          </g>
          
          {/* Circular gauge track */}
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(30,22,17,0.06)" strokeWidth={strokeW} />
          
          {/* Active indicator arc */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={tone}
            strokeWidth={strokeW}
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={offset}
            className="transition-all duration-[1200ms] ease-out -rotate-90 origin-center"
          />
          
          {/* Center pivot point */}
          <circle cx={size / 2} cy={size / 2} r="2.5" fill="#1E1611" />
          <circle cx={size / 2} cy={size / 2} r="1" fill="#FAF8F5" />
          
          {/* Instrument needle */}
          <line 
            x1={size / 2} 
            y1={size / 2} 
            x2={size / 2 + (r - 1) * Math.cos((angle * Math.PI) / 180)} 
            y2={size / 2 + (r - 1) * Math.sin((angle * Math.PI) / 180)} 
            stroke="#1E1611" 
            strokeWidth="0.75" 
            opacity="0.85"
            className="transition-all duration-[1200ms] ease-out origin-center"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
          <span className="font-serif text-[12px] font-bold tracking-tight text-[#1E1611]" style={{ fontFamily: "Cormorant Garamond, serif" }}>{valueLabel}</span>
        </div>
      </div>
      <span className="text-[9px] font-sans font-semibold uppercase tracking-[0.12em] text-[#1E1611]/40 text-center leading-tight">{label}</span>
    </div>
  )
}

// Ledger slide-rule comparison grid (ruler layout with a slider notch)
export const BarCompare = ({ label, items }: { label: string; items: { label: string; value: number }[] }) => {
  const max = Math.max(...items.map((i) => i.value))
  return (
    <div className="flex flex-col gap-2 min-w-[160px] select-none">
      <div className="text-[9px] font-sans font-semibold uppercase tracking-[0.12em] text-[#1E1611]/40">{label}</div>
      <div className="flex flex-col gap-2.5">
        {items.map((it, i) => {
          const percentage = (it.value / max) * 100
          return (
            <div key={i} className="flex items-center gap-2.5">
              <span className="text-[10px] font-sans font-medium text-[#1E1611]/60 w-[60px] shrink-0 truncate">{it.label}</span>
              
              {/* Ruler/slide track */}
              <div className="flex-grow h-4 relative bg-[#1E1611]/3 rounded border border-[#1E1611]/8 overflow-hidden flex items-center">
                {/* Scale ticks */}
                <div className="absolute inset-0 flex justify-between pointer-events-none opacity-20">
                  {Array.from({ length: 9 }).map((_, j) => (
                    <div key={j} className={`w-[0.5px] bg-[#1E1611] ${j % 4 === 0 ? "h-full" : "h-1"}`} />
                  ))}
                </div>
                
                {/* Progress color fill */}
                <div 
                  className="h-full bg-[#2F483A]/10 border-r border-[#2F483A] transition-all duration-[1200ms] ease-out" 
                  style={{ width: `${percentage}%` }} 
                />
                
                {/* Slider tab */}
                <div 
                  className="absolute w-1 h-3 bg-[#1E1611] rounded-[1px] transition-all duration-[1200ms] ease-out" 
                  style={{ left: `calc(${percentage}% - 2px)` }} 
                />
              </div>
              
              <span className="text-[11px] font-mono font-bold text-[#1E1611] w-[18px] text-right">{it.value}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const TimelineRibbon = ({ stops }: { stops: { time: string; text: string }[] }) => (
  <div className="flex flex-col">
    {stops.map((s, i) => (
      <div key={i} className="flex gap-3 pb-4 last:pb-0">
        <div className="flex flex-col items-center pt-1">
          <span className="w-[4px] h-[4px] rounded-full bg-[#1E1611]/45 shrink-0" />
          {i < stops.length - 1 && <span className="w-px flex-1 bg-[#1E1611]/12 mt-1" />}
        </div>
        <div>
          <div className="font-mono text-[10px] text-[#1E1611]/40">{s.time}</div>
          <div className="text-[12px] text-[#1E1611]/70 mt-0.5 leading-snug">{s.text}</div>
        </div>
      </div>
    ))}
  </div>
)

export const RecommendationSection = ({ label, children }: { label: string; children: ReactNode }) => (
  <div className="flex flex-col gap-3">
    <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#C2410C]/75">{label}</span>
    <div className="flex flex-col gap-4">{children}</div>
  </div>
)

export const RecommendationLine = ({
  action,
  outcome,
  time,
  confidence,
}: {
  action: string
  outcome: string
  time: string
  confidence?: number
}) => (
  <div>
    <div className="flex items-baseline justify-between gap-2">
      <span className="font-serif text-[14px] text-[#1E1611]">{action}</span>
      <span className="text-[10px] font-mono text-[#1E1611]/35 shrink-0">{time}</span>
    </div>
    <div className="text-[11.5px] text-[#1E1611]/50 mt-1 leading-snug">
      {outcome}
      {confidence !== undefined && <span className="text-[#2F483A]"> · {confidence}% confidence</span>}
    </div>
  </div>
)

export const DependencyNode = ({ tag, severity, title, detail }: { tag: string; severity: Severity; title: string; detail: string }) => (
  <div className="py-3.5">
    <div className="flex items-center gap-2">
      <span className="w-[4px] h-[4px] rounded-full shrink-0" style={{ background: TONE[severity] }} />
      <span className="text-[9.5px] uppercase tracking-[0.1em] font-semibold" style={{ color: TONE[severity] }}>{tag}</span>
    </div>
    <div className="font-serif text-[17px] text-[#1E1611] mt-1.5">{title}</div>
    <div className="text-[12px] text-[#1E1611]/50 mt-1 leading-snug">{detail}</div>
  </div>
)

export const DependencyThread = ({ label }: { label: string }) => (
  <div className="flex items-center gap-2 pl-[3px] py-0.5">
    <div className="w-px h-5 bg-[#1E1611]/15" />
    <span className="text-[10px] italic text-[#1E1611]/35 font-serif">{label}</span>
  </div>
)

// Passport-style guest card — same deckled-card + torn-paper treatment
// as the Host app's own printed cards, so the two apps read as one family.
export const GuestPassport = ({ name, tag, prefs }: { name: string; tag: string; prefs: string[] }) => (
  <div className="deckled-card linen-shadow rounded-[6px] p-5 relative overflow-hidden">
    <TornPaperEdge className="text-[#FAF8F5] opacity-80" />
    <div className="flex gap-3 items-center relative z-10">
      <div className="w-12 h-14 rounded-[3px] bg-[#EBE5DA] border border-[#1E1611]/10 flex items-center justify-center shrink-0">
        <GuestSilhouetteIcon className="w-6 h-6 text-[#1E1611]/30" />
      </div>
      <div>
        <div className="font-serif text-[16px] text-[#1E1611]">{name}</div>
        <div className="text-[10.5px] text-[#1E1611]/40 mt-0.5">{tag}</div>
      </div>
      <Monogram className="w-5 h-5 text-[#1E1611]/15 ml-auto" />
    </div>
    <div className="mt-4 pt-4 border-t border-dashed border-[#1E1611]/12 flex flex-col gap-1.5 relative z-10">
      {prefs.map((p, i) => (
        <div key={i} className="text-[12px] text-[#1E1611]/70">{p}</div>
      ))}
    </div>
  </div>
)

export const RoomCard = ({ room, label, sub }: { room: string; label: string; sub?: string }) => (
  <div className="deckled-card linen-shadow rounded-[6px] px-5 py-4 flex items-center gap-4">
    <RoomKeyIcon className="w-6 h-6 text-[#1E1611]/30 shrink-0" />
    <div>
      <div className="font-serif text-[17px] text-[#1E1611]">{room}</div>
      <div className="text-[11px] text-[#1E1611]/40 mt-0.5">{label}</div>
    </div>
    {sub && <div className="ml-auto text-right text-[11px] text-[#1E1611]/50">{sub}</div>}
  </div>
)

export const OwnerToken = ({ initials, name, role, tone }: { initials: string; name: string; role?: string; tone?: string }) => (
  <div className="flex items-center gap-2.5">
    <div className="w-6 h-6 rounded-full flex items-center justify-center text-[9.5px] font-semibold shrink-0" style={{ background: "#EBE5DA", color: tone ?? "#1E1611" }}>
      {initials}
    </div>
    <div className="leading-tight">
      <div className="text-[11.5px] text-[#1E1611]">{name}</div>
      {role && <div className="text-[9.5px] text-[#1E1611]/40">{role}</div>}
    </div>
  </div>
)

// iOS-style round checkmarks — matches the Host app's tactile, physical
// touch targets rather than square admin checkboxes.
export const ServiceSheet = ({ items }: { items: { label: string; done: boolean }[] }) => (
  <div className="flex flex-col gap-2.5">
    {items.map((it, i) => (
      <div key={i} className="flex items-center gap-2.5 text-[12px]">
        <span
          className="w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors"
          style={{ background: it.done ? "#2F483A" : "transparent", borderColor: it.done ? "#2F483A" : "rgba(30,22,17,0.25)" }}
        >
          {it.done && <span className="w-1.5 h-1.5 bg-[#FAF8F5] rounded-full" />}
        </span>
        <span className={it.done ? "text-[#1E1611]/35 line-through" : "text-[#1E1611]/75"}>{it.label}</span>
      </div>
    ))}
  </div>
)

export const ActionText = ({ children, muted = false }: { children: ReactNode; muted?: boolean }) => (
  <button className={`text-[12px] font-medium transition-opacity hover:opacity-70 ${muted ? "text-[#1E1611]/55" : "text-[#2F483A]"}`}>
    {children} ›
  </button>
)

// The Host app's actual mobile CTA treatment: paper-grain + tactile-switch
// (haptic-feeling hover/active states from globals.css) + full pill shape +
// tracked uppercase label + a soft glow shadow tinted to match. This is
// what ties Pulse's primary actions to the Host app's own buttons.
export const PrimaryAction = ({ children, className = "", onClick }: { children: ReactNode; className?: string; onClick?: () => void }) => (
  <button
    onClick={onClick}
    className={`paper-grain tactile-switch h-12 px-7 rounded-full bg-[#2F483A] hover:bg-[#26392E] active:translate-y-[0.5px] transition-all text-[#FAF8F5] font-sans text-[11px] uppercase tracking-[0.15em] font-bold border border-[#2F483A]/20 shadow-[0_4px_14px_rgba(47,72,58,0.28)] ${className}`}
  >
    {children}
  </button>
)

export const SecondaryAction = ({ children, onClick }: { children: ReactNode; onClick?: () => void }) => (
  <button 
    onClick={onClick}
    className="tactile-switch h-12 px-7 rounded-full border border-[#1E1611]/18 text-[#1E1611]/70 font-sans text-[11px] uppercase tracking-[0.15em] font-bold hover:border-[#1E1611]/35 transition-all"
  >
    {children}
  </button>
)

export const PulseDesktopHeader = () => (
  <div className="max-w-[1360px] mx-auto w-full flex items-end justify-between mb-10 text-[#1E1611]">
    <div className="flex items-center gap-3">
      <Monogram className="w-8 h-8 text-[#1E1611]/35" />
      <div>
        <div className="font-serif text-[26px] text-[#1E1611] tracking-[0.1em]">Pulse</div>
        <div className="text-[12.5px] text-[#1E1611]/55 mt-0.5">Aurelia — operations command centre · the 7:00 AM handover</div>
      </div>
    </div>
    <div className="text-[11.5px] text-[#1E1611]/55 leading-relaxed text-right max-w-[260px]">
      Built for speed — from &ldquo;everything is on fire&rdquo; to &ldquo;handled&rdquo; in two minutes.
    </div>
  </div>
)

export const PulseScreenCaption = ({ number, text }: { number: string; text: string }) => (
  <div className="flex items-baseline gap-2.5 text-[#1E1611]">
    <span className="text-[11px] font-mono text-[#2F483A] tracking-wider font-semibold">{number}</span>
    <span className="text-[12.5px] text-[#1E1611]/60">{text}</span>
  </div>
)
