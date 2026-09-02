import Link from "next/link";
import { ACCELERATOR, ACCELERATOR_FORM, NAV, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bar mt-20">
      <div className="shell flex flex-wrap items-baseline justify-between gap-x-12 gap-y-8 py-10">
        <div className="max-w-[40ch]">
          <p className="h3 text-[18px]">Capture Success</p>
          <p className="prose mt-2 text-[14.5px]">
            A student startup network in the Triangle. Founders, builders, and
            the people who help them ship.
          </p>
          <p className="mt-3 text-[14.5px]">
            <a href={`mailto:${SITE.email}`} className="a">
              {SITE.email}
            </a>
          </p>
        </div>
        <div className="flex gap-14 text-[14.5px]">
          <ul className="space-y-1.5">
            {NAV.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="muted hover:text-[var(--color-blue)]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-1.5">
            <li><a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="muted hover:text-[var(--color-blue)]">Instagram</a></li>
            <li><a href={SITE.discord} target="_blank" rel="noopener noreferrer" className="muted hover:text-[var(--color-blue)]">Discord</a></li>
            <li><a href={ACCELERATOR_FORM} target="_blank" rel="noopener noreferrer" className="muted hover:text-[var(--color-blue)]">Apply</a></li>
          </ul>
        </div>
      </div>
      <div className="hairline">
        <div className="shell flex flex-wrap items-baseline justify-between gap-3 py-4">
          <p className="log">© {new Date().getFullYear()} capture success inc.</p>
          <p className="log">
            fall 2026 · {ACCELERATOR.rangeLabel.toLowerCase()} ·{" "}
            {ACCELERATOR.venue.name.toLowerCase()} · free
          </p>
        </div>
      </div>
    </footer>
  );
}
