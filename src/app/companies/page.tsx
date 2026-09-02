import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { CourtBoard, ThermalView } from "@/components/CompanyVisuals";
import { ResinScan } from "@/components/ResinScan";
import {
  ACCELERATOR_FORM,
  ALSO_BUILDING,
  FEATURED,
  MORRISVILLE_SITES,
  type Company,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Companies",
  description:
    "The ten student-led companies in the Capture Success network — PyroSight, VisioCourt, Beacon, Resyn, and the teams building alongside them.",
};

function Profile({ c, flip }: { c: Company; flip: boolean }) {
  return (
    <article className="shell bar py-14">
      <div className="grid gap-x-14 gap-y-10 lg:grid-cols-2 lg:items-start">
        <div className={flip ? "lg:order-2" : "lg:order-1"}>
          <div className="flex items-center gap-3.5">
            {c.logo && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={c.logo} alt={`${c.name} logo`} className="h-11 w-11 rounded-[3px]" />
            )}
            <div>
              <h2 className="h2 text-[30px]">{c.name}</h2>
              <p className="log">{c.sector.toLowerCase()}</p>
            </div>
          </div>

          {c.about?.map((para) => (
            <p key={para.slice(0, 24)} className="prose mt-4 text-[15.5px]">
              {para}
            </p>
          ))}

          {c.highlights && (
            <div className="rows bar mt-5">
              {c.highlights.map((h) => (
                <div key={h.label} className="flex items-baseline justify-between gap-6 py-2.5">
                  <span className="log">{h.label.toLowerCase()}</span>
                  <span className="text-[15px] font-semibold">{h.value}</span>
                </div>
              ))}
            </div>
          )}

          {c.name === "VisioCourt" && (
            <div className="mt-5">
              <p className="log log-blue">live — town of morrisville</p>
              <p className="prose mt-1.5 text-[15px]">
                {MORRISVILLE_SITES.join(" · ")} — live tennis and pickleball
                status across Morrisville parks. App coming soon.
              </p>
            </div>
          )}

          {c.capabilities && (
            <div className="mt-5">
              <p className="log">what it does</p>
              <ul className="rows mt-2">
                {c.capabilities.map((cap) => (
                  <li key={cap} className="prose py-2 text-[14.5px]">
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-2">
            {c.href && (
              <a href={c.href} target="_blank" rel="noopener noreferrer" className="a text-[15.5px]">
                Visit {c.name.replace(/\.$/, "").toLowerCase()}
              </a>
            )}
            {c.founders && (
              <span className="log">founders — {c.founders.join(", ").toLowerCase()}</span>
            )}
          </div>
        </div>

        <div className={flip ? "lg:order-1" : "lg:order-2"}>
          {c.name === "PyroSight" && <ThermalView />}
          {c.name === "VisioCourt" && <CourtBoard />}
          {c.name === "Resyn." && <ResinScan />}
          {c.image && (
            <figure
              className={`print ${flip ? "tilt-l" : "tilt-r"} ${c.name === "VisioCourt" ? "mt-6" : ""} mx-auto`}
              style={c.image.narrow ? { maxWidth: 340 } : undefined}
            >
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: c.image.aspect }}>
                <Image
                  src={c.image.src}
                  alt={c.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="log mt-2.5">{c.image.caption.toLowerCase()}</figcaption>
            </figure>
          )}
        </div>
      </div>
    </article>
  );
}

export default function CompaniesPage() {
  return (
    <>
      <section className="shell pt-14 pb-10">
        <Reveal>
          <p className="log">the portfolio — 10 companies — 2026</p>
          <h1 className="h-hero mt-5 max-w-[16ch]">
            Built here, by <span className="mark">students.</span>
          </h1>
          <p className="prose mt-6 text-[17px]">
            What they are, what they have shipped, and what they have won. Four
            profiled in full below.
          </p>
        </Reveal>
      </section>

      <section className="shell pb-6">
        <div className="rows bar">
          {[...FEATURED, ...ALSO_BUILDING].map((c, i) => (
            <div key={c.name} className="flex flex-wrap items-baseline gap-x-4 gap-y-0.5 py-2.5">
              <span className="log w-7 shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <span className="h3 text-[17px]">{c.name}</span>
              <span className="log flex-1 text-right">{c.sector.toLowerCase()}</span>
            </div>
          ))}
        </div>
      </section>

      {FEATURED.map((c, i) => (
        <Profile key={c.name} c={c} flip={i % 2 === 1} />
      ))}

      <section className="shell bar py-14">
        <Reveal>
          <h2 className="h2">Six more, heads-down</h2>
          <p className="prose mt-3 text-[15.5px]">
            Earlier or still building quietly. Profiles go up as they ship.
          </p>
        </Reveal>
        <div className="mt-7 flex flex-wrap gap-x-10 gap-y-5">
          {ALSO_BUILDING.map((c) => (
            <div key={c.name} className="flex items-center gap-3">
              {c.logo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={c.logo} alt={`${c.name} logo`} className="h-9 w-9 rounded-[3px]" />
              )}
              <div>
                <p className="h3 text-[16px]">{c.name}</p>
                <p className="log">{c.sector.toLowerCase()}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="shell pb-8">
        <div className="px-8 py-12 text-white sm:px-12" style={{ background: "var(--color-blue)" }}>
          <p className="log" style={{ color: "rgba(255,255,255,.7)" }}>
            the fall 2026 accelerator is how most of these teams started
          </p>
          <h2 className="h2 mt-3 max-w-[20ch]">Want your company on this page?</h2>
          <div className="mt-7 flex flex-wrap items-center gap-6">
            <a href={ACCELERATOR_FORM} target="_blank" rel="noopener noreferrer" className="btn btn-paper">
              Apply to the cohort
            </a>
            <Link
              href="/apply?type=founder"
              className="a text-[15.5px]"
              style={{ color: "#fff", textDecorationColor: "rgba(255,255,255,.5)" }}
            >
              Or submit an existing startup
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
