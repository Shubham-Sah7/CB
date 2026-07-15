// Bespoke line-art icons for Pulse — hand-drawn in the same voice as the
// Host app's Monogram/FireplaceSVG (thin stroke, no fill, currentColor,
// a quiet secondary line for depth). Deliberately not Lucide: these are
// hospitality objects, not app-chrome glyphs.

type IconProps = { className?: string }

export const RoomKeyIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${className} stroke-current fill-none stroke-[1.5]`} aria-hidden="true">
    <circle cx="7" cy="12" r="3.6" />
    <circle cx="7" cy="12" r="1.1" opacity="0.5" />
    <line x1="10.5" y1="12" x2="20" y2="12" />
    <line x1="15.6" y1="12" x2="15.6" y2="15.2" />
    <line x1="18.6" y1="12" x2="18.6" y2="14.4" />
  </svg>
)

export const BellIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${className} stroke-current fill-none stroke-[1.5]`} aria-hidden="true">
    <path d="M4.2 16.2 Q4.2 7.2 12 7.2 Q19.8 7.2 19.8 16.2" />
    <path d="M7.5 12.4 Q7.7 9.3 12 9" opacity="0.45" />
    <line x1="2.3" y1="16.2" x2="21.7" y2="16.2" />
    <circle cx="12" cy="19.3" r="1.05" fill="currentColor" stroke="none" />
  </svg>
)

export const HouseIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${className} stroke-current fill-none stroke-[1.5]`} aria-hidden="true">
    <path d="M3.6 12.6 L12 4.8 L20.4 12.6" />
    <path d="M6.3 11 V19.4 H17.7 V11" />
    <line x1="12" y1="14.6" x2="12" y2="19.4" />
    <line x1="8.6" y1="13" x2="8.6" y2="16" opacity="0.45" />
  </svg>
)

export const FireplaceIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${className} stroke-current fill-none stroke-[1.5]`} aria-hidden="true">
    <path d="M5.6 20 H18.4 M7 20 V9 H17 V20" />
    <path d="M10.1 17 C9.4 12.9 11.1 10.8 12 9.2 C12.9 10.8 14.6 12.9 13.9 17 Z" />
    <path d="M11.2 16 C10.9 13.6 11.7 12.3 12 11.4" opacity="0.45" />
  </svg>
)

export const MountainIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${className} stroke-current fill-none stroke-[1.5]`} aria-hidden="true">
    <path d="M2.6 18.6 L8.8 7.6 L13 13.4 L16.6 8.6 L21.4 18.6 Z" />
    <path d="M8.8 7.6 L10.8 11 M16.6 8.6 L15.2 11" opacity="0.45" />
    <path d="M7 17 L9.6 12.6 M14.6 17 L16.6 13.4" opacity="0.3" />
  </svg>
)

export const WineIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${className} stroke-current fill-none stroke-[1.5]`} aria-hidden="true">
    <path d="M7.6 4 H16.4 L15.3 11.2 A3.3 3.3 0 0 1 8.7 11.2 Z" />
    <path d="M9 5.6 H15" opacity="0.45" />
    <line x1="12" y1="11.4" x2="12" y2="18.2" />
    <line x1="8.3" y1="19.2" x2="15.7" y2="19.2" />
  </svg>
)

export const LuggageIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${className} stroke-current fill-none stroke-[1.5]`} aria-hidden="true">
    <rect x="4.8" y="7.8" width="14.4" height="11.4" rx="1.6" />
    <path d="M9.2 7.8 V5.9 A1 1 0 0 1 10.2 4.9 H13.8 A1 1 0 0 1 14.8 5.9 V7.8" />
    <line x1="4.8" y1="13" x2="19.2" y2="13" />
    <line x1="12" y1="7.8" x2="12" y2="19.2" opacity="0.4" />
  </svg>
)

export const HousekeepingCartIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${className} stroke-current fill-none stroke-[1.5]`} aria-hidden="true">
    <rect x="4.8" y="5.6" width="12.6" height="3.8" />
    <rect x="4.8" y="9.6" width="12.6" height="3.8" opacity="0.7" />
    <line x1="7.1" y1="13.4" x2="7.1" y2="17" />
    <line x1="15.1" y1="13.4" x2="15.1" y2="17" />
    <circle cx="7.5" cy="19" r="1.25" />
    <circle cx="14.7" cy="19" r="1.25" />
  </svg>
)

export const GuestSilhouetteIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${className} stroke-current fill-none stroke-[1.5]`} aria-hidden="true">
    <circle cx="12" cy="7.8" r="3.6" />
    <path d="M4.8 20 C4.8 14.9 8 12.8 12 12.8 C16 12.8 19.2 14.9 19.2 20" />
  </svg>
)

export const DiningTrayIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${className} stroke-current fill-none stroke-[1.5]`} aria-hidden="true">
    <ellipse cx="12" cy="18.2" rx="7.6" ry="1.5" />
    <path d="M5.8 17 Q5.8 9.6 12 9.6 Q18.2 9.6 18.2 17" />
    <path d="M10 6.4 Q10.6 5.4 10 4.4 M13 6.4 Q13.6 5.4 13 4.4" opacity="0.4" />
  </svg>
)

// Two threads knotting together — dependency / conflict mapping
export const ThreadIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${className} stroke-current fill-none stroke-[1.5]`} aria-hidden="true">
    <path d="M3.6 5.8 Q3.6 12 12 12 Q20.4 12 20.4 18.2" />
    <path d="M3.6 18.2 Q3.6 12 12 12 Q20.4 12 20.4 5.8" opacity="0.55" />
    <circle cx="3.6" cy="5.8" r="1.15" fill="currentColor" stroke="none" />
    <circle cx="20.4" cy="18.2" r="1.15" fill="currentColor" stroke="none" />
  </svg>
)

// Two guest silhouettes side by side — staff / team
export const TeamIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${className} stroke-current fill-none stroke-[1.5]`} aria-hidden="true">
    <circle cx="8.2" cy="7.8" r="2.9" />
    <circle cx="16.4" cy="9" r="2.3" opacity="0.6" />
    <path d="M2.8 19.6 C2.8 15 5.3 12.8 8.2 12.8 C11.1 12.8 13.6 15 13.6 19.6" />
    <path d="M14.6 19.6 C14.6 15.8 16.4 14 18.8 14 C20.7 14 22.2 15.1 22.6 17.6" opacity="0.55" />
  </svg>
)

// A wax approval stamp — sign-off / handled
export const StampIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${className} stroke-current fill-none stroke-[1.5]`} aria-hidden="true">
    <circle cx="12" cy="11" r="7.4" strokeDasharray="1.8 2.4" />
    <path d="M8.1 11.2 L10.6 13.8 L15.9 8.2" />
  </svg>
)
