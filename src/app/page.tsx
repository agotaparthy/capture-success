import Image from "next/image";
import Link from "next/link";
import PartnerWall from "@/components/PartnerWall";
import Reveal from "@/components/Reveal";
import {
  ACCELERATOR,
  ACCELERATOR_FORM,
  ALSO_BUILDING,
  BOARD,
  COFOUNDERS,
  FEATURED,
  MILESTONES,
  SITE,
  WEEKS,
} from "@/lib/site";

const ALL = [...FEATURED, ...ALSO_BUILDING];

export default function Home() {
  return (
    <>
      {/* ── Opening ───────────────────────────────────────────────────── */}
      <section className="shell pt-14 pb-10">
        <Reveal>
          <p className="log">
            fall 2026 applications open — first session sept 14, frontier rtp
          </p>
          <h1 className="h-hero mt-5 max-w-[17ch]">
            A space where student founders{" "}
            <span className="mark">actually build.</span>
          </h1>
          <p className="prose mt-6 text-[18px]">
            Capture Success is a technical community in the Triangle: ten
            student-led companies, a free six-week accelerator, and a room full
            of people who ship. High school and college. Chapel Hill to RTP.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href={ACCELERATOR_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Apply for Fall 2026
            </a>
            <Link href="/accelerator" className="a text-[16px]">
              How the six weeks work
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ── The proof photo, pinned ───────────────────────────────────── */}
      <section className="shell pb-6">
        <Reveal>
          <div className="grid items-end gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            <figure className="print tilt-l">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src="/media/beacon-tye-regionals.jpg"
                  alt="The Beacon team holding their $1,000 check after winning TYE Regionals"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="log mt-2.5">
                apr 2026 — beacon wins tye regionals. $1,000, nationals in
                seattle.
              </figcaption>
            </figure>

            <div className="pb-2">
              <p className="prose text-[16px]">
                That check is from our first cohort. Beacon walked into TiE
                Young Entrepreneurs Regionals as a team of high schoolers and
                walked out with first place — guided start to finish by two of
                our members.
              </p>
              <p className="mt-4">
                <Link href="/companies" className="a text-[16px]">
                  Every company, what they shipped
                </Link>
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── The numbers, plain ────────────────────────────────────────── */}
      <section className="shell py-12">
        <div className="bar" />
        <div className="grid grid-cols-2 gap-y-8 py-8 sm:grid-cols-4">
          {[
            ["10", "companies building"],
            ["$20k+", "raised so far"],
            ["6", "mondays, in person"],
            ["$0", "cost to join"],
          ].map(([n, l]) => (
            <div key={l}>
              <p className="big-num text-[3.1rem] leading-none">{n}</p>
              <p className="log mt-2">{l}</p>
            </div>
          ))}
        </div>
        <div className="hairline" />
      </section>

      {/* ── What happens here ─────────────────────────────────────────── */}
      <section className="shell pb-16">
        <Reveal>
          <h2 className="h2 max-w-[20ch]">
            Three things happen in this <span className="mark">space.</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Companies get built",
              d: "Ten teams — thermal AI for firefighters, live court data for a whole town, instant plastic ID. Real users, real prize money, one live municipal deployment.",
              href: "/companies",
              link: "The portfolio",
            },
            {
              n: "02",
              t: "Founders get trained",
              d: "Six Mondays at Frontier RTP, free, dinner included. Problem to pitch, with UNC, Launch Chapel Hill, CED and Wake Tech in the room. Ends on a stage.",
              href: "/accelerator",
              link: "The accelerator",
            },
            {
              n: "03",
              t: "The community shows up",
              d: "Finnovate put 20+ teams in front of six business professionals for $2,500 in prizes. Built with our DECA chapter. More events coming.",
              href: "/finnovate",
              link: "Finnovate",
            },
          ].map((c, i) => (
            <Reveal key={c.n} delay={i * 70}>
              <div className="bar pt-5">
                <p className="log">{c.n}</p>
                <h3 className="h3 mt-2">{c.t}</h3>
                <p className="prose mt-3 text-[15px]">{c.d}</p>
                <p className="mt-4">
                  <Link href={c.href} className="a text-[15px]">
                    {c.link}
                  </Link>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Companies as a roster ─────────────────────────────────────── */}
      <section id="companies" className="shell scroll-mt-20 pb-16">
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="h2">The roster</h2>
            <p className="log">10 companies — 2026</p>
          </div>
        </Reveal>

        <div className="rows bar mt-6">
          {ALL.map((c, i) => (
            <Link
              key={c.name}
              href="/companies"
              className="row-mark flex flex-wrap items-baseline gap-x-4 gap-y-1 py-3.5"
            >
              <span className="log w-7 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              {c.logo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={c.logo}
                  alt=""
                  className="h-6 w-6 shrink-0 self-center rounded-[3px]"
                />
              )}
              <span className="h3 text-[19px]">{c.name}</span>
              <span className="muted hidden flex-1 text-[14.5px] sm:block">
                {c.blurb || c.sector}
              </span>
              <span className="log shrink-0">{c.sector.toLowerCase()}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Six weeks — the board ─────────────────────────────────────── */}
      <section
        className="text-white"
        style={{ background: "var(--color-navy)" }}
      >
        <div className="shell py-16">
          <Reveal>
            <p className="log" style={{ color: "var(--color-sky)" }}>
              the accelerator — fall 2026 — frontier rtp, building 600
            </p>
            <h2 className="h2 mt-3 max-w-[22ch]">
              Six Mondays. One job each.{" "}
              <span
                className="mark"
                style={{ background: "var(--color-sky)", color: "var(--color-navy)" }}
              >
                Then a stage.
              </span>
            </h2>
          </Reveal>

          <div className="mt-9" style={{ borderTop: "2.5px solid rgba(255,255,255,.9)" }}>
            {WEEKS.map((w) => (
              <div
                key={w.n}
                className="flex flex-wrap items-baseline gap-x-5 gap-y-1 py-3.5"
                style={{ borderBottom: "1px solid rgba(255,255,255,.16)" }}
              >
                <span className="log" style={{ color: "var(--color-sky)" }}>
                  {w.date.toLowerCase()}
                </span>
                <span className="h3 text-[19px]">{w.title}</span>
                <span
                  className="hidden flex-1 text-[14.5px] md:block"
                  style={{ color: "rgba(255,255,255,.65)" }}
                >
                  {w.summary}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href={ACCELERATOR_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-paper"
            >
              Apply — takes two minutes
            </a>
            <p className="log" style={{ color: "rgba(255,255,255,.6)" }}>
              grades 9+ · solo or team · free · dinner every session
            </p>
          </div>
        </div>
      </section>

      {/* ── The log ───────────────────────────────────────────────────── */}
      <section className="shell py-16">
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="h2">The log</h2>
            <p className="log">what actually happened, dated</p>
          </div>
        </Reveal>
        <div className="rows bar mt-6">
          {MILESTONES.map((m) => (
            <div key={m.title} className="grid gap-x-8 gap-y-1 py-4 md:grid-cols-[130px_1fr]">
              <p className="log pt-1">{m.date.toLowerCase()}</p>
              <div>
                <h3 className="h3 text-[18px]">{m.title}</h3>
                <p className="prose mt-1 text-[15px]">{m.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pinned wall ───────────────────────────────────────────────── */}
      <section aria-label="Photos from the community" className="overflow-hidden pb-16">
        <div className="marquee-track flex w-max items-start gap-8 px-8">
          {[...Array(2)].flatMap((_, r) =>
            [
              { s: "/media/finnovate/live-pitch.webp", c: "startup spotlight — live pitch", t: "tilt-l" },
              { s: "/media/beacon-tye-regionals.jpg", c: "beacon, tye regionals", t: "tilt-r" },
              { s: "/media/finnovate/winning-team.webp", c: "top three split $2.5k", t: "tilt-l" },
              { s: "/media/visiocourt-team.webp", c: "visiocourt — 2nd, deca states", t: "tilt-r" },
              { s: "/media/finnovate/award-presentation.webp", c: "award presentation", t: "tilt-l" },
              { s: "/media/finnovate/event-group.webp", c: "organizers + judges", t: "tilt-r" },
            ].map((p, i) => (
              <figure key={`${r}-${i}`} className={`print ${p.t} w-[300px] shrink-0`}>
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image src={p.s} alt={p.c} fill sizes="300px" className="object-cover" />
                </div>
                <figcaption className="log mt-2">{p.c}</figcaption>
              </figure>
            )),
          )}
        </div>
      </section>

      {/* ── Partners ──────────────────────────────────────────────────── */}
      <section className="shell pb-16">
        <Reveal>
          <PartnerWall />
        </Reveal>
      </section>

      {/* ── The people, as a sentence ─────────────────────────────────── */}
      <section className="shell pb-16">
        <Reveal>
          <div className="bar pt-5">
            <p className="prose max-w-none text-[17px]">
              <span className="log">run by — </span>
              {[...COFOUNDERS, ...BOARD].map((p, i, arr) => (
                <span key={p.name}>
                  <span className="font-semibold" style={{ color: "var(--color-ink)" }}>
                    {p.name}
                  </span>
                  {i < arr.length - 1 ? ", " : ". "}
                </span>
              ))}
              <Link href="/board" className="a">
                The board
              </Link>
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── Ways in ───────────────────────────────────────────────────── */}
      <section id="contact" className="shell scroll-mt-20 pb-8">
        <Reveal>
          <h2 className="h2 max-w-[22ch]">
            If you build, you <span className="mark">belong here.</span>
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-x-12 gap-y-8 md:grid-cols-3">
          {[
            {
              t: "Founders",
              d: "You are building something and want teammates, feedback, and a path to early funding.",
              href: "/apply?type=founder",
            },
            {
              t: "Builders",
              d: "You can design, code, sell, or research — and want real work on a real company.",
              href: "/apply?type=builder",
            },
            {
              t: "Partners",
              d: "You can offer mentorship, space, resources, or funding to student ventures.",
              href: "/apply?type=partner",
            },
          ].map((c) => (
            <div key={c.t} className="bar pt-5">
              <h3 className="h3">{c.t}</h3>
              <p className="prose mt-2 text-[15px]">{c.d}</p>
              <p className="mt-3">
                <Link href={c.href} className="a text-[15px]">
                  Start an application
                </Link>
              </p>
            </div>
          ))}
        </div>

        <Reveal>
          <div
            className="mt-14 px-8 py-12 text-white sm:px-12"
            style={{ background: "var(--color-blue)" }}
          >
            <p className="log" style={{ color: "rgba(255,255,255,.7)" }}>
              {ACCELERATOR.rangeLabel.toLowerCase()} · mondays{" "}
              {ACCELERATOR.time.toLowerCase().replace(/\s/g, "")} ·{" "}
              {ACCELERATOR.venue.name.toLowerCase()} · free
            </p>
            <h2 className="h2 mt-3 max-w-[20ch]">
              Be in the room this fall.
            </h2>
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <a
                href={ACCELERATOR_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-paper"
              >
                Open the application
              </a>
              <a
                href={SITE.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="a text-[15.5px]"
                style={{ color: "#fff", textDecorationColor: "rgba(255,255,255,.5)" }}
              >
                Or join the community first
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
