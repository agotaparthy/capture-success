import type { Metadata } from "next";
import { Suspense } from "react";
import ApplyForm from "@/components/ApplyForm";
import Reveal from "@/components/Reveal";
import { ACCELERATOR, ACCELERATOR_FORM } from "@/lib/site";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Apply to Capture Success as a founder, a builder, or a partner — or apply to the Fall 2026 student accelerator.",
};

export default function ApplyPage() {
  return (
    <>
      <section className="shell pt-14 pb-10">
        <Reveal>
          <p className="log">applications — founder · builder · partner</p>
          <h1 className="h-hero mt-5 max-w-[16ch]">
            Tell us what you want to <span className="mark">build.</span>
          </h1>
          <p className="prose mt-6 text-[17px]">
            Pick the track that fits. Fill in the form and we open a structured
            email draft with every answer already in it.
          </p>
        </Reveal>
      </section>

      <section className="shell pb-12">
        <Reveal>
          <a
            href={ACCELERATOR_FORM}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-8 py-9 text-white sm:px-10"
            style={{ background: "var(--color-blue)" }}
          >
            <p className="log" style={{ color: "rgba(255,255,255,.7)" }}>
              applying to the fall 2026 accelerator? that has its own two-minute form
            </p>
            <p className="h2 mt-2 text-[26px]">Open the cohort application</p>
            <p className="log mt-2" style={{ color: "rgba(255,255,255,.7)" }}>
              {ACCELERATOR.rangeLabel.toLowerCase()} · mondays · {ACCELERATOR.venue.name.toLowerCase()} · free
            </p>
          </a>
        </Reveal>
      </section>

      <section className="shell pb-8">
        <Suspense fallback={<div className="h-[480px]" aria-hidden />}>
          <ApplyForm />
        </Suspense>
      </section>
    </>
  );
}
