// Inline SVG social icons (no external dependencies).

type IconProps = { className?: string };

export function InstagramIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.86.24-1.5 1.6-1.5H17V4.2C16.6 4.13 15.6 4 14.5 4 12.1 4 10.5 5.43 10.5 8.1V10.5H8v3h2.5V21h3z" />
    </svg>
  );
}

export function LinkedInIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.5 8.5v9H3.7v-9h2.8zM5.1 4.3a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2zM20.3 17.5h-2.8v-4.7c0-1.2-.45-2-1.5-2-.8 0-1.27.54-1.48 1.06-.08.18-.1.44-.1.7v4.94H11.6s.04-8 0-8.86h2.82v1.26c.37-.58 1.04-1.4 2.54-1.4 1.85 0 3.34 1.2 3.34 3.8v5.2z" />
    </svg>
  );
}

export function TikTokIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9v2.7c-1.3.05-2.5-.3-3.6-1V15a5.4 5.4 0 1 1-5.4-5.4c.25 0 .5.02.75.05v2.85a2.6 2.6 0 1 0 1.85 2.5V3h2.95z" />
    </svg>
  );
}
