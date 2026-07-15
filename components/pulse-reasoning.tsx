"use client"

import React from "react"
import { Card, SectionLabel } from "@/components/pulse-system"

export const PulseReasoningArtboard = () => {
  return (
    <div className="w-[1360px] bg-[#FAF8F5] paper-grain rounded-[8px] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.3)] border border-[#1E1611]/10 flex flex-col relative text-[#1E1611] font-sans pb-12">
      
      {/* Editorial Header */}
      <div className="px-12 pt-12 pb-8 border-b border-[#1E1611]/8 flex items-baseline justify-between">
        <div>
          <span className="font-serif text-[13px] tracking-[0.18em] text-[#8A6D3B] uppercase font-semibold">Aurelia Swiss Alps Resort</span>
          <h1 className="font-serif text-[38px] font-light tracking-wide text-[#1E1611] mt-1.5">Design Decisions & Strategy</h1>
          <p className="text-[13px] text-[#1E1611]/50 mt-1 max-w-[500px]">
            The reasoning behind the design system choices, architectural scaling limits, and intentional scope trade-offs.
          </p>
        </div>
        <div className="text-right">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#1E1611]/45">Document REF: DS-2026-RSN</span>
          <div className="text-[12px] text-[#2F483A] font-medium mt-1 font-serif italic">Case Study Handoff Board</div>
        </div>
      </div>

      <div className="px-12 py-10 flex flex-col gap-16">
        
        {/* ==================== 1. THE THREE CORE ASSUMPTIONS ==================== */}
        <section className="flex flex-col gap-6">
          <div className="border-b border-[#1E1611]/6 pb-2">
            <span className="font-mono text-[11px] text-[#8A6D3B]">DECISION BOARD 01</span>
            <h2 className="font-serif text-[22px] font-light text-[#1E1611] mt-0.5">Three Core Assumptions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Assumption 1: Verification */}
            <Card className="p-6 bg-white/40 flex flex-col justify-between min-h-[340px] relative">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-mono text-[#8A6D3B] uppercase tracking-wider block">01 / Identity Verification</span>
                <span className="font-serif italic font-semibold text-[17px] text-[#1E1611] block">Pre-Arrival Verification</span>
                <p className="text-[12.5px] text-[#1E1611]/65 leading-relaxed">
                  I assumed guests had already completed registration and ID checks before setting foot in the resort. Asking for a passport upon arrival would break the hotel's promise of invisible hospitality.
                </p>
                
                {/* Micro Flow Diagram */}
                <div className="mt-4 p-2.5 rounded bg-[#FAF8F5] border border-[#1E1611]/6 font-mono text-[9px] text-[#1E1611]/60 flex items-center justify-between">
                  <span>ID Verification</span>
                  <span>→</span>
                  <span>Geofence Detect</span>
                  <span>→</span>
                  <span className="text-[#2F483A] font-bold">Door Active</span>
                </div>
              </div>

              {/* Handwritten Note */}
              <div className="mt-6 pt-3 border-t border-dashed border-[#1E1611]/12 text-[12px] text-[#8A6D3B] font-serif italic" style={{ fontFamily: '"Kalam", "Comic Sans MS", cursive' }}>
                Note: Bypass the front desk entirely to keep arrival stress-free.
              </div>
            </Card>

            {/* Assumption 2: Low Telemetry Frequency */}
            <Card className="p-6 bg-white/40 flex flex-col justify-between min-h-[340px] relative">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-mono text-[#8A6D3B] uppercase tracking-wider block">02 / Telemetry Intervals</span>
                <span className="font-serif italic font-semibold text-[17px] text-[#1E1611] block">Restrained Sync Polling</span>
                <p className="text-[12.5px] text-[#1E1611]/65 leading-relaxed">
                  I assumed hotel staff need active coordination but do not require real-time flashing charts. Polling happens in quiet 12-second cycles to prevent layout movement.
                </p>
                
                {/* Micro Flow Diagram */}
                <div className="mt-4 p-2.5 rounded bg-[#FAF8F5] border border-[#1E1611]/6 font-mono text-[9px] text-[#1E1611]/60 flex items-center justify-between">
                  <span>PMS Database</span>
                  <span>12s Interval</span>
                  <span>→</span>
                  <span className="text-[#2F483A] font-bold">Quiet Re-render</span>
                </div>
              </div>

              {/* Handwritten Note */}
              <div className="mt-6 pt-3 border-t border-dashed border-[#1E1611]/12 text-[12px] text-[#8A6D3B] font-serif italic" style={{ fontFamily: '"Kalam", "Comic Sans MS", cursive' }}>
                Note: Flashy metrics cause panic. Keep updates calm and silent.
              </div>
            </Card>

            {/* Assumption 3: Analog Affordance */}
            <Card className="p-6 bg-white/40 flex flex-col justify-between min-h-[340px] relative">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-mono text-[#8A6D3B] uppercase tracking-wider block">03 / Layout Affordance</span>
                <span className="font-serif italic font-semibold text-[17px] text-[#1E1611] block">Stationery Presentation</span>
                <p className="text-[12.5px] text-[#1E1611]/65 leading-relaxed">
                  I assumed luxury travelers find comfort in physical, paper-like elements. High-end paper-grain cards replicate the warm feeling of physical resort keys and letters.
                </p>
                
                {/* Micro Flow Diagram */}
                <div className="mt-4 p-2.5 rounded bg-[#FAF8F5] border border-[#1E1611]/6 font-mono text-[9px] text-[#1E1611]/60 flex items-center justify-between">
                  <span>Digital Key</span>
                  <span>+</span>
                  <span>Paper Grain Card</span>
                  <span>→</span>
                  <span className="text-[#2F483A] font-bold">Analog Affordance</span>
                </div>
              </div>

              {/* Handwritten Note */}
              <div className="mt-6 pt-3 border-t border-dashed border-[#1E1611]/12 text-[12px] text-[#8A6D3B] font-serif italic" style={{ fontFamily: '"Kalam", "Comic Sans MS", cursive' }}>
                Note: Contrast the tech with warm tactile parchment styling.
              </div>
            </Card>

          </div>
        </section>

        {/* ==================== 2. WHAT BREAKS AT 100 HOTELS ==================== */}
        <section className="flex flex-col gap-6">
          <div className="border-b border-[#1E1611]/6 pb-2">
            <span className="font-mono text-[11px] text-[#8A6D3B]">DECISION BOARD 02</span>
            <h2 className="font-serif text-[22px] font-light text-[#1E1611] mt-0.5">Scale Limitations (Aurelia at 100 Hotels)</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Current Design Column */}
            <div className="p-6 rounded-[8px] border border-[#1E1611]/6 bg-white/40 flex flex-col gap-4">
              <span className="text-[10px] font-mono text-[#8A6D3B] uppercase tracking-wider block">Current Architecture</span>
              <span className="font-serif italic font-semibold text-[17px] text-[#1E1611] block">Single Property Triage</span>
              <p className="text-[12.5px] text-[#1E1611]/60 leading-relaxed">
                The current system relies on a single board listing all local room preparation issues. Reallocating staff and relocating capacity is done manually through drag-and-drop actions.
              </p>
              
              <div className="p-4 rounded bg-[#FAF8F5] border border-[#1E1611]/6 flex flex-col gap-1 text-[11.5px] font-mono text-[#1E1611]/50 leading-relaxed">
                <div>• Single site database database</div>
                <div>• Manual overbooking relocation logic</div>
                <div>• Manual drag-and-drop shift balance</div>
              </div>
            </div>

            {/* Future Scaling Column */}
            <div className="p-6 rounded-[8px] border border-[#1E1611]/6 bg-white/40 flex flex-col gap-4">
              <span className="text-[10px] font-mono text-[#2F483A] uppercase tracking-wider block font-bold">Future Multi-Property Architecture</span>
              <span className="font-serif italic font-semibold text-[17px] text-[#1E1611] block">Automated Dispatch Network</span>
              <p className="text-[12.5px] text-[#1E1611]/60 leading-relaxed">
                At 100 hotels, manual dispatch fails. Centralized databases must automatically reroute guests based on live regional inventory, and staffing algorithms will balance roster shifts.
              </p>
              
              <div className="p-4 rounded bg-[#2F483A]/[0.02] border border-[#2F483A]/15 flex flex-col gap-1 text-[11.5px] font-mono text-[#2F483A]/80 leading-relaxed">
                <div>• Cross-property occupancy router</div>
                <div>• Automated partner property booking API</div>
                <div>• Programmatic staff scheduling engine</div>
              </div>
            </div>

          </div>
        </section>

        {/* ==================== 3. INTENTIONAL OUT OF SCOPE ==================== */}
        <section className="flex flex-col gap-6">
          <div className="border-b border-[#1E1611]/6 pb-2">
            <span className="font-mono text-[11px] text-[#8A6D3B]">DECISION BOARD 03</span>
            <h2 className="font-serif text-[22px] font-light text-[#1E1611] mt-0.5">Deliberate Scope Decisions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/40 rounded-[8px] border border-[#1E1611]/6 p-6">
            
            {/* Out of Scope side */}
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-mono text-[#8A6D3B] uppercase tracking-wider block">Intentionally Left Out</span>
              <div className="flex flex-col gap-5 text-[12.5px] leading-relaxed">
                <div>
                  <span className="font-serif font-bold italic text-[#1E1611] block">1. Dynamic Messaging / Chat System</span>
                  <span className="text-[#1E1611]/60 mt-0.5 block">Guests cannot message or chat with staff. Requests are made via structured options.</span>
                </div>
                <div className="border-t border-[#1E1611]/4 pt-3">
                  <span className="font-serif font-bold italic text-[#1E1611] block">2. Reservation Booking & Payments Portal</span>
                  <span className="text-[#1E1611]/60 mt-0.5 block">Excluded room search, pricing details, invoice disputes, and card authorization views.</span>
                </div>
                <div className="border-t border-[#1E1611]/4 pt-3">
                  <span className="font-serif font-bold italic text-[#1E1611] block">3. Up-Selling & Marketing Banners</span>
                  <span className="text-[#1E1611]/60 mt-0.5 block">Banned all hotel marketing copy, spa advertisements, or dining banners.</span>
                </div>
              </div>
            </div>

            {/* Rationale side */}
            <div className="flex flex-col gap-4 border-l border-dashed border-[#1E1611]/12 pl-8">
              <span className="text-[10px] font-mono text-[#2F483A] uppercase tracking-wider block font-bold">Product Strategy & Reason</span>
              <div className="flex flex-col gap-5 text-[12.5px] leading-relaxed text-[#1E1611]/65">
                <div>
                  <span className="text-[#1E1611]/85 block">&ldquo;Real-time chat increases stress. Concierge tasks are quieter and more organized when requested as concrete action options.&rdquo;</span>
                </div>
                <div className="border-t border-[#1E1611]/4 pt-3">
                  <span className="text-[#1E1611]/85 block">&ldquo;Billing and bookings don't help solve the core morning triage. I focused on resolving the five operational crises described in the brief.&rdquo;</span>
                </div>
                <div className="border-t border-[#1E1611]/4 pt-3">
                  <span className="text-[#1E1611]/85 block">&ldquo;Up-selling and marketing banners create noise. A guest using the app in transit expects quiet utility, not advertising.&rdquo;</span>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  )
}
