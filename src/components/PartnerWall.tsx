import Image from "next/image";
import { PARTNERS, PARTNER_ROLES, SIGNAGE_PARTNER, type Partner } from "@/lib/site";

/** Next/Image refuses SVG unless SVG optimization is enabled globally, so
 *  vector logos render as plain <img>. Place4Needs has no published logo
 *  anywhere, so it stays a typographic lockup. */
function Logo({ p }: { p: Partner }) {
  if (!p.logo) {
    return (
      <span
        className="text-[19px] font-bold tracking-[-0.02em]"
        style={{ fontFamily: "var(--font-head)", color: "#3d4450" }}
      >
        Place<span style={{ color: "#f4590d" }}>4</span>Needs
      </span>
    );
  }
  if (p.logo.endsWith(".svg")) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={p.logo} alt={p.name} className="max-h-[44px] w-auto max-w-[170px] object-contain" />;
  }
  const square = p.logo.includes("rdsco");
  return (
    <Image
      src={p.logo}
      alt={p.name}
      width={square ? 52 : 200}
      height={square ? 52 : 64}
      className={square ? "h-[48px] w-[48px] rounded-[3px] object-contain" : "max-h-[44px] w-auto max-w-[170px] object-contain"}
    />
  );
}

export default function PartnerWall({
  heading = "In the room with us",
  blurb = "Our partners show up as mentors, speakers, judges, and sponsors — the organizations that actually build in the Triangle.",
}: {
  heading?: string;
  blurb?: string;
}) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <h2 className="h2">{heading}</h2>
        <p className="log">{PARTNER_ROLES.join(" · ").toLowerCase()}</p>
      </div>
      <p className="prose mt-3 text-[15.5px]">{blurb}</p>

      <div className="bar mt-6 flex flex-wrap items-center gap-x-12 gap-y-8 pt-8">
        {PARTNERS.map((p) =>
          p.href ? (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              title={p.name}
              className="opacity-90 transition-opacity hover:opacity-100"
            >
              <Logo p={p} />
            </a>
          ) : (
            <span key={p.name} title={p.name}>
              <Logo p={p} />
            </span>
          ),
        )}
      </div>
      <p className="log mt-6">
        signage — {SIGNAGE_PARTNER.name.toLowerCase()}, {SIGNAGE_PARTNER.location.toLowerCase()}
      </p>
    </div>
  );
}
