"use client";

import { useState } from "react";
import { WEEKS } from "@/lib/site";

/** The six Mondays on the board. Selecting a week expands its detail. */
export default function WeekRail() {
  const [active, setActive] = useState(0);

  return (
    <div style={{ borderTop: "2.5px solid rgba(255,255,255,.9)" }}>
      {WEEKS.map((w, i) => {
        const on = i === active;
        return (
          <div key={w.n} style={{ borderBottom: "1px solid rgba(255,255,255,.16)" }}>
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-expanded={on}
              className="flex w-full flex-wrap items-baseline gap-x-5 gap-y-1 py-4 text-left"
            >
              <span className="log w-20 shrink-0" style={{ color: "var(--color-sky)" }}>
                {w.date.toLowerCase()}
              </span>
              <span className="h3 flex-1 text-[19px]">{w.title}</span>
              <span className="log shrink-0" style={{ color: "rgba(255,255,255,.5)" }}>
                {on ? "less" : "more"}
              </span>
            </button>
            {on && (
              <div className="pb-5 md:pl-[6.25rem]">
                <p className="max-w-[56ch] text-[15.5px]" style={{ color: "rgba(255,255,255,.8)" }}>
                  {w.summary}
                </p>
                <p className="log mt-2.5" style={{ color: "rgba(255,255,255,.55)" }}>
                  {w.items.map((x) => x.toLowerCase()).join(" · ")}
                </p>
                {w.n === WEEKS.length && (
                  <p
                    className="mark mt-3 inline-block text-[14px] font-bold"
                    style={{ background: "var(--color-sky)", color: "var(--color-navy)", fontFamily: "var(--font-head)" }}
                  >
                    the pitch competition — judges and the triangle startup community
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
