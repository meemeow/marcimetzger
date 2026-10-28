import { socialLinks } from "@/content/social";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <ul className={cn("flex items-center gap-2.5", className)}>
      {socialLinks.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${link.label} (opens in a new tab)`}
            className="flex size-11 items-center justify-center rounded-full border border-current/25 transition-colors hover:border-current hover:bg-current/10 xs:size-12.5"
          >
            <span className="social-icon size-6 xs:size-7" style={{ maskImage: `url(${link.icon.src})` }} aria-hidden />
          </a>
        </li>
      ))}
    </ul>
  );
}
