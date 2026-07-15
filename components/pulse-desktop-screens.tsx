// Pulse desktop screens — the internal operating system of the Aurelia
// resort, built with the same visual DNA as the Host app: paper, ink,
// deckled cards, tactile pill CTAs, editorial numbers. Not a SaaS dashboard.

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
  ServiceSheet,
  ActionText,
  PrimaryAction,
  Card,
  RadialGauge,
  BarCompare,
} from "@/components/pulse-system"

// ==================== SCREEN 01: MORNING BRIEF ====================

const BRIEF_ISSUES = [
  {
    time: "02:00",
    severity: "critical" as const,
    icon: <HouseIcon className="w-4 h-4" />,
    title: "Room 304 water leakage",
    meta: "Guests relocated to Room 217 at 02:40 · Room offline for maintenance",
    owner: "Unassigned",
    action: "Care Protocol",
  },
  {
    time: "by 09:00",
    severity: "critical" as const,
    icon: <RoomKeyIcon className="w-4 h-4" />,
    title: "Overbooking (1 Room Deficit)",
    meta: "Room 304 offline resulted in zero capacity availability",
    owner: "Elena",
    action: "Resolve",
  },
  {
    time: "by 11:00",
    severity: "attention" as const,
    icon: <BellIcon className="w-4 h-4" />,
    title: "VIP Early Arrival (Herr & Frau Brandt)",
    meta: "6th stay · Room 208 checkout scheduled for 12:00",
    owner: "Sofia",
    action: "Prepare Room",
  },
  {
    time: "by 07:00",
    severity: "attention" as const,
    icon: <LuggageIcon className="w-4 h-4" />,
    title: "Shift Capacity Deficit",
    meta: "Léa absent · 3 of 4 team members active · roster balancing required",
    owner: "Elena",
    action: "Balance Roster",
  },
  {
    time: "all day",
    severity: "neutral" as const,
    icon: <HouseIcon className="w-4 h-4" />,
    title: "Routine Operations",
    meta: "14 arrivals · 11 departures · 1 group check-in (8 guests)",
    owner: "Front Desk",
    action: "Review",
  },
]

const OVERNIGHT_LOG = [
  { time: "02:00", text: "Water telemetry alert triggered in Room 304" },
  { time: "02:40", text: "Night Duty Manager relocated guests to Room 217" },
  { time: "03:10", text: "Facilities isolated the riser; Room 304 set to offline" },
  { time: "06:15", text: "Léa reported absence for morning shift" },
]

export const PulseBriefDesktop = () => (
  <PulseShell active="brief">
    <div data-name="Frame / ScreenContent" className="flex-1 flex flex-col min-w-0">
      <ScreenTitle title="Morning Brief" meta="Wednesday 15 July" />
      <div className="flex-1 flex min-w-0">
        <div data-name="Column / Main" className="flex-1 flex flex-col px-10 py-8 min-w-0 gap-8">
          <Card className="px-8 py-6 flex items-center justify-between gap-8">
            <RadialGauge value={95.5} valueLabel="86/90" label="Rooms Ready" />
            <RadialGauge value={100} valueLabel="100%" label="Occupancy" />
            <RadialGauge value={75} valueLabel="75%" label="Staff Capacity" tone="#8A6D3B" />
            <EditorialStat value="2" label="Urgent Attention" tone="#C2410C" />
            <EditorialStat value="1" label="VIP Arrivals" />
            <BarCompare label="Operational Load" items={[{ label: "Arrivals", value: 14 }, { label: "Departures", value: 11 }]} />
            <div className="w-[120px] shrink-0">
              <PunchStrip total={10} filled={7} label="Housekeeping" />
            </div>
          </Card>

          <Card className="px-8 py-6 flex-1 flex flex-col min-h-0">
            <div className="flex items-baseline justify-between mb-4">
              <SectionLabel>Handover Registry · Awaiting Care</SectionLabel>
              <span className="text-[11.5px] text-[#1E1611]/35 italic font-serif">Start at the top</span>
            </div>
            <div className="flex-1 overflow-y-auto">
              {BRIEF_ISSUES.map((issue, i) => (
                <LedgerEntry key={i} {...issue} />
              ))}
            </div>
          </Card>
        </div>

        <div data-name="Column / Sidebar" className="w-[320px] shrink-0 px-6 py-8 flex flex-col gap-6 overflow-y-auto border-l border-[#1E1611]/6">
          <Card className="px-6 py-6 flex flex-col gap-5">
            <SectionLabel>Handover Guidelines</SectionLabel>
            <RecommendationSection label="Immediate">
              <RecommendationLine action="Care Protocol: Room 304" outcome="Deliver apology and amenity to Room 217" time="2 min" />
              <RecommendationLine action="Resolve Overbooking" outcome="Clears three downstream operational issues" time="3 min" />
            </RecommendationSection>
            <RecommendationSection label="Next">
              <RecommendationLine action="VIP Room Turnaround" outcome="Authorize early checkout for Room 208" time="2 min" />
            </RecommendationSection>
            <RecommendationSection label="Later">
              <RecommendationLine action="Balance Shift Roster" outcome="Assign Léa's outstanding guest care duties" time="3 min" />
            </RecommendationSection>
          </Card>

          <Card className="px-6 py-6">
            <SectionLabel>Overnight Logbook</SectionLabel>
            <div className="mt-4">
              <TimelineRibbon stops={OVERNIGHT_LOG} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  </PulseShell>
)

// ==================== SCREEN 02: CONFLICTS ====================

export const PulseConflictsDesktop = () => (
  <PulseShell active="conflicts">
    <div className="flex-1 flex flex-col min-w-0">
      <ScreenTitle title="Dependency Chain" meta="Root-Cause Cascade" />
      <div className="flex-1 flex min-w-0">
        <div className="flex-1 px-10 py-8 min-w-0 flex justify-center overflow-y-auto">
          <Card className="px-8 py-8 w-full max-w-[560px] h-fit">
            <DependencyNode tag="Root Disruption" severity="critical" title="Room 304 Offline" detail="Riser leak isolated at 02:00. Room offline indefinitely." />
            <DependencyThread label="triggers" />
            <DependencyNode tag="Critical Impact" severity="critical" title="1 Room Overcapacity" detail="Resort fully committed tonight. Guest relocation required by 09:00." />
            <DependencyThread label="restricts" />
            <DependencyNode tag="Service Deficit" severity="attention" title="VIP Prep Collision" detail="Room 208 checkout scheduled for 12:00. Incoming VIP arrival at 11:00." />
            <DependencyThread label="shortens" />
            <DependencyNode tag="Service Deficit" severity="attention" title="Turnaround Deficit" detail="Deficit of 60 minutes for Room 208 sanitization. Staff allocation required." />
            <div className="ml-5 mt-4 pt-4 border-l border-dashed border-[#1E1611]/15 pl-6">
              <DependencyNode tag="Aggravating Deficit" severity="neutral" title="Front Office Shortage" detail="Reduced staffing levels slow turnaround and check-in workflows." />
            </div>
          </Card>
        </div>
        <div className="w-[360px] shrink-0 px-6 py-8 border-l border-[#1E1611]/6 bg-[#FAF8F5]/50 flex flex-col gap-6">
          <Card className="px-6 py-6">
            <SectionLabel>Operations Analysis</SectionLabel>
            <div className="font-serif text-[20px] text-[#1E1611] mt-3 leading-snug">It all traces back to Room 304.</div>
            <p className="text-[12.5px] text-[#1E1611]/55 leading-relaxed mt-3">
              Room 304 water leakage removed the resort's operational buffer. Subsequent downstream incidents — overcapacity, VIP turnaround squeeze, and staffing shortage — stem directly from this single disruption.
            </p>
            <div className="mt-6 pt-5 border-t border-dashed border-[#1E1611]/12">
              <div className="text-[10px] font-sans font-medium uppercase tracking-[0.15em] text-[#2F483A]">Recommended Path</div>
              <p className="text-[12px] text-[#1E1611] mt-1.5 leading-relaxed">
                Addressing the room overcapacity clears <span className="font-semibold text-[#2F483A]">three</span> downstream service blockages simultaneously.
              </p>
            </div>
            <div className="mt-8">
              <PrimaryAction className="w-full">Resolve Overbooking</PrimaryAction>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </PulseShell>
)

// ==================== SCREEN 03: OVERBOOKING RESOLUTION ====================

const OVERBOOK_OPTIONS = [
  {
    recommended: true,
    title: "Relocate to Sister Property",
    detail: "Chalet Verbois (6 min transfer). Complimentary private shuttle, return stay voucher.",
    guest: "Minimal (upgrade & return perk)",
    ops: "Low (vacancy confirmed)",
    revenue: "−CHF 1,400 (reimbursed by partner)",
  },
  {
    recommended: false,
    title: "Consolidate Flexible Group",
    detail: "Upgrade two-room family reservation to Ambassador Suite, releasing one room.",
    guest: "Moderate (voluntary suite upgrade)",
    ops: "Medium (suite preparation required)",
    revenue: "Neutral (internal reallocation)",
  },
  {
    recommended: false,
    title: "Decline Late Reservation",
    detail: "Cancel the most recent reservation with full refund and future stay voucher.",
    guest: "Critical (guest redirection)",
    ops: "Low (immediate check-out)",
    revenue: "−CHF 980 (reputation risk)",
  },
]

export const PulseOverbookingDesktop = () => (
  <PulseShell active="overbooking">
    <div className="w-[280px] shrink-0 px-6 py-8 border-r border-[#1E1611]/6 flex flex-col gap-6">
      <Card className="px-6 py-6 h-full flex flex-col gap-5">
        <SectionLabel>Current Capacity Status</SectionLabel>
        <div className="font-serif text-[20px] text-[#1E1611] leading-tight">Overcapacity (1 Room Deficit)</div>
        <div className="flex items-center gap-5 mt-4 pb-5 border-b border-dashed border-[#1E1611]/12">
          <RadialGauge value={98.9} valueLabel="89/90" label="Usable Rooms" size={56} />
          <EditorialStat value="+1" label="Room Deficit" tone="#C2410C" />
        </div>
        <p className="text-[12px] text-[#1E1611]/55 leading-relaxed mt-2">
          Room 304 maintenance offline removed the remaining buffer. One incoming check-in requires immediate resolution.
        </p>
        <div className="mt-auto text-[11px] text-[#8A6D3B] font-mono uppercase tracking-wide leading-normal">
          Action Required by 09:00 — Guest en route
        </div>
      </Card>
    </div>

    <div className="flex-1 flex flex-col min-w-0">
      <ScreenTitle title="Overbooking Resolution" meta="Assess triage outcomes" />
      <div className="flex-1 px-10 py-8 flex flex-col min-w-0 overflow-y-auto">
        <div className="flex items-center gap-6 px-6 pb-3 border-b border-[#1E1611]/8 text-[9px] font-sans font-medium uppercase tracking-[0.15em] text-[#1E1611]/40">
          <div className="flex-1 min-w-0">Resolution Strategy</div>
          <div className="w-[150px]">Guest Experience Impact</div>
          <div className="w-[150px]">Operational Effort</div>
          <div className="w-[170px]">Financial Impact</div>
          <div className="w-[60px] text-right">Action</div>
        </div>
        
        <Card className="px-6 py-2 mt-2">
          {OVERBOOK_OPTIONS.map((opt, i) => (
            <div key={i} className="flex items-start gap-6 py-4.5 border-b border-[#1E1611]/4 last:border-0 hover:bg-[#1E1611]/[0.01] transition-colors">
              <div className="flex-1 min-w-0">
                {opt.recommended && <div className="text-[9px] font-sans font-bold text-[#2F483A] uppercase tracking-wider mb-1">Recommended Path</div>}
                <div className="font-serif text-[15.5px] text-[#1E1611] font-medium tracking-wide">{opt.title}</div>
                <div className="text-[11.5px] text-[#1E1611]/45 leading-snug mt-1">{opt.detail}</div>
              </div>
              <div className="w-[150px] text-[12px] text-[#1E1611]/60 leading-snug pt-0.5">{opt.guest}</div>
              <div className="w-[150px] text-[12px] text-[#1E1611]/60 leading-snug pt-0.5">{opt.ops}</div>
              <div className="w-[170px] text-[12px] text-[#1E1611]/60 leading-snug pt-0.5">{opt.revenue}</div>
              <div className="w-[60px] text-right pt-0.5">
                <ActionText muted={!opt.recommended}>Select</ActionText>
              </div>
            </div>
          ))}
        </Card>

        <div className="flex items-center gap-5 mt-8 pt-6 border-t border-dashed border-[#1E1611]/12">
          <div className="flex-1">
            <div className="text-[13px] text-[#1E1611]">
              Selected Strategy: <span className="font-serif italic font-semibold text-[14px]">Relocate to Sister Property</span>.
            </div>
            <div className="text-[11px] text-[#1E1611]/40 mt-0.5">Guest notification prepared, shuttle scheduled, compensation voucher queued for approval.</div>
          </div>
          <PrimaryAction>Confirm Resolution</PrimaryAction>
        </div>
      </div>
    </div>
  </PulseShell>
)

// ==================== SCREEN 04: VIP ARRIVAL ====================

const TURNAROUND_STEPS = [
  { label: "Scheduled Checkout", time: "target 11:00", done: true },
  { label: "Sanitization", time: "≈ 45 min" },
  { label: "Preference Setup", time: "≈ 20 min" },
  { label: "Quality Inspection", time: "≈ 15 min" },
  { label: "Room Ready", time: "by 11:00" },
]

export const PulseVipDesktop = () => (
  <PulseShell active="vip">
    <div className="flex-1 flex flex-col min-w-0">
      <ScreenTitle
        title="Room 208 · Junior Suite Alpine"
        right={
          <div className="flex gap-7 text-right">
            <EditorialStat value="11:00" label="VIP Arrival" />
            <EditorialStat value="12:00" label="Scheduled Checkout" tone="#8A6D3B" />
          </div>
        }
      />
      <div className="flex-1 flex min-w-0">
        <div className="flex-1 px-10 py-8 flex flex-col gap-8 min-w-0">
          <div className="text-[12.5px] text-[#1E1611]/60 italic font-serif leading-relaxed">
            <span className="text-[#8A6D3B] font-semibold not-italic">Service Deficit.</span> Turnaround will not complete prior to 11:00 arrival without checkout relocation or auxiliary housekeeping support.
          </div>

          <div>
            <SectionLabel>Room Turnaround Schedule</SectionLabel>
            <div className="flex items-start mt-6">
              {TURNAROUND_STEPS.map((step, i) => (
                <div key={i} className="flex-1 flex items-center">
                  <div className="flex flex-col items-center text-center flex-1">
                    <span
                      className="w-[18px] h-[18px] rounded-full flex items-center justify-center text-[9px] font-mono"
                      style={{
                        background: step.done ? "#2F483A" : "transparent",
                        color: step.done ? "#FAF8F5" : "#1E1611",
                        opacity: step.done ? 1 : 0.35,
                        border: step.done ? "none" : "0.5px solid currentColor",
                      }}
                    >
                      {step.done ? "✓" : i + 1}
                    </span>
                    <div className="text-[12px] font-medium text-[#1E1611] mt-2.5">{step.label}</div>
                    <div className="text-[9.5px] text-[#1E1611]/45 mt-0.5 font-mono">{step.time}</div>
                  </div>
                  {i < TURNAROUND_STEPS.length - 1 && <div className="h-[0.5px] flex-1 bg-[#1E1611]/12 -mt-6" />}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-5 pt-2">
            <PrimaryAction>Request Early Checkout</PrimaryAction>
            <ActionText muted>Allocate Second Housekeeper</ActionText>
          </div>

          <div className="mt-auto pt-6 border-t border-dashed border-[#1E1611]/12">
            <OwnerToken initials="MR" name="Marta Ruiz" image="https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&q=80&w=150&h=150" />
          </div>
        </div>

        <div className="w-[320px] shrink-0 border-l border-[#1E1611]/6 px-6 py-8 overflow-y-auto flex flex-col gap-6">
          <GuestPassport
            name="Herr & Frau Brandt"
            tag="Returning · 6th stay · anniversary"
            prefs={["High, quiet floor — away from the lift", "Still water, extra espresso pods", "Feather-free pillows & duvet", "Late dinner, table by the window"]}
          />

          <div>
            <div className="flex items-baseline justify-between mb-3">
              <SectionLabel>Arrival Preferences</SectionLabel>
              <span className="text-[10.5px] text-[#1E1611]/40 font-mono">2/5 Completed</span>
            </div>
            <ServiceSheet
              items={[
                { label: "Alpine flowers arranged", done: true },
                { label: "Handwritten welcome note", done: true },
                { label: "Champagne on ice", done: false },
                { label: "Fireplace laid & lit", done: false },
                { label: "Feather-free bedding set", done: false },
              ]}
            />
          </div>

          <div className="pt-6 border-t border-dashed border-[#1E1611]/12 flex gap-7">
            <div>
              <div className="text-[9.5px] font-sans font-medium uppercase tracking-[0.12em] text-[#1E1611]/40">Assigned</div>
              <div className="text-[12px] font-medium text-[#1E1611] mt-1">Sofia</div>
            </div>
            <div>
              <div className="text-[9.5px] font-sans font-medium uppercase tracking-[0.12em] text-[#1E1611]/40">Arrival Details</div>
              <div className="text-[12px] font-medium text-[#1E1611] mt-1">Private Transfer (10:45)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PulseShell>
)

// ==================== SCREEN 05: TEAM ====================

const TEAM_COLUMNS = [
  {
    name: "Léa",
    status: "Absent",
    tone: "#C2410C",
    reassign: true,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    tasks: [
      { time: "09:00 · Room 217", title: "Relocation follow-up (Room 304)", suggest: "Anna" },
      { time: "10:30 · Lobby", title: "VIP Welcoming (Herr & Frau Brandt)", suggest: "Sofia" },
      { time: "15:00 · Desk", title: "Group Check-in (8 guests)", suggest: "Marc" },
    ],
  },
  {
    name: "Anna",
    status: "Fully Allocated",
    tone: "#8A6D3B",
    capacity: 88,
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=150&h=150",
    tasks: [
      { time: "08:00 · Desk", title: "Scheduled Checkouts (11 departures)" },
      { time: "All Day", title: "Front Desk Duty Cover" },
    ],
  },
  {
    name: "Marc",
    status: "Available (2 Tasks)",
    tone: "#2F483A",
    capacity: 42,
    dropzone: true,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    tasks: [{ time: "All Morning", title: "Arrivals Desk (14 arrivals)" }],
  },
  {
    name: "Sofia",
    status: "Optimal Capacity",
    tone: "#1E1611",
    capacity: 64,
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=150&h=150",
    tasks: [
      { time: "by 11:00", title: "VIP Arrival Setup & Preferences" },
      { time: "Evening", title: "Concierge Restaurant Bookings" },
    ],
  },
]

export const PulseTeamDesktop = () => (
  <PulseShell active="team">
    <div className="flex-1 flex flex-col min-w-0">
      <ScreenTitle
        title="Shift Assignment"
        meta="3 of 4 Active · Léa Absent"
        right={<PrimaryAction>Rebalance Shift</PrimaryAction>}
      />
      <div className="flex-1 px-10 py-8 flex gap-8 min-w-0">
        {TEAM_COLUMNS.map((col, i) => (
          <div key={i} className="flex-1 flex flex-col gap-5 min-w-0 bg-[#1E1611]/[0.015] p-5 rounded-[6px] border border-[#1E1611]/5">
            {/* Column Header */}
            <div>
              <OwnerToken initials={col.name.slice(0, 2).toUpperCase()} name={col.name} tone={col.tone} image={col.image} />
              <div className="flex items-center justify-between mt-3 pb-3.5 border-b border-[#1E1611]/6">
                <span className="text-[10px] uppercase font-sans tracking-[0.12em] font-medium text-[#1E1611]/50">{col.status}</span>
                {!col.reassign && (
                  <span className="font-mono text-[10px] text-[#1E1611]/50" style={{ fontVariantNumeric: "lining-nums" }}>
                    {Math.round(((col as { capacity: number }).capacity / 100) * 5)}/5 Tasks
                  </span>
                )}
              </div>
            </div>

            {/* Task Cards List */}
            <div className="flex-1 flex flex-col gap-3 overflow-y-auto min-h-0">
              {col.tasks.map((t, j) => (
                <div key={j} className="bg-[#FAF8F5] p-4 rounded-[5px] border border-[#1E1611]/6 shadow-[0_1px_3px_rgba(30,22,17,0.02)] hover:shadow-md transition-shadow cursor-grab">
                  <div className="text-[9.5px] text-[#1E1611]/40 font-mono mb-1.5">{t.time}</div>
                  <div className="text-[13px] text-[#1E1611] font-medium leading-snug">{t.title}</div>
                  {"suggest" in t && t.suggest && (
                    <div className="mt-3 pt-2.5 border-t border-dashed border-[#1E1611]/8">
                      <ActionText>Assign to {t.suggest}</ActionText>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Reassign / Drop Action */}
            {col.dropzone && (
              <div className="py-4.5 rounded-[5px] border border-dashed border-[#2F483A]/30 text-center text-[11px] text-[#2F483A] font-medium bg-[#2F483A]/[0.01] hover:bg-[#2F483A]/[0.03] transition-colors cursor-pointer mt-auto">
                Assign Remaining Service Tasks
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </PulseShell>
)

const HANDLED_ROWS = [
  { issue: "Relocate guests (Room 304)", owner: "Anna", deadline: "09:00", status: "resolved" as const, next: "Amenity & letter delivered" },
  { issue: "Relocate overcapacity (Room 304)", owner: "Elena", deadline: "09:00", status: "resolved" as const, next: "Relocated to Chalet Verbois" },
  { issue: "VIP Arrival Prep (Room 208)", owner: "Sofia", deadline: "11:00", status: "progress" as const, next: "Early checkout requested (11:00)" },
  { issue: "Reallocate shift duties", owner: "Elena", deadline: "08:00", status: "progress" as const, next: "Roster rebalanced & confirmed" },
  { issue: "Review daily operations load", owner: "Marc", deadline: "15:00", status: "progress" as const, next: "Logbook reviewed, desk covered" },
]

const OWNER_DETAILS: Record<string, { initials: string, image: string }> = {
  Anna: { initials: "AN", image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=150&h=150" },
  Elena: { initials: "EM", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150" },
  Sofia: { initials: "SO", image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=150&h=150" },
  Marc: { initials: "MA", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150" }
}

export const PulseHandledDesktop = () => (
  <PulseShell active="handled">
    <div className="flex-1 flex flex-col min-w-0">
      <ScreenTitle title="Operations Log" meta="Handover Registry" />
      <div className="flex-1 px-10 py-8 flex flex-col gap-8 min-w-0">
        <div className="flex items-start gap-12">
          <EditorialStat value="2" label="Resolved" tone="#2F483A" />
          <EditorialStat value="3" label="In progress" tone="#8A6D3B" />
          <EditorialStat value="0" label="Unassigned" />
          <EditorialStat value="07:00" label="Cleared" />
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-6 px-4 pb-3 border-b border-[#1E1611]/8 text-[9px] font-sans font-medium uppercase tracking-[0.15em] text-[#1E1611]/40">
            <div className="flex-1 min-w-0">Service Detail</div>
            <div className="w-[120px] shrink-0">Assigned</div>
            <div className="w-[70px] shrink-0 font-mono">Target</div>
            <div className="w-[110px] shrink-0">Status</div>
            <div className="w-[220px] shrink-0">Next Action</div>
          </div>

          <Card className="px-6 py-2 mt-2">
            {HANDLED_ROWS.map((row, i) => {
              const ownerInfo = OWNER_DETAILS[row.owner];
              return (
                <div key={i} className="flex items-center gap-6 py-4 border-b border-[#1E1611]/4 last:border-0 hover:bg-[#1E1611]/[0.01] transition-colors">
                  <div className="flex-1 min-w-0 font-serif text-[15px] text-[#1E1611] font-medium tracking-wide">{row.issue}</div>
                  <div className="w-[120px] shrink-0">
                    {ownerInfo ? (
                      <OwnerToken initials={ownerInfo.initials} name={row.owner} image={ownerInfo.image} />
                    ) : (
                      <span className="text-[12px] text-[#1E1611]/50">{row.owner}</span>
                    )}
                  </div>
                  <div className="w-[70px] shrink-0 text-[11.5px] text-[#1E1611]/50 font-mono">{row.deadline}</div>
                  <div className="w-[110px] shrink-0">
                    <span
                      className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-wide"
                      style={{ color: row.status === "resolved" ? "#2F483A" : "#8A6D3B" }}
                    >
                      <span className="w-[4px] h-[4px] rounded-full" style={{ background: row.status === "resolved" ? "#2F483A" : "#8A6D3B" }} />
                      {row.status === "resolved" ? "Resolved" : "In Progress"}
                    </span>
                  </div>
                  <div className="w-[220px] shrink-0 text-[12px] text-[#1E1611]/45">{row.next}</div>
                </div>
              );
            })}
          </Card>
        </div>
      </div>
    </div>
  </PulseShell>
)
