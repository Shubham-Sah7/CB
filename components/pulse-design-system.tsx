"use client"

import React, { useState } from "react"
import { 
  RoomKeyIcon, 
  BellIcon, 
  HouseIcon, 
  FireplaceIcon, 
  MountainIcon, 
  WineIcon, 
  LuggageIcon, 
  HousekeepingCartIcon, 
  GuestSilhouetteIcon, 
  DiningTrayIcon, 
  ThreadIcon, 
  TeamIcon, 
  StampIcon 
} from "@/components/pulse-icons"
import { 
  RadialGauge, 
  BarCompare, 
  PunchStrip, 
  TimelineRibbon,
  OwnerToken,
  PrimaryAction,
  SecondaryAction,
  ActionText,
  Card,
  SectionLabel
} from "@/components/pulse-system"

// Custom SVG operational icons to complete the 20 icon requirements
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none stroke-[1]" aria-hidden="true">
    <circle cx="12" cy="12" r="8" />
    <path d="M12 8v4l3 1.5" />
  </svg>
)

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none stroke-[1]" aria-hidden="true">
    <path d="M6 12l4 4 8-8" />
  </svg>
)

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none stroke-[1]" aria-hidden="true">
    <circle cx="11" cy="11" r="5.5" />
    <line x1="15" y1="15" x2="20" y2="20" />
  </svg>
)

const SettingsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none stroke-[1]" aria-hidden="true">
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
)

const AlertIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none stroke-[1]" aria-hidden="true">
    <polygon points="12 3 2 21 22 21" />
    <line x1="12" y1="9" x2="12" y2="14" />
    <circle cx="12" cy="18" r="0.75" fill="currentColor" stroke="none" />
  </svg>
)

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none stroke-[1]" aria-hidden="true">
    <rect x="4" y="5" width="16" height="15" rx="1.5" />
    <line x1="4" y1="9" x2="20" y2="9" />
    <line x1="8" y1="3" x2="8" y2="6" />
    <line x1="16" y1="3" x2="16" y2="6" />
  </svg>
)

const WeatherSnowIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none stroke-[1]" aria-hidden="true">
    <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
  </svg>
)

const KitchenIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none stroke-[1]" aria-hidden="true">
    <path d="M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 8h14" />
    <circle cx="8" cy="7" r="0.7" fill="currentColor" stroke="none" />
    <circle cx="8" cy="15" r="0.7" fill="currentColor" stroke="none" />
  </svg>
)

const CustomTaskIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none stroke-[1]" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 12l2 2 4-4" />
  </svg>
)

export const PulseDesignSystemArtboard = () => {
  const [isChecked, setIsChecked] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("foundation")

  return (
    <div className="w-[1360px] bg-[#FAF8F5] paper-grain rounded-[8px] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.3)] border border-[#1E1611]/10 flex flex-col relative text-[#1E1611] font-sans">
      
      {/* Editorial Header */}
      <div className="px-12 pt-12 pb-8 border-b border-[#1E1611]/8 flex items-baseline justify-between">
        <div>
          <span className="font-serif text-[13px] tracking-[0.18em] text-[#8A6D3B] uppercase font-semibold">Aurelia Swiss Alps Resort</span>
          <h1 className="font-serif text-[38px] font-light tracking-wide text-[#1E1611] mt-1.5">Design Foundation Specifications</h1>
          <p className="text-[13px] text-[#1E1611]/50 mt-1 max-w-[620px]">
            The unified design logic and system architecture behind the Host guest app and the Pulse staff console. 
            Designed for two environments, built on one shared DNA.
          </p>
        </div>
        <div className="text-right">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#1E1611]/45">Document REF: DS-2026-FND</span>
          <div className="text-[12px] text-[#2F483A] font-medium mt-1 font-serif italic">Restraint is luxury. Precision is hospitality.</div>
        </div>
      </div>

      <div className="flex-1 flex min-h-0 overflow-y-auto">
        <div className="flex-1 px-12 py-10 flex flex-col gap-16">
          
          {/* ==================== SECTION 01: FOUNDATION ==================== */}
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#1E1611]/6 pb-2">
              <span className="font-mono text-[11px] text-[#8A6D3B]">SECTION 01 / FOUNDATION</span>
              <h2 className="font-serif text-[22px] font-light text-[#1E1611] mt-0.5">Aurelia Design Foundation</h2>
            </div>
            
            <p className="font-serif italic text-[18px] text-[#1E1611]/75 max-w-[800px] leading-relaxed">
              &ldquo;A shared design language built for two completely different experiences: effortless hospitality for guests and operational clarity for staff.&rdquo;
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
              <div className="p-5 rounded-[6px] border border-[#1E1611]/5 bg-[#FAF8F5]/40 flex flex-col gap-3">
                <span className="font-serif italic font-semibold text-[16px] text-[#2F483A] block">Quiet</span>
                <p className="text-[12.5px] text-[#1E1611]/65 leading-relaxed">
                  Technology never competes for attention. Interface structures fade into the paper backing, appearing only when human action or reassurance is required.
                </p>
              </div>

              <div className="p-5 rounded-[6px] border border-[#1E1611]/5 bg-[#FAF8F5]/40 flex flex-col gap-3">
                <span className="font-serif italic font-semibold text-[16px] text-[#8A6D3B] block">Precise</span>
                <p className="text-[12.5px] text-[#1E1611]/65 leading-relaxed">
                  Every element earns its place. The layout rules reject decorative shapes, rounded pill buttons, or glassmorphic gradients. Swiss alignment structures organize all telemetry.
                </p>
              </div>

              <div className="p-5 rounded-[6px] border border-[#1E1611]/5 bg-[#FAF8F5]/40 flex flex-col gap-3">
                <span className="font-serif italic font-semibold text-[16px] text-[#C2410C] block">Warm</span>
                <p className="text-[12.5px] text-[#1E1611]/65 leading-relaxed">
                  Luxury through calm human interactions. Soft parchment colors, high-end photography, and editorial typography mimic physical concierge stationery.
                </p>
              </div>
            </div>
          </section>

          {/* ==================== SECTION 02: DESIGN PHILOSOPHY ==================== */}
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#1E1611]/6 pb-2">
              <span className="font-mono text-[11px] text-[#8A6D3B]">SECTION 02 / PHILOSOPHY</span>
              <h2 className="font-serif text-[22px] font-light text-[#1E1611] mt-0.5">Design Philosophy & System Divergence</h2>
            </div>

            <div className="p-6 rounded-[8px] border border-[#1E1611]/6 bg-[#FAF8F5]/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
                
                {/* Host Column */}
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-mono text-[#8A6D3B] uppercase tracking-wider block">Divergence: Host App</span>
                  <span className="font-serif italic font-semibold text-[17px] text-[#1E1611] block">Emotion · Guidance · Comfort</span>
                  <p className="text-[12px] text-[#1E1611]/60 leading-relaxed">
                    Designed for sensory relaxation. Features large photography, ample breathing margins, and minimal single-tap interactions to reassure weary travelers.
                  </p>
                </div>

                {/* Shared Column */}
                <div className="flex flex-col items-center gap-4 bg-white/60 border border-[#1E1611]/6 p-5 rounded-[6px] shadow-sm">
                  <span className="text-[10px] font-mono text-[#2F483A] uppercase tracking-widest block font-bold">Shared System Foundation</span>
                  <div className="flex flex-wrap justify-center gap-2 text-[11px] font-mono text-[#1E1611]/70">
                    <span className="px-2 py-0.5 bg-[#FAF8F5] border border-[#1E1611]/8 rounded">Typography</span>
                    <span className="px-2 py-0.5 bg-[#FAF8F5] border border-[#1E1611]/8 rounded">Grid Scale</span>
                    <span className="px-2 py-0.5 bg-[#FAF8F5] border border-[#1E1611]/8 rounded">Spacing</span>
                    <span className="px-2 py-0.5 bg-[#FAF8F5] border border-[#1E1611]/8 rounded">Colors</span>
                    <span className="px-2 py-0.5 bg-[#FAF8F5] border border-[#1E1611]/8 rounded">Motion</span>
                    <span className="px-2 py-0.5 bg-[#FAF8F5] border border-[#1E1611]/8 rounded">Accessibility</span>
                  </div>
                  <div className="flex justify-between w-full mt-2 text-[10px] font-mono text-[#1E1611]/45">
                    <span>← Mobile-First</span>
                    <span>Desktop-Triage →</span>
                  </div>
                </div>

                {/* Pulse Column */}
                <div className="flex flex-col gap-3 md:text-right">
                  <span className="text-[10px] font-mono text-[#8A6D3B] uppercase tracking-wider block">Divergence: Pulse App</span>
                  <span className="font-serif italic font-semibold text-[17px] text-[#1E1611] block">Information Density · Operations · Decisions</span>
                  <p className="text-[12px] text-[#1E1611]/60 leading-relaxed">
                    Designed for rapid triage. Features high-density ledger lists, multi-column task boards, and dual-sidebar analytics panels to prioritize operations.
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* ==================== SECTION 03: TYPOGRAPHY ==================== */}
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#1E1611]/6 pb-2">
              <span className="font-mono text-[11px] text-[#8A6D3B]">SECTION 03 / TYPOGRAPHY</span>
              <h2 className="font-serif text-[22px] font-light text-[#1E1611] mt-0.5">Typographic Hierarchy & Scaling</h2>
            </div>

            <div className="flex flex-col gap-5">
              {[
                { name: "Display XL", font: "Cormorant Garamond", style: "italic font-light", size: "38px", lh: "1.1", ls: "normal", host: "Welcome screens, hero status items.", pulse: "Telemetry indicators, clean stat highlights." },
                { name: "Display Large", font: "Cormorant Garamond", style: "font-light", size: "30px", lh: "1.15", ls: "0.01em", host: "Staggered text callouts.", pulse: "Critical issue titles." },
                { name: "Heading 1", font: "Cormorant Garamond", style: "font-normal", size: "24px", lh: "1.2", ls: "0.02em", host: "Screen header titles.", pulse: "Workspace workspace headers." },
                { name: "Heading 2", font: "Cormorant Garamond", style: "font-medium", size: "20px", lh: "1.25", ls: "normal", host: "Sub-headings, card headers.", pulse: "Registry header listings." },
                { name: "Heading 3", font: "Cormorant Garamond", style: "font-semibold italic", size: "17px", lh: "1.3", ls: "normal", host: "Action item headlines.", pulse: "Dependency chains, alerts." },
                { name: "Section Title", font: "Plus Jakarta Sans", style: "font-bold uppercase", size: "11px", lh: "1.4", ls: "0.15em", host: "Category markers (generous).", pulse: "Workspace sidebar sections." },
                { name: "Card Title", font: "Cormorant Garamond", style: "font-semibold italic", size: "15.5px", lh: "1.3", ls: "normal", host: "Food selection cards.", pulse: "Task registry line items." },
                { name: "Body Large", font: "Cormorant Garamond", style: "font-medium", size: "14.5px", lh: "1.45", ls: "normal", host: "Delicate check-in instructions.", pulse: "Relocation summaries." },
                { name: "Body Regular", font: "Plus Jakarta Sans", style: "font-normal", size: "12.5px", lh: "1.5", ls: "normal", host: "Menu details, concierge suggestions.", pulse: "Registry option details." },
                { name: "Body Small", font: "Plus Jakarta Sans", style: "font-normal", size: "11.5px", lh: "1.5", ls: "normal", host: "Lesser options details.", pulse: "Timeline logs, task descriptions." },
                { name: "Metadata", font: "Plus Jakarta Sans", style: "font-normal", size: "11px", lh: "1.3", ls: "normal", host: "Time counters, checkout alerts.", pulse: "Activity updates, sync logs." },
                { name: "Caption", font: "Plus Jakarta Sans", style: "font-semibold uppercase", size: "10px", lh: "1.4", ls: "0.12em", host: "Subtle steps tags.", pulse: "Roster status (Absent, Fully Allocated)." },
                { name: "Button Label", font: "Plus Jakarta Sans", style: "font-bold uppercase", size: "11.5px", lh: "1.0", ls: "0.18em", host: "Pill callouts (wax-seal).", pulse: "Primary triage triggers." },
                { name: "Table Label", font: "Plus Jakarta Sans", style: "font-medium uppercase", size: "9.5px", lh: "1.6", ls: "0.18em", host: "NA (Not utilized).", pulse: "Ledger column headers." },
                { name: "Status Label", font: "Plus Jakarta Sans", style: "font-bold uppercase", size: "9px", lh: "1.3", ls: "0.15em", host: "Door unlocking status.", pulse: "Critical indicators." }
              ].map((font, idx) => (
                <div key={idx} className="flex flex-col lg:flex-row lg:items-center justify-between border-b border-[#1E1611]/4 pb-4 last:border-0 gap-4">
                  <div className="w-[180px] shrink-0">
                    <span className="text-[12.5px] font-bold text-[#1E1611] block">{font.name}</span>
                    <span className="text-[10px] font-mono text-[#8A6D3B] block mt-0.5">{font.font} · {font.size}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className={`${font.style} text-[#1E1611] block truncate`} style={{ fontSize: font.size }}>
                      The quick brown fox jumps over the lazy dog
                    </span>
                  </div>
                  <div className="w-[380px] shrink-0 text-left lg:text-left flex flex-col gap-0.5 text-[11px] text-[#1E1611]/60">
                    <div><span className="font-semibold text-[#1E1611]/75">Host:</span> {font.host}</div>
                    <div><span className="font-semibold text-[#1E1611]/75">Pulse:</span> {font.pulse}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ==================== SECTION 04: COLOUR SYSTEM ==================== */}
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#1E1611]/6 pb-2">
              <span className="font-mono text-[11px] text-[#8A6D3B]">SECTION 04 / COLOURS</span>
              <h2 className="font-serif text-[22px] font-light text-[#1E1611] mt-0.5">Semantic Color System</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {[
                { token: "foundation/color/background", hex: "#F4F1EA", rgb: "244, 241, 234", desc: "The backing wallpaper canvas across Host and Pulse apps. Warm paper grain overlays this color.", host: "Base page background", pulse: "Base workspace container background" },
                { token: "foundation/color/surface", hex: "#FAF8F5", rgb: "250, 248, 245", desc: "Primary card surface backing. Mimics warm luxury stationery elements.", host: "Check-in instructions card", pulse: "Right-hand sidebar containers" },
                { token: "foundation/color/paper", hex: "#FFFFFF", rgb: "255, 255, 255", desc: "Pure high-contrast white. Applied to interactive cards.", host: "Supper details card", pulse: "Task cards, visual board items" },
                { token: "foundation/color/brand-green", hex: "#2F483A", rgb: "47, 72, 58", desc: "Primary action forest green. Conveys safety and prestige.", host: "Digital key unlock glow, confirm buttons", pulse: "Active tab left rule, primary triage triggers" },
                { token: "foundation/color/bronze", hex: "#8A6D3B", rgb: "138, 109, 59", desc: "Quiet warning tone. Highlights scheduling overlaps and turnarounds.", host: "Diverged checkout timer status", pulse: "In progress status dot, warning metrics" },
                { token: "foundation/color/critical-red", hex: "#C2410C", rgb: "194, 65, 12", desc: "Operations warning red. Minimal usage to preserve layout calmness.", host: "NA (Not utilized for guests)", pulse: "Deficit indicator, Room Offline status" },
                { token: "foundation/color/text-primary", hex: "#1E1611", rgb: "30, 22, 17", desc: "Primary content charcoal. Dark ink style with high visual readability.", host: "Welcome header, titles", pulse: "Ledger details, table text" },
                { token: "foundation/color/text-secondary", hex: "rgba(30,22,17,0.55)", rgb: "30, 22, 17, 0.55", desc: "Secondary text ink color.", host: "Concierge guidelines body copy", pulse: "Status tags, next-action descriptions" },
                { token: "foundation/color/border", hex: "rgba(30,22,17,0.08)", rgb: "30, 22, 17, 0.08", desc: "Hairline separation borders. Mimics stationery margins.", host: "Faint table lines", pulse: "Task list dividers, ledger rules" }
              ].map((col, idx) => (
                <div key={idx} className="p-4 rounded-[6px] border border-[#1E1611]/5 bg-white/40 flex flex-col gap-3">
                  <div className="flex gap-3.5 items-center">
                    <div className="w-10 h-10 rounded-[4px] border border-[#1E1611]/10 shrink-0" style={{ backgroundColor: col.hex.startsWith("rgba") ? "#FAF8F5" : col.hex, borderColor: col.hex.startsWith("rgba") ? col.hex : "rgba(30,22,17,0.1)" }} />
                    <div className="min-w-0">
                      <span className="text-[12.5px] font-semibold text-[#1E1611] block truncate">{col.token.split('/').pop()}</span>
                      <span className="text-[10px] font-mono text-[#8A6D3B] block mt-0.5">{col.hex} · RGB({col.rgb})</span>
                    </div>
                  </div>
                  <p className="text-[11.5px] text-[#1E1611]/50 leading-relaxed border-t border-[#1E1611]/4 pt-2.5">{col.desc}</p>
                  <div className="flex flex-col gap-0.5 text-[10.5px] text-[#1E1611]/60 mt-1 font-mono">
                    <div><span className="font-semibold text-[#1E1611]/80">Host:</span> {col.host}</div>
                    <div><span className="font-semibold text-[#1E1611]/80">Pulse:</span> {col.pulse}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ==================== SECTION 05: SPACING SYSTEM ==================== */}
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#1E1611]/6 pb-2">
              <span className="font-mono text-[11px] text-[#8A6D3B]">SECTION 05 / SPACING</span>
              <h2 className="font-serif text-[22px] font-light text-[#1E1611] mt-0.5">Spacing Logic & Density Fork</h2>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
              
              <div className="xl:col-span-2 flex flex-col gap-4">
                <span className="text-[11.5px] font-sans font-bold uppercase tracking-wider text-[#1E1611]/50">Spacing Scale Visualization</span>
                <div className="flex flex-col gap-3">
                  {[
                    { val: 4, desc: "Task status dot padding" },
                    { val: 8, desc: "Avatar name spacing, small components margin" },
                    { val: 12, desc: "Button padding vertical, tag spacing" },
                    { val: 16, desc: "List row margins, inner card spacing" },
                    { val: 24, desc: "Card internal padding (Host/Pulse default)" },
                    { val: 32, desc: "Column gutters, metrics card spacing" },
                    { val: 40, desc: "Page margins, screen headers padding" },
                    { val: 48, desc: "Primary action buttons height" },
                    { val: 64, desc: "Major screen block separation" },
                    { val: 80, desc: "Immersive mobile hero breathing room" },
                    { val: 96, desc: "Outer viewport presentations spacing" }
                  ].map((sp, idx) => (
                    <div key={idx} className="flex items-center justify-between border-b border-[#1E1611]/4 pb-2 last:border-0">
                      <span className="text-[11.5px] font-mono text-[#8A6D3B]">spacing/{sp.val}</span>
                      <div className="flex-1 max-w-[280px] h-2 bg-[#2F483A] rounded-[1px] mx-4" style={{ width: `${sp.val}px` }} />
                      <span className="text-[11px] text-[#1E1611]/45 text-right w-[200px] truncate">{sp.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-[11.5px] font-sans font-bold uppercase tracking-wider text-[#1E1611]/50">The Spacing Density Fork</span>
                <div className="p-5 rounded-[6px] border border-[#1E1611]/5 bg-[#FAF8F5]/40 flex flex-col gap-4">
                  <div>
                    <span className="text-[12.5px] font-serif font-bold italic text-[#1E1611]">Host: Generous Breathing Space</span>
                    <p className="text-[12px] text-[#1E1611]/60 leading-relaxed mt-1">
                      Generous vertical whitespace lets layout elements float gracefully. Mobile screens default to large padding (spacing/32 or spacing/40) to minimize sensory load.
                    </p>
                  </div>
                  <div>
                    <span className="text-[12.5px] font-serif font-bold italic text-[#1E1611]">Pulse: Functional Density</span>
                    <p className="text-[12px] text-[#1E1611]/60 leading-relaxed mt-1">
                      Pulse increases density while respecting the exact same spacing scale. Columns use tight internal padding (spacing/16) and smaller line spacing to present the operational log on a single screen.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* ==================== SECTION 06: GRID SYSTEM ==================== */}
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#1E1611]/6 pb-2">
              <span className="font-mono text-[11px] text-[#8A6D3B]">SECTION 06 / GRIDS</span>
              <h2 className="font-serif text-[22px] font-light text-[#1E1611] mt-0.5">Mobile-First & Desktop Triage Grids</h2>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
              
              <div className="flex flex-col gap-3">
                <span className="text-[12.5px] font-semibold text-[#1E1611] block">Host App Mobile Grid Specifications</span>
                <div className="p-4 rounded-[6px] border border-[#1E1611]/5 bg-white/40 flex flex-col gap-2.5 text-[12px] text-[#1E1611]/70 leading-relaxed">
                  <p>• <span className="font-semibold text-[#1E1611]">Layout:</span> 4-column fluid mobile grid system.</p>
                  <p>• <span className="font-semibold text-[#1E1611]">Margins:</span> Fixed 32px left/right margins to prevent thumb errors.</p>
                  <p>• <span className="font-semibold text-[#1E1611]">Gutters:</span> 16px fluid vertical separation between cards.</p>
                  <p>• <span className="font-semibold text-[#1E1611]">Safe Area:</span> Pushed 48px from viewport top for native speaker/camera notches.</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-[12.5px] font-semibold text-[#1E1611] block">Pulse App Desktop Grid Specifications</span>
                <div className="p-4 rounded-[6px] border border-[#1E1611]/5 bg-white/40 flex flex-col gap-2.5 text-[12px] text-[#1E1611]/70 leading-relaxed">
                  <p>• <span className="font-semibold text-[#1E1611]">Layout:</span> 12-column static grid system (Max width 1360px).</p>
                  <p>• <span className="font-semibold text-[#1E1611]">Sidebar:</span> 188px fixed left navigation rail (`NavRail`).</p>
                  <p>• <span className="font-semibold text-[#1E1611]">Gutters:</span> 32px spatial separation between main tables and sidebar blocks.</p>
                  <p>• <span className="font-semibold text-[#1E1611]">Columns:</span> Dynamic content columns that scale fluidly above 1024px width.</p>
                </div>
              </div>

            </div>
          </section>

          {/* ==================== SECTION 07: ICONOGRAPHY ==================== */}
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#1E1611]/6 pb-2">
              <span className="font-mono text-[11px] text-[#8A6D3B]">SECTION 07 / ICONOGRAPHY</span>
              <h2 className="font-serif text-[22px] font-light text-[#1E1611] mt-0.5">Icon Language: Recognition vs Reassurance</h2>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
              <div className="xl:col-span-3 grid grid-cols-5 sm:grid-cols-7 xl:grid-cols-10 gap-6 p-6 rounded-[8px] bg-white/40 border border-[#1E1611]/6 justify-items-center">
                {[
                  { component: <RoomKeyIcon className="w-5 h-5 text-[#1E1611]" />, label: "Room Key" },
                  { component: <BellIcon className="w-5 h-5 text-[#1E1611]" />, label: "Reception" },
                  { component: <HouseIcon className="w-5 h-5 text-[#1E1611]" />, label: "Room" },
                  { component: <FireplaceIcon className="w-5 h-5 text-[#1E1611]" />, label: "Hearth" },
                  { component: <MountainIcon className="w-5 h-5 text-[#1E1611]" />, label: "Mountain" },
                  { component: <WineIcon className="w-5 h-5 text-[#1E1611]" />, label: "Wine" },
                  { component: <LuggageIcon className="w-5 h-5 text-[#1E1611]" />, label: "Luggage" },
                  { component: <HousekeepingCartIcon className="w-5 h-5 text-[#1E1611]" />, label: "Cart" },
                  { component: <GuestSilhouetteIcon className="w-5 h-5 text-[#1E1611]" />, label: "Guest" },
                  { component: <DiningTrayIcon className="w-5 h-5 text-[#1E1611]" />, label: "Dining" },
                  { component: <ThreadIcon className="w-5 h-5 text-[#1E1611]" />, label: "Thread" },
                  { component: <TeamIcon className="w-5 h-5 text-[#1E1611]" />, label: "Team" },
                  { component: <StampIcon className="w-5 h-5 text-[#1E1611]" />, label: "Stamp" },
                  { component: <ClockIcon />, label: "Clock" },
                  { component: <CheckIcon />, label: "Check" },
                  { component: <SearchIcon />, label: "Search" },
                  { component: <SettingsIcon />, label: "Settings" },
                  { component: <AlertIcon />, label: "Alert" },
                  { component: <CalendarIcon />, label: "Calendar" },
                  { component: <WeatherSnowIcon />, label: "Snow" }
                ].map((ic, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-1.5">
                    <div className="w-8 h-8 rounded-[4px] border border-[#1E1611]/5 flex items-center justify-center bg-[#FAF8F5]/85">
                      {ic.component}
                    </div>
                    <span className="text-[9.5px] font-mono text-[#1E1611]/50">{ic.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-[11.5px] font-sans font-bold uppercase tracking-wider text-[#1E1611]/50">Purpose Fork</span>
                <div className="flex flex-col gap-2.5 text-[12px] text-[#1E1611]/70 leading-relaxed">
                  <p>• <span className="font-semibold text-[#1E1611]">Host (Reassurance):</span> Icons represent comfort details ( fireplace lit, bedding feather-free, luggage transfer) to reassure the guest.</p>
                  <p>• <span className="font-semibold text-[#1E1611]">Pulse (Recognition):</span> Icons represent status categorizations (Room offline, Shift short-staffed, Relocated) for instant triage scanning.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ==================== SECTION 08: COMPONENT LIBRARY ==================== */}
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#1E1611]/6 pb-2">
              <span className="font-mono text-[11px] text-[#8A6D3B]">SECTION 08 / COMPONENTS</span>
              <h2 className="font-serif text-[22px] font-light text-[#1E1611] mt-0.5">Component Library & Divergence Legend</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              
              {/* Primary / Secondary Buttons */}
              <div className="p-5 rounded-[6px] border border-[#1E1611]/5 bg-white/40 flex flex-col gap-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[12.5px] font-semibold text-[#1E1611] block">Primary & Secondary Buttons</span>
                  <span className="text-[9.5px] font-mono uppercase bg-[#2F483A]/10 text-[#2F483A] px-1.5 py-0.5 rounded">Shared</span>
                </div>
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10.5px] font-mono text-[#1E1611]/40">Default (Pill)</span>
                    <PrimaryAction className="h-9 px-5 text-[10px]">Action</PrimaryAction>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10.5px] font-mono text-[#1E1611]/40">Hover</span>
                    <button className="paper-grain h-9 px-5 rounded-full bg-[#23372B] text-[#FAF8F5] font-sans text-[10px] uppercase tracking-[0.18em] font-bold border border-[#2F483A]/20 shadow-[0_2px_8px_rgba(47,72,58,0.15)]">Action</button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10.5px] font-mono text-[#1E1611]/40">Secondary</span>
                    <SecondaryAction><span className="text-[9.5px] px-0 h-6 flex items-center justify-center">Options</span></SecondaryAction>
                  </div>
                </div>
              </div>

              {/* Form Input fields */}
              <div className="p-5 rounded-[6px] border border-[#1E1611]/5 bg-white/40 flex flex-col gap-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[12.5px] font-semibold text-[#1E1611] block">Form Inputs</span>
                  <span className="text-[9.5px] font-mono uppercase bg-[#2F483A]/10 text-[#2F483A] px-1.5 py-0.5 rounded">Shared</span>
                </div>
                <div className="flex flex-col gap-2.5">
                  <input 
                    type="text" 
                    placeholder="Search room key..." 
                    className="w-full bg-[#FAF8F5]/80 border border-[#1E1611]/12 rounded-[4px] px-3 py-1.5 text-[12px] placeholder-[#1E1611]/30 font-sans focus:outline-none"
                    readOnly
                  />
                  <div className="relative">
                    <input 
                      type="text" 
                      value="Room 208"
                      className="w-full bg-[#FAF8F5]/80 border border-[#2F483A]/60 rounded-[4px] px-3 py-1.5 text-[12px] font-sans focus:outline-none"
                      readOnly
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[9px] font-mono text-[#2F483A]">FOCUS</span>
                  </div>
                </div>
              </div>

              {/* Status Badges */}
              <div className="p-5 rounded-[6px] border border-[#1E1611]/5 bg-white/40 flex flex-col gap-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[12.5px] font-semibold text-[#1E1611] block">Status Indicators</span>
                  <span className="text-[9.5px] font-mono uppercase bg-[#8A6D3B]/10 text-[#8A6D3B] px-1.5 py-0.5 rounded">Adapted</span>
                </div>
                <div className="flex flex-col gap-2 mt-1">
                  <div className="flex justify-between items-center pb-2 border-b border-[#1E1611]/4">
                    <span className="text-[10px] font-mono text-[#1E1611]/40">Resolved Badge</span>
                    <span className="inline-flex items-center gap-1.5 text-[9.5px] font-sans font-bold uppercase tracking-wider text-[#2F483A]">
                      <span className="w-1 h-1 rounded-full bg-[#2F483A]" />
                      Resolved
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono text-[#1E1611]/40">Alert / Warning</span>
                    <span className="inline-flex items-center gap-1.5 text-[9.5px] font-sans font-bold uppercase tracking-wider text-[#C2410C]">
                      <span className="w-1 h-1 rounded-full bg-[#C2410C]" />
                      At Risk
                    </span>
                  </div>
                </div>
              </div>

              {/* Guest Card vs Action Card */}
              <div className="p-5 rounded-[6px] border border-[#1E1611]/5 bg-white/40 flex flex-col gap-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[12.5px] font-semibold text-[#1E1611] block">Guest Passport</span>
                  <span className="text-[9.5px] font-mono uppercase bg-[#C2410C]/10 text-[#C2410C] px-1.5 py-0.5 rounded">Host Only</span>
                </div>
                <div className="p-4 rounded-[6px] border border-[#1E1611]/8 bg-[#FAF8F5] flex flex-col gap-2">
                  <span className="font-serif italic font-semibold text-[14.5px] text-[#1E1611] block">Herr & Frau Brandt</span>
                  <p className="text-[11px] text-[#1E1611]/55">Returning · 6th stay · anniversary</p>
                </div>
              </div>

              {/* Task Item Card */}
              <div className="p-5 rounded-[6px] border border-[#1E1611]/5 bg-white/40 flex flex-col gap-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[12.5px] font-semibold text-[#1E1611] block">Task Card</span>
                  <span className="text-[9.5px] font-mono uppercase bg-[#8A6D3B]/10 text-[#8A6D3B] px-1.5 py-0.5 rounded">Pulse Only</span>
                </div>
                <div className="p-4 rounded-[5px] border border-[#1E1611]/6 bg-[#FAF8F5] shadow-xs cursor-grab">
                  <div className="text-[9.5px] text-[#1E1611]/40 font-mono mb-1">by 11:00</div>
                  <div className="text-[13px] text-[#1E1611] font-medium leading-snug">VIP Arrival Setup</div>
                </div>
              </div>

              {/* Table Row Component */}
              <div className="p-5 rounded-[6px] border border-[#1E1611]/5 bg-white/40 flex flex-col gap-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[12.5px] font-semibold text-[#1E1611] block">Ledger List Row</span>
                  <span className="text-[9.5px] font-mono uppercase bg-[#8A6D3B]/10 text-[#8A6D3B] px-1.5 py-0.5 rounded">Pulse Only</span>
                </div>
                <div className="py-2.5 px-3 border-b border-[#1E1611]/6 bg-[#FAF8F5] flex items-center justify-between text-[11.5px] font-medium">
                  <span className="font-serif italic">Room 304 Offline</span>
                  <span className="font-mono text-[#C2410C] text-[9.5px]">09:00</span>
                </div>
              </div>

            </div>
          </section>

          {/* ==================== SECTION 09: COMPONENT RELATIONSHIP ==================== */}
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#1E1611]/6 pb-2">
              <span className="font-mono text-[11px] text-[#8A6D3B]">SECTION 09 / FORK STRUCTURE</span>
              <h2 className="font-serif text-[22px] font-light text-[#1E1611] mt-0.5">Shared vs. Fork Component Relationship</h2>
            </div>

            <div className="p-6 rounded-[8px] border border-[#1E1611]/6 bg-white/40">
              <div className="flex flex-col gap-8">
                {[
                  { name: "Button", shared: "Primary Green, uppercase tracking, typography size", host: "Large height (h-12), rounded-full, high spacing, soft glow shadow.", pulse: "Compact height (h-9), rounded-full, clean border outline." },
                  { name: "Cards", shared: "Warm Ivory surface, fine hairline borders", host: "Large padding, deckled paper torn-edges, linen drop shadows.", pulse: "Compact task cards, flat border backgrounds, simple grid blocks." },
                  { name: "Tables", shared: "Base letter-spacing, hairline dividers", host: "Simple food options selections.", pulse: "12-column horizontal ledger layout with assignee icons and status dots." },
                  { name: "Navigation", shared: "Quiet dark ink text color, active indicators", host: "Toggled steps timeline in the center of the mobile screen.", pulse: "Fixed left NavRail sidebar with serif active highlights." },
                  { name: "Status", shared: "Forest Green (Success), Warning Bronze, Critical Red", host: "Large wax seal unlock triggers.", pulse: "Miniature status circles (Resolved, In Progress)." }
                ].map((rel, idx) => (
                  <div key={idx} className="flex flex-col lg:flex-row lg:items-center justify-between border-b border-[#1E1611]/4 pb-4 last:border-0 gap-4">
                    <div className="w-[150px] shrink-0">
                      <span className="text-[13.5px] font-serif font-bold italic text-[#1E1611] block">{rel.name}</span>
                    </div>
                    <div className="flex-1 bg-[#FAF8F5] border border-[#1E1611]/8 p-3.5 rounded text-[12px] text-[#1E1611]/70 leading-normal">
                      <span className="font-mono text-[10px] text-[#2F483A] uppercase tracking-wider block mb-1">Shared Foundation DNA</span>
                      {rel.shared}
                    </div>
                    <div className="flex w-[480px] shrink-0 gap-4">
                      <div className="flex-1 bg-white border border-[#1E1611]/6 p-3 rounded text-[11.5px] text-[#1E1611]/60 leading-snug">
                        <span className="font-mono text-[9px] text-[#8A6D3B] uppercase block mb-1">Host App Fork</span>
                        {rel.host}
                      </div>
                      <div className="flex-1 bg-white border border-[#1E1611]/6 p-3 rounded text-[11.5px] text-[#1E1611]/60 leading-snug">
                        <span className="font-mono text-[9px] text-[#8A6D3B] uppercase block mb-1">Pulse App Fork</span>
                        {rel.pulse}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ==================== SECTION 10: MOTION ==================== */}
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#1E1611]/6 pb-2">
              <span className="font-mono text-[11px] text-[#8A6D3B]">SECTION 10 / MOTION</span>
              <h2 className="font-serif text-[22px] font-light text-[#1E1611] mt-0.5">Motion & Transition Principles</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-5 rounded-[6px] border border-[#1E1611]/5 bg-[#FAF8F5]/40 flex flex-col gap-3">
                <span className="font-serif italic font-semibold text-[16px] text-[#2F483A] block">Host Motion: Storytelling & Elegance</span>
                <div className="text-[12px] text-[#1E1611]/70 flex flex-col gap-2">
                  <p>• <span className="font-semibold text-[#1E1611]">Duration:</span> 240ms duration standard.</p>
                  <p>• <span className="font-semibold text-[#1E1611]">Easing:</span> cubic-bezier(0.16, 1, 0.3, 1) — clean and soft deceleration.</p>
                  <p>• <span className="font-semibold text-[#1E1611]">Behavior:</span> Full-screen check-in steps shift vertically on selection to convey stay progress.</p>
                </div>
              </div>

              <div className="p-5 rounded-[6px] border border-[#1E1611]/5 bg-[#FAF8F5]/40 flex flex-col gap-3">
                <span className="font-serif italic font-semibold text-[16px] text-[#8A6D3B] block">Pulse Motion: Fast & Functional</span>
                <div className="text-[12px] text-[#1E1611]/70 flex flex-col gap-2">
                  <p>• <span className="font-semibold text-[#1E1611]">Duration:</span> 150ms–180ms duration.</p>
                  <p>• <span className="font-semibold text-[#1E1611]">Easing:</span> cubic-bezier(0.25, 1, 0.5, 1) — fast and linear deceleration.</p>
                  <p>• <span className="font-semibold text-[#1E1611]">Behavior:</span> Active tab shifts and details overlays occur instantly on hover to prioritize triage speed.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ==================== SECTION 11: VOICE & TONE ==================== */}
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#1E1611]/6 pb-2">
              <span className="font-mono text-[11px] text-[#8A6D3B]">SECTION 11 / CONTENT WRITING</span>
              <h2 className="font-serif text-[22px] font-light text-[#1E1611] mt-0.5">Voice & Tone</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-5 rounded-[6px] border border-[#1E1611]/5 bg-white/40 flex flex-col gap-4">
                <div>
                  <span className="text-[11px] font-mono text-[#8A6D3B] uppercase tracking-wider block">Host: The Concierge Persona</span>
                  <span className="font-serif italic font-semibold text-[16px] text-[#1E1611] block mt-1">Calm, Welcoming, Anticipatory</span>
                </div>
                <div className="text-[12px] text-[#1E1611]/75 flex flex-col gap-3">
                  <p>&ldquo;We have been expecting you.&rdquo; <span className="text-[#8A6D3B] font-mono text-[10px] block mt-0.5">Welcome screen</span></p>
                  <p>&ldquo;Your room key is active on your device.&rdquo; <span className="text-[#8A6D3B] font-mono text-[10px] block mt-0.5">Door access screen</span></p>
                  <p>&ldquo;The kitchen kept a warm soup ready for your arrival.&rdquo; <span className="text-[#8A6D3B] font-mono text-[10px] block mt-0.5">Food selection screen</span></p>
                </div>
              </div>

              <div className="p-5 rounded-[6px] border border-[#1E1611]/5 bg-white/40 flex flex-col gap-4">
                <div>
                  <span className="text-[11px] font-mono text-[#8A6D3B] uppercase tracking-wider block">Pulse: The Operations Lead</span>
                  <span className="font-serif italic font-semibold text-[16px] text-[#1E1611] block mt-1">Precise, Direct, Calming</span>
                </div>
                <div className="text-[12px] text-[#1E1611]/75 flex flex-col gap-3">
                  <p>&ldquo;Room 304 Offline: Leak isolated at 02:00.&rdquo; <span className="text-[#8A6D3B] font-mono text-[10px] block mt-0.5">Morning brief registry</span></p>
                  <p>&ldquo;Overcapacity: relocating late booking to Chalet Verbois.&rdquo; <span className="text-[#8A6D3B] font-mono text-[10px] block mt-0.5">Triage resolution</span></p>
                  <p>&ldquo;Roster Rebalanced: Léa's concierge tasks reassigned.&rdquo; <span className="text-[#8A6D3B] font-mono text-[10px] block mt-0.5">Shift coordinator</span></p>
                </div>
              </div>
            </div>
          </section>

          {/* ==================== SECTION 12: ACCESSIBILITY ==================== */}
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#1E1611]/6 pb-2">
              <span className="font-mono text-[11px] text-[#8A6D3B]">SECTION 12 / SPECIFICATION</span>
              <h2 className="font-serif text-[22px] font-light text-[#1E1611] mt-0.5">Accessibility</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[12px] text-[#1E1611]/70 leading-relaxed">
              <div>
                <span className="text-[12px] font-semibold text-[#1E1611] block mb-1">Color Independence</span>
                <p>Status indicators never rely on colors alone. Red (Deficit) has an accompanying icon/warning text, while Green (Success) has checkmarks to remain fully legible for color-blind users.</p>
              </div>
              <div>
                <span className="text-[12px] font-semibold text-[#1E1611] block mb-1">Touch Targets</span>
                <p>All button and action items maintain a minimum interactive height of 36px in Pulse and 48px in Host, assuring ease of navigation without error.</p>
              </div>
              <div>
                <span className="text-[12px] font-semibold text-[#1E1611] block mb-1">Minimum Type Sizes</span>
                <p>No functional label is set below 11.5px. Text labels for column headings use all-caps letter-spacing to optimize readability at small dimensions.</p>
              </div>
            </div>
          </section>

          {/* ==================== SECTION 13: ENGINEERING FOUNDATION ==================== */}
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#1E1611]/6 pb-2">
              <span className="font-mono text-[11px] text-[#8A6D3B]">SECTION 13 / Handoff Tokens</span>
              <h2 className="font-serif text-[22px] font-light text-[#1E1611] mt-0.5">Engineering Foundation & Naming Conventions</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {[
                { title: "Color Variables", list: ["foundation/color/brand-green: #2F483A", "foundation/color/bronze: #8A6D3B", "foundation/color/critical: #C2410C", "foundation/color/ivory: #FAF8F5"] },
                { title: "Spacing Variables", list: ["spacing/4: 4px", "spacing/8: 8px", "spacing/16: 16px", "spacing/32: 32px", "spacing/48: 48px"] },
                { title: "Radius Variables", list: ["radius/small: 4px", "radius/card: 6px", "radius/large: 24px", "radius/full: 9999px"] },
                { title: "Component Variables", list: ["host/button/primary", "pulse/card/task", "pulse/table/row", "host/header/page"] }
              ].map((tok, idx) => (
                <div key={idx} className="p-4 rounded-[6px] border border-[#1E1611]/5 bg-white/40">
                  <span className="text-[11.5px] font-sans font-bold uppercase tracking-wider text-[#1E1611]/50 block mb-2.5">{tok.title}</span>
                  <div className="flex flex-col gap-1.5">
                    {tok.list.map((l, lIdx) => (
                      <span key={lIdx} className="font-mono text-[10px] text-[#1E1611]/75 block truncate">{l}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ==================== SECTION 14: FOUNDATION SUMMARY ==================== */}
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#1E1611]/6 pb-2">
              <span className="font-mono text-[11px] text-[#8A6D3B]">SECTION 14 / SUMMARY</span>
              <h2 className="font-serif text-[22px] font-light text-[#1E1611] mt-0.5">Design System Hierarchy Summary</h2>
            </div>

            <div className="p-6 rounded-[8px] border border-[#1E1611]/6 bg-[#FAF8F5]/30">
              <div className="flex flex-col items-center text-center max-w-[620px] mx-auto gap-4">
                <span className="text-[11px] font-mono text-[#8A6D3B] uppercase tracking-wider block">Aurelia Design Architecture</span>
                
                <div className="p-3.5 bg-white border border-[#1E1611]/8 rounded-[6px] w-full font-serif italic font-semibold text-[17px]">
                  Aurelia System DNA (Shared Tokens & Philosophy)
                </div>

                <div className="text-[18px] text-[#1E1611]/45">↓</div>

                <div className="grid grid-cols-2 gap-8 w-full">
                  <div className="p-4 bg-white border border-[#1E1611]/6 rounded-[6px] flex flex-col gap-2">
                    <span className="font-serif italic font-semibold text-[15px] text-[#2F483A]">Host Experience</span>
                    <p className="text-[12px] text-[#1E1611]/60 leading-relaxed">
                      Guest-centric stay journey. Calm, emotional, and quiet.
                    </p>
                  </div>
                  <div className="p-4 bg-white border border-[#1E1611]/6 rounded-[6px] flex flex-col gap-2">
                    <span className="font-serif italic font-semibold text-[15px] text-[#8A6D3B]">Pulse Experience</span>
                    <p className="text-[12px] text-[#1E1611]/60 leading-relaxed">
                      Staff-centric operational command. Fast, precise, and dense.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* FINAL NOTES / EDITORIAL NOTE */}
          <section className="border-t border-dashed border-[#1E1611]/12 pt-8 mb-6 flex flex-col items-center text-center">
            <p className="font-serif italic text-[16px] text-[#1E1611]/65 max-w-[620px] leading-relaxed">
              &ldquo;Pulse is designed to reduce operational thinking, not increase it. Every screen exists to answer one question quickly and quietly.&rdquo;
            </p>
            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#1E1611]/45 mt-4">Aurelia Swiss Alps Resort · Handcrafted Command Specifications</span>
          </section>

        </div>
      </div>
    </div>
  )
}
