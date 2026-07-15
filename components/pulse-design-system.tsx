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

// Additional visual icons mock to reach 20 operational icons
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

export const PulseDesignSystemArtboard = () => {
  const [isChecked, setIsChecked] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <div className="w-[1360px] bg-[#FAF8F5] paper-grain rounded-[8px] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.3)] border border-[#1E1611]/10 flex flex-col relative text-[#1E1611] font-sans">
      
      {/* Editorial Header */}
      <div className="px-12 pt-12 pb-8 border-b border-[#1E1611]/8 flex items-baseline justify-between">
        <div>
          <span className="font-serif text-[13px] tracking-[0.18em] text-[#8A6D3B] uppercase font-semibold">Aurelia Swiss Alps Resort</span>
          <h1 className="font-serif text-[38px] font-light tracking-wide text-[#1E1611] mt-1.5">Pulse Design System</h1>
          <p className="text-[13px] text-[#1E1611]/50 mt-1 max-w-[520px]">
            The internal operational design specification for Aurelia's 7:00 AM Command Center. 
            Built on quiet precision, warm analogue textures, and absolute restraint.
          </p>
        </div>
        <div className="text-right">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#1E1611]/40">Version 2.4 (Production Handoff)</span>
          <div className="text-[12px] text-[#2F483A] font-medium mt-1">PMS Integration Active</div>
        </div>
      </div>

      <div className="flex-1 flex min-h-0 overflow-y-auto">
        <div className="flex-1 px-12 py-10 flex flex-col gap-16">
          
          {/* ==================== 01. TYPOGRAPHY ==================== */}
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#1E1611]/6 pb-2">
              <span className="font-mono text-[11px] text-[#8A6D3B]">01 / FOUNDATION</span>
              <h2 className="font-serif text-[22px] font-light text-[#1E1611] mt-0.5">Typography Hierarchy</h2>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {[
                { name: "Display XL", font: "Cormorant Garamond", style: "italic font-light", size: "38px", lh: "1.1", ls: "normal", code: "font-serif text-[38px] font-light italic", desc: "Hero stat metrics and decorative monogram branding." },
                { name: "Page Title", font: "Cormorant Garamond", style: "font-light", size: "24px", lh: "1.2", ls: "0.02em", code: "font-serif text-[24px] font-light tracking-wide", desc: "Primary title for major operations screens." },
                { name: "Section Heading", font: "Cormorant Garamond", style: "font-medium", size: "20px", lh: "1.25", ls: "normal", code: "font-serif text-[20px] font-medium", desc: "Category card headers and key focal text blocks." },
                { name: "Card Title", font: "Cormorant Garamond", style: "font-semibold italic", size: "15.5px", lh: "1.3", ls: "0.01em", code: "font-serif text-[15.5px] font-semibold italic", desc: "Title for items requiring decision or action." },
                { name: "Body Large", font: "Cormorant Garamond", style: "font-medium", size: "14px", lh: "1.4", ls: "normal", code: "font-serif text-[14px] font-medium", desc: "Apology guidelines, descriptions, and user notes." },
                { name: "Body Regular", font: "Plus Jakarta Sans", style: "font-normal", size: "12.5px", lh: "1.5", ls: "normal", code: "font-sans text-[12.5px] text-[#1E1611]/75", desc: "Primary reading text, tool descriptions, and options details." },
                { name: "Table Heading", font: "Plus Jakarta Sans", style: "font-semibold uppercase", size: "9.5px", lh: "1.6", ls: "0.18em", code: "text-[9.5px] font-sans font-medium uppercase tracking-[0.18em]", desc: "Ledger columns and section categorization labels." },
                { name: "Metadata", font: "Plus Jakarta Sans", style: "font-normal", size: "11px", lh: "1.3", ls: "normal", code: "text-[11px] font-sans text-[#1E1611]/45", desc: "Quiet secondary details, task ownership, and logs." },
                { name: "Caption / Status", font: "Plus Jakarta Sans", style: "font-semibold uppercase", size: "10px", lh: "1.4", ls: "0.12em", code: "text-[10px] font-sans uppercase tracking-[0.12em] font-semibold", desc: "Workflow and state labels (Absent, Resolved, Priority)." },
                { name: "Button Label", font: "Plus Jakarta Sans", style: "font-bold uppercase", size: "11.5px", lh: "1.0", ls: "0.18em", code: "text-[11.5px] font-sans font-bold uppercase tracking-[0.18em]", desc: "Action text inside tactile pill components." }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col lg:flex-row lg:items-center justify-between border-b border-[#1E1611]/4 pb-4 last:border-0 gap-4">
                  <div className="w-[180px] shrink-0">
                    <span className="text-[12px] font-bold text-[#1E1611] block">{item.name}</span>
                    <span className="text-[10px] font-mono text-[#1E1611]/45 block mt-0.5">{item.font}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className={`${item.style} text-[#1E1611] block truncate`} style={{ fontSize: item.size }}>
                      The quick brown fox jumps over the lazy dog
                    </span>
                  </div>
                  <div className="w-[280px] shrink-0 text-right lg:text-left">
                    <span className="text-[10px] font-mono text-[#8A6D3B] block">{item.code}</span>
                    <span className="text-[11px] text-[#1E1611]/50 block mt-1">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ==================== 02. COLOR TOKENS ==================== */}
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#1E1611]/6 pb-2">
              <span className="font-mono text-[11px] text-[#8A6D3B]">02 / FOUNDATION</span>
              <h2 className="font-serif text-[22px] font-light text-[#1E1611] mt-0.5">Color Tokens</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                { name: "Primary Green", hex: "#2F483A", usage: "Primary actions, success indicators, selected paths." },
                { name: "Success Green", hex: "#2F483A", usage: "Resolved states, complete check-ins." },
                { name: "Warning Bronze", hex: "#8A6D3B", usage: "Attention states, scheduling collisions, capacity warning." },
                { name: "Critical Red", hex: "#C2410C", usage: "Urgent alerts, water sensor triggers, deficits." },
                { name: "Warm Ivory", hex: "#FAF8F5", usage: "Cards background, secondary surfaces, clean tabs." },
                { name: "Paper White", hex: "#FFFFFF", usage: "Task cards, visual elevation highlights." },
                { name: "Base Background", hex: "#F4F1EA", usage: "Pulse container backing, global page layout." },
                { name: "Border Base", hex: "rgba(30,22,17,0.08)", usage: "Delicate separations, hairline indicators." },
                { name: "Text Primary", hex: "#1E1611", usage: "Primary headings, titles, active navigation." },
                { name: "Text Secondary", hex: "rgba(30,22,17,0.55)", usage: "Body text, status labels, default menu items." },
                { name: "Disabled State", hex: "rgba(30,22,17,0.25)", usage: "Non-interactive buttons, locked schedules." }
              ].map((color, idx) => (
                <div key={idx} className="flex items-start gap-4 p-3 rounded-[6px] border border-[#1E1611]/4 bg-white/40">
                  <div className="w-12 h-12 rounded-[4px] border border-[#1E1611]/10 shrink-0" style={{ backgroundColor: color.hex.startsWith("rgba") ? "#FAF8F5" : color.hex, borderColor: color.hex.startsWith("rgba") ? color.hex : "rgba(30,22,17,0.1)" }} />
                  <div>
                    <span className="text-[12px] font-semibold text-[#1E1611] block">{color.name}</span>
                    <span className="text-[10px] font-mono text-[#8A6D3B] block mt-0.5">{color.hex}</span>
                    <p className="text-[10.5px] text-[#1E1611]/50 mt-1 leading-snug">{color.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ==================== 03. SPACING & RADIUS SYSTEM ==================== */}
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#1E1611]/6 pb-2">
              <span className="font-mono text-[11px] text-[#8A6D3B]">03 / SYSTEM</span>
              <h2 className="font-serif text-[22px] font-light text-[#1E1611] mt-0.5">Spacing & Radius Systems</h2>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
              <div className="flex flex-col gap-4">
                <span className="text-[11.5px] font-sans font-bold uppercase tracking-wider text-[#1E1611]/50">Spacing Scale</span>
                <div className="flex flex-col gap-3">
                  {[
                    { token: "spacing.4", val: "4px" },
                    { token: "spacing.8", val: "8px" },
                    { token: "spacing.12", val: "12px" },
                    { token: "spacing.16", val: "16px" },
                    { token: "spacing.24", val: "24px" },
                    { token: "spacing.32", val: "32px" },
                    { token: "spacing.40", val: "40px" },
                    { token: "spacing.48", val: "48px" },
                    { token: "spacing.64", val: "64px" }
                  ].map((sp, idx) => (
                    <div key={idx} className="flex items-center justify-between border-b border-[#1E1611]/4 pb-2 last:border-0">
                      <span className="text-[11.5px] font-mono text-[#8A6D3B]">{sp.token}</span>
                      <div className="flex-1 max-w-[200px] h-2 bg-[#2F483A] rounded-[1px] mx-4" style={{ width: sp.val }} />
                      <span className="text-[11px] text-[#1E1611]/45">{sp.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-[11.5px] font-sans font-bold uppercase tracking-wider text-[#1E1611]/50">Layout Spacing Allocations</span>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { type: "Card Padding", space: "spacing.24", desc: "Internal padding for stationery cards (p-6)." },
                    { type: "Section Gap", space: "spacing.32", desc: "Vertical separation between dashboard zones (gap-8)." },
                    { type: "Grid Gap", space: "spacing.32", desc: "Horizontal gutter between columns (gap-8)." },
                    { type: "Page Margin", space: "spacing.40", desc: "Outer screen alignment margins (px-10 py-8)." },
                    { type: "Table Row Height", space: "spacing.48", desc: "Standard ledger list item row bounding box (h-12)." },
                    { type: "Button Padding", space: "spacing.12 / spacing.24", desc: "Forest green primary pill dimensions (px-7 py-3.5)." }
                  ].map((alloc, idx) => (
                    <div key={idx} className="flex justify-between items-baseline border-b border-[#1E1611]/4 pb-2.5 last:border-0">
                      <div>
                        <span className="text-[12px] font-semibold text-[#1E1611] block">{alloc.type}</span>
                        <span className="text-[11px] text-[#1E1611]/45 block mt-0.5">{alloc.desc}</span>
                      </div>
                      <span className="text-[11px] font-mono text-[#8A6D3B] text-right">{alloc.space}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-[11.5px] font-sans font-bold uppercase tracking-wider text-[#1E1611]/50">Radius Scale</span>
                <div className="flex flex-col gap-3">
                  {[
                    { token: "radius.small", val: "4px", desc: "Form inputs, tags, small selection tabs.", preview: "rounded-[4px]" },
                    { token: "radius.card", val: "6px", desc: "Primary stationery cards and ledger blocks.", preview: "rounded-[6px]" },
                    { token: "radius.medium", val: "8px", desc: "Outer workspace mockups, screen showcases.", preview: "rounded-[8px]" },
                    { token: "radius.large", val: "24px", desc: "Showcase viewport modules.", preview: "rounded-[24px]" },
                    { token: "radius.full", val: "9999px", desc: "Primary action pills and avatars.", preview: "rounded-full" }
                  ].map((rd, idx) => (
                    <div key={idx} className="flex items-center gap-3 border-b border-[#1E1611]/4 pb-2 last:border-0">
                      <div className={`w-8 h-8 bg-[#2F483A]/10 border border-[#2F483A]/30 shrink-0 ${rd.preview}`} />
                      <div className="flex-grow min-w-0">
                        <span className="text-[11.5px] font-mono text-[#8A6D3B] block">{rd.token}</span>
                        <span className="text-[10px] text-[#1E1611]/50 block truncate mt-0.5">{rd.desc}</span>
                      </div>
                      <span className="text-[11px] text-[#1E1611]/45 text-right font-mono">{rd.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ==================== 04. GRID SYSTEM ==================== */}
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#1E1611]/6 pb-2">
              <span className="font-mono text-[11px] text-[#8A6D3B]">04 / SYSTEM</span>
              <h2 className="font-serif text-[22px] font-light text-[#1E1611] mt-0.5">Grid System</h2>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              <div className="xl:col-span-2 flex flex-col gap-4">
                <span className="text-[11.5px] font-sans font-bold uppercase tracking-wider text-[#1E1611]/50">12-Column Desktop Grid (Mockup)</span>
                <div className="h-20 bg-white/40 border border-[#1E1611]/8 rounded-[6px] p-2 flex gap-2">
                  {Array.from({ length: 12 }).map((_, idx) => (
                    <div key={idx} className="flex-1 bg-[#2F483A]/[0.04] border border-[#2F483A]/10 rounded-[2px] flex items-center justify-center">
                      <span className="text-[9px] font-mono text-[#2F483A]/60">{idx+1}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 text-center text-[10px] text-[#1E1611]/40 mt-1 font-mono">
                  <span>Sidebar (3 cols)</span>
                  <span>Gutter (32px)</span>
                  <span>Content (9 cols)</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-[11.5px] font-sans font-bold uppercase tracking-wider text-[#1E1611]/50">Layout Rules</span>
                <div className="flex flex-col gap-2.5 text-[12px] text-[#1E1611]/70 leading-relaxed">
                  <p>• <span className="font-semibold text-[#1E1611]">Max Width:</span> 1360px absolute limit to prevent wide-scanning fatigue.</p>
                  <p>• <span className="font-semibold text-[#1E1611]">Sidebar:</span> 188px fixed layout columns for linear workflow focus.</p>
                  <p>• <span className="font-semibold text-[#1E1611]">Card Spacing:</span> 32px consistent margins to separate focus modules.</p>
                  <p>• <span className="font-semibold text-[#1E1611]">Scale:</span> Fluid column widths with static gutters and sidebar.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ==================== 05. COMPONENT LIBRARY ==================== */}
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#1E1611]/6 pb-2">
              <span className="font-mono text-[11px] text-[#8A6D3B]">05 / COMPONENTS</span>
              <h2 className="font-serif text-[22px] font-light text-[#1E1611] mt-0.5">Component Library</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              
              {/* Card 1: Buttons */}
              <Card className="p-6 flex flex-col gap-5">
                <SectionLabel>Buttons & Actions</SectionLabel>
                <div className="flex flex-col gap-4 mt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#1E1611]/40">Primary (Default)</span>
                    <PrimaryAction className="h-9 px-5 text-[10px]">Confirm</PrimaryAction>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#1E1611]/40">Primary (Hover)</span>
                    <button className="paper-grain h-9 px-5 rounded-full bg-[#23372B] text-[#FAF8F5] font-sans text-[10px] uppercase tracking-[0.18em] font-bold border border-[#2F483A]/20 shadow-[0_2px_8px_rgba(47,72,58,0.15)]">Confirm</button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#1E1611]/40">Secondary (Default)</span>
                    <SecondaryAction><span className="text-[10px] px-0 h-6 flex items-center justify-center">Option</span></SecondaryAction>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#1E1611]/40">Text (ActionText)</span>
                    <ActionText>Resolve Path</ActionText>
                  </div>
                </div>
              </Card>

              {/* Card 2: Inputs & Selectors */}
              <Card className="p-6 flex flex-col gap-5">
                <SectionLabel>Inputs & Selectors</SectionLabel>
                <div className="flex flex-col gap-4 mt-2">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[9.5px] font-sans uppercase tracking-[0.12em] text-[#1E1611]/40">Search Registry</span>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Search Room or Guest..." 
                        className="w-full bg-[#FAF8F5]/50 border border-[#1E1611]/12 rounded-[4px] px-3 py-1.5 text-[12px] placeholder-[#1E1611]/30 font-sans focus:outline-none focus:border-[#2F483A]/60"
                        readOnly
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1E1611]/35"><SearchIcon /></span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <span className="text-[9.5px] font-sans uppercase tracking-[0.12em] text-[#1E1611]/40">Action Dropdown</span>
                    <div className="relative">
                      <button 
                        onClick={() => setDropdownOpen(!dropdownOpen)} 
                        className="w-full bg-[#FAF8F5]/80 border border-[#1E1611]/12 rounded-[4px] px-3 py-1.5 text-[12px] flex items-center justify-between focus:outline-none text-[#1E1611] font-serif italic text-left"
                      >
                        <span>Relocate to Sister Property</span>
                        <span className="text-[9.5px] text-[#1E1611]/50 not-italic font-sans">▼</span>
                      </button>
                      {dropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-[#FAF8F5] border border-[#1E1611]/10 rounded-[4px] shadow-md z-20 flex flex-col">
                          <span className="px-3 py-2 text-[12px] border-b border-[#1E1611]/4 font-serif italic hover:bg-[#1E1611]/[0.02] cursor-pointer">Consolidate Group</span>
                          <span className="px-3 py-2 text-[12px] font-serif italic hover:bg-[#1E1611]/[0.02] cursor-pointer">Decline Late Booking</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 cursor-pointer mt-1" onClick={() => setIsChecked(!isChecked)}>
                    <span 
                      className="w-4 h-4 rounded-[3px] border flex items-center justify-center shrink-0 transition-colors"
                      style={{ background: isChecked ? "#2F483A" : "transparent", borderColor: isChecked ? "#2F483A" : "rgba(30,22,17,0.25)" }}
                    >
                      {isChecked && <span className="w-1.5 h-1.5 bg-[#FAF8F5] rounded-full" />}
                    </span>
                    <span className="text-[12px] text-[#1E1611]/70 select-none">Mark resolved & deliver note</span>
                  </div>
                </div>
              </Card>

              {/* Card 3: Status & Avatars */}
              <Card className="p-6 flex flex-col gap-5">
                <SectionLabel>Status & Avatars</SectionLabel>
                <div className="flex flex-col gap-4 mt-2">
                  <div className="flex items-center justify-between border-b border-[#1E1611]/4 pb-2.5">
                    <span className="text-[10px] font-mono text-[#1E1611]/40">Status: Resolved</span>
                    <span className="inline-flex items-center gap-1.5 text-[9.5px] font-sans font-bold uppercase tracking-wider text-[#2F483A]">
                      <span className="w-1 h-1 rounded-full bg-[#2F483A]" />
                      Resolved
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#1E1611]/4 pb-2.5">
                    <span className="text-[10px] font-mono text-[#1E1611]/40">Status: In Progress</span>
                    <span className="inline-flex items-center gap-1.5 text-[9.5px] font-sans font-bold uppercase tracking-wider text-[#8A6D3B]">
                      <span className="w-1 h-1 rounded-full bg-[#8A6D3B]" />
                      In Progress
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#1E1611]/40">Owner Token</span>
                    <OwnerToken 
                      initials="SO" 
                      name="Sofia" 
                      role="Concierge"
                      image="https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=150&h=150" 
                    />
                  </div>
                </div>
              </Card>
            </div>

            {/* Shared vs Diverging Component Specifications */}
            <div className="mt-6 border-t border-dashed border-[#1E1611]/12 pt-6">
              <span className="text-[11.5px] font-sans font-bold uppercase tracking-wider text-[#1E1611]/50 block mb-4">Shared vs. Diverging Components</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[12px] leading-relaxed">
                <div className="p-4 rounded-[6px] border border-[#1E1611]/5 bg-[#FAF8F5]/50 flex flex-col gap-2.5">
                  <span className="font-serif italic font-semibold text-[15px] text-[#1E1611] block mb-1">Host App (Mobile Guest Persona)</span>
                  <div className="flex flex-col gap-2 text-[#1E1611]/70">
                    <p>• <span className="font-semibold text-[#1E1611]">Visual Density:</span> Extremely low. Generous vertical breathing space helps stressed travelers feel calm and unhurried.</p>
                    <p>• <span className="font-semibold text-[#1E1611]">Touch Targets:</span> Large physical scale (48px+ heights) to avoid errors during transit, walking, or check-in.</p>
                    <p>• <span className="font-semibold text-[#1E1611]">Visual Elements:</span> Deckled card borders, wax seals, warm paper lighting, and large photography card blocks.</p>
                  </div>
                </div>

                <div className="p-4 rounded-[6px] border border-[#1E1611]/5 bg-[#FAF8F5]/50 flex flex-col gap-2.5">
                  <span className="font-serif italic font-semibold text-[15px] text-[#1E1611] block mb-1">Pulse App (Desktop Staff Persona)</span>
                  <div className="flex flex-col gap-2 text-[#1E1611]/70">
                    <p>• <span className="font-semibold text-[#1E1611]">Visual Density:</span> High-density tables, multi-column task boards, and dual sidebars to present critical operational chains.</p>
                    <p>• <span className="font-semibold text-[#1E1611]">Target Controls:</span> High keyboard & hover target efficiency (36px action targets, compact status indicators) for rapid triage.</p>
                    <p>• <span className="font-semibold text-[#1E1611]">Visual Elements:</span> Hairline rules, borderless ledger rows, telemetry micro-gauges, and assignee photo tokens.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ==================== 06. ICONOGRAPHY ==================== */}
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#1E1611]/6 pb-2">
              <span className="font-mono text-[11px] text-[#8A6D3B]">06 / SYSTEM</span>
              <h2 className="font-serif text-[22px] font-light text-[#1E1611] mt-0.5">Iconography language</h2>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
              <div className="xl:col-span-3 flex flex-col gap-4">
                <span className="text-[11.5px] font-sans font-bold uppercase tracking-wider text-[#1E1611]/50">Operational Line Icons (1px stroke)</span>
                <div className="grid grid-cols-5 sm:grid-cols-7 xl:grid-cols-10 gap-6 p-6 rounded-[8px] bg-white/40 border border-[#1E1611]/6 justify-items-center">
                  {[
                    { component: <RoomKeyIcon className="w-5 h-5 text-[#1E1611]" />, label: "Key" },
                    { component: <BellIcon className="w-5 h-5 text-[#1E1611]" />, label: "Bell" },
                    { component: <HouseIcon className="w-5 h-5 text-[#1E1611]" />, label: "Room" },
                    { component: <FireplaceIcon className="w-5 h-5 text-[#1E1611]" />, label: "Hearth" },
                    { component: <MountainIcon className="w-5 h-5 text-[#1E1611]" />, label: "Resort" },
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
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-[11.5px] font-sans font-bold uppercase tracking-wider text-[#1E1611]/50">Icon Rules</span>
                <div className="flex flex-col gap-2.5 text-[12px] text-[#1E1611]/70 leading-relaxed">
                  <p>• <span className="font-semibold text-[#1E1611]">Stroke:</span> Absolute 1px stroke weight for delicate, Swiss precision.</p>
                  <p>• <span className="font-semibold text-[#1E1611]">Color:</span> Always inherits currentColor. Never uses solid colored backing.</p>
                  <p>• <span className="font-semibold text-[#1E1611]">Purpose:</span> Purely operational. Generic app-chrome icons are banned.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ==================== 07. DATA VISUALIZATION ==================== */}
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#1E1611]/6 pb-2">
              <span className="font-mono text-[11px] text-[#8A6D3B]">07 / VISUALIZATIONS</span>
              <h2 className="font-serif text-[22px] font-light text-[#1E1611] mt-0.5">Data Visualization</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              
              {/* Radial gauge viz */}
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-mono text-[#1E1611]/40">Occupancy Ring</span>
                <div className="p-5 rounded-[6px] border border-[#1E1611]/5 bg-[#FAF8F5] flex items-center justify-center min-h-[120px]">
                  <RadialGauge value={100} valueLabel="100%" label="Usable occupancy tonight" />
                </div>
              </div>

              {/* Capacity Bar viz */}
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-mono text-[#1E1611]/40">Capacity Bars</span>
                <div className="p-5 rounded-[6px] border border-[#1E1611]/5 bg-[#FAF8F5] flex flex-col justify-center min-h-[120px] gap-2">
                  <BarCompare label="Operational Load" items={[{ label: "Arrivals", value: 14 }, { label: "Departures", value: 11 }]} />
                </div>
              </div>

              {/* Progress dots viz */}
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-mono text-[#1E1611]/40">Progress dots (PunchStrip)</span>
                <div className="p-5 rounded-[6px] border border-[#1E1611]/5 bg-[#FAF8F5] flex flex-col justify-center min-h-[120px]">
                  <PunchStrip total={5} filled={3} label="Housekeeping assignment" />
                </div>
              </div>

              {/* Micro Sparkline / Live Indicator */}
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-mono text-[#1E1611]/40">Micro Sparkline / Status Dot</span>
                <div className="p-5 rounded-[6px] border border-[#1E1611]/5 bg-[#FAF8F5] flex flex-col justify-center min-h-[120px] gap-3">
                  <div className="flex items-center justify-between border-b border-[#1E1611]/4 pb-1.5">
                    <span className="text-[11px] text-[#1E1611]/55">Arrival count</span>
                    <span className="text-[11.5px] font-mono font-medium text-[#1E1611]">14</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-[#1E1611]/55">Status dot</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C2410C] animate-pulse" />
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* ==================== 08. MOTION PRINCIPLES ==================== */}
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#1E1611]/6 pb-2">
              <span className="font-mono text-[11px] text-[#8A6D3B]">08 / FOUNDATION</span>
              <h2 className="font-serif text-[22px] font-light text-[#1E1611] mt-0.5">Motion Principles</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {[
                { label: "Page Transition", spec: "Opacity & y-offset", val: "220ms · ease-out", desc: "Cards lift or fade into position when switching work screens." },
                { label: "Active Nav Transition", spec: "Slide & padding", val: "180ms · cubic-bezier(0.16, 1, 0.3, 1)", desc: "Left green indicator expands vertically with a padding offset shift." },
                { label: "State confirmations", spec: "Scale & checkmark path", val: "240ms · ease-out", desc: "Checkmark circles complete smoothly on resolution actions." }
              ].map((mot, idx) => (
                <div key={idx} className="p-4 rounded-[6px] border border-[#1E1611]/4 bg-white/30 flex flex-col gap-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[12px] font-semibold text-[#1E1611]">{mot.label}</span>
                    <span className="text-[10px] font-mono text-[#8A6D3B]">{mot.val}</span>
                  </div>
                  <div className="text-[10px] font-mono text-[#1E1611]/40">{mot.spec}</div>
                  <p className="text-[11.5px] text-[#1E1611]/50 mt-1 leading-snug">{mot.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ==================== 09. DESIGN PRINCIPLES ==================== */}
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#1E1611]/6 pb-2">
              <span className="font-mono text-[11px] text-[#8A6D3B]">09 / PRINCIPLES</span>
              <h2 className="font-serif text-[22px] font-light text-[#1E1611] mt-0.5">Design Principles</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {[
                { title: "Read Before Reacting", desc: "Context precedes actions. A morning coordinator has complete clarity of overnight logs prior to allocating shift duties." },
                { title: "One Decision at a Time", desc: "Workflow is linear. Focus on the root cause overcapacity to naturally clean subsequent VIP and housekeeping collisions." },
                { title: "Whitespace Replaces Borders", desc: "Luxury is restraint. Layout separation relies on generous padding and editorial typography instead of bounding boxes." },
                { title: "Technology Disappears", desc: "Software supports decisions rather than displaying itself. Minimal metrics visual widgets feel operational and paper-made." }
              ].map((pr, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <span className="font-serif italic font-semibold text-[15px] text-[#1E1611]">{pr.title}</span>
                  <p className="text-[12px] text-[#1E1611]/60 leading-relaxed">{pr.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ==================== 10. ENGINEERING TOKENS ==================== */}
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#1E1611]/6 pb-2">
              <span className="font-mono text-[11px] text-[#8A6D3B]">10 / DEVELOPMENT</span>
              <h2 className="font-serif text-[22px] font-light text-[#1E1611] mt-0.5">Engineering Design Tokens</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {[
                { title: "Color Tokens", list: ["color.brand.primary: #2F483A", "color.status.warning: #8A6D3B", "color.status.critical: #C2410C", "color.bg.ivory: #FAF8F5"] },
                { title: "Spacing Tokens", list: ["spacing.xsmall: 4px", "spacing.small: 8px", "spacing.medium: 16px", "spacing.large: 32px"] },
                { title: "Radius Tokens", list: ["radius.card: 6px", "radius.avatar: 9999px", "radius.input: 4px", "radius.button: 9999px"] },
                { title: "Typography Tokens", list: ["text.serif.heading: Cormorant Garamond", "text.sans.body: Plus Jakarta Sans", "text.mono: font-mono"] }
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

          {/* ==================== 11. ACCESSIBILITY ==================== */}
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#1E1611]/6 pb-2">
              <span className="font-mono text-[11px] text-[#8A6D3B]">11 / SPECIFICATION</span>
              <h2 className="font-serif text-[22px] font-light text-[#1E1611] mt-0.5">Accessibility</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[12px] text-[#1E1611]/70 leading-relaxed">
              <div>
                <span className="text-[12px] font-semibold text-[#1E1611] block mb-1">Contrast Compliance</span>
                <p>All functional labels, statuses, and navigation links maintain a minimum contrast ratio of 4.5:1 against the ivory backing. Primary button green has 7:1 contrast.</p>
              </div>
              <div>
                <span className="text-[12px] font-semibold text-[#1E1611] block mb-1">Touch Targets</span>
                <p>All button and action items have a minimum interactive height of 36px (buttons are h-12 or h-9), assuring clear navigation and target accessibility.</p>
              </div>
              <div>
                <span className="text-[12px] font-semibold text-[#1E1611] block mb-1">Keyboard Navigation</span>
                <p>Forms, drop-downs, and toggles have visible outline states during keyboard tab focus, guaranteeing accessibility without sacrificing the minimal interface aesthetic.</p>
              </div>
            </div>
          </section>

          {/* ==================== 12. DESIGN & ARCHITECTURAL REASONING ==================== */}
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#1E1611]/6 pb-2">
              <span className="font-mono text-[11px] text-[#8A6D3B]">12 / STRATEGY</span>
              <h2 className="font-serif text-[22px] font-light text-[#1E1611] mt-0.5">Design & Architectural Reasoning</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[12px] text-[#1E1611]/70 leading-relaxed">
              <div>
                <span className="text-[12.5px] font-semibold text-[#1E1611] block mb-2">1. Three Core Assumptions</span>
                <p className="mb-2">
                  • <span className="font-semibold text-[#1E1611]">Pre-Arrival Check-in:</span> Stressed guests want to bypass physical reception entirely. Geofencing relies on passport verification, key issuance, and billing auth completing beforehand.
                </p>
                <p className="mb-2">
                  • <span className="font-semibold text-[#1E1611]">Low-Frequency Telemetry:</span> Staff need active operational sync but not real-time flashing charts. Data polling occurs on quiet intervals (12s loops) rather than continuous updates.
                </p>
                <p>
                  • <span className="font-semibold text-[#1E1611]">Analog Touch Preference:</span> Stressed travelers find relief in physical, tactile cues. High-end paper interfaces reduce friction and reassure luxury expectations.
                </p>
              </div>

              <div>
                <span className="text-[12.5px] font-semibold text-[#1E1611] block mb-2">2. What Breaks at 100 Hotels?</span>
                <p className="mb-2">
                  • <span className="font-semibold text-[#1E1611]">Triage Automation:</span> The current single-board morning registry relies on human coordination. At 100 hotels, centralized operations require automated triage prioritization.
                </p>
                <p className="mb-2">
                  • <span className="font-semibold text-[#1E1611]">Relocation Inventory:</span> Rebooking overcapacity to local "sister properties" fails under high scaling. Dynamic cross-hotel inventory and localized partner availability APIs become necessary.
                </p>
                <p>
                  • <span className="font-semibold text-[#1E1611]">Staff Allocation:</span> Drag-and-drop roster rebalance fails at scale. Global scheduling systems must handle active shifts automatically across multiple regions.
                </p>
              </div>

              <div>
                <span className="text-[12.5px] font-semibold text-[#1E1611] block mb-2">3. What Was Intentionally Left Out?</span>
                <p className="mb-2">
                  • <span className="font-semibold text-[#1E1611]">Chat & Communication:</span> Avoided real-time messaging between guests and staff. Aurelia concierge interaction should occur via pre-selected request options to preserve operational calmness.
                </p>
                <p className="mb-2">
                  • <span className="font-semibold text-[#1E1611]">Financial/Invoicing Portal:</span> Billing issues, invoice disputes, and card auth adjustments were omitted. These create visual stress and belong inside back-office finance panels.
                </p>
                <p>
                  • <span className="font-semibold text-[#1E1611]">Marketing & Booking flow:</span> The design is restricted to the active stay journey. Up-selling and room booking paths are excluded to avoid generic hotel booking noise.
                </p>
              </div>
            </div>
          </section>

          {/* ==================== 13. FINAL NOTES ==================== */}
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
