import type { Metadata } from "next";
import Link from "next/link";
import Gallery from "@/components/Gallery";
import Reveal from "@/components/Reveal";
import { ACCELERATOR_FORM, FINNOVATE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Finnovate",
  description:
    "Finnovate ran Startup Spotlight — 20+ teams pitching to six business professionals for $2,500+ in prizes.",
};

export default function FinnovatePage() {
  return (
    <>
      <section className="shell pt-14 pb-10">
        <Reveal>
          <p className="log">finnovate — live pitch competition</p>
          <h1 className="h-hero mt-5 max-w-[14ch]">
            Startup <span className="mark">Spotlight.</span>
          </h1>
          <p className="prose mt-6 text-[17px]">
            More than 20 teams presented their ventures to six business
            professionals. The top three shared more than $2,500 in prize
            money. Built with our DECA chapter.
          </p>
        </Reveal>
      </section>

      <section className="shell pb-12">
        <div className="bar grid grid-cols-2 gap-y-8 pt-8 sm:grid-cols-4">
          {FINNOVATE.stats.map((s) => (
            <div key={s.label}>
              <p className="big-num text-[2.7rem] leading-none">{s.value}</p>
              <p className="log mt-2">{s.label.toLowerCase()}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="shell pb-14">
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="h2">The night, pinned up</h2>
            <p className="log">click a photo — arrow keys move through</p>
          </div>
        </Reveal>
        <div className="mt-7">
          <Gallery />
        </div>
      </section>

      <section className="shell pb-14">
        <div className="bar grid gap-x-14 gap-y-8 pt-7 lg:grid-cols-2">
          <Reveal>
            <h2 className="h2">Eight months of writing</h2>
            <p className="prose mt-3 text-[15.5px]">
              Finnovate also published student-focused explanations of current
              fintech topics about once a week — turning the news into
              something a high schooler could actually use.
            </p>
          </Reveal>
          <div className="rows">
            {[
              ["months published", "8"],
              ["cadence", "about weekly"],
              ["audience", "students"],
              ["focus", "current fintech topics"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between gap-6 py-3">
                <span className="log">{k}</span>
                <span className="text-[15px] font-semibold">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="shell pb-8">
        <div className="bar flex flex-wrap items-baseline justify-between gap-6 pt-7">
          <h2 className="h2 max-w-[24ch] text-[26px]">
            The Fall 2026 cohort ends on a stage too.
          </h2>
          <div className="flex flex-wrap items-center gap-5">
            <a href={ACCELERATOR_FORM} target="_blank" rel="noopener noreferrer" className="btn">
              Apply to the cohort
            </a>
            <Link href="/accelerator" className="a text-[15.5px]">
              The accelerator
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
