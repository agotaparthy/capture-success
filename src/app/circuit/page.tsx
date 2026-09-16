import type { Metadata } from "next";
import CircuitPlanner from "@/components/CircuitPlanner";
import Reveal from "@/components/Reveal";
import { ARCS, ENTRIES, KNOWLEDGE_LABEL } from "@/lib/circuit";
import { ACCELERATOR_FORM, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Circuit",
  description:
    "The competition circuit for student founders in North Carolina, sequenced — what to enter, in what order, and what each round qualifies you for. Built by students who have won them.",
};

export default function CircuitPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="shell pt-12 pb-10">
        <Reveal>
          <p className="t-kicker">Circuit</p>
          <h1 className="t-hero mt-2 max-w-[17ch]">
            Nobody tells you what order to do things in.
          </h1>
          <p className="t-lead prose-w mt-5">
            There are a dozen competitions a student founder in North Carolina can
            enter. The lists are easy to find. What nobody publishes is the
            sequence — which round qualifies you for which, what each one actually
            takes, and which ones are a waste of your November.
          </p>
          <p className="t-lead prose-w mt-4">
            We have won some of these and lost others. Below is what we know, marked
            honestly, plus the two paths our teams actually walked with the dates
            left in.
          </p>
        </Reveal>
      </section>

      {/* ── Planner ────────────────────────────────────────────────── */}
      <section className="shell border-t py-14">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="t-kicker">Build your sequence</p>
              <h2 className="t-h2 mt-2">Five questions</h2>
            </div>
            <p className="soft max-w-[32ch] text-[14.5px]">
              No account, nothing stored, nothing sent anywhere.
            </p>
          </div>
        </Reveal>
        <div className="mt-8">
          <CircuitPlanner />
        </div>
      </section>

      {/* ── Real paths ─────────────────────────────────────────────── */}
      <section className="shell border-t py-16">
        <Reveal>
          <p className="t-kicker">Walked paths</p>
          <h2 className="t-h2 mt-2 max-w-[22ch]">
            Two sequences, with the dates left in
          </h2>
          <p className="t-lead prose-w mt-4">
            Not case studies. The actual order these teams did things in, including
            the step most people skip.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {ARCS.map((arc, i) => (
            <Reveal key={arc.team} delay={i * 80}>
              <article className="card h-full p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p className="t-h3 text-[20px]">{arc.team}</p>
                  <p className="soft text-[13px]">{arc.tag}</p>
                </div>
                <p className="muted mt-2 max-w-[48ch] text-[15px]">{arc.oneLine}</p>

                <ol className="rows mt-5">
                  {arc.steps.map((s) => (
                    <li key={s.what} className="flex gap-4 py-4 first:pt-0">
                      <span
                        className="w-[5.5rem] shrink-0 text-[13px] font-bold"
                        style={{ color: "var(--color-blue)" }}
                      >
                        {s.when}
                      </span>
                      <div className="min-w-0">
                        <p className="text-[15px] font-bold">{s.what}</p>
                        <p className="muted mt-1 text-[14px]">{s.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <p
                  className="mt-5 rounded-[10px] px-3 py-2 text-[13.5px] font-bold"
                  style={{ background: "var(--color-surface-2)", color: "var(--color-blue)" }}
                >
                  {arc.result}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── The whole board ────────────────────────────────────────── */}
      <section className="shell border-t py-16">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="t-kicker">Everything we list</p>
              <h2 className="t-h2 mt-2">{ENTRIES.length} entries, and how well we know them</h2>
            </div>
            <p className="soft max-w-[34ch] text-[14.5px]">
              We only list what we have touched. If we have not done it, it says so.
            </p>
          </div>
          <p className="t-lead prose-w mt-4">
            That is the whole editorial policy. A longer list would be easy and worse —
            advice about a competition nobody here has entered is just a search result
            with our name on it.
          </p>
        </Reveal>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse text-left">
            <thead>
              <tr className="border-b">
                <th className="soft pb-3 pr-4 text-[12.5px] font-bold">Entry</th>
                <th className="soft pb-3 pr-4 text-[12.5px] font-bold">Next date</th>
                <th className="soft pb-3 pr-4 text-[12.5px] font-bold">Cost</th>
                <th className="soft pb-3 text-[12.5px] font-bold">How well we know it</th>
              </tr>
            </thead>
            <tbody>
              {ENTRIES.map((e) => (
                <tr key={e.id} className="border-b align-top">
                  <td className="py-3.5 pr-4">
                    <a
                      href={e.url}
                      target={e.url.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-[14.5px] font-bold"
                    >
                      {e.name}
                    </a>
                    <p className="soft mt-0.5 text-[12.5px]">{e.org}</p>
                  </td>
                  <td className="muted py-3.5 pr-4 text-[14px]">{e.deadline}</td>
                  <td className="muted py-3.5 pr-4 text-[14px]">{e.cost}</td>
                  <td className="py-3.5 text-[14px]">
                    <span
                      className="font-bold"
                      style={{
                        color:
                          e.knowledge === "researched"
                            ? "var(--color-soft)"
                            : "var(--color-blue)",
                      }}
                    >
                      {KNOWLEDGE_LABEL[e.knowledge]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="shell pb-4">
        <Reveal>
          <div className="on-blue grid items-center gap-8 rounded-[18px] p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-12">
            <div>
              <p className="text-[26px] font-extrabold leading-tight tracking-[-0.03em]">
                A plan is not the same as a deadline.
              </p>
              <p className="mt-3 text-[16px]" style={{ color: "rgba(255,255,255,.85)" }}>
                Every team on this page started the same way — six Mondays, a room,
                and a night where they had to stand up and show what they had. The
                sequence works because something forces the first step.
              </p>
              <a
                href={ACCELERATOR_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-white mt-6"
              >
                Apply to the accelerator
              </a>
            </div>
            <div>
              <p className="text-[14.5px]" style={{ color: "rgba(255,255,255,.75)" }}>
                Something on this page wrong or out of date? Tell us and we will fix
                it — dates change every cycle and we would rather hear it from you
                than have someone miss one.
              </p>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-3 inline-block text-[15px] font-bold"
                style={{ color: "#fff" }}
              >
                {SITE.email}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
