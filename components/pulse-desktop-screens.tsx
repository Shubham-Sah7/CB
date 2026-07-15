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
    title: "Room 304 flooded",
    meta: "Guests moved to 217 at 02:40 · room offline indefinitely",
    owner: "Unassigned",
    action: "Apologize",
  },
  {
    time: "by 09:00",
    severity: "critical" as const,
    icon: <RoomKeyIcon className="w-4 h-4" />,
    title: "Overbooked by one room tonight",
    meta: "304 pushed a sold-out night one over capacity",
    owner: "Elena · you",
    action: "Resolve",
  },
  {
    time: "by 11:00",
    severity: "attention" as const,
    icon: <BellIcon className="w-4 h-4" />,
    title: "VIP couple arriving early",
    meta: "Brandt · 6th stay — Room 208 checks out at noon",
    owner: "Sofia",
    action: "Prepare",
  },
  {
    time: "before shift",
    severity: "attention" as const,
    icon: <LuggageIcon className="w-4 h-4" />,
    title: "Front office short-staffed",
    meta: "Léa out sick — 3 of 4 today, 6 tasks need an owner",
    owner: "Elena · you",
    action: "Rebalance",
  },
  {
    time: "all day",
    severity: "neutral" as const,
    icon: <HouseIcon className="w-4 h-4" />,
    title: "14 arrivals · 11 departures · group of 8",
    meta: "Standard load, running alongside the above",
    owner: "Front desk",
    action: "Review",
  },
]

const OVERNIGHT_LOG = [
  { time: "02:00", text: "Water sensor triggered, Room 304" },
  { time: "02:40", text: "Guests relocated to 217 by night manager" },
  { time: "03:10", text: "Maintenance isolated the riser; 304 offline" },
  { time: "06:15", text: "Léa reported sick for the morning shift" },
]

export const PulseBriefDesktop = () => (
  <PulseShell active="brief">
    <div className="flex-1 flex flex-col min-w-0">
      <ScreenTitle title="Morning Brief" meta="Wednesday 15 July" />
      <div className="flex-1 flex min-w-0">
        <div className="flex-1 flex flex-col px-8 py-6 min-w-0 gap-6">
          <Card className="px-6 py-5 flex items-center justify-between gap-4">
            <RadialGauge value={95.5} valueLabel="86/90" label="Rooms Ready" />
            <RadialGauge value={100} valueLabel="100%" label="Occupancy" />
            <RadialGauge value={75} valueLabel="75%" label="Staff Capacity" tone="#8A6D3B" />
            <div className="w-px self-stretch bg-[#1E1611]/8 hidden xl:block mx-1" />
            <EditorialStat value="2" label="Critical" tone="#C2410C" />
            <EditorialStat value="1" label="VIP Arrivals" />
            <div className="w-px self-stretch bg-[#1E1611]/8 hidden xl:block mx-1" />
            <BarCompare label="Today's Load" items={[{ label: "Arrivals", value: 14 }, { label: "Departures", value: 11 }]} />
            <div className="w-[120px] shrink-0">
              <PunchStrip total={10} filled={7} label="Housekeeping" />
            </div>
          </Card>

          <Card className="px-6 py-5 flex-1 flex flex-col min-h-0">
            <div className="flex items-baseline justify-between mb-1">
              <SectionLabel>Needs you · ordered by urgency</SectionLabel>
              <span className="text-[11px] text-[#1E1611]/35 italic font-serif">Start at the top</span>
            </div>
            <div>
              {BRIEF_ISSUES.map((issue, i) => (
                <LedgerEntry key={i} {...issue} />
              ))}
            </div>
          </Card>
        </div>

        <div className="w-[300px] shrink-0 px-5 py-6 flex flex-col gap-5 overflow-y-auto">
          <Card className="px-5 py-5 flex flex-col gap-4">
            <SectionLabel>Recommended</SectionLabel>
            <RecommendationSection label="Now">
              <RecommendationLine action="Apologize to 304 guests" outcome="Warm note + amenity to 217" time="2 min" confidence={96} />
              <RecommendationLine action="Resolve the overbooking" outcome="Clears three downstream items" time="3 min" confidence={94} />
            </RecommendationSection>
            <RecommendationSection label="Next">
              <RecommendationLine action="Green-light VIP turnaround" outcome="Confirms the early checkout" time="2 min" confidence={88} />
            </RecommendationSection>
            <RecommendationSection label="Later">
              <RecommendationLine action="Rebalance the shift" outcome="Restores 4-of-4 capacity" time="3 min" confidence={82} />
            </RecommendationSection>
          </Card>

          <Card className="px-5 py-5">
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

// ==================== SCREEN 02: CONFLICTS ====================

export const PulseConflictsDesktop = () => (
  <PulseShell active="conflicts">
    <div className="flex-1 flex flex-col min-w-0">
      <ScreenTitle title="How these connect" meta="One root cause, four consequences" />
      <div className="flex-1 flex min-w-0">
        <div className="flex-1 px-10 py-10 min-w-0 flex justify-center overflow-y-auto">
          <Card className="px-8 py-8 w-full max-w-[560px] h-fit">
            <DependencyNode tag="Root cause" severity="critical" title="Room 304 flooded" detail="Pipe leak at 02:00. Room offline for the foreseeable — one fewer sellable room." />
            <DependencyThread label="causes" />
            <DependencyNode tag="Critical" severity="critical" title="Overbooked by one" detail="Sold-out night, now one over capacity. Decision needed by 09:00." />
            <DependencyThread label="forces" />
            <DependencyNode tag="Attention" severity="attention" title="VIP room conflict" detail="Room 208 held for the Brandts, occupied until noon. Arrival 11:00." />
            <DependencyThread label="delays" />
            <DependencyNode tag="Attention" severity="attention" title="Housekeeping crunch" detail="Under an hour to turn 208 before 11:00 — one fewer housekeeper." />
            <div className="ml-5 mt-4 pt-4 border-l border-dashed border-[#1E1611]/15 pl-6">
              <DependencyNode tag="Compounding" severity="neutral" title="Front office short one (sick)" detail="Fewer hands make every step above slower." />
            </div>
          </Card>
        </div>
        <div className="w-[360px] shrink-0 px-6 py-10 border-l border-[#1E1611]/8 bg-[#FAF8F5]/50">
          <Card className="px-7 py-7">
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
            <div className="mt-8">
              <PrimaryAction className="w-full">Resolve the overbooking</PrimaryAction>
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
    title: "Rebook to sister property",
    detail: "Chalet Verbois, 6 min transfer. Complimentary car both ways, one free night on return.",
    guest: "Minimal — upgrade & return perk soften it",
    ops: "Low — partner has availability now",
    revenue: "−CHF 1,400 tonight, recovered on return",
  },
  {
    recommended: false,
    title: "Consolidate a flexible party",
    detail: "Move a two-room family booking into a suite, freeing one room.",
    guest: "Moderate — asks a guest to shift rooms",
    ops: "Medium — coordination & re-clean",
    revenue: "Neutral — suite comped",
  },
  {
    recommended: false,
    title: "Decline the newest booking",
    detail: "Turn away the most recent, lowest-value reservation with full refund and gesture.",
    guest: "High — a guest is turned away",
    ops: "Low — nothing to coordinate",
    revenue: "−CHF 980, plus reputation risk",
  },
]

export const PulseOverbookingDesktop = () => (
  <PulseShell active="overbooking">
    <div className="w-[268px] shrink-0 px-5 py-7">
      <Card className="px-6 py-6 h-full flex flex-col">
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
      <div className="flex-1 px-10 py-8 flex flex-col min-w-0 overflow-y-auto">
        <Card className="px-8 py-2">
          {OVERBOOK_OPTIONS.map((opt, i) => (
            <div key={i} className="flex items-start gap-6 py-4 border-b border-[#1E1611]/7 last:border-0">
              <div className="flex-1 min-w-0">
                {opt.recommended && <div className="text-[9.5px] font-semibold text-[#2F483A] uppercase tracking-wide mb-1">Recommended</div>}
                <div className="font-serif text-[16px] text-[#1E1611]">{opt.title}</div>
                <div className="text-[11.5px] text-[#1E1611]/45 leading-snug mt-1">{opt.detail}</div>
              </div>
              <div className="w-[150px] text-[11.5px] text-[#1E1611]/60 leading-snug pt-0.5">{opt.guest}</div>
              <div className="w-[150px] text-[11.5px] text-[#1E1611]/60 leading-snug pt-0.5">{opt.ops}</div>
              <div className="w-[170px] text-[11.5px] text-[#1E1611]/60 leading-snug pt-0.5">{opt.revenue}</div>
              <div className="pt-0.5">
                <ActionText muted={!opt.recommended}>Choose</ActionText>
              </div>
            </div>
          ))}
        </Card>

        <div className="flex items-center gap-5 mt-5">
          <div className="flex-1">
            <div className="text-[13px] text-[#1E1611]">
              <span className="font-semibold">Rebook to sister property</span> selected.
            </div>
            <div className="text-[11px] text-[#1E1611]/40 mt-0.5">Guest notified, car booked, return night flagged for owner review.</div>
          </div>
          <PrimaryAction>Confirm resolution</PrimaryAction>
        </div>
      </div>
    </div>
  </PulseShell>
)

// ==================== SCREEN 04: VIP ARRIVAL ====================

const TURNAROUND_STEPS = [
  { label: "Checkout", time: "target 11:00", done: true },
  { label: "Strip & clean", time: "≈ 45 min" },
  { label: "Amenities", time: "≈ 20 min" },
  { label: "Inspection", time: "≈ 15 min" },
  { label: "Ready", time: "by 11:00" },
]

export const PulseVipDesktop = () => (
  <PulseShell active="vip">
    <div className="flex-1 flex flex-col min-w-0">
      <ScreenTitle
        title="Room 208 · Junior Suite Alpine"
        right={
          <div className="flex gap-7 text-right">
            <EditorialStat value="11:00" label="VIP arrives · in 4h" />
            <EditorialStat value="12:00" label="Room free · checkout" tone="#8A6D3B" />
          </div>
        }
      />
      <div className="flex-1 flex min-w-0">
        <div className="flex-1 px-8 py-6 flex flex-col gap-6 min-w-0">
          <div className="text-[12.5px] text-[#1E1611]/60 italic font-serif">
            <span className="text-[#8A6D3B] font-semibold not-italic">One-hour gap.</span> Won&apos;t finish before 11:00 unless checkout moves
            earlier or a second housekeeper joins.
          </div>

          <div>
            <SectionLabel>Housekeeping turnaround</SectionLabel>
            <div className="flex items-start mt-5">
              {TURNAROUND_STEPS.map((step, i) => (
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
                  {i < TURNAROUND_STEPS.length - 1 && <div className="h-px flex-1 bg-[#1E1611]/10 -mt-6" />}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-5 pt-1">
            <PrimaryAction>Request early checkout · 11:00</PrimaryAction>
            <ActionText muted>Add 2nd housekeeper · −30 min</ActionText>
          </div>

          <div className="mt-auto pt-5 border-t border-dashed border-[#1E1611]/12">
            <OwnerToken initials="MR" name="Marta Ruiz" image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=150&h=150" />
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
              <span className="text-[10.5px] text-[#1E1611]/40 font-mono">2/5</span>
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

// ==================== SCREEN 05: TEAM ====================

const TEAM_COLUMNS = [
  {
    name: "Léa",
    status: "Out sick",
    tone: "#C2410C",
    reassign: true,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    tasks: [
      { time: "09:00 · Rm 217", title: "Follow up with 304 guests", suggest: "Anna" },
      { time: "10:30 · Lobby", title: "Greet VIP Brandt on arrival", suggest: "Sofia" },
      { time: "15:00 · Desk", title: "Check in group of 8", suggest: "Marc" },
    ],
  },
  {
    name: "Anna",
    status: "Full · 5 tasks",
    tone: "#8A6D3B",
    capacity: 88,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150",
    tasks: [
      { time: "08:00 · Desk", title: "Morning departures (11)" },
      { time: "All day", title: "Front desk cover" },
    ],
  },
  {
    name: "Marc",
    status: "Room for 2 more",
    tone: "#2F483A",
    capacity: 42,
    dropzone: true,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    tasks: [{ time: "All morning", title: "Arrivals desk (14)" }],
  },
  {
    name: "Sofia",
    status: "Balanced · concierge",
    tone: "#1E1611",
    capacity: 64,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    tasks: [
      { time: "by 11:00", title: "VIP arrival & amenities" },
      { time: "Evening", title: "Dinner reservations" },
    ],
  },
]

export const PulseTeamDesktop = () => (
  <PulseShell active="team">
    <div className="flex-1 flex flex-col min-w-0">
      <ScreenTitle
        title="Today's work"
        meta="3 of 4 on shift · Léa out sick"
        right={<PrimaryAction>Auto-balance</PrimaryAction>}
      />
      <div className="flex-1 px-8 py-6 flex flex-col gap-5 min-w-0">
        <div className="flex gap-8">
          {TEAM_COLUMNS.map((col, i) => (
            <div key={i} className="flex-1 min-w-0">
              <OwnerToken initials={col.name.slice(0, 2).toUpperCase()} name={col.name} role={col.status} tone={col.tone} image={col.image} />
              {!col.reassign && (
                <div className="mt-3">
                  <PunchStrip total={5} filled={Math.round(((col as { capacity: number }).capacity / 100) * 5)} label="Capacity" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex-1 flex gap-8 min-w-0">
          {TEAM_COLUMNS.map((col, i) => (
            <div key={i} className="flex-1 flex flex-col gap-3 min-w-0 bg-[#1E1611]/[0.02] p-3 rounded-[8px] border border-[#1E1611]/[0.04]">
              {col.tasks.map((t, j) => (
                <div key={j} className="bg-white p-3 rounded-[5px] shadow-sm border border-[#1E1611]/5 relative hover:shadow-md transition-shadow cursor-grab">
                  <div className="text-[10px] text-[#1E1611]/45 font-mono mb-1.5">{t.time}</div>
                  <div className="text-[12.5px] text-[#1E1611] font-medium leading-snug">{t.title}</div>
                  {"suggest" in t && t.suggest && (
                    <div className="mt-3 pt-2 border-t border-dashed border-[#1E1611]/10">
                      <ActionText>Assign to {t.suggest}</ActionText>
                    </div>
                  )}
                </div>
              ))}
              {col.dropzone && (
                <div className="mt-auto py-3 rounded-[5px] border border-dashed border-[#2F483A]/40 text-center text-[11px] text-[#2F483A] font-medium bg-[#2F483A]/[0.02]">
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

const HANDLED_ROWS = [
  { issue: "Room 304 guests relocated", owner: "Anna", deadline: "09:00", status: "resolved" as const, next: "Apology & amenity delivered" },
  { issue: "Overbooking tonight", owner: "Elena", deadline: "09:00", status: "resolved" as const, next: "Rebooked to Chalet Verbois" },
  { issue: "VIP arrival — Brandt", owner: "Sofia", deadline: "11:00", status: "progress" as const, next: "Early checkout requested" },
  { issue: "Shift short-staffed", owner: "Elena", deadline: "08:00", status: "progress" as const, next: "6 tasks reassigned & confirmed" },
  { issue: "Day load — 14/11 & group of 8", owner: "Marc", deadline: "15:00", status: "progress" as const, next: "Timeline reviewed, desk covered" },
]

export const PulseHandledDesktop = () => (
  <PulseShell active="handled">
    <div className="flex-1 flex flex-col min-w-0">
      <ScreenTitle title="Everything handled" meta="5 issues · 5 owners · 0 unassigned" />
      <div className="flex-1 px-8 py-6 flex flex-col gap-7 min-w-0">
        <div className="flex items-start gap-10">
          <EditorialStat value="2" label="Resolved" tone="#2F483A" />
          <EditorialStat value="3" label="In progress" tone="#8A6D3B" />
          <EditorialStat value="0" label="Unassigned" />
          <EditorialStat value="07:00" label="Cleared by" />
        </div>

        <div>
          {HANDLED_ROWS.map((row, i) => (
            <div key={i} className="flex items-center gap-6 py-3.5 border-b border-[#1E1611]/7 last:border-0">
              <div className="flex-1 min-w-0 font-serif text-[14.5px] text-[#1E1611]">{row.issue}</div>
              <div className="w-[90px] text-[11.5px] text-[#1E1611]/55">{row.owner}</div>
              <div className="w-[70px] text-[11.5px] text-[#1E1611]/55 font-mono">{row.deadline}</div>
              <div className="w-[110px]">
                <span
                  className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-wide"
                  style={{ color: row.status === "resolved" ? "#2F483A" : "#8A6D3B" }}
                >
                  <span className="w-[4px] h-[4px] rounded-full" style={{ background: row.status === "resolved" ? "#2F483A" : "#8A6D3B" }} />
                  {row.status === "resolved" ? "Resolved" : "In progress"}
                </span>
              </div>
              <div className="w-[220px] text-[11.5px] text-[#1E1611]/45">{row.next}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  </PulseShell>
)
