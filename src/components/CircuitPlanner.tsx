"use client";

import { useMemo, useState } from "react";
import {
  buildPlan,
  FIELDS,
  HOURS,
  KNOCK,
  KNOWLEDGE_LABEL,
  STAGES,
  type Answers,
  type Field,
  type HoursId,
  type Stage,
} from "@/lib/circuit";

const GRADES = [9, 10, 11, 12] as const;

function Choice({
  label,
  hint,
  on,
  onClick,
}: {
  label: string;
  hint?: string;
  on: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      className="rounded-[12px] border px-4 py-3 text-left transition-colors"
      style={{
        borderColor: on ? "var(--color-blue)" : "var(--color-line)",
        background: on ? "var(--color-surface-2)" : "#fff",
      }}
    >
      <span
        className="block text-[14.5px] font-bold"
        style={{ color: on ? "var(--color-blue)" : "var(--color-ink)" }}
      >
        {label}
      </span>
      {hint && <span className="soft mt-0.5 block text-[12.5px] leading-snug">{hint}</span>}
    </button>
  );
}

function Q({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div className="border-t py-6 first:border-t-0 first:pt-0">
      <div className="flex items-baseline gap-3">
        <span className="t-num text-[13px]" style={{ color: "var(--color-blue)" }}>
          {n}
        </span>
        <p className="t-h3 text-[16px]">{title}</p>
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

export default function CircuitPlanner() {
  const [grade, setGrade] = useState<Answers["grade"] | null>(null);
  const [field, setField] = useState<Field | null>(null);
  const [stage, setStage] = useState<Stage | null>(null);
  const [hours, setHours] = useState<HoursId | null>(null);
  const [deca, setDeca] = useState<boolean | null>(null);

  const ready = grade !== null && field !== null && stage !== null && hours !== null && deca !== null;

  const plan = useMemo(
    () => (ready ? buildPlan({ grade: grade!, field: field!, stage: stage!, hours: hours!, deca: deca! }) : null),
    [ready, grade, field, stage, hours, deca],
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
      {/* ── The questions ──────────────────────────────────────────── */}
      <div className="card h-fit p-6">
        <Q n="01" title="What grade are you in?">
          <div className="grid grid-cols-4 gap-2">
            {GRADES.map((g) => (
              <Choice key={g} label={String(g)} on={grade === g} onClick={() => setGrade(g)} />
            ))}
          </div>
        </Q>

        <Q n="02" title="What are you building, roughly?">
          <div className="grid gap-2 sm:grid-cols-2">
            {FIELDS.map((f) => (
              <Choice
                key={f.id}
                label={f.label}
                hint={f.blurb}
                on={field === f.id}
                onClick={() => setField(f.id)}
              />
            ))}
          </div>
        </Q>

        <Q n="03" title="Where is it right now?">
          <div className="grid gap-2 sm:grid-cols-2">
            {STAGES.map((s) => (
              <Choice
                key={s.id}
                label={s.label}
                hint={s.blurb}
                on={stage === s.id}
                onClick={() => setStage(s.id)}
              />
            ))}
          </div>
        </Q>

        <Q n="04" title="Honestly, how many hours a week?">
          <div className="grid gap-2 sm:grid-cols-3">
            {HOURS.map((h) => (
              <Choice key={h.id} label={h.label} on={hours === h.id} onClick={() => setHours(h.id)} />
            ))}
          </div>
          <p className="soft mt-2 text-[12.5px]">
            Answer for a normal week, not your best one. Over-promising here is how you
            end up with a plan you abandon in November.
          </p>
        </Q>

        <Q n="05" title="Does your school have a DECA chapter?">
          <div className="grid grid-cols-2 gap-2">
            <Choice label="Yes" on={deca === true} onClick={() => setDeca(true)} />
            <Choice label="No, or no idea" on={deca === false} onClick={() => setDeca(false)} />
          </div>
        </Q>
      </div>

      {/* ── The plan ───────────────────────────────────────────────── */}
      <div>
        {!plan && (
          <div
            className="flex h-full min-h-[320px] items-center justify-center rounded-[16px] border border-dashed p-8"
            style={{ borderColor: "var(--color-line)" }}
          >
            <p className="soft max-w-[34ch] text-center text-[14.5px]">
              Answer the five questions and your sequence appears here — dated, in order,
              with the reason each thing comes where it does.
            </p>
          </div>
        )}

        {plan && (
          <div>
            <p className="t-kicker">Your sequence</p>
            <h3 className="t-h2 mt-2 text-[26px]">
              {plan.steps.length} things, in this order
            </h3>

            <div className="rows mt-6">
              {plan.steps.map((step, i) => (
                <div key={step.entry?.id ?? `knock-${i}`} className="py-5 first:pt-0">
                  <div className="flex gap-4">
                    <span
                      className="t-num mt-0.5 w-6 shrink-0 text-[14px]"
                      style={{ color: "var(--color-blue)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      {step.knock ? (
                        <>
                          <p className="t-h3 text-[17px]">{KNOCK.title}</p>
                          <p className="soft mt-0.5 text-[13px]">{step.when}</p>
                          <p className="muted mt-2 max-w-[58ch] text-[14.5px]">{step.why}</p>
                          <div className="tile mt-3 p-4">
                            <p className="muted text-[14px]">{KNOCK.how}</p>
                            <p className="soft mt-2 text-[13.5px]">{KNOCK.why}</p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                            <p className="t-h3 text-[17px]">{step.entry!.name}</p>
                            <p
                              className="text-[13px] font-bold"
                              style={{ color: "var(--color-blue)" }}
                            >
                              {step.when}
                            </p>
                          </div>
                          <p className="soft mt-0.5 text-[13px]">{step.entry!.org}</p>
                          <p className="muted mt-2 max-w-[58ch] text-[14.5px]">
                            {step.entry!.what}
                          </p>
                          <p className="mt-2 max-w-[58ch] text-[14.5px] font-semibold">
                            {step.why}
                          </p>

                          <dl className="mt-3 grid gap-x-6 gap-y-1 text-[13.5px] sm:grid-cols-2">
                            <div className="flex gap-2">
                              <dt className="soft shrink-0">Who</dt>
                              <dd className="muted">{step.entry!.who}</dd>
                            </div>
                            <div className="flex gap-2">
                              <dt className="soft shrink-0">Cost</dt>
                              <dd className="muted">{step.entry!.cost}</dd>
                            </div>
                          </dl>

                          {step.entry!.requires && (
                            <p className="soft mt-2 text-[13.5px]">
                              Needs first — {step.entry!.requires}
                            </p>
                          )}
                          {step.entry!.catch && (
                            <p
                              className="mt-3 rounded-[10px] px-3 py-2 text-[13.5px]"
                              style={{ background: "var(--color-surface-2)" }}
                            >
                              {step.entry!.catch}
                            </p>
                          )}

                          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
                            <span
                              className="text-[12.5px] font-bold"
                              style={{
                                color:
                                  step.entry!.knowledge === "researched"
                                    ? "var(--color-soft)"
                                    : "var(--color-blue)",
                              }}
                            >
                              {KNOWLEDGE_LABEL[step.entry!.knowledge]}
                            </span>
                            <a
                              href={step.entry!.url}
                              target={step.entry!.url.startsWith("http") ? "_blank" : undefined}
                              rel="noopener noreferrer"
                              className="lnk text-[13.5px]"
                            >
                              {step.entry!.knowledge === "ours"
                                ? "See the programme"
                                : "Official rules"}{" "}
                              <span aria-hidden>
                                {step.entry!.url.startsWith("http") ? "↗" : "→"}
                              </span>
                            </a>
                            <span className="soft text-[12.5px]">
                              Checked {step.entry!.verified}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card mt-8 p-6">
              <p className="t-kicker">The through-line</p>
              <p className="mt-2 max-w-[60ch] text-[15.5px] leading-relaxed">{plan.story}</p>
            </div>

            {plan.cut.length > 0 && (
              <div className="mt-6">
                <p className="t-kicker">What we left off, and why</p>
                <ul className="rows mt-3">
                  {plan.cut.map((c) => (
                    <li key={c.name} className="py-3 first:pt-0">
                      <p className="text-[14.5px] font-bold">{c.name}</p>
                      <p className="muted mt-0.5 max-w-[58ch] text-[14px]">{c.why}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <p className="soft mt-6 max-w-[58ch] text-[13.5px]">
              Check every date against the organiser before you rely on it. Rules and
              deadlines change each cycle, and a missed deadline is nobody&apos;s fault
              but it is still missed.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
