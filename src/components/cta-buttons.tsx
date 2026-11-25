import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { phoneHref, site, whatsappHref } from "@/lib/site";

type Size = "sm" | "md" | "lg";

const sizes: Record<Size, string> = {
  sm: "h-11 gap-1.5 px-3 text-sm",
  md: "h-12 gap-2 px-4 text-sm",
  lg: "h-14 gap-2 px-5 text-base",
};

const base =
  "inline-flex shrink-0 items-center justify-center rounded-xl font-bold touch-manipulation transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

export function PhoneLink({
  size = "lg",
  showNumber = false,
  label,
  className = "",
}: {
  size?: Size;
  showNumber?: boolean;
  label?: string;
  className?: string;
}) {
  const text = label ?? (showNumber ? site.phoneDisplay : "Telefon Ara");

  return (
    <a
      href={phoneHref()}
      className={`${base} bg-coral text-white hover:bg-coral-dark ${sizes[size]} ${className}`}
      aria-label={`Telefon ara: ${site.phoneDisplay}`}
    >
      <PhoneIcon />
      <span>{text}</span>
    </a>
  );
}

export function WhatsAppLink({
  pageName,
  size = "lg",
  label = "WhatsApp",
  iconOnly = false,
  className = "",
}: {
  pageName: string;
  size?: Size;
  label?: string;
  iconOnly?: boolean;
  className?: string;
}) {
  return (
    <a
      href={whatsappHref(pageName)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} bg-whatsapp text-ink hover:bg-whatsapp-dark ${iconOnly ? "h-11 w-11" : sizes[size]} ${className}`}
      aria-label={`${pageName} için WhatsApp ile yazın`}
    >
      <WhatsAppIcon />
      <span className={iconOnly ? "sr-only" : undefined}>{label}</span>
    </a>
  );
}
