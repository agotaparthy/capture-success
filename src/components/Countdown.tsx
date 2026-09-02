"use client";

import { useEffect, useState } from "react";

const UNITS = [
  { key: "days", label: "days" },
  { key: "hours", label: "hrs" },
  { key: "minutes", label: "min" },
  { key: "seconds", label: "sec" },
] as const;

function remaining(target: number) {
  const ms = Math.max(0, target - Date.now());
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor(ms / 3_600_000) % 24,
    minutes: Math.floor(ms / 60_000) % 60,
    seconds: Math.floor(ms / 1000) % 60,
    over: ms === 0,
  };
}

/** Counts down to the first session. Placeholder until mounted so server and
 *  client markup agree. */
export default function Countdown({ iso }: { iso: string }) {
  const target = new Date(iso).getTime();
  const [t, setT] = useState<ReturnType<typeof remaining> | null>(null);

  useEffect(() => {
    const first = setTimeout(() => setT(remaining(target)), 0);
    const id = setInterval(() => setT(remaining(target)), 1000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, [target]);

  if (!t) return <div className="h-[52px]" aria-hidden />;

  if (t.over) {
    return <p className="h3" style={{ color: "var(--color-blue)" }}>Cohort in session</p>;
  }

  return (
    <div className="flex items-baseline gap-6">
      {UNITS.map((u) => (
        <div key={u.key} className="flex items-baseline gap-1.5">
          <span className="big-num text-[2.6rem] leading-none">
            {String(t[u.key]).padStart(2, "0")}
          </span>
          <span className="log">{u.label}</span>
        </div>
      ))}
    </div>
  );
}
