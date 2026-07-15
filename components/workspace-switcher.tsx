import Link from "next/link"

export const WorkspaceSwitcher = ({ active }: { active: "host" | "pulse" }) => (
  <>
    {/* Workspace Switcher Panel */}
    <div className="max-w-[1650px] mx-auto w-full flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#1E1611]/10 pb-4 gap-4 z-50">
      <div className="flex items-center gap-6">
        <div className="flex flex-col">
          <span className="font-serif text-sm font-bold tracking-[0.25em] text-[#1E1611]">A U R E L I A</span>
          <span className="font-sans text-[7.5px] uppercase tracking-widest text-[#1E1611]/50">Internal Workspaces</span>
        </div>

        <div className="flex bg-[#EBE5DA] p-1 rounded-full border border-[#1E1611]/10 shadow-inner">
          <Link
            href="/"
            className={`px-4 py-1.5 rounded-full font-sans text-[9.5px] font-bold uppercase tracking-wider transition-all duration-200 ${
              active === "host"
                ? "bg-[#2F483A] text-[#FAF8F5] shadow-sm"
                : "text-[#1E1611]/60 hover:text-[#1E1611]"
            }`}
          >
            Host App (Guest Companion)
          </Link>
          <Link
            href="/pulse"
            className={`px-4 py-1.5 rounded-full font-sans text-[9.5px] font-bold uppercase tracking-wider transition-all duration-200 ${
              active === "pulse"
                ? "bg-[#2F483A] text-[#FAF8F5] shadow-sm"
                : "text-[#1E1611]/60 hover:text-[#1E1611]"
            }`}
          >
            Pulse (Internal Operations)
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-2 font-mono text-[9px] text-[#2F483A] uppercase tracking-widest bg-[#E2FFE2] border border-[#C2F5C2] px-2 py-0.5 rounded">
        <span className="w-1.5 h-1.5 bg-[#2F483A] rounded-full animate-ping" />
        <span>Sync Status: Live Telemetry</span>
      </div>
    </div>

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
  </>
)
