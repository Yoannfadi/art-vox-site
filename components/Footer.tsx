import Link from "next/link";
import Wordmark from "./Wordmark";
import { SITE } from "./site";
import {
  InstagramIcon,
  FacebookIcon,
  LinkedInIcon,
  TikTokIcon,
} from "./SocialIcons";

const socials = [
  { href: SITE.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: SITE.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: SITE.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: SITE.tiktok, label: "TikTok", Icon: TikTokIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-ink-2/60">
      <div className="container-x py-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Wordmark size="lg" />
            <p className="mt-5 text-sm leading-relaxed text-muted">
              {SITE.address}
            </p>
            <div className="mt-5 flex flex-col gap-1 text-sm">
              <a
                href={SITE.phoneHref}
                className="text-muted transition-colors hover:text-cream"
              >
                {SITE.phoneDisplay}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="text-muted transition-colors hover:text-cream"
              >
                {SITE.email}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <Link
                href="/mentions-legales"
                className="text-xs font-medium uppercase tracking-eyebrow text-muted transition-colors hover:text-cream"
              >
                Mentions légales
              </Link>
              <Link
                href="/mentions-legales"
                className="text-xs font-medium uppercase tracking-eyebrow text-muted transition-colors hover:text-cream"
              >
                Partenaires
              </Link>
            </div>

            <div className="flex gap-4">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-muted transition-all hover:-translate-y-0.5 hover:border-gold hover:text-gold"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-hairline pt-8">
          <p className="text-xs text-muted">© 2026 ART VOX</p>
        </div>
      </div>
    </footer>
  );
}
