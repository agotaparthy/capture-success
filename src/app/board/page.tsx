import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ACCELERATOR_FORM, BOARD, COFOUNDERS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Board",
  description: "The people behind Capture Success.",
};

export default function BoardPage() {
  return (
    <>
      <section className="shell pt-14 pb-10">
        <Reveal>
          <p className="log">the board — 2026</p>
          <h1 className="h-hero mt-5 max-w-[15ch]">
            The people <span className="mark">behind it.</span>
          </h1>
        </Reveal>
      </section>

      <section className="shell pb-12">
        <h2 className="h2 text-[24px]">Co-founders</h2>
        <div className="rows bar mt-4">
          {COFOUNDERS.map((p, i) => (
            <div key={p.name} className="flex items-baseline gap-5 py-4">
              <span className="log w-7 shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <span className="h3 text-[21px]">{p.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="shell pb-14">
        <h2 className="h2 text-[24px]">Board members</h2>
        <div className="rows bar mt-4">
          {BOARD.map((p, i) => (
            <div key={p.name} className="flex items-baseline gap-5 py-4">
              <span className="log w-7 shrink-0">{String(COFOUNDERS.length + i + 1).padStart(2, "0")}</span>
              <span className="h3 text-[21px]">{p.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="shell pb-8">
        <div className="bar flex flex-wrap items-baseline justify-between gap-6 pt-7">
          <h2 className="h2 max-w-[20ch] text-[26px]">
            Building something? Tell us about it.
          </h2>
          <div className="flex flex-wrap items-center gap-5">
            <a href={ACCELERATOR_FORM} target="_blank" rel="noopener noreferrer" className="btn">
              Apply to the cohort
            </a>
            <Link href="/apply?type=founder" className="a text-[15.5px]">
              Apply as a founder
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
