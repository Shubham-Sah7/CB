// Pulse desktop screens — the internal operating system of the Aurelia
// resort, built with the same visual DNA as the Host app: paper, ink,
// deckled cards, tactile pill CTAs, editorial numbers. Not a SaaS dashboard.

import type { ReactNode } from "react"
import { RoomKeyIcon, BellIcon, HouseIcon, LuggageIcon } from "@/components/pulse-icons"
import {
  PulseShell,
  ScreenTitle,
  SectionLabel,
  LedgerEntry,
  EditorialStat,
  PunchStrip,
  TimelineRibbon,
  RecommendationSection,
  RecommendationLine,
  DependencyNode,
  DependencyThread,
  GuestPassport,
  OwnerToken,
  PrimaryAction,
  Card,
  RadialGauge,
  BarCompare,
} from "@/components/pulse-system"

// Props interface matching app/pulse/page.tsx states
export interface PulseProps {
  onNavigate?: (tab: number) => void
  overbookingResolution: "pending" | "rebooked" | "consolidate" | "decline"
  setOverbookingResolution: (val: "pending" | "rebooked" | "consolidate" | "decline") => void
  isStaffReallocated: boolean
  setIsStaffReallocated: (val: boolean) => void
  vipChampagne: boolean
  setVipChampagne: (val: boolean) => void
  vipFireplace: boolean
  setVipFireplace: (val: boolean) => void
  vipBedding: boolean
  setVipBedding: (val: boolean) => void
  earlyCheckoutRequested: boolean
  setEarlyCheckoutRequested: (val: boolean) => void
  secondHousekeeperAdded: boolean
  setSecondHousekeeperAdded: (val: boolean) => void
}

const OVERNIGHT_LOG = [
  { time: "02:00", text: "Water sensor triggered, Room 304" },
  { time: "02:40", text: "Guests relocated to 217 by night manager" },
  { time: "03:10", text: "Maintenance isolated the riser; 304 offline" },
  { time: "06:15", text: "Léa reported sick for the morning shift" },
]

// ==================== SCREEN 01: MORNING BRIEF ====================

export const PulseBriefDesktop = ({ 
  onNavigate,
  overbookingResolution,
  isStaffReallocated,
}: { 
  onNavigate?: (tab: number) => void
  overbookingResolution: "pending" | "rebooked" | "consolidate" | "decline"
  isStaffReallocated: boolean
}) => {
  const briefIssues = [
    {
      time: "02:00",
      severity: "critical" as const,
      icon: <HouseIcon className="w-4 h-4" />,
      title: "Room 304 flooded",
      meta: "Guests moved to 217 at 02:40 · room offline indefinitely",
      owner: "Anna",
      action: "Apologize",
      onActionClick: () => onNavigate?.(5),
    },
    {
      time: "by 09:00",
      severity: overbookingResolution === "pending" ? ("critical" as const) : ("neutral" as const),
      icon: <RoomKeyIcon className="w-4 h-4" />,
      title: "Overbooked by one room tonight",
      meta: overbookingResolution !== "pending" ? `Resolved: ${overbookingResolution}` : "304 pushed a sold-out night one over capacity",
      owner: "Elena · you",
      action: overbookingResolution !== "pending" ? "Review" : "Resolve",
      onActionClick: () => onNavigate?.(2),
    },
    {
      time: "by 11:00",
      severity: "attention" as const,
      icon: <BellIcon className="w-4 h-4" />,
      title: "VIP couple arriving early",
      meta: "Brandt · 6th stay — Room 208 checks out at noon",
      owner: "Sofia",
      action: "Prepare",
      onActionClick: () => onNavigate?.(3),
    },
    {
      time: "before shift",
      severity: isStaffReallocated ? ("neutral" as const) : ("attention" as const),
      icon: <LuggageIcon className="w-4 h-4" />,
      title: "Front office short-staffed",
      meta: isStaffReallocated ? "Resolved: reallocated tasks to Marc & Sofia" : "Léa out sick — 3 of 4 today, 6 tasks need an owner",
      owner: "Elena · you",
      action: isStaffReallocated ? "Review" : "Rebalance",
      onActionClick: () => onNavigate?.(4),
    },
    {
      time: "all day",
      severity: "neutral" as const,
      icon: <HouseIcon className="w-4 h-4" />,
      title: "14 arrivals · 11 departures · group of 8",
      meta: "Standard load, running alongside the above",
      owner: "Front desk",
      action: "Review",
      onActionClick: () => onNavigate?.(5),
    },
  ]

  return (
    <PulseShell active="brief">
      <div className="flex-1 flex flex-col min-w-0">
        <ScreenTitle title="Morning Brief" meta="Wednesday 15 July" />
        <div className="flex-1 flex min-w-0">
          <div className="flex-1 flex flex-col px-8 py-6 min-w-0 gap-6">
            <Card className="px-6 py-5 flex items-center gap-8 bg-white border border-[#1E1611]/8">
              <RadialGauge value={95.5} valueLabel="86/90" label="Rooms Ready" />
              <RadialGauge value={100} valueLabel="100%" label="Occupancy" />
              <RadialGauge value={isStaffReallocated ? 100 : 75} valueLabel={isStaffReallocated ? "100%" : "75%"} label="Staff Capacity" tone={isStaffReallocated ? "#2F483A" : "#8A6D3B"} />
              <div className="w-px self-stretch bg-[#1E1611]/8" />
              <EditorialStat value={overbookingResolution === "pending" ? "2" : "1"} label="Critical" tone="#C2410C" />
              <EditorialStat value="1" label="VIP Arrivals" />
              <div className="w-px self-stretch bg-[#1E1611]/8" />
              <BarCompare label="Today's Load" items={[{ label: "Arrivals", value: 14 }, { label: "Departures", value: 11 }]} />
              <div className="w-[130px] ml-auto">
                <PunchStrip total={10} filled={7} label="Housekeeping" />
              </div>
            </Card>

            <Card className="px-6 py-5 flex-1 flex flex-col min-h-0 bg-white border border-[#1E1611]/8">
              <div className="flex items-baseline justify-between mb-1">
                <SectionLabel>Needs you · ordered by urgency</SectionLabel>
                <span className="text-[11px] text-[#1E1611]/35 italic font-serif">Start at the top</span>
              </div>
              <div className="overflow-y-auto max-h-[300px]">
                {briefIssues.map((issue, i) => (
                  <LedgerEntry key={i} {...issue} />
                ))}
              </div>
            </Card>
          </div>

          <div className="w-[300px] shrink-0 px-5 py-6 flex flex-col gap-5 overflow-y-auto">
            <Card className="px-5 py-5 flex flex-col gap-4 bg-white border border-[#1E1611]/8">
              <SectionLabel>Recommended</SectionLabel>
              <RecommendationSection label="Now">
                <RecommendationLine action="Apologize to 304 guests" outcome="Warm note + amenity to 217" time="2 min" confidence={96} />
                {overbookingResolution === "pending" && (
                  <RecommendationLine action="Resolve the overbooking" outcome="Clears three downstream items" time="3 min" confidence={94} />
                )}
              </RecommendationSection>
              <RecommendationSection label="Next">
                <RecommendationLine action="Green-light VIP turnaround" outcome="Confirms the early checkout" time="2 min" confidence={88} />
              </RecommendationSection>
              {!isStaffReallocated && (
                <RecommendationSection label="Later">
                  <RecommendationLine action="Rebalance the shift" outcome="Restores 4-of-4 capacity" time="3 min" confidence={82} />
                </RecommendationSection>
              )}
            </Card>

            <Card className="px-5 py-5 bg-white border border-[#1E1611]/8">
              <SectionLabel>Overnight Log</SectionLabel>
              <div className="mt-3">
                <TimelineRibbon stops={OVERNIGHT_LOG} />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </PulseShell>
  )
}

// ==================== SCREEN 02: CONFLICTS ====================

export const PulseConflictsDesktop = ({
  onNavigate,
  overbookingResolution,
  isStaffReallocated,
}: {
  onNavigate?: (tab: number) => void
  overbookingResolution: "pending" | "rebooked" | "consolidate" | "decline"
  isStaffReallocated: boolean
}) => (
  <PulseShell active="conflicts">
    <div className="flex-1 flex flex-col min-w-0">
      <ScreenTitle title="How these connect" meta="One root cause, four consequences" />
      <div className="flex-1 flex min-w-0">
        <div className="flex-1 px-8 py-7 min-w-0">
          <Card className="px-8 py-6 max-w-[480px] bg-white border border-[#1E1611]/8">
            <DependencyNode tag="Root cause" severity="critical" title="Room 304 flooded" detail="Pipe leak at 02:00. Room offline for the foreseeable — one fewer sellable room." />
            <DependencyThread label="causes" />
            <DependencyNode 
              tag="Critical" 
              severity={overbookingResolution === "pending" ? "critical" : "neutral"} 
              title="Overbooked by one" 
              detail={overbookingResolution !== "pending" ? `Resolved: ${overbookingResolution}` : "Sold-out Swiss summit night, now one over capacity. Decision needed by 09:00."} 
            />
            <DependencyThread label="forces" />
            <DependencyNode tag="Attention" severity="attention" title="VIP room conflict" detail="Room 208 held for the Brandts, occupied until noon. Arrival 11:00." />
            <DependencyThread label="delays" />
            <DependencyNode tag="Attention" severity="attention" title="Housekeeping crunch" detail="Under an hour to turn 208 before 11:00 — one fewer housekeeper." />
            <div className="ml-4 mt-1 pl-4 border-l border-dashed border-[#1E1611]/12">
              <DependencyNode 
                tag="Compounding" 
                severity={isStaffReallocated ? "neutral" : "attention"} 
                title="Front office short one (sick)" 
                detail={isStaffReallocated ? "Resolved: rebalanced" : "Fewer hands make every step above slower."} 
              />
            </div>
          </Card>
        </div>
        <div className="w-[320px] shrink-0 px-5 py-7">
          <Card className="px-6 py-6 h-full flex flex-col bg-white border border-[#1E1611]/8">
            <SectionLabel>Reading the chain</SectionLabel>
            <div className="font-serif text-[20px] text-[#1E1611] mt-3 leading-snug">It all traces back to Room 304.</div>
            <p className="text-[12.5px] text-[#1E1611]/55 leading-relaxed mt-3">
              One flooded room removed a night&apos;s last bit of slack. Everything downstream — the overbooking, the VIP squeeze, the
              housekeeping crunch — is a consequence, not a separate fire.
            </p>
            <div className="mt-6 pt-5 border-t border-dashed border-[#1E1611]/12">
              <div className="text-[10.5px] font-semibold text-[#2F483A] uppercase tracking-wide">Do this first</div>
              <p className="text-[12.5px] text-[#1E1611] mt-1.5 leading-relaxed">
                Resolving the overbooking clears <span className="font-semibold">three</span> of the four downstream items at once.
              </p>
            </div>
            <div className="flex-1" />
            {overbookingResolution === "pending" ? (
              <PrimaryAction onClick={() => onNavigate?.(2)} className="w-full">
                Resolve the overbooking
              </PrimaryAction>
            ) : (
              <div className="p-3 bg-[#EAF0E4] border border-[#4E6A57]/30 rounded text-[#4E6A57] text-[12px] text-center font-bold">
                ✓ Overbooking Resolved
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  </PulseShell>
)

// ==================== SCREEN 03: OVERBOOKING RESOLUTION ====================

export const PulseOverbookingDesktop = ({
  overbookingResolution,
  setOverbookingResolution,
}: {
  overbookingResolution: "pending" | "rebooked" | "consolidate" | "decline"
  setOverbookingResolution: (val: "pending" | "rebooked" | "consolidate" | "decline") => void
}) => (
  <PulseShell active="overbooking">
    <div className="w-[268px] shrink-0 px-5 py-7">
      <Card className="px-6 py-6 h-full flex flex-col bg-white border border-[#1E1611]/8">
        <SectionLabel>The situation · tonight</SectionLabel>
        <div className="font-serif text-[20px] text-[#1E1611] mt-3">Overbooked by one.</div>
        <div className="flex items-center gap-5 mt-5 pb-5 border-b border-dashed border-[#1E1611]/12">
          <RadialGauge value={98.9} valueLabel="89/90" label="Usable Rooms" size={62} />
          <EditorialStat value="+1" label="Without a room" tone="#C2410C" />
        </div>
        <p className="text-[12px] text-[#1E1611]/55 leading-relaxed mt-4">
          Room 304 offline removed the last of tonight&apos;s capacity. One incoming reservation must be handled with care.
        </p>
        <div className="mt-5 text-[11.5px] text-[#8A6D3B] font-medium">Decide before 09:00 — guest is mid-journey</div>
      </Card>
    </div>

    <div className="flex-1 flex flex-col min-w-0">
      <ScreenTitle title="Resolve the overbooking" meta="Compare impact, then confirm" />
      <div className="flex-1 px-8 py-6 flex flex-col min-w-0">
        <Card className="px-6 py-2 flex-1 bg-white border border-[#1E1611]/8">
          {[
            {
              key: "rebooked" as const,
              title: "Rebook to sister property (Chalet Verbois)",
              detail: "Chalet Verbois, 6 min transfer. Complimentary car both ways, one free night on return.",
              guest: "Minimal — upgrade & return perk soften it",
              ops: "Low — partner has availability now",
              revenue: "−CHF 1,400 tonight, recovered on return",
            },
            {
              key: "consolidate" as const,
              title: "Consolidate a flexible party",
              detail: "Move a two-room family booking into a suite, freeing one room.",
              guest: "Moderate — asks a guest to shift rooms",
              ops: "Medium — coordination & re-clean",
              revenue: "Neutral — suite comped",
            },
            {
              key: "decline" as const,
              title: "Decline the newest booking",
              detail: "Turn away the most recent, lowest-value reservation with full refund and gesture.",
              guest: "High — a guest is turned away",
              ops: "Low — nothing to coordinate",
              revenue: "−CHF 980, plus reputation risk",
            },
          ].map((opt, i) => {
            const isSelected = overbookingResolution === opt.key
            return (
              <div 
                key={i} 
                onClick={() => setOverbookingResolution(opt.key)}
                className={`flex items-start gap-6 py-4 border-b border-[#1E1611]/7 last:border-0 cursor-pointer transition-colors px-2 rounded-md ${
                  isSelected ? "bg-[#2F483A]/5 border-2 border-[#2F483A]" : "hover:bg-[#1E1611]/3"
                }`}
              >
                <div className="flex-1 min-w-0">
                  {opt.key === "rebooked" && <div className="text-[9.5px] font-semibold text-[#2F483A] uppercase tracking-wide mb-1">Recommended</div>}
                  <div className={`font-serif text-[16px] ${isSelected ? "text-[#2F483A] font-bold" : "text-[#1E1611]"}`}>{opt.title}</div>
                  <div className="text-[11.5px] text-[#1E1611]/45 leading-snug mt-1">{opt.detail}</div>
                </div>
                <div className="w-[150px] text-[11.5px] text-[#1E1611]/60 leading-snug pt-0.5">{opt.guest}</div>
                <div className="w-[150px] text-[11.5px] text-[#1E1611]/60 leading-snug pt-0.5">{opt.ops}</div>
                <div className="w-[170px] text-[11.5px] text-[#1E1611]/60 leading-snug pt-0.5">{opt.revenue}</div>
                <div className="pt-0.5 shrink-0 w-16 text-right">
                  <span className={`text-[12px] font-bold ${isSelected ? "text-[#2F483A]" : "text-[#1E1611]/40"}`}>
                    {isSelected ? "Selected" : "Select"}
                  </span>
                </div>
              </div>
            )
          })}
        </Card>

        <div className="flex items-center gap-5 mt-5">
          <div className="flex-1">
            {overbookingResolution !== "pending" ? (
              <div className="text-[13px] text-[#1E1611]">
                Option <span className="font-semibold capitalize text-[#2F483A]">{overbookingResolution}</span> selected.
                <span className="text-[11px] text-[#1E1611]/40 block mt-0.5">Guest notified, concierge shuttles updated.</span>
              </div>
            ) : (
              <div className="text-[13px] text-[#B4553F] font-bold">
                A relocation decision is pending. Please select an option above.
              </div>
            )}
          </div>
          {overbookingResolution !== "pending" && (
            <button 
              onClick={() => setOverbookingResolution("pending")}
              className="text-[#B4553F] font-sans text-[11.5px] font-bold border-b border-[#B4553F] uppercase tracking-wider hover:opacity-75"
            >
              Reset Resolution
            </button>
          )}
        </div>
      </div>
    </div>
  </PulseShell>
)

// ==================== SCREEN 04: VIP ARRIVAL ====================

export const PulseVipDesktop = ({
  vipChampagne,
  setVipChampagne,
  vipFireplace,
  setVipFireplace,
  vipBedding,
  setVipBedding,
  earlyCheckoutRequested,
  setEarlyCheckoutRequested,
  secondHousekeeperAdded,
  setSecondHousekeeperAdded,
}: {
  vipChampagne: boolean
  setVipChampagne: (val: boolean) => void
  vipFireplace: boolean
  setVipFireplace: (val: boolean) => void
  vipBedding: boolean
  setVipBedding: (val: boolean) => void
  earlyCheckoutRequested: boolean
  setEarlyCheckoutRequested: (val: boolean) => void
  secondHousekeeperAdded: boolean
  setSecondHousekeeperAdded: (val: boolean) => void
}) => {
  const turnaroundSteps = [
    { label: "Checkout", time: earlyCheckoutRequested ? "target 11:00" : "target 12:00", done: earlyCheckoutRequested },
    { label: "Strip & clean", time: secondHousekeeperAdded ? "≈ 25 min (2 staff)" : "≈ 45 min" },
    { label: "Amenities", time: "≈ 20 min" },
    { label: "Inspection", time: "≈ 15 min" },
    { label: "Ready", time: "by 11:00" },
  ]

  const activeCount = [true, true, vipChampagne, vipFireplace, vipBedding].filter(Boolean).length

  return (
    <PulseShell active="vip">
      <div className="flex-1 flex flex-col min-w-0">
        <ScreenTitle
          title="Room 208 · Junior Suite Alpine"
          right={
            <div className="flex gap-7 text-right">
              <EditorialStat value="11:00" label="VIP arrives · in 4h" />
              <EditorialStat value={earlyCheckoutRequested ? "11:00" : "12:00"} label="Checkout Target" tone={earlyCheckoutRequested ? "#2F483A" : "#8A6D3B"} />
            </div>
          }
        />
        <div className="flex-1 flex min-w-0">
          <div className="flex-1 px-8 py-6 flex flex-col gap-6 min-w-0">
            <div className="text-[12.5px] text-[#1E1611]/60 italic font-serif">
              {earlyCheckoutRequested || secondHousekeeperAdded ? (
                <span className="text-[#2F483A] font-semibold not-italic">✓ Buffer secured. Room turnaround is estimated to finish on time.</span>
              ) : (
                <span className="text-[#8A6D3B] font-semibold not-italic">One-hour gap. Won&apos;t finish before 11:00 unless checkout moves earlier or a second housekeeper joins.</span>
              )}
            </div>

            <div>
              <SectionLabel>Housekeeping turnaround</SectionLabel>
              <div className="flex items-start mt-5">
                {turnaroundSteps.map((step, i) => (
                  <div key={i} className="flex-1 flex items-center">
                    <div className="flex flex-col items-center text-center flex-1">
                      <span
                        className="w-[18px] h-[18px] rounded-full flex items-center justify-center text-[9.5px] font-mono"
                        style={{
                          background: step.done ? "#2F483A" : "transparent",
                          color: step.done ? "#F6F2EA" : "#1E1611",
                          opacity: step.done ? 1 : 0.35,
                          border: step.done ? "none" : "1px solid currentColor",
                        }}
                      >
                        {step.done ? "✓" : i + 1}
                      </span>
                      <div className="text-[11.5px] font-medium text-[#1E1611] mt-2">{step.label}</div>
                      <div className="text-[9.5px] text-[#1E1611]/40 mt-0.5 font-mono">{step.time}</div>
                    </div>
                    {i < turnaroundSteps.length - 1 && <div className="h-px flex-1 bg-[#1E1611]/10 -mt-6" />}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-5 pt-1">
              <PrimaryAction onClick={() => setEarlyCheckoutRequested(!earlyCheckoutRequested)}>
                {earlyCheckoutRequested ? "✓ Early Checkout Requested" : "Request early checkout · 11:00"}
              </PrimaryAction>
              <button 
                onClick={() => setSecondHousekeeperAdded(!secondHousekeeperAdded)}
                className={`tactile-switch h-12 px-7 rounded-full border border-[#1E1611]/18 font-sans text-[11px] uppercase tracking-[0.15em] font-bold transition-all ${
                  secondHousekeeperAdded 
                    ? "bg-[#2F483A]/10 border-[#2F483A] text-[#2F483A]" 
                    : "text-[#1E1611]/70 hover:border-[#1E1611]/35"
                }`}
              >
                {secondHousekeeperAdded ? "✓ Housekeeper Added" : "Add 2nd housekeeper · −30 min"}
              </button>
            </div>

            <div className="mt-auto pt-5 border-t border-dashed border-[#1E1611]/12">
              <OwnerToken initials="MR" name="Marta Ruiz · assigned housekeeper" role={secondHousekeeperAdded ? "Floor 2 · Marta Ruiz + Sofia (Assisting)" : "Floor 2 · finishing Room 204"} />
            </div>
          </div>

          <div className="w-[300px] shrink-0 border-l border-[#1E1611]/8 px-6 py-7 overflow-y-auto flex flex-col gap-6">
            <GuestPassport
              name="Herr & Frau Brandt"
              tag="Returning · 6th stay · anniversary"
              prefs={["High, quiet floor — away from the lift", "Still water, extra espresso pods", "Feather-free pillows & duvet", "Late dinner, table by the window"]}
            />

            <div>
              <div className="flex items-baseline justify-between mb-2.5">
                <SectionLabel>Welcome amenities</SectionLabel>
                <span className="text-[10.5px] text-[#1E1611]/40 font-mono">{activeCount}/5</span>
              </div>
              
              <div className="flex flex-col gap-2.5 text-[12.5px]">
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input type="checkbox" checked={true} readOnly className="rounded text-[#2F483A] focus:ring-0 w-4 h-4" />
                  <span className="text-[#1E1611]/35 line-through">Alpine flowers arranged</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input type="checkbox" checked={true} readOnly className="rounded text-[#2F483A] focus:ring-0 w-4 h-4" />
                  <span className="text-[#1E1611]/35 line-through">Handwritten welcome note</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={vipChampagne} 
                    onChange={(e) => setVipChampagne(e.target.checked)} 
                    className="rounded text-[#2F483A] focus:ring-0 w-4 h-4" 
                  />
                  <span className={vipChampagne ? "text-[#1E1611]/35 line-through font-semibold" : ""}>Champagne on ice</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={vipFireplace} 
                    onChange={(e) => setVipFireplace(e.target.checked)} 
                    className="rounded text-[#2F483A] focus:ring-0 w-4 h-4" 
                  />
                  <span className={vipFireplace ? "text-[#1E1611]/35 line-through font-semibold" : ""}>Fireplace laid &amp; lit</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={vipBedding} 
                    onChange={(e) => setVipBedding(e.target.checked)} 
                    className="rounded text-[#2F483A] focus:ring-0 w-4 h-4" 
                  />
                  <span className={vipBedding ? "text-[#1E1611]/35 line-through font-semibold" : ""}>Feather-free bedding set</span>
                </label>
              </div>
            </div>

            <div className="pt-5 border-t border-dashed border-[#1E1611]/12 flex gap-7">
              <div>
                <div className="text-[9.5px] text-[#1E1611]/40 uppercase tracking-wide">Owner</div>
                <div className="text-[12px] font-medium text-[#1E1611] mt-1">Sofia · concierge</div>
              </div>
              <div>
                <div className="text-[9.5px] text-[#1E1611]/40 uppercase tracking-wide">ETA</div>
                <div className="text-[12px] font-medium text-[#1E1611] mt-1">Private transfer, 10:45</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PulseShell>
  )
}

// ==================== SCREEN 05: TEAM ====================

export const PulseTeamDesktop = ({
  isStaffReallocated,
  setIsStaffReallocated,
}: {
  isStaffReallocated: boolean
  setIsStaffReallocated: (val: boolean) => void
}) => {
  const teamColumns = [
    {
      name: "Léa",
      status: "Out sick",
      tone: "#C2410C",
      reassign: true,
      tasks: isStaffReallocated ? [] : [
        { time: "09:00 · Rm 217", title: "Follow up with 304 guests", reassign: true },
        { time: "10:30 · Lobby", title: "Greet VIP Brandt on arrival", reassign: true },
        { time: "15:00 · Desk", title: "Check in group of 8", reassign: true },
      ],
    },
    {
      name: "Anna",
      status: isStaffReallocated ? "Reallocated · 6 tasks" : "Full · 5 tasks",
      tone: "#8A6D3B",
      capacity: isStaffReallocated ? 95 : 88,
      tasks: [
        { time: "08:00 · Desk", title: "Morning departures (11)" },
        { time: "All day", title: "Front desk cover" },
        ...(isStaffReallocated ? [{ time: "09:00 · Rm 217", title: "Follow up with 304 guests" }] : []),
      ],
    },
    {
      name: "Marc",
      status: isStaffReallocated ? "Reallocated · 3 tasks" : "Room for 2 more",
      tone: "#2F483A",
      capacity: isStaffReallocated ? 80 : 42,
      dropzone: !isStaffReallocated,
      tasks: [
        { time: "All morning", title: "Arrivals desk (14)" },
        ...(isStaffReallocated ? [{ time: "15:00 · Desk", title: "Check in group of 8" }] : []),
      ],
    },
    {
      name: "Sofia",
      status: isStaffReallocated ? "Reallocated · 3 tasks" : "Balanced · concierge",
      tone: "#1E1611",
      capacity: isStaffReallocated ? 78 : 64,
      tasks: [
        { time: "by 11:00", title: "VIP arrival & amenities" },
        { time: "Evening", title: "Dinner reservations" },
        ...(isStaffReallocated ? [{ time: "10:30 · Lobby", title: "Greet VIP Brandt on arrival" }] : []),
      ],
    },
  ]

  return (
    <PulseTeamView 
      teamColumns={teamColumns} 
      isStaffReallocated={isStaffReallocated}
      setIsStaffReallocated={setIsStaffReallocated} 
    />
  )
}

const PulseTeamView = ({
  teamColumns,
  isStaffReallocated,
  setIsStaffReallocated,
}: {
  teamColumns: any[]
  isStaffReallocated: boolean
  setIsStaffReallocated: (val: boolean) => void
}) => (
  <PulseShell active="team">
    <div className="flex-1 flex flex-col min-w-0">
      <ScreenTitle
        title="Today's work"
        meta="3 of 4 on shift · Léa out sick"
        right={
          <PrimaryAction onClick={() => setIsStaffReallocated(!isStaffReallocated)}>
            {isStaffReallocated ? "✓ Shift rebalanced" : "Auto-balance"}
          </PrimaryAction>
        }
      />
      <div className="flex-1 px-8 py-6 flex flex-col gap-5 min-w-0">
        <div className="flex gap-8">
          {teamColumns.map((col, i) => (
            <div key={i} className="flex-1 min-w-0">
              <OwnerToken initials={col.name.slice(0, 2).toUpperCase()} name={col.name} role={col.status} tone={col.tone} />
              {col.capacity !== undefined && (
                <div className="mt-3">
                  <PunchStrip total={5} filled={Math.round((col.capacity / 100) * 5)} label="Capacity" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex-1 flex gap-8 min-w-0 overflow-y-auto max-h-[300px]">
          {teamColumns.map((col, i) => (
            <div key={i} className={`flex-1 flex flex-col gap-3 min-w-0 p-3 rounded-lg ${col.reassign && !isStaffReallocated ? "bg-[#B4553F]/5 border border-dashed border-[#B4553F]/20 animate-pulse" : "bg-[#1E1611]/3"}`}>
              {col.tasks.length > 0 ? (
                col.tasks.map((t: any, j: number) => (
                  <div key={j} className="py-2.5 border-b border-[#1E1611]/7 last:border-0">
                    <div className="text-[10px] text-[#1E1611]/35 font-mono">{t.time}</div>
                    <div className="text-[12.5px] text-[#1E1611] mt-1 leading-snug font-medium">{t.title}</div>
                    {"reassign" in t && (
                      <div className="mt-2 text-[10px] font-bold text-[#C2410C]">
                        Reassigning...
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center text-[11px] text-[#1E1611]/30 py-8 italic font-serif">
                  {col.reassign ? "Staff offline" : "No active tasks"}
                </div>
              )}
              {col.dropzone && (
                <div className="mt-1 py-3 rounded-[3px] border border-dashed border-[#2F483A]/40 text-center text-[10px] text-[#2F483A] font-semibold animate-pulse">
                  Drop reassigned tasks here
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </PulseShell>
)

// ==================== SCREEN 06: HANDLED ====================

export const PulseHandledDesktop = ({
  overbookingResolution,
  isStaffReallocated,
  earlyCheckoutRequested,
}: {
  overbookingResolution: "pending" | "rebooked" | "consolidate" | "decline"
  isStaffReallocated: boolean
  earlyCheckoutRequested: boolean
}) => {
  const handledRows = [
    { 
      issue: "Room 304 guests relocated", 
      owner: "Anna", 
      deadline: "09:00", 
      status: "resolved" as const, 
      next: "Apology & amenity delivered" 
    },
    { 
      issue: "Overbooking tonight", 
      owner: "Elena", 
      deadline: "09:00", 
      status: overbookingResolution !== "pending" ? ("resolved" as const) : ("progress" as const), 
      next: overbookingResolution !== "pending" ? `Rebooked to Chalet Verbois (${overbookingResolution})` : "Awaiting relocation resolution path" 
    },
    { 
      issue: "VIP arrival — Brandt", 
      owner: "Sofia", 
      deadline: "11:00", 
      status: "progress" as const, 
      next: earlyCheckoutRequested ? "Early checkout requested (11:00)" : "Prepare room amenities" 
    },
    { 
      issue: "Shift short-staffed", 
      owner: "Elena", 
      deadline: "08:00", 
      status: isStaffReallocated ? ("resolved" as const) : ("progress" as const), 
      next: isStaffReallocated ? "6 tasks reassigned & balanced" : "Understaffed: Léa out sick" 
    },
    { 
      issue: "Day load — 14/11 & group of 8", 
      owner: "Marc", 
      deadline: "15:00", 
      status: "progress" as const, 
      next: "Timeline reviewed, desk covered" 
    },
  ]

  const resolvedCount = handledRows.filter(r => r.status === "resolved").length
  const progressCount = handledRows.filter(r => r.status === "progress").length

  return (
    <PulseShell active="handled">
      <div className="flex-1 flex flex-col min-w-0">
        <ScreenTitle title="Everything handled" meta={`${handledRows.length} issues · ${resolvedCount} resolved · ${progressCount} in progress`} />
        <div className="flex-1 px-8 py-6 flex flex-col gap-7 min-w-0">
          <div className="flex items-start gap-10">
            <EditorialStat value={resolvedCount} label="Resolved" tone="#2F483A" />
            <EditorialStat value={progressCount} label="In progress" tone="#8A6D3B" />
            <EditorialStat value="0" label="Unassigned" />
            <EditorialStat value="07:00" label="Cleared by" />
          </div>

          <div className="bg-white border border-[#1E1611]/8 rounded-xl overflow-hidden shadow-xs">
            <div className="grid grid-cols-5 gap-2 px-4 py-2.5 bg-[#EBE3D2] border-b border-[#1E1611]/10 text-[9px] font-mono uppercase text-[#1E1611]/45 font-bold">
              <div>Incident / Issue</div>
              <div>Assigned Owner</div>
              <div>Deadline</div>
              <div>Status</div>
              <div>Next Step</div>
            </div>
            {handledRows.map((row, i) => (
              <div key={i} className="grid grid-cols-5 gap-2 px-4 py-3.5 border-b border-[#1E1611]/7 last:border-0 text-[12.5px] items-center">
                <div className="font-serif font-bold text-[#1E1611]">{row.issue}</div>
                <div className="text-[#1E1611]/60">{row.owner}</div>
                <div className="text-[#1E1611]/60 font-mono">{row.deadline}</div>
                <div>
                  <span
                    className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-wide"
                    style={{ color: row.status === "resolved" ? "#2F483A" : "#8A6D3B" }}
                  >
                    <span className="w-[4px] h-[4px] rounded-full" style={{ background: row.status === "resolved" ? "#2F483A" : "#8A6D3B" }} />
                    {row.status === "resolved" ? "Resolved" : "In progress"}
                  </span>
                </div>
                <div className="text-[#1E1611]/45">{row.next}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-auto pt-4 border-t border-dashed border-[#1E1611]/12">
            <div className="flex-1">
              <div className="font-serif text-[17px] text-[#1E1611]">You&apos;re clear to start the day.</div>
              <div className="text-[12px] text-[#1E1611]/45 mt-0.5 font-sans">Every issue has an owner, a deadline, and a next step. Ready to hand off to day team.</div>
            </div>
            <PrimaryAction className="bg-[#2F483A] text-white">Hand off to day team</PrimaryAction>
          </div>
        </div>
      </div>
    </PulseShell>
  )
}
