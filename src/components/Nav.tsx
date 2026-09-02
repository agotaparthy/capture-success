"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ACCELERATOR_FORM, NAV } from "@/lib/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b-2 bg-[var(--color-paper)]"
        style={{ borderColor: "var(--color-ink)" }}
      >
        <nav className="shell flex h-[62px] items-center justify-between">
          <Link
            href="/"
            className="flex items-baseline gap-2.5"
            style={{ fontFamily: "var(--font-head)" }}
          >
            <span className="text-[19px] font-bold tracking-[-0.02em]">
              Capture Success
            </span>
            <span className="log hidden sm:inline">est. 2026 — rtp, nc</span>
          </Link>

          <div className="hidden items-baseline gap-6 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px]"
                style={{
                  color:
                    pathname === item.href
                      ? "var(--color-blue)"
                      : "var(--color-body)",
                  textDecoration: pathname === item.href ? "underline" : "none",
                  textUnderlineOffset: 4,
                }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={ACCELERATOR_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="btn h-9 px-4 text-[14px]"
            >
              Apply
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="log log-ink md:hidden"
          >
            {open ? "close" : "menu"}
          </button>
        </nav>
      </header>

      <div
        className="fixed inset-0 z-40 bg-[var(--color-paper)] md:hidden"
        style={{
          pointerEvents: open ? "auto" : "none",
          opacity: open ? 1 : 0,
          transition: "opacity .18s ease",
          paddingTop: 62,
        }}
      >
        <div className="shell rows flex flex-col pt-4">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="h3 py-5 text-[28px]">
              {item.label}
            </Link>
          ))}
          <a
            href={ACCELERATOR_FORM}
            target="_blank"
            rel="noopener noreferrer"
            className="btn mt-8 w-full justify-center"
          >
            Apply — Fall 2026
          </a>
        </div>
      </div>
    </>
  );
}
