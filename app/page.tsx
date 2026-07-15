"use client"

import React, { useState, useRef } from "react"

// Aurelia Monogram SVG Component
const Monogram = ({ className = "w-8 h-8 text-[#1E1611]" }: { className?: string }) => (
  <svg viewBox="0 0 60 60" className={`${className} stroke-[0.75] fill-none stroke-current`} aria-hidden="true">
    <circle cx="30" cy="30" r="24" strokeDasharray="1.5 2" />
    <path d="M30 15 L21 41 M30 15 L39 41 M25 32 H35" />
    <path d="M19 41 H23 M37 41 H41 M27 15 H33" strokeWidth="1.5" />
    <path d="M30 6 V9 M30 51 V54 M6 30 H9 M51 30 H54" strokeWidth="0.5" />
  </svg>
)

// Wax Seal SVG Component (Tactile breaking animation)
const WaxSeal = ({ onClick, isBroken }: { onClick: () => void; isBroken: boolean }) => (
  <div 
    onClick={onClick}
    className={`w-16 h-16 rounded-full flex items-center justify-center wax-seal mx-auto relative z-20 ${isBroken ? 'wax-seal-crack' : ''}`}
  >
    {/* Inner Monogram Seal */}
    <div className="absolute inset-2.5 rounded-full border border-dashed border-[#F6F2EA]/20 flex items-center justify-center">
      <span className="font-serif text-[#F6F2EA] text-lg font-bold select-none opacity-90 tracking-wider">A</span>
    </div>
    {/* Organic wax ripples */}
    <div className="absolute inset-1 rounded-full border border-[#FAF8F5]/10 pointer-events-none" />
    <div className="absolute -inset-1 rounded-full border border-black/5 pointer-events-none" />
  </div>
)

// Concierge-sketch style map for Screen 3
const ConciergeMapSVG = ({ userHeadingAngle = 0 }: { userHeadingAngle?: number }) => (
  <svg viewBox="0 0 310 240" className="w-full h-full stroke-[#1E1611] fill-none stroke-[0.75]">
    {/* Grid paper guidelines */}
    <g opacity="0.05">
      <line x1="0" y1="40" x2="310" y2="40" />
      <line x1="0" y1="80" x2="310" y2="80" />
      <line x1="0" y1="120" x2="310" y2="120" />
      <line x1="0" y1="160" x2="310" y2="160" />
      <line x1="0" y1="200" x2="310" y2="200" />
      <line x1="62" y1="0" x2="62" y2="240" />
      <line x1="124" y1="0" x2="124" y2="240" />
      <line x1="186" y1="0" x2="186" y2="240" />
      <line x1="248" y1="0" x2="248" y2="240" />
    </g>
    
    {/* Floor Plan Outlines */}
    <path d="M 20,210 H 115 V 160 H 20 Z" strokeDasharray="2 2" opacity="0.4" />
    <text x="28" y="185" className="font-sans text-[7px] uppercase tracking-[0.15em] fill-[#1E1611] font-semibold" stroke="none">Funicular Hall</text>
    
    {/* Lift Shaft */}
    <rect x="145" y="160" width="28" height="28" strokeWidth="0.5" />
    <line x1="145" y1="160" x2="173" y2="188" strokeWidth="0.4" />
    <line x1="173" y1="160" x2="145" y2="188" strokeWidth="0.4" />
    <text x="147" y="152" className="font-sans text-[7.5px] uppercase tracking-widest fill-[#1E1611] font-semibold" stroke="none">Lift</text>

    {/* Corridor */}
    <path d="M 145,100 H 280 M 145,65 H 280" />
    <text x="180" y="55" className="font-sans text-[7.5px] uppercase tracking-widest fill-[#1E1611] font-semibold" stroke="none">Second Floor Corridor</text>

    {/* Room 214 */}
    <rect x="230" y="25" width="45" height="40" strokeWidth="0.5" />
    <text x="236" y="42" className="font-serif text-[9.5px] fill-[#1E1611] font-medium" stroke="none">Room 214</text>
    
    {/* Traced path in warm highlight (Amber glow) */}
    <path d="M 60,210 C 75,185 125,180 145,174 M 159,160 V 82 H 252 V 47" 
          stroke="#D97706" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.15" />
    <path d="M 60,210 C 75,185 125,180 145,174 M 159,160 V 82 H 252 V 47" 
          stroke="#C2410C" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />

    {/* Path Endpoints */}
    <circle cx="60" cy="210" r="2.5" fill="#C2410C" stroke="none" />
    <circle cx="252" cy="47" r="2.5" fill="#C2410C" stroke="none" />

    {/* Live Pulsing Direction Indicator / Compass (Inspired by Ref 4) */}
    <g transform="translate(90, 182)" className="animate-pulse">
      {/* Outer radar glow ring */}
      <circle cx="0" cy="0" r="10" fill="none" stroke="#2F483A" strokeWidth="0.5" opacity="0.4" />
      {/* Direction compass arrow circle */}
      <circle cx="0" cy="0" r="5" fill="#2F483A" stroke="none" />
      {/* Compass heading pointer needle */}
      <polygon 
        points="0,-8 -3,-2 3,-2" 
        fill="#2F483A" 
        stroke="none"
        style={{ transform: `rotate(${userHeadingAngle}deg)`, transformOrigin: "0px 0px" }}
      />
    </g>
    
    {/* Aurelia Monogram Seal on Room 214 */}
    <circle cx="252" cy="25" r="5" stroke="#1E1611" strokeWidth="0.5" fill="#FAF8F5" />
    <text x="250.5" y="27" className="font-serif text-[6px] fill-[#1E1611] font-bold" stroke="none">A</text>
  </svg>
)

// Ripped/Torn Paper Edge Mask Component (Inspired by Reference 5)
const TornPaperEdge = ({ className = "", isBottom = false }: { className?: string; isBottom?: boolean }) => {
  const colorClass = className.includes("text-") ? "" : "fill-[#FAF8F5] text-[#FAF8F5]"
  return (
    <svg 
      viewBox="0 0 120 12" 
      preserveAspectRatio="none" 
      className={`w-full h-4 absolute left-0 z-20 pointer-events-none ${isBottom ? '-bottom-0.5 rotate-180' : '-top-3.5'} ${colorClass} ${className}`}
    >
      <path d="M0,12 C8,6 15,9 23,5 C30,10 38,7 45,4 C52,9 60,5 68,7 C75,4 83,10 91,5 C98,8 106,4 120,12 Z" fill="currentColor" />
    </svg>
  )
}

// Dynamic Hearth/Fireplace SVG Component (Tactile vector graphics)
const FireplaceSVG = ({ isLit }: { isLit: boolean }) => (
  <svg viewBox="0 0 160 110" className="w-40 h-24 mx-auto stroke-[#1E1611] fill-none stroke-[0.75]">
    {/* Brick hearth structure */}
    <path d="M 15,100 H 145 M 25,100 V 30 H 135 V 100" strokeWidth="1.25" />
    <path d="M 20,30 H 140" strokeWidth="2.5" />
    {/* Fireplace inside shadow */}
    <rect x="35" y="42" width="90" height="58" rx="2" strokeWidth="0.5" opacity="0.4" />
    {/* Cast iron grate */}
    <path d="M 50,94 H 110 M 55,94 V 86 M 105,94 V 86" strokeWidth="1.5" />
    {/* Glowing Logs */}
    <rect x="62" y="86" width="36" height="8" rx="2" fill="#3A2318" strokeWidth="1" />
    {/* Dynamic Animated CSS Flames */}
    {isLit ? (
      <g className="animate-pulse">
        {/* Outer Warm Amber Flame */}
        <path d="M 68,86 C 65,60 80,42 80,36 C 80,42 95,60 92,86 Z" fill="#F59E0B" stroke="none" opacity="0.6" />
        {/* Inner Red Core Flame */}
        <path d="M 73,86 C 71,64 80,50 80,45 C 80,50 89,64 87,86 Z" fill="#EF4444" stroke="none" opacity="0.8" />
        {/* Yellow hot center */}
        <path d="M 77,86 C 76,72 80,62 80,58 C 80,62 84,72 83,86 Z" fill="#FBBF24" stroke="none" />
      </g>
    ) : (
      <g opacity="0.3">
        {/* Smoldering ashes */}
        <circle cx="75" cy="88" r="1" fill="#1E1611" stroke="none" />
        <circle cx="80" cy="87" r="1.5" fill="#1E1611" stroke="none" />
        <circle cx="85" cy="88" r="1" fill="#1E1611" stroke="none" />
      </g>
    )}
  </svg>
)

// Designer Canvas Details
const MaskingTape = ({ className = "rotate-12 w-12 h-4" }: { className?: string }) => (
  <div className={`absolute bg-[#FAF8F5]/50 border-l border-r border-[#1E1611]/8 backdrop-blur-[0.5px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] z-30 pointer-events-none ${className}`} style={{ mixBlendMode: 'multiply' }} />
)

const PushPin = ({ className = "" }: { className?: string }) => (
  <div className={`absolute w-3 h-3 rounded-full bg-[#EF4444] border border-[#DC2626] shadow-[0_1.5px_3.5px_rgba(0,0,0,0.35)] z-30 pointer-events-none ${className}`}>
    <div className="w-1 h-1 rounded-full bg-white/40 absolute top-0.5 left-0.5" />
    <div className="w-0.5 h-2 bg-neutral-400 absolute top-2 left-1.5 -translate-x-1/2 -rotate-12 origin-top" />
  </div>
)

const CoffeeRing = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={`absolute w-28 h-28 stroke-[#8C6D58]/12 fill-none stroke-[0.75] pointer-events-none z-30 ${className}`}>
    <circle cx="50" cy="50" r="42" strokeDasharray="35 5 2 10 15 2 30 5" />
    <circle cx="48" cy="52" r="39" strokeDasharray="10 40 5 15 2 20" />
  </svg>
)

export default function Page() {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0)
  
  // Interactive luxury states
  const [isSealBroken, setIsSealBroken] = useState(false)
  const [roomTemp, setRoomTemp] = useState(21.5)
  const [fireplaceLit, setFireplaceLit] = useState(true)
  const [pillowScent, setPillowScent] = useState("Stone Pine")
  const [supperOrdered, setSupperOrdered] = useState(false)
  
  // Interactive Wayfinding: blueprint map vs. VR Walkthrough
  const [wayfindingMode, setWayfindingMode] = useState<"blueprint" | "vr">("blueprint")

  // Custom late-night dining selections (Experiential enhancements)
  const [supperSelection, setSupperSelection] = useState("Barley Soup")
  const [supperDrink, setSupperDrink] = useState("Chamomile")
  const [supperDelivery, setSupperDelivery] = useState("Quiet Drop")

  const containerRef = useRef<HTMLDivElement>(null)

  const scrollToScreen = (index: number) => {
    setActiveScreenIndex(index)
    const element = document.getElementById(`screen-${index}`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
    }
  }

  // Handle wax seal breaking
  const handleSealClick = () => {
    setIsSealBroken(true)
  }

  // Ambience adjusters
  const adjustTemp = (diff: number) => {
    setRoomTemp(prev => Math.min(Math.max(prev + diff, 18), 26))
  }

  return (
    <main className="min-h-screen bg-[#F4F1EA] paper-grain flex flex-col gap-12 p-8 select-none selection:bg-[#2F483A] selection:text-[#F6F2EA] overflow-y-auto relative">
      
      {/* Figma Canvas Floating Cursors (Controlled Messiness) */}
      <div className="absolute pointer-events-none z-50 flex items-center gap-1 select-none" style={{ left: '380px', top: '160px' }}>
        <svg className="w-4 h-4 fill-[#C084FC] stroke-white stroke-[1.5]" viewBox="0 0 24 24">
          <path d="M4 4l5 16 3-6 6-3z" />
        </svg>
        <span className="bg-[#C084FC] text-[#FAF8F5] text-[8px] font-bold px-1.5 py-0.5 rounded-sm shadow-sm font-sans">Lukas G.</span>
      </div>

      <div className="absolute pointer-events-none z-50 flex items-center gap-1 select-none" style={{ right: '400px', top: '980px' }}>
        <svg className="w-4 h-4 fill-[#FB923C] stroke-white stroke-[1.5]" viewBox="0 0 24 24">
          <path d="M4 4l5 16 3-6 6-3z" />
        </svg>
        <span className="bg-[#FB923C] text-[#FAF8F5] text-[8px] font-bold px-1.5 py-0.5 rounded-sm shadow-sm font-sans">Aurelia Design</span>
      </div>

      {/* ==================== UPPER CANVAS: DESIGNER'S RESEARCH WALL ==================== */}
      <div className="max-w-[1650px] mx-auto w-full p-10 bg-[#EBE5DA] border border-[#1E1611]/12 rounded-[38px] relative flex flex-wrap gap-10 items-stretch justify-start shadow-[inset_0_4px_20px_rgba(30,22,17,0.06),_0_12px_36px_-8px_rgba(30,22,17,0.08)] overflow-hidden">
        
        {/* Visual elements representing controlled studio messiness */}
        <CoffeeRing className="top-12 right-20 opacity-70" />
        <CoffeeRing className="bottom-8 left-1/3 opacity-40 scale-75" />

        {/* SECTION 01: Storytelling Board */}
        <div className="bg-[#FAF8F5] border border-[#1E1611]/10 p-6 rounded-[4px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] w-[390px] relative rotate-[-0.5deg]">
          <PushPin className="top-2 left-1/2" />
          
          <div className="flex items-center gap-1.5 text-[8px] uppercase tracking-widest font-semibold text-[#1E1611]/40 mb-3 select-none">
            <span>01 // Arrival Storyboard</span>
          </div>

          <h2 className="font-serif text-2xl font-light text-[#1E1611] leading-snug letterpress-heading">
            Late Arrival<br />Choreography
          </h2>
          
          {/* Alpine topographical sketch */}
          <div className="my-4 p-2 bg-[#F3EFE9] border border-[#1E1611]/10 rounded relative overflow-hidden h-28">
            <svg viewBox="0 0 100 50" className="w-full h-full stroke-[#1E1611]/30 fill-none stroke-[0.5]">
              {/* Mountain ridge outline */}
              <path d="M 5,45 Q 25,10 45,35 T 85,20 L 95,45 Z" strokeDasharray="1.5 1.5" />
              <path d="M 15,45 L 35,22 L 55,45 L 75,28 L 90,45" />
              {/* Gondola funicular sketch line */}
              <line x1="10" y1="40" x2="80" y2="15" stroke="#2F483A" strokeWidth="0.75" />
              <rect x="42" y="24" width="6" height="5" rx="1" fill="#FAF8F5" stroke="#2F483A" strokeWidth="0.5" />
              <line x1="45" y1="24" x2="45" y2="28" stroke="#2F483A" strokeWidth="0.5" />
            </svg>
            <span className="absolute bottom-2 left-2 text-[7.5px] uppercase font-bold tracking-widest text-[#2F483A]">Funicular Route Sketch</span>
            <span className="absolute top-2 right-2 text-[8px] font-serif italic text-[#1E1611]/50">Alt 1,800m • Foggy</span>
          </div>

          {/* Printed hotel miniature photo with masking tape */}
          <div className="relative my-4 p-2 bg-white shadow-xs border border-[#1E1611]/8 w-44 mx-auto rotate-[3deg] flex flex-col gap-1.5">
            <MaskingTape className="-top-2 left-10 rotate-[10deg] w-12 h-3.5" />
            <div className="h-24 w-full bg-cover bg-center" style={{ backgroundImage: "url('/user_images/image_8.jpg')" }} />
            <span className="font-serif text-[6.5px] italic text-[#1E1611]/60 text-center">Aurelia Alpine Entrance</span>
          </div>

          <div className="font-serif text-[11px] italic text-[#1E1611]/75 leading-relaxed flex flex-col gap-1 border-t border-[#1E1611]/8 pt-4 mt-2" style={{ fontFamily: '"Kalam", "Comic Sans MS", cursive' }}>
            <p className="text-black font-semibold not-italic text-[10px] uppercase font-sans tracking-wide">Designer Observations:</p>
            <p>&ldquo;Most guests reach here after long international flights.&rdquo;</p>
            <p className="pl-4 text-[#C2410C]">↓ &ldquo;No energy left.&rdquo;</p>
            <p className="pl-8 text-[#2F483A] font-bold">↓ &ldquo;Hotel should remove every unnecessary decision.&rdquo;</p>
          </div>
        </div>

        {/* SECTION 02: User Persona (Herr Keller's Pinned Passport & Desk Items) */}
        <div className="bg-[#FAF8F5] border border-[#1E1611]/10 p-7 rounded-[4px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] w-[410px] relative rotate-[1.5deg] flex flex-col justify-between">
          <PushPin className="top-2 right-12 bg-blue-500 border-blue-600" />
          <MaskingTape className="-top-3.5 left-1/3 rotate-[-5deg] w-14 h-4" />
          
          <div className="flex items-center gap-1.5 text-[8px] uppercase tracking-widest font-semibold text-[#1E1611]/40 mb-3 select-none">
            <span>02 // Pinned Desk Items (Alexander Keller)</span>
          </div>

          {/* Swiss Passport card outline */}
          <div className="border border-[#1E1611]/15 rounded-lg p-4 bg-[#F9F6F0] flex flex-col gap-3 relative overflow-hidden shadow-xs">
            <div className="absolute top-2 right-2 w-8 h-8 rounded-full border border-dashed border-[#EF4444]/30 flex items-center justify-center rotate-12 text-[#EF4444]/50 font-sans text-[6px] font-bold uppercase tracking-widest leading-none text-center">
              Genève<br />23.07.26
            </div>
            
            <div className="flex gap-3 items-center">
              <div 
                className="w-14 h-16 bg-cover bg-center rounded border border-[#1E1611]/15 filter grayscale brightness-[96%] relative overflow-hidden flex-shrink-0" 
                style={{ backgroundImage: "url('/user_images/image_4.jpg')" }}
              />
              <div className="flex flex-col text-[10px] font-sans text-[#1E1611]/70 leading-normal">
                <span className="font-serif text-xs font-bold text-black">Alexander Keller</span>
                <span>Birthplace: Zürich</span>
                <span>Loyalty: <strong className="text-[#2F483A]">Aurelia Circle (VIP)</strong></span>
                <span>Reservation: <strong className="text-black">Rm 214 · 4th stay</strong></span>
              </div>
            </div>
            
            {/* Boarding pass sketch */}
            <div className="border-t border-dashed border-[#1E1611]/12 pt-2 text-[8px] font-mono flex justify-between uppercase">
              <div>Flight: <span className="bg-yellow-100 px-1 font-bold">LH764</span></div>
              <div>GVA: <span className="text-[#C2410C] font-bold">Delayed 4h</span></div>
              <div>Arrives: <span className="font-bold">23:40</span></div>
            </div>
          </div>

          {/* Luggage tag sketch */}
          <div className="mt-4 p-2.5 border border-[#1E1611]/10 bg-[#FAF8F5] rounded flex justify-between items-center rotate-[-1deg] shadow-xs">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full border border-[#1E1611]/30 bg-[#EBE5DA]" />
              <span className="font-mono text-[7px] uppercase tracking-wider text-[#1E1611]/50">Aurelia Luggage ID: 948271</span>
            </div>
            <span className="font-sans text-[7.5px] uppercase font-bold text-[#2F483A] bg-[#2F483A]/10 px-1.5 py-0.5 rounded">RM 214 IN TRANSIT</span>
          </div>

          <div className="font-serif text-[11.5px] italic text-[#1E1611]/85 leading-relaxed flex flex-col gap-1 mt-4 pt-4 border-t border-[#1E1611]/8" style={{ fontFamily: '"Kalam", "Comic Sans MS", cursive' }}>
            <p>• <span className="underline decoration-[#C2410C] decoration-2">No checked-in energy left</span> after 4-hour flight delay.</p>
            <p>• Already trusts Aurelia but just wants to go straight to bed.</p>
            <p>• <span className="bg-yellow-200/50 px-1 font-sans not-italic text-[10px] font-bold uppercase tracking-wider">Crucial Note:</span> Circle the digital key card activation. Bypass the desk.</p>
          </div>
        </div>

        {/* SECTION 03 & 04: Journey Map & Emotional Curve */}
        <div className="bg-[#FAF8F5] border border-[#1E1611]/10 p-7 rounded-[4px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] w-[460px] relative rotate-[-1deg] flex flex-col justify-between">
          <PushPin className="top-2 left-1/3 bg-green-600 border-green-700" />
          
          <div className="flex items-center gap-1.5 text-[8px] uppercase tracking-widest font-semibold text-[#1E1611]/40 mb-3 select-none">
            <span>03 & 04 // Journey & Emotional Curve</span>
          </div>

          {/* Journey Path */}
          <div className="flex flex-col gap-2">
            <span className="font-sans text-[7.5px] uppercase tracking-[0.18em] text-[#1E1611]/55 font-bold">Physical Transit Journey</span>
            <div className="grid grid-cols-5 gap-1 text-[8px] font-sans text-center text-[#1E1611]/85">
              <div className="p-1 bg-[#1E1611]/5 rounded">Airport</div>
              <div className="self-center text-center opacity-30 text-[6.5px]">2h Taxi</div>
              <div className="p-1 bg-[#1E1611]/5 rounded">Funicular</div>
              <div className="self-center text-center opacity-30 text-[6.5px]">12 min</div>
              <div className="p-1 bg-[#2F483A]/10 text-[#2F483A] font-bold rounded">Room 214</div>
            </div>
          </div>

          {/* Emotional Curve Graph */}
          <div className="border-t border-[#1E1611]/10 pt-4 mt-4 flex flex-col gap-2">
            <span className="font-sans text-[7.5px] uppercase tracking-[0.18em] text-[#1E1611]/55 font-bold">Emotional Arc Graph (SVG)</span>
            
            <div className="relative h-28 bg-[#FDFDFD] border border-[#1E1611]/10 rounded p-1">
              <svg viewBox="0 0 100 50" className="w-full h-full stroke-[#1E1611] fill-none stroke-[0.75]">
                {/* Underlay grid line */}
                <line x1="0" y1="25" x2="100" y2="25" stroke="#1E1611" strokeWidth="0.25" strokeDasharray="2 2" />
                {/* Curve line */}
                <path d="M 5,45 C 20,45 35,40 48,22 C 60,8 75,5 95,7" stroke="#C2410C" strokeWidth="1.25" />
                {/* Curve nodes */}
                <circle cx="5" cy="45" r="1.5" fill="#C2410C" />
                <circle cx="48" cy="22" r="1.5" fill="#C2410C" />
                <circle cx="95" cy="7" r="1.5" fill="#2F483A" />
              </svg>
              
              {/* Curve annotations */}
              <span className="absolute bottom-1.5 left-2 text-[6px] uppercase font-bold text-[#C2410C]">High Stress (Delay)</span>
              <span className="absolute top-10 left-1/3 text-[6px] uppercase font-bold text-[#C2410C]">Slowly Calming</span>
              <span className="absolute top-1.5 right-2 text-[6px] uppercase font-bold text-[#2F483A]">Restful Sleep</span>
            </div>
          </div>

          <div className="font-serif text-[11.5px] italic text-[#1E1611]/75 leading-relaxed flex flex-col gap-1 mt-4 pt-4 border-t border-[#1E1611]/8" style={{ fontFamily: '"Kalam", "Comic Sans MS", cursive' }}>
            <p>&ldquo;Too many decisions at check-in will break the experience.&rdquo;</p>
            <p className="text-[#C2410C]">&ldquo;Need absolute reassurance upon funicular arrival.&rdquo;</p>
            <p className="text-[#2F483A]">&ldquo;Guest finally relaxes only when room key activates.&rdquo;</p>
          </div>
        </div>

        {/* SECTION 12: Moodboard Reference Pinboard (14 References) */}
        <div className="bg-[#FAF8F5] border border-[#1E1611]/10 p-7 rounded-[4px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] w-[360px] relative rotate-[0.5deg] overflow-hidden flex flex-col justify-between">
          <PushPin className="top-2 right-6" />
          
          <div className="flex items-center gap-1.5 text-[8px] uppercase tracking-widest font-semibold text-[#1E1611]/40 mb-3 select-none">
            <span>07 // Studio Moodboard References</span>
          </div>

          {/* Sprawling polaroid grid */}
          <div className="grid grid-cols-2 gap-3 my-2 relative">
            
            <div className="bg-white p-1 rounded-xs shadow-xs rotate-[-3deg] border border-[#1E1611]/5 flex flex-col gap-0.5">
              <div className="h-14 w-full bg-cover bg-center" style={{ backgroundImage: "url('/user_images/image_5.jpg')" }} />
              <span className="font-serif text-[5px] text-[#1E1611]/60 text-center">Swiss Peaks</span>
            </div>

            <div className="bg-white p-1 rounded-xs shadow-xs rotate-[4deg] border border-[#1E1611]/5 flex flex-col gap-0.5 translate-y-1">
              <div className="h-14 w-full bg-cover bg-center" style={{ backgroundImage: "url('/user_images/image_6.jpg')" }} />
              <span className="font-serif text-[5px] text-[#1E1611]/60 text-center">Fireplace Reference</span>
            </div>

            <div className="bg-white p-1 rounded-xs shadow-xs rotate-[-2deg] border border-[#1E1611]/5 flex flex-col gap-0.5 -translate-y-1">
              <div className="h-14 w-full bg-cover bg-center" style={{ backgroundImage: "url('/user_images/image_8.jpg')" }} />
              <span className="font-serif text-[5px] text-[#1E1611]/60 text-center">Sanctuary Entrance</span>
            </div>

            <div className="bg-white p-1 rounded-xs shadow-xs rotate-[2deg] border border-[#1E1611]/5 flex flex-col gap-0.5">
              <div className="h-14 w-full bg-cover bg-center" style={{ backgroundImage: "url('/user_images/image_3.jpg')" }} />
              <span className="font-serif text-[5px] text-[#1E1611]/60 text-center">Fireplace Lit status</span>
            </div>

          </div>

          <div className="font-serif text-[11px] italic text-[#1E1611]/75 leading-relaxed flex flex-col gap-1 mt-3 pt-3 border-t border-[#1E1611]/8" style={{ fontFamily: '"Kalam", "Comic Sans MS", cursive' }}>
            <p className="text-[#2F483A]">• &ldquo;Love the warmth of the fireplace lighting.&rdquo;</p>
            <p>• &ldquo;Use the torn paper edge for cards.&rdquo;</p>
            <p className="text-[#C2410C]">• <span className="line-through opacity-50">&ldquo;Avoid shiny metal cards&rdquo;</span> → Use Oak wood.</p>
          </div>
        </div>

      </div>

      {/* ==================== MIDDLE CANVAS: FINAL UI FLOW & SCREEN GOALS ==================== */}
      <div className="max-w-[1650px] mx-auto w-full flex flex-col gap-3">
        
        {/* Figma Frame Header */}
        <div className="flex items-center gap-1.5 px-4 text-[10px] font-sans font-semibold text-[#1E1611]/50">
          <svg className="w-3.5 h-3.5 stroke-current fill-none" viewBox="0 0 14 14">
            <rect x="2" y="2" width="10" height="10" rx="1.5" />
            <line x1="2" y1="5.5" x2="12" y2="5.5" />
            <line x1="5.5" y1="2" x2="5.5" y2="12" />
          </svg>
          <span>Final Mockups Flow // Late Arrival Choreography</span>
          <span className="bg-[#2F483A] text-[#FAF8F5] text-[7.5px] uppercase tracking-widest px-2.5 py-0.5 rounded-full font-bold ml-2">6 Screens Flow</span>
        </div>

        {/* Grid Mockups Showcase Track (3 screens per row) */}
        <div 
          ref={containerRef}
          className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-8 px-6 gap-x-8 gap-y-12 bg-[#FAF8F5]/30 border border-[#1E1611]/6 rounded-[40px] shadow-[inset_0_2px_8px_rgba(30,22,17,0.02)] justify-items-center"
        >
        
        {/* ==================== SCREEN 1: ARRIVAL ==================== */}
        <div id="screen-0" className="flex-shrink-0 flex flex-col gap-3 group">
          <div className="flex justify-between items-center px-2">
            <span className="font-sans text-[10px] tracking-widest text-[#1E1611]/50 uppercase font-semibold">Screen 01</span>
            <span className="font-serif text-xs italic text-[#1E1611]">23:40 · Opening</span>
          </div>

          <div className="relative p-3 rounded-[50px] bg-[#1E1611] shadow-[0_25px_60px_-15px_rgba(30,22,17,0.25)] border-[0.5px] border-[#F6F2EA]/20">
            {/* Speaker Notch */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-32 h-4 rounded-full bg-[#1E1611] z-30 flex items-center justify-center gap-1.5 px-4">
              <div className="w-1.5 h-1.5 rounded-full bg-black/60" />
              <div className="h-0.5 flex-grow rounded-full bg-[#261E1A]" />
            </div>

            {/* Screen Viewport - Unified BG Color */}
            <div className="w-[390px] h-[844px] rounded-[38px] overflow-hidden bg-[#EFEAE0] relative paper-grain select-none flex flex-col justify-between text-[#1E1611]">
              
              {/* Top 55% image with elegant bottom torn-paper divider */}
              <div className="relative w-full h-[430px] overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/user_images/image_2.jpg')" }} />
                
                {/* Creative vignette, candlelit gradient, and fractal noise grain overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1611]/70 via-[#1E1611]/15 to-[#FAF8F5]/10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2F483A]/10 via-transparent to-[#D97706]/10 mix-blend-color-burn pointer-events-none" />
                <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.20] bg-repeat noise-overlay" />
                
                <TornPaperEdge className="text-[#EFEAE0] fill-[#EFEAE0]" isBottom={true} />
              </div>

              {/* Header Monogram - placed consistently */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
                <Monogram className="w-9 h-9 text-[#F6F2EA] opacity-85" />
              </div>

              {/* Layout Content (Editorial text alignment) */}
              <div className="px-7 pb-8 pt-4 flex flex-col gap-5 relative z-10">
                <div className="flex flex-col gap-1 mt-1">
                  <h2 className="font-serif text-[34px] font-light text-[#1E1611] leading-[1.08] tracking-wide letterpress-heading">
                    We&apos;ve been expecting you,<br />
                    <span className="italic font-normal text-[#1E1611]">Herr Keller.</span>
                  </h2>
                  <p className="font-sans text-[11px] font-light text-[#1E1611]/75 leading-relaxed mt-3 max-w-[290px] tracking-wide">
                    Skip reception entirely. Your luggage has been brought up, and a warm hearth is already lit in Room 214.
                  </p>
                </div>

                {/* Overlapping stationery letterpress card */}
                <div className="deckled-card p-5.5 rounded-[24px] linen-shadow flex justify-between items-center bg-[#FAF8F5] relative overflow-hidden border border-[#1E1611]/5">
                  <TornPaperEdge className="text-[#FAF8F5] opacity-80" />
                  <div className="flex flex-col gap-1 relative z-10">
                    <span className="font-sans text-[7.5px] uppercase tracking-[0.18em] text-[#2F483A] font-bold">Skip Reception</span>
                    <h3 className="font-serif text-[17px] font-medium text-[#1E1611]">Room 214 · Sanctuary</h3>
                    <p className="font-sans text-[8.5px] text-[#1E1611]/50 tracking-wide mt-0.5">Second floor · Estimated 2 min walk</p>
                  </div>
                  <div className="flex flex-col items-end gap-1.5 relative z-10">
                    <Monogram className="w-7 h-7 text-[#1E1611]/30" />
                    <span className="font-serif text-[8.5px] italic text-[#1E1611]/45">Alt 1,800m</span>
                  </div>
                </div>

                <button 
                  onClick={() => scrollToScreen(1)}
                  className="paper-grain tactile-switch w-full bg-[#2F483A] hover:bg-[#23382D] active:translate-y-[0.5px] transition-all py-4 text-center text-[#FAF8F5] font-sans text-[10px] uppercase tracking-[0.15em] font-bold rounded-[22px] border border-[#2F483A]/20 shadow-[0_4px_12px_rgba(47,72,58,0.15)]"
                >
                  Begin Arrival
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== SCREEN 2: INVISIBLE CHECK-IN ==================== */}
        <div id="screen-1" className="flex-shrink-0 flex flex-col gap-3 group">
          {/* SECTION 09: Screen Goal Sticky Note */}
          <div className="w-[390px] p-4 bg-[#FEF9C3] shadow-sm border border-[#EFE5A3] rounded-[16px] text-[10px] font-sans text-[#1E1611] flex gap-3 items-start relative select-none">
            <span className="bg-[#FEF08A] text-[7px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-sm flex-shrink-0">Goal 02</span>
            <div className="flex flex-col gap-0.5">
              <strong className="font-semibold text-[11px]">Remove Paperwork</strong>
              <p className="opacity-70 leading-normal">Bypass signature details. Connect key delivery to a simple physical gesture (breaking a wax seal note) that triggers keycard activation.</p>
            </div>
          </div>
          <div className="flex justify-between items-center px-2">
            <span className="font-sans text-[10px] tracking-widest text-[#1E1611]/50 uppercase font-semibold">Screen 02</span>
            <span className="font-serif text-xs italic text-[#1E1611]">23:41 · Invisible Check-In</span>
          </div>

          <div className="relative p-3 rounded-[50px] bg-[#1E1611] shadow-[0_25px_60px_-15px_rgba(30,22,17,0.25)] border-[0.5px] border-[#F6F2EA]/20">
            {/* Speaker Notch */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-32 h-4 rounded-full bg-[#1E1611] z-30 flex items-center justify-center gap-1.5 px-4">
              <div className="w-1.5 h-1.5 rounded-full bg-black/60" />
              <div className="h-0.5 flex-grow rounded-full bg-[#261E1A]" />
            </div>

            {/* Screen Viewport - Unified BG Color */}
            <div className="w-[390px] h-[844px] rounded-[38px] overflow-hidden bg-[#EFEAE0] relative paper-grain select-none flex flex-col justify-between p-7 text-[#1E1611]">
              <div className="flex justify-center pt-2">
                <Monogram className="w-8 h-8 text-[#1E1611]/55" />
              </div>

              {/* Wooden/brass keycard with gold foil engraving */}
              <div className="my-auto py-2 flex flex-col items-center gap-6">
                             {/* Physical Card Container (Dark Oak wood with brass foil text) */}
                <div 
                  className="w-60 h-[300px] rounded-[30px] p-6 flex flex-col justify-between relative overflow-hidden shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.12),_inset_0_-1px_1px_rgba(0,0,0,0.4),_0_16px_36px_-6px_rgba(0,0,0,0.5)] animate-fade-in"
                  style={{ 
                    background: "linear-gradient(135deg, #2D1D13 0%, #1A0F0A 100%)", 
                    borderColor: "#C5A880",
                    borderWidth: "1.5px",
                    borderStyle: "solid"
                  }}
                >
                  <div className="absolute inset-0 opacity-[0.22] pointer-events-none mix-blend-overlay bg-repeat card-noise-overlay" />
                  
                  <div className="flex justify-between items-start relative z-10">
                    <Monogram className="w-6 h-6 text-[#C5A880] opacity-60 drop-shadow-[0_1px_0px_rgba(255,255,255,0.08)]" />
                    <span className="font-sans text-[7px] uppercase tracking-[0.2em] text-[#C5A880]/70 font-semibold" style={{ textShadow: "0 1px 0px rgba(255,255,255,0.08)" }}>Aurelia Room Card</span>
                  </div>

                  {/* Brass sensor chip - interactive glowing state */}
                  <div className="flex flex-col items-center gap-3.5 relative z-10">
                    <div className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-[1200ms] ${isSealBroken ? 'bg-[#C5A880]/15 border-[#C5A880] shadow-[0_0_22px_rgba(197,168,128,0.45)] scale-105 key-pulse' : 'bg-transparent border-[#FAF8F5]/15'}`}>
                      <div className={`w-8 h-8 rounded-full border border-dashed flex items-center justify-center transition-all duration-[1200ms] ${isSealBroken ? 'border-[#C5A880] animate-spin [animation-duration:20s]' : 'border-[#FAF8F5]/15'}`}>
                        <span className={`font-serif text-[9px] font-bold transition-colors duration-[1200ms] ${isSealBroken ? 'text-[#C5A880]' : 'text-[#FAF8F5]/40'}`}>A</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="font-serif text-[15px] font-semibold text-[#FAF8F5] tracking-wide letterpress-heading" style={{ textShadow: "0 1px 0px rgba(0,0,0,0.3)" }}>Herr Keller</p>
                      <p className="font-sans text-[8px] uppercase tracking-[0.18em] text-[#C5A880] mt-0.5 font-medium" style={{ textShadow: "0 1px 0px rgba(255,255,255,0.08)" }}>Room 214 · Sanctuary</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-end border-t border-[#FAF8F5]/10 pt-3 relative z-10">
                    <div>
                      <p className="font-sans text-[5.5px] uppercase tracking-wider text-[#FAF8F5]/50">Valid Until</p>
                      <p className="font-sans text-[7px] font-bold text-[#C5A880] uppercase tracking-widest" style={{ textShadow: "0 1px 0px rgba(255,255,255,0.08)" }}>18 July 2026</p>
                    </div>
                    <span className="font-serif text-[11px] font-bold text-[#C5A880]/30" style={{ textShadow: "0 1px 0px rgba(255,255,255,0.08)" }}>No. 214</span>
                  </div>
                </div>

                {/* Hand-finished welcome letter layout with Wax Seal */}
                <div className="deckled-card p-5 rounded-[24px] linen-shadow flex flex-col items-center justify-center text-center gap-3 w-full bg-[#FAF8F5] min-h-[170px] relative overflow-hidden border border-[#1E1611]/5">
                  <TornPaperEdge className="text-[#FAF8F5] opacity-85" />
                  
                  <div className="absolute top-3.5 right-5 text-[6px] font-sans tracking-[0.15em] text-[#1E1611]/35 font-semibold z-10">
                    15 JULY, 23:41
                  </div>
                  
                  {!isSealBroken ? (
                    <>
                      <p className="font-sans text-[7.5px] uppercase tracking-[0.15em] text-[#1E1611]/45 mt-2.5 relative z-10 font-bold">Welcome Note</p>
                      <h4 className="font-serif text-[15px] italic text-[#1E1611] leading-relaxed relative z-10 px-2 mt-1">
                        &ldquo;Your room is waiting. Nothing more is needed tonight.&rdquo;
                      </h4>
                      <div className="relative z-10 py-0.5">
                        <WaxSeal onClick={handleSealClick} isBroken={isSealBroken} />
                      </div>
                      <p className="font-sans text-[7.5px] text-[#1E1611]/45 tracking-wider uppercase relative z-10">Break seal to activate key</p>
                    </>
                  ) : (
                    <div className="flex flex-col items-center gap-1.5 animate-fade-in duration-700 relative z-10 mt-2">
                      <span className="font-sans text-[8px] uppercase tracking-widest text-[#2F483A] font-bold">Key Successfully Active</span>
                      <h4 className="font-serif text-[14.5px] text-[#1E1611] leading-relaxed italic px-2">
                        Your phone key is active. Please bypass reception and proceed directly to 214.
                      </h4>
                      <div className="text-right w-full mt-1.5 pr-2">
                        <span className="font-serif text-[10.5px] italic text-[#1E1611]/60">— Lukas Gruben</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="pb-2">
                <button 
                  onClick={() => scrollToScreen(2)}
                  className={`paper-grain tactile-switch w-full py-4 text-center font-sans text-[10px] uppercase tracking-[0.15em] font-bold rounded-[22px] border transition-all ${!isSealBroken ? 'bg-[#2F483A]/40 text-[#FAF8F5]/60 border-[#2F483A]/10 cursor-not-allowed' : 'bg-[#2F483A] text-[#FAF8F5] border-[#2F483A]/20 hover:bg-[#23382D] active:translate-y-[0.5px] shadow-[0_4px_12px_rgba(47,72,58,0.15)]'}`}
                  disabled={!isSealBroken}
                >
                  Walk With Me
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== SCREEN 3: WAYFINDING ==================== */}
        <div id="screen-2" className="flex-shrink-0 flex flex-col gap-3 group">
          {/* SECTION 09: Screen Goal Sticky Note */}
          <div className="w-[390px] p-4 bg-[#FEF9C3] shadow-sm border border-[#EFE5A3] rounded-[16px] text-[10px] font-sans text-[#1E1611] flex gap-3 items-start relative select-none">
            <span className="bg-[#FEF08A] text-[7px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-sm flex-shrink-0">Goal 03</span>
            <div className="flex flex-col gap-0.5">
              <strong className="font-semibold text-[11px]">Remove Navigation Anxiety</strong>
              <p className="opacity-70 leading-normal">Provide a clean blueprint map and an immersive spatial viewfinder walkthrough to guide the guest through corridors directly to Room 214.</p>
            </div>
          </div>
          <div className="flex justify-between items-center px-2">
            <span className="font-sans text-[10px] tracking-widest text-[#1E1611]/50 uppercase font-semibold">Screen 03</span>
            <span className="font-serif text-xs italic text-[#1E1611]">23:41 · Wayfinding</span>
          </div>

          <div className="relative p-3 rounded-[50px] bg-[#1E1611] shadow-[0_25px_60px_-15px_rgba(30,22,17,0.25)] border-[0.5px] border-[#F6F2EA]/20">
            {/* Speaker Notch */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-32 h-4 rounded-full bg-[#1E1611] z-30 flex items-center justify-center gap-1.5 px-4">
              <div className="w-1.5 h-1.5 rounded-full bg-black/60" />
              <div className="h-0.5 flex-grow rounded-full bg-[#261E1A]" />
            </div>

            {/* Screen Viewport - Unified BG Color */}
            <div className="w-[390px] h-[844px] rounded-[38px] overflow-hidden bg-[#EFEAE0] relative paper-grain select-none flex flex-col justify-between p-7 text-[#1E1611]">
              <div className="flex justify-center pt-2">
                <Monogram className="w-8 h-8 text-[#1E1611]/55" />
              </div>

              {/* Wayfinding Layout with Blueprint vs. VR Mode selector */}
              <div className="my-auto py-1 flex flex-col gap-4">
                
                {/* Visual Viewport Toggle (Glassmorphism design) */}
                <div className="flex justify-center mb-1">
                  <div className="glass-parchment p-1 rounded-full flex gap-1">
                    <button 
                      onClick={() => setWayfindingMode("blueprint")}
                      className={`font-sans text-[8.5px] uppercase tracking-widest px-4 py-1.5 rounded-full transition-all ${wayfindingMode === "blueprint" ? 'bg-[#1E1611] text-[#FAF8F5] font-semibold shadow-sm' : 'text-[#1E1611]/50 hover:text-[#1E1611]'}`}
                    >
                      Blueprint
                    </button>
                    <button 
                      onClick={() => setWayfindingMode("vr")}
                      className={`font-sans text-[8.5px] uppercase tracking-widest px-4 py-1.5 rounded-full transition-all ${wayfindingMode === "vr" ? 'bg-[#1E1611] text-[#FAF8F5] font-semibold shadow-sm' : 'text-[#1E1611]/50 hover:text-[#1E1611]'}`}
                    >
                      VR Walkthrough
                    </button>
                  </div>
                </div>

                <div className="text-center">
                  <span className="font-sans text-[7.5px] uppercase tracking-[0.22em] text-[#1E1611]/45">Altitude 1,800m • Walk 85m</span>
                  <h3 className="font-serif text-[23px] font-light leading-tight text-[#1E1611] mt-0.5 letterpress-heading">
                    {wayfindingMode === "blueprint" ? "Architectural Map" : "Virtual Viewfinder"}
                  </h3>
                </div>

                {/* Main Visual Display (Blueprint vs. VR Image overlay with path) */}
                <div className="paper-grain bg-[#F5EFE4] rounded-[26px] border border-[#1E1611]/12 p-3 h-72 relative flex items-center justify-center shadow-[inset_0_1.5px_4px_rgba(30,22,17,0.05),_0_8px_20px_-4px_rgba(30,22,17,0.08)] overflow-hidden">
                  
                  {wayfindingMode === "blueprint" ? (
                    <ConciergeMapSVG userHeadingAngle={45} />
                  ) : (
                    /* VR Walkthrough mode - Using user-provided image 7 (luxury double height mountain view lounge) */
                    <div className="absolute inset-0 w-full h-full bg-cover bg-center animate-fade-in" style={{ backgroundImage: "url('/user_images/image_7.jpg')" }}>
                      <div className="absolute inset-0 bg-[#1E1611]/30 pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#150F0B]/90 via-transparent to-[#150F0B]/35 pointer-events-none" />
                      
                      {/* Noise filter to make it look like a tactile viewfinder */}
                      <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.18] bg-repeat viewfinder-noise-overlay" />
                      
                      {/* VR Guidance overlay */}
                      <div className="absolute inset-0 flex flex-col justify-between p-4 text-[#FAF8F5]">
                        <div className="flex justify-between items-start">
                          <span className="font-sans text-[7px] uppercase tracking-widest bg-[#FAF8F5]/10 border border-[#FAF8F5]/25 px-2 py-0.5 rounded-full backdrop-blur-sm">VR Mode Active</span>
                          
                          {/* Fine Compass element at top right */}
                          <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#FAF8F5] stroke-[1] opacity-80 fill-none">
                            <circle cx="12" cy="12" r="10" strokeDasharray="1.5 1.5" />
                            <polygon points="12,4 15,12 12,10 9,12" fill="#FAF8F5" stroke="none" />
                          </svg>
                        </div>
                        
                        {/* Glow navigation path projected on floor */}
                        <div className="absolute inset-x-0 bottom-8 flex justify-center items-center pointer-events-none">
                          <svg viewBox="0 0 200 100" className="w-48 h-20 stroke-[#FAF8F5] fill-none stroke-[1.5]">
                            <path d="M 100,100 C 100,70 120,40 135,20" strokeDasharray="3 3" opacity="0.6" />
                            <path d="M 100,100 C 100,70 120,40 135,20" strokeWidth="2.5" strokeLinecap="round" />
                            <polygon points="135,16 130,24 140,24" fill="#FAF8F5" stroke="none" />
                          </svg>
                        </div>

                        <div className="text-center mt-auto pb-1 z-10">
                          <p className="font-serif text-[11px] italic tracking-wide text-[#FAF8F5] text-shadow">
                            &ldquo;Follow the window gallery walkway toward Room 214.&rdquo;
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="text-center mt-1 px-1 flex flex-col gap-0.5">
                  <p className="font-serif text-[16px] font-light leading-relaxed text-[#1E1611]">
                    {wayfindingMode === "blueprint" 
                      ? "The lift is behind you, to your right."
                      : "Walk straight along the gallery, then turn left."
                    }
                  </p>
                  <p className="font-sans text-[9px] text-[#1E1611]/50 tracking-[0.15em] uppercase font-semibold">
                    Second floor, Room 214.
                  </p>
                </div>
              </div>

              {/* Concierge signature details */}
              <div className="flex items-center justify-between border-t border-[#1E1611]/10 pt-4 pb-2 px-1">
                <div className="flex flex-col">
                  <span className="font-sans text-[8px] uppercase tracking-widest text-[#1E1611]/50">Path Curator</span>
                  <span className="font-serif text-[13px] italic text-[#1E1611] mt-0.5 font-semibold">Lukas Gruben</span>
                  <span className="font-sans text-[7.5px] uppercase tracking-wider text-[#1E1611]/40">Head Concierge</span>
                </div>
                <button 
                  onClick={() => scrollToScreen(3)}
                  className="paper-grain tactile-switch bg-[#2F483A] hover:bg-[#23382D] active:translate-y-[0.5px] px-6 py-3.5 text-[9px] uppercase tracking-[0.15em] font-bold rounded-[22px] border border-[#2F483A]/20 text-[#FAF8F5] shadow-[0_4px_12px_rgba(47,72,58,0.12)]"
                >
                  Enter Room
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== SCREEN 4: ANTICIPATED SUPPER ==================== */}
        <div id="screen-3" className="flex-shrink-0 flex flex-col gap-3 group">
          {/* SECTION 09: Screen Goal Sticky Note */}
          <div className="w-[390px] p-4 bg-[#FEF9C3] shadow-sm border border-[#EFE5A3] rounded-[16px] text-[10px] font-sans text-[#1E1611] flex gap-3 items-start relative select-none">
            <span className="bg-[#FEF08A] text-[7px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-sm flex-shrink-0">Goal 04</span>
            <div className="flex flex-col gap-0.5">
              <strong className="font-semibold text-[11px]">Reduce Decision Fatigue</strong>
              <p className="opacity-70 leading-normal">Rather than presenting a sprawling room service catalog, suggest a single light organic course suited for late-night restorative sleep.</p>
            </div>
          </div>
          <div className="flex justify-between items-center px-2">
            <span className="font-sans text-[10px] tracking-widest text-[#1E1611]/50 uppercase font-semibold">Screen 04</span>
            <span className="font-serif text-xs italic text-[#1E1611]">23:43 · Anticipated Supper</span>
          </div>

          <div className="relative p-3 rounded-[50px] bg-[#1E1611] shadow-[0_25px_60px_-15px_rgba(30,22,17,0.25)] border-[0.5px] border-[#F6F2EA]/20">
            {/* Speaker Notch */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-32 h-4 rounded-full bg-[#1E1611] z-30 flex items-center justify-center gap-1.5 px-4">
              <div className="w-1.5 h-1.5 rounded-full bg-black/60" />
              <div className="h-0.5 flex-grow rounded-full bg-[#261E1A]" />
            </div>

            {/* Screen Viewport - Unified BG Color */}
            <div className="w-[390px] h-[844px] rounded-[38px] overflow-hidden bg-[#EFEAE0] relative paper-grain select-none flex flex-col p-7 text-[#1E1611]">
              
              {/* Fixed Monogram Header */}
              <div className="flex justify-center pt-2 flex-shrink-0">
                <Monogram className="w-8 h-8 text-[#1E1611]/55" />
              </div>

              {/* Fixed-position Image (identical Y placement on both screens) */}
              <div 
                className="w-full h-40 rounded-[24px] overflow-hidden bg-cover bg-center linen-shadow stationery-border flex-shrink-0 mt-4 relative"
                style={{ backgroundImage: "url('/supper_tray.png')" }}
              >
                {/* Creative vignette, warm gradient, and film grain overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1611]/45 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1E1611]/15 via-transparent to-[#FAF8F5]/10 mix-blend-multiply pointer-events-none" />
                <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.16] bg-repeat noise-overlay" />
              </div>

              {/* Scrollable / Flexible content block underneath */}
              <div className="flex-grow flex flex-col justify-between mt-4 overflow-hidden">
                <div className="text-center flex flex-col gap-1">
                  <h2 className="font-serif text-[28px] font-light leading-tight text-[#1E1611] letterpress-heading">
                    Midnight in the Alps.
                  </h2>
                  <p className="font-sans text-[9px] tracking-wider text-[#1E1611]/50 uppercase mt-0.5">
                    Prepared fresh and held at heat in the copper chambers.
                  </p>
                </div>

                <div className="deckled-card p-5 rounded-[24px] linen-shadow flex flex-col gap-3.5 text-center bg-[#FAF8F5] relative my-2">
                  <TornPaperEdge className="text-[#FAF8F5]" />
                  <p className="font-sans text-[8px] uppercase tracking-[0.15em] text-[#1E1611]/50 relative z-10 font-semibold">Room Service Delivery</p>
                  
                  {supperOrdered ? (
                    <div className="py-4 animate-fade-in relative z-10 flex flex-col gap-2">
                      <span className="text-[#1E1611] text-lg font-serif italic font-semibold">Your selection is prepared.</span>
                      <p className="font-sans text-[10.5px] text-[#1E1611]/70 leading-relaxed mt-2 px-2">
                        Your custom order of <strong className="text-[#1E1611]">{supperSelection}</strong> paired with <strong className="text-[#1E1611]">{supperDrink}</strong> is on its way. Lukas will place it via <strong className="text-[#1E1611]">{supperDelivery}</strong> outside Room 214 in about 10 minutes.
                      </p>
                    </div>
                  ) : (
                    <div className="relative z-10 flex flex-col gap-4 text-left px-1">
                      
                      {/* Course Selector */}
                      <div className="flex flex-col gap-2">
                        <span className="font-sans text-[7.5px] uppercase tracking-[0.18em] text-[#1E1611]/50 font-bold">01. Supper Course</span>
                        <div className="flex gap-1 justify-between">
                          {["Barley Soup", "Alpine Cuts", "Consommé"].map((item) => (
                            <button
                              key={item}
                              onClick={() => setSupperSelection(item)}
                              className={`flex-grow font-sans text-[7.5px] uppercase tracking-widest py-2 border transition-all rounded-full ${supperSelection === item ? 'border-[#1E1611] text-[#FAF8F5] bg-[#1E1611] font-semibold shadow-sm' : 'border-[#1E1611]/12 text-[#1E1611]/50 hover:text-[#1E1611]'}`}
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                        <p className="font-serif text-[10.5px] italic text-[#1E1611]/60 text-center mt-0.5">
                          {supperSelection === "Barley Soup" && "Valais broth, rye sourdough"}
                          {supperSelection === "Alpine Cuts" && "Air-dried Engadin beef & alpine cheese"}
                          {supperSelection === "Consommé" && "Restorative herbal vegetable broth"}
                        </p>
                      </div>

                      {/* Drink Selector */}
                      <div className="border-t border-[#1E1611]/5 pt-3.5 flex flex-col gap-2">
                        <span className="font-sans text-[7.5px] uppercase tracking-[0.18em] text-[#1E1611]/50 font-bold">02. Infusion Pairings</span>
                        <div className="flex gap-1 justify-between">
                          {["Chamomile", "Spruce Tea", "Warm Milk"].map((drink) => (
                            <button
                              key={drink}
                              onClick={() => setSupperDrink(drink)}
                              className={`flex-grow font-sans text-[7.5px] uppercase tracking-widest py-2 border transition-all rounded-full ${supperDrink === drink ? 'border-[#1E1611] text-[#FAF8F5] bg-[#1E1611] font-semibold shadow-sm' : 'border-[#1E1611]/12 text-[#1E1611]/50 hover:text-[#1E1611]'}`}
                            >
                              {drink}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Delivery Selector */}
                      <div className="border-t border-[#1E1611]/5 pt-3.5 flex flex-col gap-2">
                        <span className="font-sans text-[7.5px] uppercase tracking-[0.18em] text-[#1E1611]/50 font-bold">03. Delivery Method</span>
                        <div className="flex gap-1.5 justify-between">
                          {["Quiet Drop", "Butler Setup"].map((method) => (
                            <button
                              key={method}
                              onClick={() => setSupperDelivery(method)}
                              className={`flex-grow font-sans text-[7.5px] uppercase tracking-widest py-2 border transition-all rounded-full ${supperDelivery === method ? 'border-[#1E1611] text-[#FAF8F5] bg-[#1E1611] font-semibold shadow-sm' : 'border-[#1E1611]/12 text-[#1E1611]/50 hover:text-[#1E1611]'}`}
                            >
                              {method}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                    </div>
                  )}
                </div>

                {/* Action and Dismiss */}
                <div className="flex flex-col items-center gap-2 pb-2">
                  {!supperOrdered ? (
                    <>
                      <button 
                        onClick={() => setSupperOrdered(true)}
                        className="paper-grain tactile-switch w-full bg-[#2F483A] hover:bg-[#23382D] active:translate-y-[0.5px] transition-all py-3.5 text-center text-[#F6F2EA] font-sans text-[10px] uppercase tracking-[0.15em] font-bold rounded-[22px] border border-[#2F483A]/20 shadow-[0_4px_12px_rgba(47,72,58,0.15)]"
                      >
                        Confirm Order
                      </button>
                      <button 
                        onClick={() => scrollToScreen(4)}
                        className="font-sans text-[9px] tracking-widest uppercase text-[#1E1611]/45 hover:text-[#1E1611]/70 transition-colors"
                      >
                        No, thank you
                      </button>
                    </>
                  ) : (
                    <button 
                      onClick={() => scrollToScreen(4)}
                      className="paper-grain debossed-button tactile-switch w-full bg-[#2F483A] hover:bg-[#23382D] active:translate-y-[0.5px] transition-all py-3.5 text-center text-[#FAF8F5] font-sans text-[10px] uppercase tracking-[0.15em] font-bold rounded-[22px] border border-[#2F483A]/20 shadow-[0_4px_12px_rgba(47,72,58,0.15)]"
                    >
                      Continue to room
                    </button>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* ==================== SCREEN 5: GOODNIGHT & AMBIENCE ==================== */}
        <div id="screen-4" className="flex-shrink-0 flex flex-col gap-3 group">
          {/* SECTION 09: Screen Goal Sticky Note */}
          <div className="w-[390px] p-4 bg-[#FEF9C3] shadow-sm border border-[#EFE5A3] rounded-[16px] text-[10px] font-sans text-[#1E1611] flex gap-3 items-start relative select-none">
            <span className="bg-[#FEF08A] text-[7px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-sm flex-shrink-0">Goal 05</span>
            <div className="flex flex-col gap-0.5">
              <strong className="font-semibold text-[11px]">Create Calming Ambience</strong>
              <p className="opacity-70 leading-normal">Enable pre-sleep room custom settings: dynamic slider thermostat, active fireplace toggle, and pillow scent selection.</p>
            </div>
          </div>
          <div className="flex justify-between items-center px-2">
            <span className="font-sans text-[10px] tracking-widest text-[#1E1611]/50 uppercase font-semibold">Screen 05</span>
            <span className="font-serif text-xs italic text-[#261E1A]/80">23:46 · Goodnight</span>
          </div>

          <div className="relative p-3 rounded-[50px] bg-[#1E1611] shadow-[0_25px_60px_-15px_rgba(30,22,17,0.25)] border-[0.5px] border-[#F6F2EA]/20">
            {/* Speaker Notch */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-32 h-4 rounded-full bg-[#1E1611] z-30 flex items-center justify-center gap-1.5 px-4">
              <div className="w-1.5 h-1.5 rounded-full bg-black/60" />
              <div className="h-0.5 flex-grow rounded-full bg-[#261E1A]" />
            </div>

            {/* Viewport - Unified BG Color */}
            <div className={`w-[390px] h-[844px] rounded-[38px] overflow-hidden relative paper-grain select-none flex flex-col p-7 transition-colors duration-[1500ms] ${fireplaceLit ? 'bg-[#EFEAE0] text-[#1E1611]' : 'bg-[#E5DFD4] text-[#1E1611]/80'}`}>
              
              {/* Warm fireplace glow layer */}
              <div className={`absolute inset-0 bg-[#E88E3F]/4 transition-opacity duration-[1500ms] ${fireplaceLit ? 'opacity-100' : 'opacity-0'}`} />

              {/* Fixed Monogram Header */}
              <div className="flex justify-center pt-2 opacity-50 flex-shrink-0">
                <Monogram className="w-8 h-8 text-[#1E1611]" />
              </div>

              {/* Fixed-position Image (identical Y placement on both screens) */}
              <div 
                className={`w-full h-40 rounded-[24px] overflow-hidden bg-cover bg-center transition-all duration-[1500ms] linen-shadow stationery-border flex-shrink-0 mt-4 relative ${fireplaceLit ? 'brightness-[100%] contrast-[95%]' : 'brightness-[70%] contrast-[90%] grayscale-[30%]'}`}
                style={{ backgroundImage: "url('/user_images/image_3.jpg')" }}
              >
                {/* Creative vignette, fireplace glow, and film grain overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1611]/40 via-transparent to-transparent pointer-events-none transition-opacity duration-[1500ms]" />
                <div className={`absolute inset-0 bg-gradient-to-r from-[#D97706]/20 via-transparent to-transparent pointer-events-none transition-opacity duration-[1500ms] ${fireplaceLit ? 'opacity-100' : 'opacity-0'}`} />
                <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.16] bg-repeat noise-overlay" />
              </div>

              {/* Scrollable / Flexible content block underneath */}
              <div className="flex-grow flex flex-col justify-between mt-4 overflow-hidden">
                <div className="text-center flex flex-col gap-1">
                  <h2 className="font-serif text-[28px] font-light leading-tight text-[#1E1611] letterpress-heading">
                    Goodnight, <span className="italic">Herr Keller.</span>
                  </h2>
                  <p className="font-sans text-[9px] tracking-wider text-[#1E1611]/50 uppercase mt-0.5">
                    Breakfast is until 11:00 — no rush tomorrow.
                  </p>
                </div>

                {/* Tactile Room Ambience Controls Card (Redesigned with custom dials and scent descriptions) */}
                <div className="deckled-card p-5 rounded-[26px] linen-shadow flex flex-col gap-3.5 bg-[#FAF8F5] relative my-2">
                  <TornPaperEdge className="text-[#FAF8F5]" />
                  <span className="font-sans text-[7.5px] uppercase tracking-widest text-[#1E1611]/55 text-center block border-b border-[#1E1611]/5 pb-1 relative z-10">Tactile Ambience Panel</span>
                  
                  {/* Small Fireplace indicator inside panel */}
                  <div className="flex justify-center py-1 scale-90 relative z-10 border-b border-[#1E1611]/5">
                    <FireplaceSVG isLit={fireplaceLit} />
                  </div>

                  {/* Temperature Control - Redesigned as a horizontal slider scale */}
                  <div className="flex flex-col gap-2 relative z-10">
                    <div className="flex justify-between items-center">
                      <p className="font-sans text-[8px] uppercase tracking-wider text-[#1E1611]/45">Thermostat</p>
                      <p className="font-serif text-[12.5px] font-semibold text-[#1E1611]">{roomTemp.toFixed(1)}°C</p>
                    </div>
                    
                    {/* Horizontal slider scale */}
                    <div className="relative w-full h-5 flex items-center justify-between px-1">
                      <div className="absolute left-0 right-0 h-0.5 bg-[#1E1611]/8" />
                      {/* Subdivisions */}
                      {[18, 20, 22, 24, 26].map((val) => (
                        <div key={val} className="w-[1px] h-2 bg-[#1E1611]/20 relative z-10" />
                      ))}
                      {/* Active indicator needle */}
                      <div 
                        className="absolute w-2 h-4 rounded-full bg-[#1E1611] shadow-sm z-20 transition-all duration-500 ease-out" 
                        style={{ left: `${((roomTemp - 18) / 8) * 94 + 1}%` }}
                      />
                    </div>

                    <div className="flex justify-between items-center mt-1">
                      <span className="font-sans text-[7px] text-[#1E1611]/40">18°C (Cool)</span>
                      <div className="flex gap-1">
                        <button 
                          onClick={() => adjustTemp(-0.5)}
                          className="w-6.5 h-6.5 rounded-full border border-[#1E1611]/15 hover:bg-[#1E1611]/5 active:translate-y-[0.5px] flex items-center justify-center font-sans text-xs text-[#1E1611] transition-colors"
                        >
                          –
                        </button>
                        <button 
                          onClick={() => adjustTemp(0.5)}
                          className="w-6.5 h-6.5 rounded-full border border-[#1E1611]/15 hover:bg-[#1E1611]/5 active:translate-y-[0.5px] flex items-center justify-center font-sans text-xs text-[#1E1611] transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-sans text-[7px] text-[#1E1611]/40">26°C (Cozy)</span>
                    </div>
                  </div>

                  {/* Fireplace Control */}
                  <div className="flex items-center justify-between border-t border-[#1E1611]/5 pt-3 relative z-10">
                    <div>
                      <p className="font-sans text-[8px] uppercase tracking-wider text-[#1E1611]/45">Hearth</p>
                      <p className="font-serif text-[12px] font-medium text-[#1E1611] mt-0.5">Fireplace Status</p>
                    </div>
                    <button 
                      onClick={() => setFireplaceLit(!fireplaceLit)}
                      className={`font-sans text-[7.5px] uppercase tracking-widest px-4 py-2 rounded-full border transition-all relative z-10 ${fireplaceLit ? 'border-[#D97706] text-[#D97706] bg-[#D97706]/5' : 'border-[#1E1611]/15 text-[#1E1611]/50'}`}
                    >
                      {fireplaceLit ? "Lit (Warm)" : "Extinguish"}
                    </button>
                  </div>

                  {/* Room Scent Selector with sensory notes */}
                  <div className="border-t border-[#1E1611]/5 pt-3 relative z-10">
                    <p className="font-sans text-[8px] uppercase tracking-wider text-[#1E1611]/45 text-center mb-2">Pillow Scent Selection</p>
                    <div className="flex justify-around gap-1.5">
                      {[
                        { name: "Stone Pine", note: "Deep sleep" },
                        { name: "Alpine Herbs", note: "Restorative" },
                        { name: "Mountain Air", note: "Crisp & clean" }
                      ].map((scent) => (
                        <button
                          key={scent.name}
                          onClick={() => setPillowScent(scent.name)}
                          className={`flex-grow flex flex-col items-center gap-0.5 py-1.5 px-1 border transition-all rounded-[12px] ${pillowScent === scent.name ? 'border-[#1E1611] text-[#1E1611] bg-[#1E1611]/5 font-semibold' : 'border-[#1E1611]/10 text-[#1E1611]/50 hover:text-[#1E1611]'}`}
                        >
                          <span className="font-sans text-[7.5px] uppercase tracking-widest">{scent.name.split(" ")[0]}</span>
                          <span className="font-serif text-[6.5px] italic opacity-60 leading-none">{scent.note}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Faint footer signature */}
                <div className="flex flex-col items-center gap-1 opacity-30 text-center pb-2 flex-shrink-0">
                  <Monogram className="w-5 h-5 text-[#1E1611]" />
                  <span className="font-sans text-[8px] uppercase tracking-widest">We are here if you need us.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== SCREEN 6: NEXT MORNING ==================== */}
        <div id="screen-5" className="flex-shrink-0 flex flex-col gap-3 group">
          {/* SECTION 09: Screen Goal Sticky Note */}
          <div className="w-[390px] p-4 bg-[#FEF9C3] shadow-sm border border-[#EFE5A3] rounded-[16px] text-[10px] font-sans text-[#1E1611] flex gap-3 items-start relative select-none">
            <span className="bg-[#FEF08A] text-[7px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-sm flex-shrink-0">Goal 06</span>
            <div className="flex flex-col gap-0.5">
              <strong className="font-semibold text-[11px]">Leave Final Impression</strong>
              <p className="opacity-70 leading-normal">Surprise the guest with a quiet morning greeting letter and a confirmation note that their late-night delayed luggage has been resolved in-room.</p>
            </div>
          </div>
          <div className="flex justify-between items-center px-2">
            <span className="font-sans text-[10px] tracking-widest text-[#1E1611]/50 uppercase font-semibold">Screen 06</span>
            <span className="font-serif text-xs italic text-[#1E1611]">09:12 · Next Morning</span>
          </div>

          <div className="relative p-3 rounded-[50px] bg-[#1E1611] shadow-[0_25px_60px_-15px_rgba(30,22,17,0.25)] border-[0.5px] border-[#F6F2EA]/20">
            {/* Speaker Notch */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-32 h-4 rounded-full bg-[#1E1611] z-30 flex items-center justify-center gap-1.5 px-4">
              <div className="w-1.5 h-1.5 rounded-full bg-black/60" />
              <div className="h-0.5 flex-grow rounded-full bg-[#261E1A]" />
            </div>

            {/* Screen Viewport (Brighter paper color replaced with parchment to keep consistent) */}
            <div className="w-[390px] h-[844px] rounded-[38px] overflow-hidden bg-[#EFEAE0] relative paper-grain select-none flex flex-col justify-between p-7 text-[#1E1611]">
              <div className="flex justify-center pt-2">
                <Monogram className="w-9 h-9 text-[#1E1611] opacity-75" />
              </div>

              {/* Layout Rhythm: Floating envelope cards overlapping the mountain morning peaks */}
              <div className="my-auto py-1 flex flex-col gap-4">
                <div 
                  className="w-full h-60 rounded-[24px] overflow-hidden bg-cover bg-[center_32%] linen-shadow stationery-border grayscale-[5%] brightness-[102%] relative"
                  style={{ backgroundImage: "url('/user_images/image_1.jpg')" }}
                >
                  {/* Creative vignette, warm mountain dawn rise gradient, and grain overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#EFEAE0]/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#1E1611]/10 via-transparent to-[#D97706]/10 mix-blend-overlay pointer-events-none" />
                  <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.14] bg-repeat noise-overlay" />
                </div>
                
                <div className="text-center my-1">
                  <h2 className="font-serif text-[28px] font-light leading-snug text-[#1E1611] letterpress-heading">
                    Good morning,<br /><span className="italic">Herr Keller.</span>
                  </h2>
                </div>

                {/* Antiphonal Luggage card (Envelope style with gold monogram sticker) */}
                <div className="deckled-card p-5 rounded-[24px] stationery-border text-center linen-shadow translate-y-1 hover:translate-y-0 transition-transform duration-500 bg-[#FAF8F5] relative overflow-hidden">
                  <TornPaperEdge className="text-[#FAF8F5]" />
                  <p className="font-sans text-[8px] uppercase tracking-widest text-[#1E1611]/50 mb-1.5 relative z-10 font-semibold">Luggage Dispatch Note</p>
                  <p className="font-serif text-[13px] leading-relaxed text-[#1E1611] italic px-1 relative z-10">
                    &ldquo;Your delayed luggage arrived at 9:00. We&apos;ve placed it in your room.&rdquo;
                  </p>
                  <div className="w-8 h-[0.5px] bg-[#1E1611]/15 mx-auto my-2 relative z-10" />
                  
                  {/* Subtle stationery stamp */}
                  <div className="flex items-center justify-center gap-1 relative z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E1611]/40" />
                    <span className="font-sans text-[7.5px] uppercase tracking-widest text-[#1E1611]/50 font-bold">Anticipated & Resolved</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E1611]/40" />
                  </div>
                </div>
              </div>

              {/* No button - disappears, just monogram logo */}
              <div className="flex flex-col items-center gap-1 pb-4 opacity-40 text-center">
                <span className="font-serif text-[10px] font-bold tracking-[0.25em]">A U R E L I A</span>
                <span className="font-sans text-[7px] uppercase tracking-widest text-[#1E1611]/60">Swiss Alps</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

      {/* ==================== LOWER CANVAS: THE DESIGN STUDIO WHITEBOARD & HANDOFF ==================== */}
      <div className="max-w-[1650px] mx-auto w-full p-10 bg-[#E3DDD0] border border-[#1E1611]/15 rounded-[38px] relative flex flex-col gap-12 shadow-[inset_0_4px_24px_rgba(30,22,17,0.08),_0_16px_40px_-10px_rgba(30,22,17,0.1)] overflow-hidden">
        
        {/* Coffee rings and physical workspace details */}
        <CoffeeRing className="top-12 left-1/4 opacity-40 scale-110" />
        <CoffeeRing className="bottom-24 right-1/3 opacity-30" />
        
        {/* Figma Header details */}
        <div className="flex justify-between items-center border-b border-[#1E1611]/10 pb-4">
          <div className="flex items-center gap-2 text-xs font-sans font-semibold text-[#1E1611]/60">
            <span className="w-2.5 h-2.5 bg-[#2F483A] rounded-full" />
            <span>Figma Canvas // Section 02: Design Spec, Tradeoffs & Naming Tokens</span>
          </div>
          <span className="font-mono text-[9px] uppercase tracking-widest text-[#1E1611]/50">Status: Under Review (Handoff Ready)</span>
        </div>

        {/* ==================== ROW 1: THE PRODUCT THESIS & OPERATION ROADMAP ==================== */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-stretch">
          
          {/* COLUMN 1.1: Product Thinking & Scribbles */}
          <div className="bg-[#FAF8F5] border border-[#1E1611]/12 p-8 rounded-[8px] shadow-sm relative flex flex-col justify-between min-h-[380px]">
            <PushPin className="top-2 left-12 bg-red-500 border-red-600" />
            <MaskingTape className="-top-3 right-10 rotate-[5deg] w-16 h-4" />
            
            <div className="flex items-center gap-1.5 text-[8.5px] uppercase tracking-widest font-semibold text-[#1E1611]/45 mb-4">
              <span>05 // UX Thesis & Evolution</span>
            </div>

            {/* Crossed-out Evolution Journey */}
            <div className="flex flex-col gap-4 my-2 text-[10.5px] font-sans">
              <div>
                <span className="text-red-500 line-through block font-bold text-[8px] uppercase tracking-wider">❌ Option A (Traditional)</span>
                <p className="line-through opacity-45 font-serif italic" style={{ fontFamily: '"Kalam", "Comic Sans MS", cursive' }}>&ldquo;Load the app home dashboard and show weather, news, hotel amenities menu.&rdquo;</p>
              </div>
              <div className="pl-4">
                <span className="text-[#2F483A] block font-bold text-[8px] uppercase tracking-wider">✓ Option B (Anticipated)</span>
                <p className="text-[#1E1611] font-serif italic font-bold" style={{ fontFamily: '"Kalam", "Comic Sans MS", cursive' }}>&ldquo;Immediate check-in. Zero clicks. Funicular triggers keycard delivery.&rdquo;</p>
              </div>
            </div>

            {/* Diagram: How we reached simplicity */}
            <div className="border-t border-[#1E1611]/10 pt-4 mt-2 flex flex-col gap-2.5">
              <span className="font-sans text-[8px] uppercase tracking-[0.15em] text-[#1E1611]/55 font-bold">Logic Diagram</span>
              <div className="flex flex-wrap items-center gap-1 text-[9px] font-mono text-[#1E1611]/80">
                <span>Guest Arrives</span>
                <span className="text-[#1E1611]/40">→</span>
                <span className="bg-orange-100 px-1 text-orange-800 font-bold">Exhausted</span>
                <span className="text-[#1E1611]/40">→</span>
                <span className="underline">No Forms</span>
                <span className="text-[#1E1611]/40">→</span>
                <span className="bg-green-100 px-1 text-green-800 font-bold">1-Click Room Entry</span>
              </div>
              
              {/* Hand-drawn side comment */}
              <p className="font-serif italic text-xs text-[#C2410C] mt-2 leading-relaxed" style={{ fontFamily: '"Kalam", "Comic Sans MS", cursive' }}>
                * &ldquo;Can we completely replace the front desk? Validate with local Swiss laws.&rdquo;
              </p>
            </div>
          </div>

          {/* COLUMN 1.2: Validated Assumptions (Sticky Notes Stack) */}
          <div className="bg-[#FAF8F5] border border-[#1E1611]/12 p-8 rounded-[8px] shadow-sm relative flex flex-col justify-between min-h-[380px]">
            <PushPin className="top-2 left-1/2 bg-blue-500 border-blue-600" />
            
            <div className="flex items-center gap-1.5 text-[8.5px] uppercase tracking-widest font-semibold text-[#1E1611]/45 mb-4">
              <span>06 // Operational Assumptions</span>
            </div>

            <div className="grid grid-cols-2 gap-4 my-2 text-[10px]">
              
              <div className="p-3 bg-[#FEF9C3] border border-[#EFE5A3] shadow-xs rotate-[-1.5deg] flex flex-col gap-1 relative">
                <span className="font-bold text-[#1E1611]">Assump 01</span>
                <p className="opacity-70 leading-tight">KYC / Payment completed during booking phase.</p>
                <span className="text-[7px] text-[#2F483A] font-mono uppercase mt-1">Confidence: High</span>
              </div>

              <div className="p-3 bg-[#D1F2FF] border border-[#B0E2FA] shadow-xs rotate-[2deg] flex flex-col gap-1 relative">
                <span className="font-bold text-[#1E1611]">Assump 02</span>
                <p className="opacity-70 leading-tight">Door locks support active Bluetooth BLE unlock.</p>
                <span className="text-[7px] text-[#C2410C] font-mono uppercase mt-1">Verify locks!</span>
              </div>

              <div className="p-3 bg-[#FFE2E2] border border-[#F5C2C2] shadow-xs rotate-[-1deg] flex flex-col gap-1 relative">
                <span className="font-bold text-[#1E1611]">Assump 03</span>
                <p className="opacity-70 leading-tight">Geofence detects GVA flight arrival & funicular exit.</p>
                <span className="text-[7px] text-[#2F483A] font-mono uppercase mt-1">Confidence: Med</span>
              </div>

              <div className="p-3 bg-[#E2FFE2] border border-[#C2F5C2] shadow-xs rotate-[1.5deg] flex flex-col gap-1 relative">
                <span className="font-bold text-[#1E1611]">Assump 04</span>
                <p className="opacity-70 leading-tight">Staff can prep late supper & luggage before 23:40.</p>
                <span className="text-[7px] text-[#2F483A] font-mono uppercase mt-1">Confidence: High</span>
              </div>

            </div>

            {/* Note to the operations team */}
            <div className="border-t border-[#1E1611]/10 pt-4 mt-2">
              <span className="font-sans text-[7.5px] uppercase tracking-widest text-[#C2410C] font-bold block">Action Item:</span>
              <p className="font-serif italic text-xs text-[#1E1611]/70 leading-relaxed" style={{ fontFamily: '"Kalam", "Comic Sans MS", cursive' }}>
                &ldquo;Need to confirm if geofencing is legal under Canton hospitality rules.&rdquo;
              </p>
            </div>
          </div>

          {/* COLUMN 1.3: Service Blueprint & Data Flow */}
          <div className="bg-[#FAF8F5] border border-[#1E1611]/12 p-8 rounded-[8px] shadow-sm relative flex flex-col justify-between min-h-[380px]">
            <PushPin className="top-2 right-12 bg-green-500 border-green-600" />
            
            <div className="flex items-center gap-1.5 text-[8.5px] uppercase tracking-widest font-semibold text-[#1E1611]/45 mb-4">
              <span>07 // Service Blueprint Data Flow</span>
            </div>

            {/* Flowchart list */}
            <div className="flex flex-col gap-3 font-mono text-[9px] text-[#1E1611]/80 my-2 leading-relaxed">
              <div className="p-2 border border-[#1E1611]/10 rounded bg-[#FAF8F5] flex flex-col gap-0.5">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-black uppercase text-[7.5px]">01 / Bluetooth Unlock Trigger</span>
                  <span className="text-[#2F483A] font-bold">App</span>
                </div>
                <p className="opacity-70">BLE signal exchanges token with door unit on approach.</p>
              </div>

              <div className="p-2 border border-[#1E1611]/10 rounded bg-[#FAF8F5] flex flex-col gap-0.5">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-black uppercase text-[7.5px]">02 / PMS Sync Status</span>
                  <span className="text-[#2F483A] font-bold">PMS Server</span>
                </div>
                <p className="opacity-70">Validates room 214 check-in status, logs timestamp.</p>
              </div>

              <div className="p-2 border border-[#1E1611]/10 rounded bg-[#FAF8F5] flex flex-col gap-0.5">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-black uppercase text-[7.5px]">03 / Hearth & Kitchen Prep</span>
                  <span className="text-[#2F483A] font-bold">Hotel Ops</span>
                </div>
                <p className="opacity-70">Notifies in-room fireplace & kitchen tray placement.</p>
              </div>
            </div>

            {/* Hand-drawn blueprint scribble */}
            <p className="font-serif italic text-xs text-[#2F483A] border-t border-[#1E1611]/10 pt-4 mt-2" style={{ fontFamily: '"Kalam", "Comic Sans MS", cursive' }}>
              &ldquo;Data flows automatically. Front-end is just a mirror of the room state.&rdquo;
            </p>
          </div>

        </div>

        {/* ==================== ROW 2: TECHNICAL DESIGNS & DESIGN SYSTEM TOKENS ==================== */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-stretch">
          
          {/* COLUMN 2.1: Component Anatomy Specification */}
          <div className="bg-[#FAF8F5] border border-[#1E1611]/12 p-8 rounded-[8px] shadow-sm relative flex flex-col justify-between min-h-[380px]">
            <PushPin className="top-2 left-10 bg-yellow-500 border-yellow-600" />
            
            <div className="flex items-center gap-1.5 text-[8.5px] uppercase tracking-widest font-semibold text-[#1E1611]/45 mb-4">
              <span>13 // Component Anatomy Specs</span>
            </div>

            {/* Component Anatomy Layout */}
            <div className="flex flex-col gap-4 my-2 text-[10px] font-sans">
              <div className="p-3 bg-[#FAF8F5] border border-[#1E1611]/15 rounded flex flex-col gap-2 shadow-xs">
                <span className="font-bold text-[8.5px] uppercase tracking-wider text-[#2F483A]">Primary Button Specs</span>
                <div className="flex justify-between text-[8px] font-mono border-b border-[#1E1611]/5 pb-1">
                  <span>Padding:</span>
                  <span>16px Y / 24px X</span>
                </div>
                <div className="flex justify-between text-[8px] font-mono border-b border-[#1E1611]/5 pb-1">
                  <span>Radius:</span>
                  <span>999px (Pill style)</span>
                </div>
                <div className="flex justify-between text-[8px] font-mono border-b border-[#1E1611]/5 pb-1">
                  <span>Touch target:</span>
                  <span>Min 44px conforming to WCAG AA</span>
                </div>
                <div className="flex justify-between text-[8px] font-mono">
                  <span>Shadow:</span>
                  <span>Soft blur #1E1611/8 offset-y 4px</span>
                </div>
              </div>

              <div className="p-3 bg-[#FAF8F5] border border-[#1E1611]/15 rounded flex flex-col gap-2 shadow-xs">
                <span className="font-bold text-[8.5px] uppercase tracking-wider text-[#2F483A]">Sanctuary Card Spec</span>
                <div className="flex justify-between text-[8px] font-mono border-b border-[#1E1611]/5 pb-1">
                  <span>Corner Radius:</span>
                  <span>38px luxury soft corner</span>
                </div>
                <div className="flex justify-between text-[8px] font-mono">
                  <span>Borders:</span>
                  <span>0.5px hairline outline #1E1611/12</span>
                </div>
              </div>
            </div>

            <p className="font-serif italic text-xs text-[#C2410C]" style={{ fontFamily: '"Kalam", "Comic Sans MS", cursive' }}>
              * &ldquo;Make sure button corners don&apos;t look too sharp on screens.&rdquo;
            </p>
          </div>

          {/* COLUMN 2.2: Naming Naming Tokens & Engineering Spec */}
          <div className="bg-[#FAF8F5] border border-[#1E1611]/12 p-8 rounded-[8px] shadow-sm relative flex flex-col justify-between min-h-[380px]">
            <PushPin className="top-2 right-12 bg-purple-500 border-purple-600" />
            <MaskingTape className="bottom-4 left-6 rotate-[12deg] w-14 h-4" />
            
            <div className="flex items-center gap-1.5 text-[8.5px] uppercase tracking-widest font-semibold text-[#1E1611]/45 mb-4">
              <span>15 // Engineering Naming Tokens</span>
            </div>

            {/* Token Table */}
            <div className="flex flex-col gap-2 font-mono text-[9px] my-auto">
              <div className="flex justify-between border-b border-[#1E1611]/8 pb-1">
                <span className="font-bold">Spacing Scale:</span>
                <span>4px · 8px · 16px · 24px · 32px · 48px</span>
              </div>
              <div className="flex justify-between border-b border-[#1E1611]/8 pb-1">
                <span className="font-bold">Typography:</span>
                <span>Display / Heading / Body / Caption</span>
              </div>
              <div className="flex justify-between border-b border-[#1E1611]/8 pb-1">
                <span className="font-bold">Primary Button:</span>
                <span>Host/Button/Primary</span>
              </div>
              <div className="flex justify-between border-b border-[#1E1611]/8 pb-1">
                <span className="font-bold">Room Card:</span>
                <span>Host/Card/Room</span>
              </div>
              <div className="flex justify-between border-b border-[#1E1611]/8 pb-1">
                <span className="font-bold">Status Tag:</span>
                <span>Host/Tag/Status</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Easing motion:</span>
                <span>cubic-bezier(0.16, 1, 0.3, 1)</span>
              </div>
            </div>

            <p className="font-serif italic text-xs text-[#2F483A] border-t border-[#1E1611]/10 pt-4 mt-2" style={{ fontFamily: '"Kalam", "Comic Sans MS", cursive' }}>
              &ldquo;Engineering: keep CSS values mapped to root design-system variables.&rdquo;
            </p>
          </div>

          {/* COLUMN 2.3: Edge Cases Scenario Planning */}
          <div className="bg-[#FAF8F5] border border-[#1E1611]/12 p-8 rounded-[8px] shadow-sm relative flex flex-col justify-between min-h-[380px]">
            <PushPin className="top-2 left-1/3 bg-red-500 border-red-600" />
            
            <div className="flex items-center gap-1.5 text-[8.5px] uppercase tracking-widest font-semibold text-[#1E1611]/45 mb-4">
              <span>10 // Fallback Scenarios</span>
            </div>

            <div className="flex flex-col gap-4 text-[9.5px] my-2 font-mono">
              <div className="p-2 border border-red-200 bg-red-50 rounded">
                <strong className="block text-red-800 text-[8px] uppercase">Scenario 01: Battery Dies</strong>
                <p className="opacity-85 mt-0.5">Concierge waiting at station with physical room key card.</p>
              </div>

              <div className="p-2 border border-red-200 bg-red-50 rounded">
                <strong className="block text-red-800 text-[8px] uppercase">Scenario 02: BLE Key Fail</strong>
                <p className="opacity-85 mt-0.5">Local offline lock decrypts fallback protocol; staff handles entry.</p>
              </div>

              <div className="p-2 border border-red-200 bg-red-50 rounded">
                <strong className="block text-red-800 text-[8px] uppercase">Scenario 03: Late Kitchen Close</strong>
                <p className="opacity-85 mt-0.5">Deliver a dry-aged local cheese plate with red wine directly in-room.</p>
              </div>
            </div>

            <p className="font-serif italic text-xs text-[#C2410C]" style={{ fontFamily: '"Kalam", "Comic Sans MS", cursive' }}>
              * &ldquo;Confirm room keycard can be printed under 30 seconds at the gate.&rdquo;
            </p>
          </div>

        </div>

        {/* ==================== ROW 3: INTERACTION ROADMAP & FUTURE ==================== */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-stretch">
          
          {/* COLUMN 3.1: Future Opportunities Roadmap */}
          <div className="bg-[#FAF8F5] border border-[#1E1611]/12 p-8 rounded-[8px] shadow-sm relative flex flex-col justify-between min-h-[320px]">
            <PushPin className="top-2 left-12" />
            
            <div className="flex items-center gap-1.5 text-[8.5px] uppercase tracking-widest font-semibold text-[#1E1611]/45 mb-4">
              <span>16 // Future Roadmap Opportunities</span>
            </div>

            <div className="flex items-center justify-between gap-2 text-[10px] font-mono my-auto">
              <div className="p-3 bg-white border border-[#1E1611]/10 rounded flex-1 text-center shadow-xs">
                <span className="font-bold text-[#2F483A]">Now</span>
                <p className="text-[8px] opacity-75 mt-1">Late Arrival entry, digital keys, geofenced triggers.</p>
              </div>
              <span className="text-[#1E1611]/30">→</span>
              <div className="p-3 bg-white border border-[#1E1611]/10 rounded flex-1 text-center shadow-xs">
                <span className="font-bold text-[#2F483A]">Stay</span>
                <p className="text-[8px] opacity-75 mt-1">Fireplace active control, ambient lighting levels, butler messaging.</p>
              </div>
              <span className="text-[#1E1611]/30">→</span>
              <div className="p-3 bg-white border border-[#1E1611]/10 rounded flex-1 text-center shadow-xs">
                <span className="font-bold text-[#2F483A]">Future</span>
                <p className="text-[8px] opacity-75 mt-1">Pre-checkout invoice details, spa booking slots, transport scheduling.</p>
              </div>
            </div>

            <p className="font-serif italic text-xs text-[#1E1611]/70 border-t border-[#1E1611]/10 pt-4 mt-2" style={{ fontFamily: '"Kalam", "Comic Sans MS", cursive' }}>
              &ldquo;Start simple. Solve the exhaustion phase before scaling stay features.&rdquo;
            </p>
          </div>

          {/* COLUMN 3.2: Motion Storyboard & Timing */}
          <div className="bg-[#FAF8F5] border border-[#1E1611]/12 p-8 rounded-[8px] shadow-sm relative flex flex-col justify-between min-h-[320px]">
            <PushPin className="top-2 right-12 bg-blue-500 border-blue-600" />
            <MaskingTape className="-top-2 left-20 rotate-[-10deg] w-14 h-4" />
            
            <div className="flex items-center gap-1.5 text-[8.5px] uppercase tracking-widest font-semibold text-[#1E1611]/45 mb-4">
              <span>14 // Motion Storyboard spec</span>
            </div>

            <div className="grid grid-cols-4 gap-2 text-[9px] text-center font-mono my-auto">
              <div className="p-2 border border-[#1E1611]/10 rounded bg-[#FAF8F5] flex flex-col justify-between min-h-[100px]">
                <strong className="text-black">1. Tap</strong>
                <p className="text-[8px] opacity-70">Wax seal on envelope</p>
                <span className="text-[7.5px] text-[#2F483A] font-bold">200ms</span>
              </div>
              <div className="p-2 border border-[#1E1611]/10 rounded bg-[#FAF8F5] flex flex-col justify-between min-h-[100px]">
                <strong className="text-black">2. Break</strong>
                <p className="text-[8px] opacity-70">Seal breaks into letter</p>
                <span className="text-[7.5px] text-[#2F483A] font-bold">350ms</span>
              </div>
              <div className="p-2 border border-[#1E1611]/10 rounded bg-[#FAF8F5] flex flex-col justify-between min-h-[100px]">
                <strong className="text-black">3. Glow</strong>
                <p className="text-[8px] opacity-70">Keycard glows green</p>
                <span className="text-[7.5px] text-[#2F483A] font-bold">400ms</span>
              </div>
              <div className="p-2 border border-[#1E1611]/10 rounded bg-[#FAF8F5] flex flex-col justify-between min-h-[100px]">
                <strong className="text-black">4. Enter</strong>
                <p className="text-[8px] opacity-70">Room lock turns green</p>
                <span className="text-[7.5px] text-[#2F483A] font-bold">Ease Out</span>
              </div>
            </div>

            <p className="font-serif italic text-xs text-[#C2410C]" style={{ fontFamily: '"Kalam", "Comic Sans MS", cursive' }}>
              * &ldquo;Test haptics: medium impact click on breaking the wax seal.&rdquo;
            </p>
          </div>

        </div>

      </div>

    </main>
  )
}
