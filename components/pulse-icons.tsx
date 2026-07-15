// Bespoke hand-drawn line-art icons for Pulse.
// Features a pencil sketch/woodcut print aesthetic with offset shadow lines
// and rich interior details (currentColor, 1.5px stroke, 0.4 opacity shadow line).

type IconProps = { className?: string }

// Vintage ornate room key with a flower bow and tag attachment
export const RoomKeyIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${className} stroke-current fill-none stroke-[1.5]`} aria-hidden="true">
    {/* Ornate key bow */}
    <circle cx="6" cy="12" r="3.5" />
    <path d="M6 9.5 V14.5 M3.5 12 H8.5" opacity="0.4" />
    
    {/* Key shaft */}
    <line x1="9.5" y1="12" x2="20" y2="12" />
    <line x1="9.5" y1="13" x2="20" y2="13" opacity="0.3" strokeDasharray="1 1" />
    
    {/* Key bit */}
    <path d="M15 12 V15.5 H17.5 V12" />
    <path d="M18.5 12 V14.5 H20 V12" />
  </svg>
)

// Aman-style classic service desk bell with detailed base and strike waves
export const BellIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${className} stroke-current fill-none stroke-[1.5]`} aria-hidden="true">
    {/* Resonance waves */}
    <path d="M8 3.5 Q12 1.5 16 3.5" opacity="0.35" />
    
    {/* Bell dome */}
    <path d="M4.5 17 Q4.5 7.5 12 7.5 Q19.5 7.5 19.5 17" />
    <path d="M7.8 13.5 Q12 10.5 16.2 13.5" opacity="0.4" />
    
    {/* Bell base and plunger */}
    <line x1="2.5" y1="17" x2="21.5" y2="17" />
    <rect x="10.5" y="5.5" width="3" height="2" rx="0.5" />
    <circle cx="12" cy="4.5" r="1" fill="currentColor" stroke="none" />
    <path d="M12 17 V20 M9 20 H15" opacity="0.8" />
  </svg>
)

// Alpine chalet house outline with a double-pane window and chimney smoke
export const HouseIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${className} stroke-current fill-none stroke-[1.5]`} aria-hidden="true">
    {/* Chimney and smoke */}
    <path d="M16.5 8 V5 H18.5 V10.5" />
    <path d="M17.5 3 Q18 2.2 18.5 1.5" opacity="0.4" strokeDasharray="1.5 1.5" />
    
    {/* Roof and structure */}
    <path d="M3 13 L12 4.5 L21 13" />
    <path d="M5.5 12 V20 H18.5 V12" />
    
    {/* Double-pane window */}
    <rect x="9.5" y="14" width="5" height="5" />
    <line x1="12" y1="14" x2="12" y2="19" opacity="0.5" />
    <line x1="9.5" y1="16.5" x2="14.5" y2="16.5" opacity="0.5" />
    
    {/* Offset sketch line */}
    <path d="M6.5 13.5 V19 H17.5" opacity="0.25" />
  </svg>
)

// Cozy Alpine masonry fireplace hearth with logs
export const FireplaceIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${className} stroke-current fill-none stroke-[1.5]`} aria-hidden="true">
    <path d="M4.5 20.5 H19.5 M6 20.5 V8.5 H18 V20.5" />
    <path d="M5 8.5 H19" strokeWidth="2.5" />
    
    {/* Fire logs and embers */}
    <path d="M9.5 17.5 L14.5 14.5 M14.5 17.5 L9.5 14.5" />
    <circle cx="12" cy="13" r="1.5" className="animate-pulse" />
    
    {/* Brick texture lines */}
    <line x1="6" y1="12" x2="8.5" y2="12" opacity="0.3" />
    <line x1="15.5" y1="15" x2="18" y2="15" opacity="0.3" />
  </svg>
)

// Alpine mountain ridge peak with elevation topography lines
export const MountainIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${className} stroke-current fill-none stroke-[1.5]`} aria-hidden="true">
    <path d="M2.5 19 H21.5 M3 19 L10.5 6 L14.5 13.5 L18 8 L21.5 19 Z" />
    
    {/* Contour shadow lines */}
    <path d="M10.5 6 L12 9" opacity="0.5" />
    <path d="M18 8 L17 11" opacity="0.5" />
    <path d="M7.5 19 L10 14.5 M14 19 L15.5 16.5" opacity="0.3" strokeDasharray="1.5 1.5" />
  </svg>
)

// Premium crystal chalice goblet
export const WineIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${className} stroke-current fill-none stroke-[1.5]`} aria-hidden="true">
    <path d="M7 4.5 H17 L15.8 12 A3.8 3.8 0 0 1 8.2 12 Z" />
    <line x1="8" y1="6.5" x2="16" y2="6.5" opacity="0.45" />
    
    {/* Stem and base */}
    <line x1="12" y1="13.8" x2="12" y2="19.5" />
    <path d="M8.5 20 H15.5" />
  </svg>
)

// Vintage leather suitcase with buckles and corner protectors
export const LuggageIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${className} stroke-current fill-none stroke-[1.5]`} aria-hidden="true">
    <rect x="4.5" y="8.5" width="15" height="11" rx="1.5" />
    <path d="M9 8.5 V5.5 A1 1 0 0 1 10 4.5 H14 A1 1 0 0 1 15 5.5 V8.5" />
    
    {/* Buckle straps */}
    <line x1="8" y1="8.5" x2="8" y2="19.5" />
    <line x1="16" y1="8.5" x2="16" y2="19.5" />
    
    {/* Buckle details */}
    <rect x="7" y="11.5" width="2" height="3" rx="0.5" fill="currentColor" stroke="none" />
    <rect x="15" y="11.5" width="2" height="3" rx="0.5" fill="currentColor" stroke="none" />
  </svg>
)

// Mobile cleaning service trolley cart
export const HousekeepingCartIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${className} stroke-current fill-none stroke-[1.5]`} aria-hidden="true">
    <rect x="4.5" y="6" width="13" height="4" />
    <rect x="4.5" y="10.5" width="13" height="4" opacity="0.6" />
    <line x1="6.5" y1="14.5" x2="6.5" y2="17.5" />
    <line x1="15.5" y1="14.5" x2="15.5" y2="17.5" />
    
    {/* Castor wheels */}
    <circle cx="7.5" cy="19.5" r="1.5" />
    <circle cx="14.5" cy="19.5" r="1.5" />
  </svg>
)

// Framed oval portrait silhouette of guest
export const GuestSilhouetteIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${className} stroke-current fill-none stroke-[1.5]`} aria-hidden="true">
    {/* Portrait frame */}
    <ellipse cx="12" cy="12" rx="7.5" ry="9.5" />
    
    {/* Silhouette */}
    <circle cx="12" cy="8.5" r="2.8" />
    <path d="M6.5 19 C6.5 15.5 9 13.8 12 13.8 C15 13.8 17.5 15.5 17.5 19" />
  </svg>
)

// Hot banquet dining serving tray with dome cloche
export const DiningTrayIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${className} stroke-current fill-none stroke-[1.5]`} aria-hidden="true">
    <ellipse cx="12" cy="18" rx="8" ry="1.8" />
    
    {/* Cloche dome */}
    <path d="M5.5 16.8 A6.5 6.5 0 0 1 18.5 16.8" />
    
    {/* Dome handle */}
    <circle cx="12" cy="9.5" r="1.2" fill="currentColor" stroke="none" />
    
    {/* Steam wisps */}
    <path d="M9.5 7 Q10 5.8 9.5 4.6 M14.5 7 Q15 5.8 14.5 4.6" opacity="0.35" />
  </svg>
)

// Intersecting knotting threads showing dependencies
export const ThreadIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${className} stroke-current fill-none stroke-[1.5]`} aria-hidden="true">
    <path d="M4 6 Q4 12 12 12 Q20 12 20 18" />
    <path d="M4 18 Q4 12 12 12 Q20 12 20 6" opacity="0.55" />
    
    {/* Thread knots */}
    <circle cx="4" cy="6" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="20" cy="18" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="12" cy="12" r="2.2" fill="none" className="stroke-[#2F483A] stroke-[1]" />
  </svg>
)

// Stacked team profiles with clipboard details
export const TeamIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${className} stroke-current fill-none stroke-[1.5]`} aria-hidden="true">
    {/* Profile 1 */}
    <circle cx="8" cy="7.5" r="2.5" />
    <path d="M3.5 18 C3.5 14 6 12 8 12 C10 12 12.5 14 12.5 18" />
    
    {/* Profile 2 (Offset/Back) */}
    <circle cx="16" cy="9" r="2" opacity="0.6" />
    <path d="M12.8 18 C12.8 14.8 14.5 13.2 16.5 13.2 C18.2 13.2 19.8 14.4 20.2 17" opacity="0.6" />
  </svg>
)

// Organic dripped hot wax seal stamp
export const StampIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${className} stroke-current fill-none stroke-[1.5]`} aria-hidden="true">
    {/* Irregular wax dripped outline */}
    <path d="M12 2.5 C17 2 21.5 6.5 21 12 C20.5 17.5 16.5 21.5 11.5 21 C6.5 20.5 2.5 16 3 11 C3.5 6 7 3 12 2.5 Z" opacity="0.3" strokeDasharray="1.5 1.5" />
    
    {/* Inner ring */}
    <circle cx="12" cy="12" r="6" strokeDasharray="2 2" />
    
    {/* Monogram inside seal */}
    <path d="M9.5 14.5 L11.2 9.5 L14.5 14.5" />
    <line x1="10.2" y1="12.8" x2="13.2" y2="12.8" />
  </svg>
)
