import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Countdown from "@/components/Countdown";
import PartnerWall from "@/components/PartnerWall";
import Reveal from "@/components/Reveal";
import WeekRail from "@/components/WeekRail";
import {
  ACCELERATOR,
  ACCELERATOR_FORM,
  BENEFITS,
  FAQ,
  HOW_TO_JOIN,
  SITE,
  WEEKS,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Student Accelerator",
  description: `A free six-week accelerator for student founders in grades 9 and up. ${ACCELERATOR.rangeLabel}, Mondays ${ACCELERATOR.time} at ${ACCELERATOR.venue.name}, ${ACCELERATOR.venue.building}.`,
};

export default function AcceleratorPage() {
  return (
    <>
      <section className="shell pt-14 pb-10">
        <Reveal>
          <p className="log">
            the accelerator — fall 2026 — applications open
          </p>
          <h1 className="h-hero mt-5 max-w-[17ch]">
            Six weeks to turn your idea into a{" "}
            <span className="mark">real startup.</span>
          </h1>
          <p className="prose mt-6 text-[18px]">
            Free and in person, for student founders in grades 9 and up. Come
            solo and we will match you with a team, or bring your own. From
            Chapel Hill to RTP, we plug student teams straight into the
            Triangle startup scene.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a href={ACCELERATOR_FORM} target="_blank" rel="noopener noreferrer" className="btn">
              Apply for the cohort
            </a>
            <Link href="#weeks" className="a text-[16px]">
              See the six weeks
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="shell pb-14">
        <div className="bar grid gap-x-12 gap-y-8 pt-7 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="log">first session in</p>
            <div className="mt-3">
              <Countdown iso={ACCELERATOR.startsAt} />
            </div>
            <p className="prose mt-6 text-[15px]">
              Every Monday has one job: lock the problem, prove the demand,
              build the thing, make the business work, tell the story. Week six
              is a stage with judges on it.
            </p>
          </div>
          <div className="rows">
            {[
              ["dates", ACCELERATOR.rangeLabel],
              ["sessions", `six Mondays · ${ACCELERATOR.time}`],
              ["eligibility", ACCELERATOR.grades],
              ["venue", `${ACCELERATOR.venue.name}, ${ACCELERATOR.venue.building}`],
              ["address", `${ACCELERATOR.venue.street}, ${ACCELERATOR.venue.city}`],
              ["cost", "free — dinner every session"],
              ["closing night", ACCELERATOR.pitch],
            ].map(([k, v]) => (
              <div key={k} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-0.5 py-2.5">
                <span className="log">{k}</span>
                <span className="text-[15px] font-medium">{v}</span>
              </div>
            ))}
            <div className="py-2.5">
              <a href={ACCELERATOR.venue.maps} target="_blank" rel="noopener noreferrer" className="a text-[14.5px]">
                Open Frontier RTP in Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="weeks" className="scroll-mt-20 text-white" style={{ background: "var(--color-navy)" }}>
        <div className="shell py-16">
          <Reveal>
            <p className="log" style={{ color: "var(--color-sky)" }}>
              the programme — six mondays
            </p>
            <h2 className="h2 mt-3">Every Monday has a job.</h2>
          </Reveal>
          <div className="mt-8">
            <WeekRail />
          </div>
        </div>
      </section>

      <section className="shell py-16">
        <Reveal>
          <h2 className="h2 max-w-[20ch]">
            What you get is tied to <span className="mark">the work.</span>
          </h2>
        </Reveal>
        <div className="mt-9 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => (
            <div key={b.n} className="bar pt-4">
              <p className="log">{b.n}</p>
              <h3 className="h3 mt-1.5 text-[17px]">{b.title}</h3>
              <p className="prose mt-1.5 text-[14px]">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="shell pb-16">
        <div className="grid items-start gap-x-14 gap-y-10 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <h2 className="h2">Bring your team. Sign up.</h2>
            <div className="rows bar mt-6">
              {HOW_TO_JOIN.map((h) => (
                <div key={h.n} className="grid gap-x-6 py-4 md:grid-cols-[44px_1fr]">
                  <p className="log pt-1">{h.n}</p>
                  <div>
                    <h3 className="h3 text-[17px]">{h.title}</h3>
                    <p className="prose mt-1 text-[14.5px]">{h.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href={ACCELERATOR_FORM} target="_blank" rel="noopener noreferrer" className="btn mt-7">
              Open the application
            </a>
            <p className="log mt-3">about two minutes — the idea, not the essay</p>
          </Reveal>

          <Reveal delay={80}>
            <figure className="print tilt-r">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/media/finnovate/award-presentation.webp"
                  alt="Award presentation at a Capture Success event"
                  fill
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="log mt-2.5">
                how week six ends — judges, awards, the triangle startup crowd
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="shell pb-16">
        <Reveal>
          <PartnerWall
            heading="The room we put you in"
            blurb="Six weeks inside the Triangle startup scene, with the organizations that actually build here."
          />
        </Reveal>
      </section>

      <section id="faq" className="shell scroll-mt-20 pb-16">
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="h2">Before you apply</h2>
            <p className="log">
              still unsure — <a href={`mailto:${SITE.email}`} className="a">{SITE.email}</a>
            </p>
          </div>
        </Reveal>
        <div className="rows bar mt-6">
          {FAQ.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="h3 flex cursor-pointer list-none items-baseline justify-between gap-6 text-[17.5px]">
                {f.q}
                <span className="log shrink-0 group-open:hidden">more</span>
                <span className="log hidden shrink-0 group-open:inline">less</span>
              </summary>
              <p className="prose mt-2 text-[15px]">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="shell pb-8">
        <div className="px-8 py-12 text-white sm:px-12" style={{ background: "var(--color-blue)" }}>
          <p className="log" style={{ color: "rgba(255,255,255,.7)" }}>
            {ACCELERATOR.rangeLabel.toLowerCase()} · final pitch night {WEEKS[5].date.toLowerCase()}
          </p>
          <h2 className="h2 mt-3 max-w-[18ch]">Build with us this fall.</h2>
          <a href={ACCELERATOR_FORM} target="_blank" rel="noopener noreferrer" className="btn btn-paper mt-7">
            Open the application
          </a>
        </div>
      </section>
    </>
  );
}
