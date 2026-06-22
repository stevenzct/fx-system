import type { NavIconName } from "@/components/layout/navigation";

type NavIconProps = {
  name: NavIconName;
  className?: string;
};

export function NavIcon({ name, className = "size-4" }: Readonly<NavIconProps>) {
  const iconProps = {
    "aria-hidden": true,
    className,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2,
    viewBox: "0 0 24 24",
  };

  switch (name) {
    case "dashboard":
      return (
        <svg {...iconProps}>
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
        </svg>
      );
    case "transaction":
      return (
        <svg {...iconProps}>
          <path d="M12 5v14" />
          <path d="M5 12h14" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
    case "ledger":
      return (
        <svg {...iconProps}>
          <path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H19v18H7.5A2.5 2.5 0 0 0 5 22V4.5Z" />
          <path d="M9 7h6" />
          <path d="M9 11h6" />
          <path d="M5 19.5A2.5 2.5 0 0 1 7.5 17H19" />
        </svg>
      );
    case "rates":
      return (
        <svg {...iconProps}>
          <path d="M4 19V5" />
          <path d="M4 19h16" />
          <path d="m7 15 3.5-3.5 3 3L19 8" />
          <path d="M16 8h3v3" />
        </svg>
      );
    case "branches":
      return (
        <svg {...iconProps}>
          <path d="M4 21V9l8-5 8 5v12" />
          <path d="M9 21v-7h6v7" />
          <path d="M8 10h.01" />
          <path d="M12 10h.01" />
          <path d="M16 10h.01" />
        </svg>
      );
    case "receipts":
      return (
        <svg {...iconProps}>
          <path d="M6 2h12v20l-3-2-3 2-3-2-3 2V2Z" />
          <path d="M9 7h6" />
          <path d="M9 11h6" />
          <path d="M9 15h4" />
        </svg>
      );
  }
}
