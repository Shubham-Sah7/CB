"use client"

import React, { useState } from "react"
import { MaskingTape, PushPin, CoffeeRing } from "@/components/canvas-decor"
import { WorkspaceSwitcher } from "@/components/workspace-switcher"
import { PulseDesktopHeader, PulseScreenCaption } from "@/components/pulse-system"
import {
  PulseBriefDesktop,
  PulseConflictsDesktop,
  PulseOverbookingDesktop,
  PulseVipDesktop,
  PulseTeamDesktop,
  PulseHandledDesktop,
} from "@/components/pulse-desktop-screens"

export default function PulsePage() {
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop")

  // Pulse internal operational command states (extracted from Pulse - Operations.dc.html)
  const [activePulseScreenIndex, setActivePulseScreenIndex] = useState(0)
  const [overbookingResolution, setOverbookingResolution] = useState<"pending" | "rebooked" | "consolidate" | "decline">("pending")
  const [isStaffReallocated, setIsStaffReallocated] = useState(false)
  const [vipChampagne, setVipChampagne] = useState(false)
  const [vipFireplace, setVipFireplace] = useState(false)
  const [vipBedding, setVipBedding] = useState(false)
  const [earlyCheckoutRequested, setEarlyCheckoutRequested] = useState(false)
  const [secondHousekeeperAdded, setSecondHousekeeperAdded] = useState(false)

  return (
    <main className="min-h-screen bg-[#F4F1EA] paper-grain flex flex-col gap-12 p-8 select-none selection:bg-[#2F483A] selection:text-[#F6F2EA] overflow-y-auto relative">

      <WorkspaceSwitcher active="pulse" />

          {/* ==================== PULSE SYSTEM: OPERATIONAL COMMAND CENTER ==================== */}
          <div className="max-w-[1650px] mx-auto w-full flex flex-col gap-10">
            
            {/* Quiet page header + view toggle — no boxes, typography carries it */}
            <div className="flex items-end justify-between gap-6 pb-5 border-b border-[#1E1611]/10">
              <div>
                <h1 className="font-serif text-[22px] text-[#1E1611]">Pulse</h1>
                <p className="text-[12px] text-[#1E1611]/45 mt-1">Aurelia Swiss Alps Resort · the 7:00 AM handover</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-5 text-[11px] text-[#1E1611]/45">
                  <button
                    onClick={() => setViewMode("desktop")}
                    className={`transition-colors ${viewMode === "desktop" ? "text-[#1E1611] font-semibold" : "hover:text-[#1E1611]"}`}
                  >
                    Desktop
                  </button>
                  <button
                    onClick={() => setViewMode("mobile")}
                    className={`transition-colors ${viewMode === "mobile" ? "text-[#1E1611] font-semibold" : "hover:text-[#1E1611]"}`}
                  >
                    Mobile
                  </button>
                </div>
              </div>
            </div>

            {viewMode === "desktop" && (
              <div className="w-full overflow-x-auto rounded-[38px] border border-[#1E1611]/12 shadow-sm bg-[#E3DDD0] py-10 px-8 relative overflow-hidden select-none">
                
                {/* Controlled messiness artifacts */}
                <CoffeeRing className="top-12 right-20 opacity-30" />
                <CoffeeRing className="bottom-24 left-10 opacity-20 scale-75" />
                
                {/* Figma Canvas Floating Cursors */}
                <div className="absolute pointer-events-none z-30 flex items-center gap-1" style={{ left: '480px', top: '120px' }}>
                  <svg className="w-4 h-4 fill-[#C084FC] stroke-white stroke-[1.5]" viewBox="0 0 24 24">
                    <path d="M4 4l5 16 3-6 6-3z" />
                  </svg>
                  <span className="bg-[#C084FC] text-[#FAF8F5] text-[8px] font-bold px-1.5 py-0.5 rounded-sm shadow-xs font-sans">Lukas G.</span>
                </div>

                <div className="absolute pointer-events-none z-30 flex items-center gap-1" style={{ right: '350px', top: '920px' }}>
                  <svg className="w-4 h-4 fill-[#F43F5E] stroke-white stroke-[1.5]" viewBox="0 0 24 24">
                    <path d="M4 4l5 16 3-6 6-3z" />
                  </svg>
                  <span className="bg-[#F43F5E] text-[#FAF8F5] text-[8px] font-bold px-1.5 py-0.5 rounded-sm shadow-xs font-sans">Aurelia Design Lead</span>
                </div>

                <PulseDesktopHeader />

                <div className="flex flex-col gap-8 items-center mt-6">
                  
                  {/* Screen 01 */}
                  <div className="flex flex-col gap-3 relative">
                    <PushPin className="top-2 left-10 bg-red-500 border-red-600" />
                    <PulseBriefDesktop 
                      onNavigate={(tab) => {
                        const element = document.getElementById(`desktop-screen-${tab}`)
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth", block: "center" })
                        }
                      }}
                      overbookingResolution={overbookingResolution} 
                      isStaffReallocated={isStaffReallocated} 
                    />
                    <div id="desktop-screen-0" className="flex justify-between items-center px-4 w-[1360px]">
                      <PulseScreenCaption number="01" text="Morning Brief — the whole night in 15 seconds" />
                      <span className="font-mono text-[9px] text-[#1E1611]/45">Artboard 01 // morning_brief.fig</span>
                    </div>
                  </div>

                  {/* Screen 02 */}
                  <div className="flex flex-col gap-3 relative">
                    <PushPin className="top-2 right-10 bg-blue-500 border-blue-600" />
                    <PulseConflictsDesktop 
                      onNavigate={(tab) => {
                        const element = document.getElementById(`desktop-screen-${tab}`)
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth", block: "center" })
                        }
                      }}
                      overbookingResolution={overbookingResolution} 
                      isStaffReallocated={isStaffReallocated} 
                    />
                    <div id="desktop-screen-1" className="flex justify-between items-center px-4 w-[1360px]">
                      <PulseScreenCaption number="02" text="Conflicts — dependencies, not a pile of alerts" />
                      <span className="font-mono text-[9px] text-[#1E1611]/45">Artboard 02 // conflict_dependencies.fig</span>
                    </div>
                  </div>

                  {/* Screen 03 */}
                  <div className="flex flex-col gap-3 relative">
                    <PushPin className="top-2 left-1/2 bg-yellow-500 border-yellow-600" />
                    <PulseOverbookingDesktop 
                      overbookingResolution={overbookingResolution} 
                      setOverbookingResolution={setOverbookingResolution} 
                    />
                    <div id="desktop-screen-2" className="flex justify-between items-center px-4 w-[1360px]">
                      <PulseScreenCaption number="03" text="Overbooking — decide with impact in view" />
                      <span className="font-mono text-[9px] text-[#1E1611]/45">Artboard 03 // overbooking_picker.fig</span>
                    </div>
                  </div>

                  {/* Screen 04 */}
                  <div className="flex flex-col gap-3 relative">
                    <MaskingTape className="-top-3 left-10 rotate-[5deg] w-14 h-4" />
                    <PulseVipDesktop 
                      vipChampagne={vipChampagne} 
                      setVipChampagne={setVipChampagne} 
                      vipFireplace={vipFireplace} 
                      setVipFireplace={setVipFireplace} 
                      vipBedding={vipBedding} 
                      setVipBedding={setVipBedding} 
                      earlyCheckoutRequested={earlyCheckoutRequested} 
                      setEarlyCheckoutRequested={setEarlyCheckoutRequested} 
                      secondHousekeeperAdded={secondHousekeeperAdded} 
                      setSecondHousekeeperAdded={setSecondHousekeeperAdded} 
                    />
                    <div id="desktop-screen-3" className="flex justify-between items-center px-4 w-[1360px]">
                      <PulseScreenCaption number="04" text="VIP Arrival — the whole turnaround on one screen" />
                      <span className="font-mono text-[9px] text-[#1E1611]/45">Artboard 04 // vip_turnaround.fig</span>
                    </div>
                  </div>

                  {/* Screen 05 */}
                  <div className="flex flex-col gap-3 relative">
                    <PushPin className="top-2 right-12 bg-purple-500 border-purple-600" />
                    <PulseTeamDesktop 
                      isStaffReallocated={isStaffReallocated} 
                      setIsStaffReallocated={setIsStaffReallocated} 
                    />
                    <div id="desktop-screen-4" className="flex justify-between items-center px-4 w-[1360px]">
                      <PulseScreenCaption number="05" text="Team — rebalance the shift like a board" />
                      <span className="font-mono text-[9px] text-[#1E1611]/45">Artboard 05 // staff_rebalancing.fig</span>
                    </div>
                  </div>

                  {/* Screen 06 */}
                  <div className="flex flex-col gap-3 relative">
                    <MaskingTape className="-top-3 right-10 rotate-[-8deg] w-14 h-4" />
                    <PulseHandledDesktop 
                      overbookingResolution={overbookingResolution} 
                      isStaffReallocated={isStaffReallocated} 
                      earlyCheckoutRequested={earlyCheckoutRequested} 
                    />
                    <div id="desktop-screen-5" className="flex justify-between items-center px-4 w-[1360px]">
                      <PulseScreenCaption number="06" text="Handled — owner, deadline, status, next" />
                      <span className="font-mono text-[9px] text-[#1E1611]/45">Artboard 06 // handoff_ready.fig</span>
                    </div>
                  </div>

                </div>

              </div>
            )}

            {/* Mobile Mockups Showcase Track (3x2 grid to match Host app style) */}
            {viewMode === "mobile" && (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-8 px-6 gap-x-8 gap-y-12 bg-[#FAF8F5]/30 border border-[#2E2718]/6 rounded-[40px] shadow-[inset_0_2px_8px_rgba(30,22,17,0.02)] justify-items-center">

              {/* ==================== SCREEN 01: MORNING BRIEF ==================== */}
              <div id="pulse-screen-0" className="flex-shrink-0 flex flex-col gap-3 group">
                <div className="flex justify-between items-center px-2 text-[#2E2718]">
                  <span className="font-sans text-[10px] tracking-widest text-[#2E2718]/50 uppercase font-semibold">Screen 01</span>
                  <span className="font-serif text-xs italic">07:00 AM · Morning Brief</span>
                </div>

                <div className="relative p-3 rounded-[50px] bg-[#2E2718] shadow-[0_25px_60px_-15px_rgba(30,22,17,0.25)] border-[0.5px] border-[#F6F2EA]/20">
                  {/* Speaker Notch */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-32 h-4 rounded-full bg-[#2E2718] z-30 flex items-center justify-center gap-1.5 px-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-black/60" />
                    <div className="h-0.5 flex-grow rounded-full bg-[#261E1A]" />
                  </div>

                  {/* Screen Viewport */}
                  <div className="w-[390px] h-[844px] rounded-[38px] overflow-hidden bg-[#F4EFE4] relative paper-grain select-none flex flex-col justify-between text-[#2E2718]">
                    
                    {/* Top status bar */}
                    <div className="pt-9 px-6 flex justify-between items-center font-sans text-[9px] opacity-60">
                      <span>07:00</span>
                      <div className="flex items-center gap-1.5">
                        <span>PULSE 1G</span>
                        <div className="w-4 h-2.5 bg-current opacity-70 rounded-xs" />
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="px-6 pt-4 flex justify-between items-center border-b border-[#2E2718]/8 pb-3">
                      <div>
                        <h2 className="font-serif text-[22px] font-bold">Morning Brief</h2>
                        <span className="font-sans text-[9px] uppercase tracking-wider text-[#9A8E72]">Elena Moser · Lead on shift</span>
                      </div>
                      <span className="bg-[#B4553F]/14 text-[#B4553F] font-sans text-[9px] px-2.5 py-0.5 rounded-full font-bold">5 Tasks</span>
                    </div>

                    {/* App Content */}
                    <div className="px-6 py-4 flex-grow flex flex-col gap-3 overflow-y-auto scrollbar-none">
                      
                      <div className="text-[10px] font-sans opacity-70 mb-1">
                        Wednesday · 15 July · Order of urgency:
                      </div>

                      {/* Issue 1: Room 304 Flooded */}
                      <div className="p-3 bg-[#FBF8F1] border border-[#2E2718]/10 rounded shadow-xs flex flex-col gap-1.5">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#B4553F] rounded-full" />
                            <span className="font-serif text-[13px] font-bold">Room 304 flooded</span>
                          </div>
                          <span className="text-[#B4553F] font-mono text-[8px] font-bold">CRITICAL</span>
                        </div>
                        <p className="font-sans text-[9.5px] text-[#6E634C] leading-relaxed">
                          Guests relocated to 217 at 02:40 AM. Frustrated. Room offline indefinitely.
                        </p>
                        <div className="flex justify-between items-center border-t border-[#2E2718]/5 pt-2 mt-1">
                          <span className="font-mono text-[8.5px] text-[#9A8E72]">OWNER: Unassigned</span>
                          <button className="font-sans text-[9px] font-bold text-[#4E6A57] border border-[#4E6A57]/30 px-2 py-0.5 rounded bg-[#4E6A57]/5">
                            Apology note
                          </button>
                        </div>
                      </div>

                      {/* Issue 2: Overbooked */}
                      <div className="p-3 bg-[#FBF8F1] border border-[#2E2718]/10 rounded shadow-xs flex flex-col gap-1.5">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#B4553F] rounded-full" />
                            <span className="font-serif text-[13px] font-bold">Overbooked by one room</span>
                          </div>
                          <span className="text-[#B4553F] font-mono text-[8px] font-bold">09:00 DEADLINE</span>
                        </div>
                        <p className="font-sans text-[9.5px] text-[#6E634C] leading-relaxed">
                          Sold-out night. Lost 304 inventory leaves hotel one over tonight.
                        </p>
                        <div className="flex justify-between items-center border-t border-[#2E2718]/5 pt-2 mt-1">
                          <span className="font-mono text-[8.5px] text-[#2E2718] font-bold">OWNER: Elena (You)</span>
                          <button 
                            onClick={() => setActivePulseScreenIndex(2)}
                            className="font-sans text-[9px] font-bold text-[#4E6A57] border border-[#4E6A57]/30 px-2 py-0.5 rounded bg-[#4E6A57]/5"
                          >
                            Resolve overbooking
                          </button>
                        </div>
                      </div>

                      {/* Issue 3: VIP early check-in */}
                      <div className="p-3 bg-[#FBF8F1] border border-[#2E2718]/10 rounded shadow-xs flex flex-col gap-1.5">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#B0813A] rounded-full" />
                            <span className="font-serif text-[13px] font-bold">VIP early arrival check-in</span>
                          </div>
                          <span className="text-[#B0813A] font-mono text-[8px] font-bold">11:00 ARRIVAL</span>
                        </div>
                        <p className="font-sans text-[9.5px] text-[#6E634C] leading-relaxed">
                          Brandt Couple (6th stay). Room 208 checkout is noon. Housekeeping has under 1hr window.
                        </p>
                        <div className="flex justify-between items-center border-t border-[#2E2718]/5 pt-2 mt-1">
                          <span className="font-mono text-[8.5px] text-[#2E2718]">OWNER: Sofia</span>
                          <button 
                            onClick={() => setActivePulseScreenIndex(3)}
                            className="font-sans text-[9px] font-bold text-[#4E6A57] border border-[#4E6A57]/30 px-2 py-0.5 rounded bg-[#4E6A57]/5"
                          >
                            Prepare arrival
                          </button>
                        </div>
                      </div>

                      {/* Issue 4: Front Office Sick */}
                      <div className="p-3 bg-[#FBF8F1] border border-[#2E2718]/10 rounded shadow-xs flex flex-col gap-1.5">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#B0813A] rounded-full" />
                            <span className="font-serif text-[13px] font-bold">Front office short-staffed</span>
                          </div>
                          <span className="text-[#B0813A] font-mono text-[8px] font-bold">ATTENTION</span>
                        </div>
                        <p className="font-sans text-[9.5px] text-[#6E634C] leading-relaxed">
                          Léa called sick. 3 of 4 staff active. Arrivals, departures, and 15:00 group need shift coverage.
                        </p>
                        <div className="flex justify-between items-center border-t border-[#2E2718]/5 pt-2 mt-1">
                          <span className="font-mono text-[8.5px] text-[#2E2718]">OWNER: Elena (You)</span>
                          <button 
                            onClick={() => setActivePulseScreenIndex(4)}
                            className="font-sans text-[9px] font-bold text-[#4E6A57] border border-[#4E6A57]/30 px-2 py-0.5 rounded bg-[#4E6A57]/5"
                          >
                            Redistribute work
                          </button>
                        </div>
                      </div>

                    </div>

                    {/* Bottom Nav Tab */}
                    <div className="px-6 pb-8 pt-3 border-t border-[#2E2718]/8 flex justify-between items-center font-sans text-[9px] font-bold text-[#2E2718]/60 bg-[#FAF8F5]">
                      <span className="text-[#4E6A57]">01. Brief</span>
                      <span className="cursor-pointer" onClick={() => setActivePulseScreenIndex(1)}>02. Conflicts</span>
                      <span className="cursor-pointer" onClick={() => setActivePulseScreenIndex(2)}>03. Overbook</span>
                      <span className="cursor-pointer" onClick={() => setActivePulseScreenIndex(3)}>04. VIP</span>
                    </div>

                  </div>
                </div>
              </div>

              {/* ==================== SCREEN 02: CONFLICTS ==================== */}
              <div id="pulse-screen-1" className="flex-shrink-0 flex flex-col gap-3 group">
                <div className="flex justify-between items-center px-2 text-[#2E2718]">
                  <span className="font-sans text-[10px] tracking-widest text-[#2E2718]/50 uppercase font-semibold">Screen 02</span>
                  <span className="font-serif text-xs italic">Conflicts &amp; Connections</span>
                </div>

                <div className="relative p-3 rounded-[50px] bg-[#2E2718] shadow-[0_25px_60px_-15px_rgba(30,22,17,0.25)] border-[0.5px] border-[#F6F2EA]/20">
                  {/* Speaker Notch */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-32 h-4 rounded-full bg-[#2E2718] z-30 flex items-center justify-center gap-1.5 px-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-black/60" />
                    <div className="h-0.5 flex-grow rounded-full bg-[#261E1A]" />
                  </div>

                  {/* Screen Viewport */}
                  <div className="w-[390px] h-[844px] rounded-[38px] overflow-hidden bg-[#F4EFE4] relative paper-grain select-none flex flex-col justify-between text-[#2E2718]">
                    
                    {/* Top status bar */}
                    <div className="pt-9 px-6 flex justify-between items-center font-sans text-[9px] opacity-60">
                      <span>07:01</span>
                      <div className="flex items-center gap-1.5">
                        <span>PULSE 1G</span>
                        <div className="w-4 h-2.5 bg-current opacity-70 rounded-xs" />
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="px-6 pt-4 border-b border-[#2E2718]/8 pb-3">
                      <h2 className="font-serif text-[22px] font-bold">How these connect</h2>
                      <span className="font-sans text-[9px] uppercase tracking-wider text-[#9A8E72]">1 Root Cause · 4 Consequences</span>
                    </div>

                    {/* App Content */}
                    <div className="px-6 py-4 flex-grow flex flex-col gap-3.5 overflow-y-auto scrollbar-none justify-between">
                      
                      <div className="flex flex-col gap-3">
                        
                        {/* Node 1: Root Cause */}
                        <div className="p-3 bg-[#FBF8F1] border border-[#B4553F]/40 rounded shadow-xs flex flex-col gap-1 relative">
                          <span className="absolute -top-1.5 left-3 bg-[#B4553F] text-white font-mono text-[6.5px] px-1 rounded font-bold uppercase tracking-wider">ROOT CAUSE</span>
                          <strong className="font-serif text-[12px] text-[#2E2718] mt-1">Room 304 flooded</strong>
                          <p className="font-sans text-[9px] text-[#6E634C] leading-normal">
                            Pipe leak at 02:00. Room offline. Removing tonight&apos;s last bit of room inventory.
                          </p>
                        </div>

                        {/* Connection Arrow */}
                        <div className="flex justify-center my-0.5 opacity-60">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#9A8E72" strokeWidth="1.5">
                            <path d="M6 1 V11 M3 8 L6 11 L9 8"/>
                          </svg>
                        </div>

                        {/* Node 2: Overbooked */}
                        <div className="p-3 bg-[#FBF8F1] border border-[#B4553F]/40 rounded shadow-xs flex flex-col gap-1 relative">
                          <span className="absolute -top-1.5 left-3 bg-[#B4553F] text-white font-mono text-[6.5px] px-1 rounded font-bold uppercase tracking-wider">CRITICAL</span>
                          <strong className="font-serif text-[12px] text-[#2E2718] mt-1">Overbooked by one room</strong>
                          <p className="font-sans text-[9px] text-[#6E634C] leading-normal">
                            Sold-out night, now over capacity. Needs a relocation choice before 09:00.
                          </p>
                        </div>

                        {/* Connection Arrow */}
                        <div className="flex justify-center my-0.5 opacity-60">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#9A8E72" strokeWidth="1.5">
                            <path d="M6 1 V11 M3 8 L6 11 L9 8"/>
                          </svg>
                        </div>

                        {/* Node 3: VIP Room Conflict */}
                        <div className="p-3 bg-[#FBF8F1] border border-[#B0813A]/40 rounded shadow-xs flex flex-col gap-1 relative">
                          <span className="absolute -top-1.5 left-3 bg-[#B0813A] text-white font-mono text-[6.5px] px-1 rounded font-bold uppercase tracking-wider">ATTENTION</span>
                          <strong className="font-serif text-[12px] text-[#2E2718] mt-1">VIP room prep conflict (Room 208)</strong>
                          <p className="font-sans text-[9px] text-[#6E634C] leading-normal">
                            Brandt early arrival 11:00. Room checks out at noon. Housekeeping turns in under 1hr.
                          </p>
                        </div>

                      </div>

                      {/* Compounding sidebar note */}
                      <div className="p-3 bg-[#F2ECDE] rounded border border-[#2E2718]/8 flex flex-col gap-1">
                        <strong className="font-mono text-[8px] tracking-wider uppercase text-[#9A8E72]">DO THIS FIRST</strong>
                        <p className="font-sans text-[9.5px] text-[#2E2718] leading-relaxed">
                          Resolving the overbooking clears <span className="font-bold">three</span> downstream items at once.
                        </p>
                        <button 
                          onClick={() => setActivePulseScreenIndex(2)}
                          className="w-full mt-2 py-2 rounded bg-[#4E6A57] text-[#FAF8F5] font-sans text-[10px] font-bold shadow-sm"
                        >
                          Resolve overbooking →
                        </button>
                      </div>

                    </div>

                    {/* Bottom Nav Tab */}
                    <div className="px-6 pb-8 pt-3 border-t border-[#2E2718]/8 flex justify-between items-center font-sans text-[9px] font-bold text-[#2E2718]/60 bg-[#FAF8F5]">
                      <span className="cursor-pointer" onClick={() => setActivePulseScreenIndex(0)}>01. Brief</span>
                      <span className="text-[#4E6A57]">02. Conflicts</span>
                      <span className="cursor-pointer" onClick={() => setActivePulseScreenIndex(2)}>03. Overbook</span>
                      <span className="cursor-pointer" onClick={() => setActivePulseScreenIndex(3)}>04. VIP</span>
                    </div>

                  </div>
                </div>
              </div>

              {/* ==================== SCREEN 03: OVERBOOKING RESOLUTION ==================== */}
              <div id="pulse-screen-2" className="flex-shrink-0 flex flex-col gap-3 group">
                <div className="flex justify-between items-center px-2 text-[#2E2718]">
                  <span className="font-sans text-[10px] tracking-widest text-[#2E2718]/50 uppercase font-semibold">Screen 03</span>
                  <span className="font-serif text-xs italic text-[#2E2718]">Overbooking Relief</span>
                </div>

                <div className="relative p-3 rounded-[50px] bg-[#2E2718] shadow-[0_25px_60px_-15px_rgba(30,22,17,0.25)] border-[0.5px] border-[#F6F2EA]/20">
                  {/* Speaker Notch */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-32 h-4 rounded-full bg-[#2E2718] z-30 flex items-center justify-center gap-1.5 px-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-black/60" />
                    <div className="h-0.5 flex-grow rounded-full bg-[#261E1A]" />
                  </div>

                  {/* Screen Viewport */}
                  <div className="w-[390px] h-[844px] rounded-[38px] overflow-hidden bg-[#F4EFE4] relative paper-grain select-none flex flex-col justify-between text-[#2E2718]">
                    
                    {/* Top status bar */}
                    <div className="pt-9 px-6 flex justify-between items-center font-sans text-[9px] opacity-60">
                      <span>07:02</span>
                      <div className="flex items-center gap-1.5">
                        <span>PULSE 1G</span>
                        <div className="w-4 h-2.5 bg-current opacity-70 rounded-xs" />
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="px-6 pt-4 border-b border-[#2E2718]/8 pb-3">
                      <h2 className="font-serif text-[22px] font-bold">Resolve Overbooking</h2>
                      <span className="font-sans text-[9px] uppercase tracking-wider text-[#9A8E72]">Compare impact, then confirm</span>
                    </div>

                    {/* App Content */}
                    <div className="px-6 py-4 flex-grow flex flex-col gap-3.5 overflow-y-auto scrollbar-none">
                      
                      {/* Tonight's numbers info card */}
                      <div className="p-3 bg-[#F2ECDE] rounded border border-[#2E2718]/10 flex flex-col gap-1">
                        <span className="font-mono text-[7.5px] uppercase tracking-wider text-[#9A8E72]">TONIGHT CAPACITY</span>
                        <div className="flex justify-between items-center font-serif text-[18px]">
                          <span>90 Rooms Sold</span>
                          <span>89 Usable</span>
                          <span className="text-[#B4553F] font-bold">+1 Overflow</span>
                        </div>
                      </div>

                      {overbookingResolution === "pending" ? (
                        <>
                          <span className="font-mono text-[8px] uppercase tracking-wider text-[#9A8E72]">Relocation Options</span>

                          {/* Option 1: Rebook (Recommended) */}
                          <div 
                            onClick={() => setOverbookingResolution("rebooked")}
                            className="p-3 bg-[#FBF8F1] border-2 border-[#4E6A57] rounded shadow-sm flex flex-col gap-1 cursor-pointer hover:bg-[#FBF8F1]/80 transition-all"
                          >
                            <div className="flex justify-between items-center">
                              <span className="font-serif text-[13px] font-bold text-[#4E6A57]">1. Rebook to Sister Property</span>
                              <span className="bg-[#4E6A57] text-[#FAF8F5] font-mono text-[6.5px] px-1.5 rounded">RECOMMENDED</span>
                            </div>
                            <p className="font-sans text-[9.5px] text-[#6E634C] leading-relaxed">
                              Chalet Verbois (6 min away). Complimentary shuttle, free future night to soften impact.
                            </p>
                            <div className="flex justify-between items-center border-t border-[#2E2718]/5 pt-2 mt-1.5 font-mono text-[7.5px]">
                              <span>Guest Impact: Minimal</span>
                              <span className="text-red-700 font-bold">-CHF 1,400</span>
                              <span>Risk: Low</span>
                            </div>
                          </div>

                          {/* Option 2: Consolidate */}
                          <div 
                            onClick={() => setOverbookingResolution("consolidate")}
                            className="p-3 bg-[#FBF8F1] border border-[#2E2718]/10 rounded shadow-xs flex flex-col gap-1 cursor-pointer hover:bg-[#FBF8F1]/80 transition-all"
                          >
                            <strong className="font-serif text-[13px]">2. Consolidate flexible party</strong>
                            <p className="font-sans text-[9.5px] text-[#6E634C] leading-relaxed">
                              Move two-room family booking into a suite. Comp the room difference.
                            </p>
                            <div className="flex justify-between items-center border-t border-[#2E2718]/5 pt-2 mt-1.5 font-mono text-[7.5px]">
                              <span>Guest: Moderate</span>
                              <span className="text-[#4E6A57] font-bold">CHF 0 (Comped Suite)</span>
                              <span>Risk: Med</span>
                            </div>
                          </div>

                          {/* Option 3: Decline */}
                          <div 
                            onClick={() => setOverbookingResolution("decline")}
                            className="p-3 bg-[#FBF8F1] border border-[#2E2718]/10 rounded shadow-xs flex flex-col gap-1 cursor-pointer hover:bg-[#FBF8F1]/80 transition-all"
                          >
                            <strong className="font-serif text-[13px]">3. Decline lowest-value booking</strong>
                            <p className="font-sans text-[9.5px] text-[#6E634C] leading-relaxed">
                              Turn away last booking with full refund and gesture.
                            </p>
                            <div className="flex justify-between items-center border-t border-[#2E2718]/5 pt-2 mt-1.5 font-mono text-[7.5px]">
                              <span>Guest: High</span>
                              <span className="text-red-700 font-bold">-CHF 980</span>
                              <span>Risk: High</span>
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="p-4 bg-[#EAF0E4] border border-[#4E6A57]/30 rounded flex flex-col items-center gap-3 text-center my-auto">
                          <span className="w-8 h-8 rounded-full bg-[#4E6A57] flex items-center justify-center text-white text-xs">✓</span>
                          <div>
                            <strong className="font-serif text-[14px] text-[#4E6A57] block">Resolution Locked</strong>
                            <p className="font-sans text-[10px] text-[#6E634C] mt-1.5 leading-relaxed">
                              {overbookingResolution === "rebooked" && "Rebooked to Chalet Verbois. Shuttle dispatched, guest companion app updated."}
                              {overbookingResolution === "consolidate" && "Consolidated family rooms into suite. Front desk team alerted."}
                              {overbookingResolution === "decline" && "Lowest value booking declined. Refund processed and gesture email dispatched."}
                            </p>
                          </div>
                          <button 
                            onClick={() => setOverbookingResolution("pending")}
                            className="text-[9px] font-mono text-[#4E6A57] border-b border-[#4E6A57] font-bold mt-1"
                          >
                            Select Different Option
                          </button>
                        </div>
                      )}

                    </div>

                    {/* Bottom Nav Tab */}
                    <div className="px-6 pb-8 pt-3 border-t border-[#2E2718]/8 flex justify-between items-center font-sans text-[9px] font-bold text-[#2E2718]/60 bg-[#FAF8F5]">
                      <span className="cursor-pointer" onClick={() => setActivePulseScreenIndex(0)}>01. Brief</span>
                      <span className="cursor-pointer" onClick={() => setActivePulseScreenIndex(1)}>02. Conflicts</span>
                      <span className="text-[#4E6A57]">03. Overbook</span>
                      <span className="cursor-pointer" onClick={() => setActivePulseScreenIndex(3)}>04. VIP</span>
                    </div>

                  </div>
                </div>
              </div>

              {/* ==================== SCREEN 04: VIP ARRIVAL ==================== */}
              <div id="pulse-screen-3" className="flex-shrink-0 flex flex-col gap-3 group">
                <div className="flex justify-between items-center px-2 text-[#2E2718]">
                  <span className="font-sans text-[10px] tracking-widest text-[#2E2718]/50 uppercase font-semibold">Screen 04</span>
                  <span className="font-serif text-xs italic text-[#2E2718]">VIP Turnaround</span>
                </div>

                <div className="relative p-3 rounded-[50px] bg-[#2E2718] shadow-[0_25px_60px_-15px_rgba(30,22,17,0.25)] border-[0.5px] border-[#F6F2EA]/20">
                  {/* Speaker Notch */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-32 h-4 rounded-full bg-[#2E2718] z-30 flex items-center justify-center gap-1.5 px-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-black/60" />
                    <div className="h-0.5 flex-grow rounded-full bg-[#261E1A]" />
                  </div>

                  {/* Screen Viewport */}
                  <div className="w-[390px] h-[844px] rounded-[38px] overflow-hidden bg-[#F4EFE4] relative paper-grain select-none flex flex-col justify-between text-[#2E2718]">
                    
                    {/* Top status bar */}
                    <div className="pt-9 px-6 flex justify-between items-center font-sans text-[9px] opacity-60">
                      <span>07:03</span>
                      <div className="flex items-center gap-1.5">
                        <span>PULSE 1G</span>
                        <div className="w-4 h-2.5 bg-current opacity-70 rounded-xs" />
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="px-6 pt-4 border-b border-[#2E2718]/8 pb-3">
                      <h2 className="font-serif text-[22px] font-bold">VIP Arrival</h2>
                      <span className="font-sans text-[9px] uppercase tracking-wider text-[#9A8E72]">Herr &amp; Frau Brandt · Room 208</span>
                    </div>

                    {/* App Content */}
                    <div className="px-6 py-4 flex-grow flex flex-col gap-3.5 overflow-y-auto scrollbar-none justify-between">
                      
                      <div className="flex flex-col gap-3">
                        {/* Guest profile briefing */}
                        <div className="p-3 bg-[#FAF8F5] border border-[#2E2718]/10 rounded shadow-xs flex flex-col gap-1">
                          <span className="font-mono text-[7px] text-[#9A8E72] uppercase tracking-widest">GUEST PREFERENCES</span>
                          <strong className="font-serif text-[13px]">6th stay · Anniversary trip</strong>
                          <p className="font-sans text-[9.5px] text-[#6E634C] leading-normal">
                            • High, quiet floor — away from the lift<br />
                            • Still water, extra espresso pods<br />
                            • Feather-free pillows &amp; duvet<br />
                            • Late dinner, table by the window
                          </p>
                        </div>

                        {/* Welcome amenities interactive checklists */}
                        <div className="p-3 bg-[#FAF8F5] border border-[#2E2718]/10 rounded shadow-xs flex flex-col gap-2">
                          <div className="flex justify-between items-center">
                            <span className="font-mono text-[7px] text-[#9A8E72] uppercase tracking-widest">WELCOME AMENITIES</span>
                            <span className="font-mono text-[8px] text-[#9A8E72]">
                              {[true, true, vipChampagne, vipFireplace, vipBedding].filter(Boolean).length} of 5 Ready
                            </span>
                          </div>
                          
                          <label className="flex items-center gap-2 text-[9.5px] cursor-pointer">
                            <input type="checkbox" checked={true} readOnly className="rounded border-[#2E2718]/30 text-[#4E6A57] focus:ring-0" />
                            <span className="text-[#6E634C] line-through">Alpine flowers arranged</span>
                          </label>
                          <label className="flex items-center gap-2 text-[9.5px] cursor-pointer">
                            <input type="checkbox" checked={true} readOnly className="rounded border-[#2E2718]/30 text-[#4E6A57] focus:ring-0" />
                            <span className="text-[#6E634C] line-through">Handwritten welcome note</span>
                          </label>
                          <label className="flex items-center gap-2 text-[9.5px] cursor-pointer">
                            <input 
                              type="checkbox" 
                              checked={vipChampagne} 
                              onChange={(e) => setVipChampagne(e.target.checked)} 
                              className="rounded border-[#2E2718]/30 text-[#4E6A57] focus:ring-0" 
                            />
                            <span>Champagne on ice</span>
                          </label>
                          <label className="flex items-center gap-2 text-[9.5px] cursor-pointer">
                            <input 
                              type="checkbox" 
                              checked={vipFireplace} 
                              onChange={(e) => setVipFireplace(e.target.checked)} 
                              className="rounded border-[#2E2718]/30 text-[#4E6A57] focus:ring-0" 
                            />
                            <span>Fireplace laid &amp; lit</span>
                          </label>
                          <label className="flex items-center gap-2 text-[9.5px] cursor-pointer">
                            <input 
                              type="checkbox" 
                              checked={vipBedding} 
                              onChange={(e) => setVipBedding(e.target.checked)} 
                              className="rounded border-[#2E2718]/30 text-[#4E6A57] focus:ring-0" 
                            />
                            <span>Feather-free bedding set</span>
                          </label>
                        </div>
                      </div>

                      {/* Action Triggers */}
                      <div className="flex flex-col gap-2 mt-2">
                        <button 
                          onClick={() => setEarlyCheckoutRequested(true)}
                          className={`w-full py-2.5 rounded text-[10px] font-bold shadow-sm transition-all ${
                            earlyCheckoutRequested 
                              ? "bg-[#4E6A57] text-white" 
                              : "bg-[#2E2718] text-[#FAF8F5]"
                          }`}
                        >
                          {earlyCheckoutRequested ? "✓ Checkout Requested at 11:00" : "Request early checkout · 11:00"}
                        </button>
                        
                        <button 
                          onClick={() => setSecondHousekeeperAdded(true)}
                          className="w-full py-2.5 rounded border border-[#4E6A57]/30 text-[#4E6A57] text-[10px] font-bold bg-white hover:bg-[#FAF8F5] transition-all"
                        >
                          {secondHousekeeperAdded ? "✓ 2nd Housekeeper assigned (-30 min)" : "Add 2nd housekeeper · −30 min"}
                        </button>

                        <div className="flex items-center gap-3 mt-2 pt-2 border-t border-[#2E2718]/8">
                          <div className="w-7 h-7 rounded-full bg-[#D8CDB4] flex items-center justify-center font-bold text-[9px]">MR</div>
                          <div className="flex-grow">
                            <div className="font-sans text-[10px] font-bold">Marta Ruiz · Housekeeper</div>
                            <span className="text-[8px] text-[#9A8E72]">Floor 2 · currently in Room 204</span>
                          </div>
                          <span className="text-[8px] bg-[#4E6A57]/12 text-[#4E6A57] font-bold px-2 py-0.5 rounded-full">On Standby</span>
                        </div>
                      </div>

                    </div>

                    {/* Bottom Nav Tab */}
                    <div className="px-6 pb-8 pt-3 border-t border-[#2E2718]/8 flex justify-between items-center font-sans text-[9px] font-bold text-[#2E2718]/60 bg-[#FAF8F5]">
                      <span className="cursor-pointer" onClick={() => setActivePulseScreenIndex(0)}>01. Brief</span>
                      <span className="cursor-pointer" onClick={() => setActivePulseScreenIndex(1)}>02. Conflicts</span>
                      <span className="cursor-pointer" onClick={() => setActivePulseScreenIndex(2)}>03. Overbook</span>
                      <span className="text-[#4E6A57]">04. VIP</span>
                    </div>

                  </div>
                </div>
              </div>

              {/* ==================== SCREEN 05: TEAM ==================== */}
              <div id="pulse-screen-4" className="flex-shrink-0 flex flex-col gap-3 group">
                <div className="flex justify-between items-center px-2 text-[#2E2718]">
                  <span className="font-sans text-[10px] tracking-widest text-[#2E2718]/50 uppercase font-semibold">Screen 05</span>
                  <span className="font-serif text-xs italic">Team Shift Rebalance</span>
                </div>

                <div className="relative p-3 rounded-[50px] bg-[#2E2718] shadow-[0_25px_60px_-15px_rgba(30,22,17,0.25)] border-[0.5px] border-[#F6F2EA]/20">
                  {/* Speaker Notch */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-32 h-4 rounded-full bg-[#2E2718] z-30 flex items-center justify-center gap-1.5 px-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-black/60" />
                    <div className="h-0.5 flex-grow rounded-full bg-[#261E1A]" />
                  </div>

                  {/* Screen Viewport */}
                  <div className="w-[390px] h-[844px] rounded-[38px] overflow-hidden bg-[#F4EFE4] relative paper-grain select-none flex flex-col justify-between text-[#2E2718]">
                    
                    {/* Top status bar */}
                    <div className="pt-9 px-6 flex justify-between items-center font-sans text-[9px] opacity-60">
                      <span>07:04</span>
                      <div className="flex items-center gap-1.5">
                        <span>PULSE 1G</span>
                        <div className="w-4 h-2.5 bg-current opacity-70 rounded-xs" />
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="px-6 pt-4 border-b border-[#2E2718]/8 pb-3 flex justify-between items-center">
                      <div>
                        <h2 className="font-serif text-[22px] font-bold">Today&apos;s Work</h2>
                        <span className="font-sans text-[9px] uppercase tracking-wider text-[#9A8E72]">3 of 4 on shift · Léa sick</span>
                      </div>
                      <button 
                        onClick={() => setIsStaffReallocated(true)}
                        className="bg-[#4E6A57] text-[#FAF8F5] font-sans text-[9px] font-bold px-2.5 py-1 rounded"
                      >
                        Auto-balance
                      </button>
                    </div>

                    {/* App Content */}
                    <div className="px-6 py-4 flex-grow flex flex-col gap-3 overflow-y-auto scrollbar-none">
                      
                      {/* Sick Employee Column */}
                      <div className="p-3 bg-[#F1EBDD] border border-dashed border-[#B4553F]/40 rounded flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-[#E6D6C0] border border-[#2E2718]/10 flex items-center justify-center font-bold text-[9px] text-[#9A8560]">LÉ</span>
                          <div className="flex-grow">
                            <span className="font-sans text-[11px] font-bold text-[#8A5040] block">Léa · Out Sick</span>
                            <span className="text-[7.5px] font-mono text-[#B4553F]">{isStaffReallocated ? "0 Tasks Outstanding" : "6 tasks need owners"}</span>
                          </div>
                        </div>
                        
                        {!isStaffReallocated && (
                          <div className="flex flex-col gap-1.5 mt-1 font-sans text-[9px]">
                            <div className="p-2 bg-[#FBF8F1] border rounded flex justify-between items-center">
                              <span>09:00 · Follow up Rm 217 guests</span>
                              <span className="text-[#4E6A57] font-bold">→ Suggest: Anna</span>
                            </div>
                            <div className="p-2 bg-[#FBF8F1] border rounded flex justify-between items-center">
                              <span>10:30 · Greet VIP Brandt</span>
                              <span className="text-[#4E6A57] font-bold">→ Suggest: Sofia</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Staff Member: Anna */}
                      <div className="p-3 bg-[#FBF8F1] border border-[#2E2718]/10 rounded flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-[#D8CDB4] flex items-center justify-center font-bold text-[9px]">AN</span>
                            <span className="font-sans text-[11.5px] font-bold">Anna</span>
                          </div>
                          <span className="font-mono text-[8px] text-[#B0813A]">{isStaffReallocated ? "Full · 7 tasks" : "Full · 5 tasks"}</span>
                        </div>
                        <div className="h-1 bg-[#EFE8DA] rounded-full overflow-hidden">
                          <div className="h-full bg-[#B0813A] transition-all" style={{ width: isStaffReallocated ? "95%" : "88%" }} />
                        </div>
                      </div>

                      {/* Staff Member: Marc */}
                      <div className="p-3 bg-[#FBF8F1] border border-[#4E6A57]/30 rounded flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-[#D8CDB4] flex items-center justify-center font-bold text-[9px]">MC</span>
                            <span className="font-sans text-[11.5px] font-bold">Marc</span>
                          </div>
                          <span className="font-mono text-[8px] text-[#4E6A57]">{isStaffReallocated ? "4 tasks" : "2 tasks"}</span>
                        </div>
                        <div className="h-1 bg-[#EFE8DA] rounded-full overflow-hidden">
                          <div className="h-full bg-[#4E6A57] transition-all" style={{ width: isStaffReallocated ? "80%" : "42%" }} />
                        </div>
                        {!isStaffReallocated && (
                          <div className="border border-dashed border-[#4E6A57]/45 rounded py-2 text-center text-[#4E6A57] font-bold text-[9px]">
                            Drop Reassigned Tasks Here
                          </div>
                        )}
                      </div>

                      {/* Staff Member: Sofia */}
                      <div className="p-3 bg-[#FBF8F1] border border-[#2E2718]/10 rounded flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-[#D8CDB4] flex items-center justify-center font-bold text-[9px]">SF</span>
                            <span className="font-sans text-[11.5px] font-bold">Sofia · Concierge</span>
                          </div>
                          <span className="font-mono text-[8px] text-[#6E634C]">{isStaffReallocated ? "Balanced · 5 tasks" : "Balanced · 4 tasks"}</span>
                        </div>
                        <div className="h-1 bg-[#EFE8DA] rounded-full overflow-hidden">
                          <div className="h-full bg-[#6E634C] transition-all" style={{ width: isStaffReallocated ? "78%" : "64%" }} />
                        </div>
                      </div>

                    </div>

                    {/* Bottom Nav Tab */}
                    <div className="px-6 pb-8 pt-3 border-t border-[#2E2718]/8 flex justify-between items-center font-sans text-[9px] font-bold text-[#2E2718]/60 bg-[#FAF8F5]">
                      <span className="cursor-pointer" onClick={() => setActivePulseScreenIndex(0)}>01. Brief</span>
                      <span className="cursor-pointer" onClick={() => setActivePulseScreenIndex(1)}>02. Conflicts</span>
                      <span className="cursor-pointer" onClick={() => setActivePulseScreenIndex(2)}>03. Overbook</span>
                      <span className="cursor-pointer" onClick={() => setActivePulseScreenIndex(3)}>04. VIP</span>
                    </div>

                  </div>
                </div>
              </div>

              {/* ==================== SCREEN 06: EVERYTHING OWNED ==================== */}
              <div id="pulse-screen-5" className="flex-shrink-0 flex flex-col gap-3 group">
                <div className="flex justify-between items-center px-2">
                  <span className="font-sans text-[10px] tracking-widest text-[#1E1611]/50 uppercase font-semibold">Screen 06</span>
                  <span className="font-serif text-xs italic text-[#1E1611]">Active registry checklist</span>
                </div>

                <div className="relative p-3 rounded-[50px] bg-[#1E1611] shadow-[0_25px_60px_-15px_rgba(30,22,17,0.25)] border-[0.5px] border-[#F6F2EA]/20">
                  {/* Speaker Notch */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-32 h-4 rounded-full bg-[#1E1611] z-30 flex items-center justify-center gap-1.5 px-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-black/60" />
                    <div className="h-0.5 flex-grow rounded-full bg-[#261E1A]" />
                  </div>

                  {/* Screen Viewport */}
                  <div className="w-[390px] h-[844px] rounded-[38px] overflow-hidden bg-[#FAF8F5] relative paper-grain select-none flex flex-col justify-between text-[#1E1611]">
                    
                    {/* Top status bar */}
                    <div className="pt-9 px-6 flex justify-between items-center font-sans text-[9px] opacity-60">
                      <span>07:05</span>
                      <div className="flex items-center gap-1.5">
                        <span>PULSE 1G</span>
                        <div className="w-4 h-2.5 bg-current opacity-70 rounded-xs" />
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="px-6 pt-4 border-b border-[#1E1611]/8 pb-3">
                      <h2 className="font-serif text-lg font-bold">Everything Handled</h2>
                      <span className="font-mono text-[7px] uppercase tracking-wider text-[#1E1611]/50">Active Handover State</span>
                    </div>

                    {/* App Content */}
                    <div className="px-6 py-4 flex-grow flex flex-col gap-3 overflow-y-auto scrollbar-none justify-between">
                      
                      <div className="flex flex-col gap-2 font-sans text-[9px]">
                        
                        {/* Task 1 */}
                        <div className="p-2.5 border border-[#1E1611]/8 bg-white rounded shadow-xs flex flex-col gap-0.5">
                          <div className="flex justify-between items-center">
                            <span className="font-bold">Room 304 relocation follow up</span>
                            <span className="text-[#4E6A57] font-mono text-[7px] font-bold">✓ RESOLVED</span>
                          </div>
                          <span className="opacity-60 text-[7.5px]">Owner: Anna · Amenity note delivered</span>
                        </div>

                        {/* Task 2 */}
                        <div className="p-2.5 border border-[#1E1611]/8 bg-white rounded shadow-xs flex flex-col gap-0.5">
                          <div className="flex justify-between items-center">
                            <span className="font-bold">Overbooking Relief</span>
                            <span className={`font-mono text-[7px] font-bold ${
                              overbookingResolution !== 'pending' ? 'text-[#4E6A57]' : 'text-red-600'
                            }`}>
                              {overbookingResolution !== 'pending' ? '✓ RESOLVED' : 'UNASSIGNED'}
                            </span>
                          </div>
                          <span className="opacity-60 text-[7.5px]">
                            Owner: Elena · {overbookingResolution !== 'pending' ? "Rebooked Chalet Verbois" : "Awaiting Picker"}
                          </span>
                        </div>

                        {/* Task 3 */}
                        <div className="p-2.5 border border-[#1E1611]/8 bg-white rounded shadow-xs flex flex-col gap-0.5">
                          <div className="flex justify-between items-center">
                            <span className="font-bold">VIP early arrival (Brandt)</span>
                            <span className="text-[#B0813A] font-mono text-[7px] font-bold">IN PROGRESS</span>
                          </div>
                          <span className="opacity-60 text-[7.5px]">Owner: Sofia · {earlyCheckoutRequested ? "Early checkout requested" : "Preparing room amenities"}</span>
                        </div>

                        {/* Task 4 */}
                        <div className="p-2.5 border border-[#1E1611]/8 bg-white rounded shadow-xs flex flex-col gap-0.5">
                          <div className="flex justify-between items-center">
                            <span className="font-bold">Reception Shift Coverage</span>
                            <span className={`font-mono text-[7px] font-bold ${isStaffReallocated ? 'text-[#4E6A57]' : 'text-[#B0813A]'}`}>
                              {isStaffReallocated ? '✓ RESOLVED' : 'IN PROGRESS'}
                            </span>
                          </div>
                          <span className="opacity-60 text-[7.5px]">Owner: Elena · {isStaffReallocated ? "Jean reassigned cover" : "Understaffed"}</span>
                        </div>

                      </div>

                      {/* Handoff success banner */}
                      <div className="p-3.5 bg-[#FAF8F5] border border-[#4E6A57]/30 rounded flex flex-col gap-2">
                        <strong className="font-serif text-[14px] leading-tight">Handover Ready.</strong>
                        <p className="font-sans text-[8.5px] text-[#6E634C] leading-relaxed">
                          Every critical conflict has been assigned an owner and next step. Ready to hand off to day team.
                        </p>
                        <button className="w-full py-2 bg-[#4E6A57] text-[#FAF8F5] font-sans text-[9px] font-bold shadow-xs">
                          Hand off to day team
                        </button>
                      </div>

                    </div>

                    {/* Bottom Nav Tab */}
                    <div className="px-6 pb-8 pt-3 border-t border-[#1E1611]/8 flex justify-between items-center font-sans text-[8.5px] font-bold text-[#1E1611]/60 bg-[#FAF8F5]">
                      <span>Brief</span>
                      <span>Conflicts</span>
                      <span>Resolution</span>
                      <span>Staff</span>
                    </div>

                  </div>
                </div>
              </div>

            </div>
            )}

            {/* ==================== LOWER CANVAS: PULSE FIGMA WORKSPACE ==================== */}
            <div className="p-10 bg-[#E3DDD0] border border-[#1E1611]/15 rounded-[38px] relative flex flex-col gap-12 shadow-[inset_0_4px_24px_rgba(30,22,17,0.08),_0_16px_40px_-10px_rgba(30,22,17,0.1)] overflow-hidden">
              
              {/* Coffee rings and workspace overlays */}
              <CoffeeRing className="top-8 left-1/3 opacity-30" />
              
              <div className="flex justify-between items-center border-b border-[#1E1611]/10 pb-4">
                <div className="flex items-center gap-2 text-xs font-sans font-semibold text-[#1E1611]/60">
                  <span className="w-2.5 h-2.5 bg-[#4E6A57] rounded-full" />
                  <span>Figma Canvas // Section 03: Pulse Naming Tokens, Operational Tradeoffs &amp; Dev Notes</span>
                </div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#1E1611]/50">Status: Reviewed (Handoff Ready)</span>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-stretch">
                
                {/* Product Thesis: Apple Internal Tool Style */}
                <div className="bg-[#FAF8F5] border border-[#1E1611]/12 p-8 rounded-[8px] shadow-sm relative flex flex-col justify-between min-h-[350px]">
                  <PushPin className="top-2 left-12 bg-red-500 border-red-600" />
                  
                  <div className="flex items-center gap-1.5 text-[8.5px] uppercase tracking-widest font-semibold text-[#2E2718]/45 mb-4">
                    <span>01 // UX Thesis &amp; Heuristics</span>
                  </div>

                  <div className="font-sans text-[10px] flex flex-col gap-3">
                    <div>
                      <span className="font-bold text-[#4E6A57] uppercase text-[7.5px] block">Pulse Design Core Principle</span>
                      <blockquote className="border-l-2 border-[#4E6A57] pl-2 py-0.5 mt-1 text-[#2E2718] font-serif italic" style={{ fontFamily: '"Kalam", "Comic Sans MS", cursive' }}>
                        &ldquo;Pulse does not delight. Pulse protects. Make the operational lead a superhero who solves issues under 2 minutes.&rdquo;
                      </blockquote>
                    </div>

                    <div className="border-t border-[#1E1611]/10 pt-3">
                      <span className="font-bold text-black uppercase text-[7px] block">Swiss Editorial Style Constraint</span>
                      <p className="opacity-70 mt-1">No colorful dashboards. Zero gradients or glassmorphism. Use color only for urgency alerts (Red = Critical, Amber = High, Blue = Info).</p>
                    </div>
                  </div>

                  <div className="border-t border-[#1E1611]/10 pt-3 font-mono text-[8px] text-[#2E2718]/50">
                    Aurelia Operations System / UX Guidelines
                  </div>
                </div>

                {/* Naming Tokens Spec Sheet */}
                <div className="bg-[#FAF8F5] border border-[#1E1611]/12 p-8 rounded-[8px] shadow-sm relative flex flex-col justify-between min-h-[350px] rotate-[0.5deg]">
                  <PushPin className="top-2 right-12 bg-purple-500 border-purple-600" />
                  <MaskingTape className="bottom-4 left-6 rotate-[12deg] w-14 h-4" />
                  
                  <div className="flex items-center gap-1.5 text-[8.5px] uppercase tracking-widest font-semibold text-[#2E2718]/45 mb-4">
                    <span>02 // Pulse Engineering Tokens</span>
                  </div>

                  <div className="flex flex-col gap-1.5 font-mono text-[8px] my-auto leading-relaxed">
                    <p className="text-[#4E6A57] font-bold">// Urgent Color Variables</p>
                    <p>color.urgency.critical = #B4553F (Red Alert)</p>
                    <p>color.urgency.high = #B0813A (Amber Warning)</p>
                    <p>color.urgency.success = #4E6A57 (Green Fixed)</p>
                    
                    <p className="text-[#4E6A57] font-bold mt-1">// Operational Font Scales</p>
                    <p>font.size.mono.header = 10px Bold</p>
                    <p>font.size.mono.data = 9px Regular</p>

                    <p className="text-[#4E6A57] font-bold mt-1">// Grid Dimensions</p>
                    <p>spacing.density = 8pt tight Auto Layout grid</p>
                  </div>

                  <div className="border-t border-[#1E1611]/10 pt-3 font-mono text-[8px] text-[#2E2718]/50">
                    Shared Tokens Package / pulse-tokens.json
                  </div>
                </div>

                {/* Designer handwritten Review Notes */}
                <div className="bg-[#FEF9C3] border border-[#EFE5A3] p-7 rounded-[4px] shadow-md relative flex flex-col justify-between min-h-[350px] rotate-[-1.5deg]">
                  <PushPin className="top-2 left-1/2 bg-red-500 border-[#B4553F]" />
                  <MaskingTape className="-top-3 right-6 rotate-[15deg] w-12 h-3.5" />
                  
                  <div className="flex items-center gap-1.5 text-[8.5px] uppercase tracking-widest font-semibold text-[#2E2718]/50 mb-3">
                    <span>Review Notes (Morning Ops Desk)</span>
                  </div>

                  <div className="font-serif text-[12.5px] italic text-[#2E2718] leading-relaxed flex flex-col gap-2 my-auto pl-2 border-l border-red-300/40" style={{ fontFamily: '"Kalam", "Comic Sans MS", cursive' }}>
                    <p>• Make sure live telemetry can load offline in case of snow storms.</p>
                    <p>• Confirm Kaelin welcome gift matches VIP guest log before placing.</p>
                    <p>• Test shift assignments on mobile viewport screens.</p>
                    <p>• Interface timing must stay under 200ms to preserve operational speed.</p>
                  </div>
                  
                  <div className="text-[7.5px] font-mono uppercase text-[#2E2718]/55 text-right border-t border-[#2E2718]/10 pt-3">
                    Pulse Spec Sheet · July 2026
                  </div>
                </div>

              </div>
            </div>

          </div>

    </main>
  )
}
