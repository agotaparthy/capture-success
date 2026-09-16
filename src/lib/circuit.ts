// ---------------------------------------------------------------------------
// Circuit — the competition circuit, sequenced.
//
// Two rules govern this file, and they are the product:
//
//   1. We only list what we actually touch. Every entry carries `knowledge`,
//      which says plainly whether we have won it, entered it, partner with the
//      people who run it, or merely read about it. A student can see the
//      difference. Generic advice is worse than no advice.
//
//   2. Nothing here is a trophy list. The output is a dated sequence with
//      dependencies — what qualifies you for what — because the sequence is
//      the part you cannot get from a Google search.
//
// Dates below were verified on 2026-09-16 against the organisers' own pages.
// `verified` is the date a human last checked. Re-check every August or the
// whole thing quietly becomes a liar.
// ---------------------------------------------------------------------------

/** How well we actually know a thing. Shown to the student, never hidden. */
export type Knowledge = "ours" | "won" | "entered" | "partner" | "researched";

export const KNOWLEDGE_LABEL: Record<Knowledge, string> = {
  ours: "This one is ours",
  won: "We have won this",
  entered: "We have entered this",
  partner: "We work with the organisers",
  researched: "We have not done this — read the rules yourself",
};

export type Field = "startup" | "software" | "hardware" | "social";

export const FIELDS: { id: Field; label: string; blurb: string }[] = [
  {
    id: "startup",
    label: "Starting a company",
    blurb: "A product or service with customers, whatever it is built from.",
  },
  {
    id: "software",
    label: "Software and apps",
    blurb: "You write code and the thing you are making runs on a screen.",
  },
  {
    id: "hardware",
    label: "Hardware and devices",
    blurb: "You make a physical object — boards, prints, sensors, mechanics.",
  },
  {
    id: "social",
    label: "Social impact",
    blurb: "A nonprofit, a community programme, or a venture with a cause.",
  },
];

export type Entry = {
  id: string;
  name: string;
  org: string;
  /** One plain line. No marketing. */
  what: string;
  who: string;
  cost: string;
  /** The date that actually matters this cycle. */
  deadline: string;
  /** Sortable. Used to order the plan. */
  iso: string;
  window: string;
  fields: Field[];
  /** Ids this unlocks. The whole point of the sequence. */
  unlocks?: string[];
  /** Used when what it unlocks is not itself something we list. */
  unlocksLabel?: string;
  requires?: string;
  knowledge: Knowledge;
  /** Said out loud when the honest answer is "probably not you". */
  catch?: string;
  url: string;
  verified: string;
};

export const ENTRIES: Entry[] = [
  {
    id: "congressional-app",
    name: "Congressional App Challenge",
    org: "U.S. House of Representatives",
    what: "Submit an app you built to your congressional district. Winners are named by their representative and shown at the Capitol.",
    who: "Middle and high school students, solo or teams of up to four. U.S. residents.",
    cost: "Free",
    deadline: "Oct 26, 2026 · 12:00 PM ET",
    iso: "2026-10-26",
    window: "Register and submit before the deadline — there is no extension.",
    fields: ["software"],
    knowledge: "entered",
    catch:
      "Forty days out. Only worth starting if you already have something that runs. A demo video of a half-working app beats a polished idea, but nothing beats nothing.",
    url: "https://www.congressionalappchallenge.us/students/rules/",
    verified: "2026-09-16",
  },
  {
    id: "deca-districts",
    name: "DECA districts",
    org: "DECA · your school chapter",
    what: "Your first round. Entrepreneurship events run solo or in teams of up to three. Placing sends you to the state conference.",
    who: "Members of a school DECA chapter.",
    cost: "Chapter dues, usually under $50",
    deadline: "November 2026",
    iso: "2026-11-01",
    window: "District conferences run through November. Your advisor sets the date.",
    fields: ["startup", "software", "hardware", "social"],
    unlocks: ["deca-states"],
    requires: "A DECA chapter at your school. If there isn't one, that is its own project — and a better story than placing.",
    knowledge: "won",
    url: "https://www.deca.org/compete",
    verified: "2026-09-16",
  },
  {
    id: "tye-carolinas",
    name: "TYE Carolinas",
    org: "TiE Carolinas",
    what: "A full-year programme: weekly sessions from autumn to spring, teams build a real venture, and it ends in a regional pitch. Regional winners go to the global final.",
    who: "High school students, teams of about four.",
    cost: "Varies by chapter — ask, and ask about fee waivers",
    deadline: "Applications open now · programme runs Oct 2026 – Apr 2027",
    iso: "2026-10-01",
    window: "Sessions across the school year, regional pitch in spring.",
    fields: ["startup", "software", "hardware", "social"],
    unlocksLabel: "the TYE global final",
    knowledge: "won",
    catch:
      "The biggest time commitment on this page by a distance. Do not sign up for it in the same season you are doing three other things.",
    url: "https://events.tie.org/TYECarolinasYoungEntrepreneurs2026-2027",
    verified: "2026-09-16",
  },
  {
    id: "diamond-challenge",
    name: "Diamond Challenge",
    org: "Horn Entrepreneurship, University of Delaware",
    what: "Submit a written concept and a pitch video. Finalists are flown to the summit. Roughly $100,000 across the prize pool; $12,000 for first in each track.",
    who: "Ages 14–18 at the deadline, teams of two to four, plus one adult advisor aged 21 or over.",
    cost: "Free to enter",
    deadline: "Jan 16, 2027",
    iso: "2027-01-16",
    window: "Opens in September, closes mid-January, finalists in March, summit in April.",
    fields: ["startup", "software", "hardware", "social"],
    requires: "An adult advisor 21+. Line that up in December, not the week of.",
    knowledge: "partner",
    url: "https://diamondchallenge.org/competition/",
    verified: "2026-09-16",
  },
  {
    id: "deca-states",
    name: "DECA State Career Development Conference",
    org: "North Carolina DECA",
    what: "The state round. Placing here is what sends you to the international conference.",
    who: "District qualifiers.",
    cost: "Conference fee, usually covered or subsidised by your chapter",
    deadline: "Winter 2027 — confirm with your advisor",
    iso: "2027-02-15",
    window: "Typically winter. NC DECA publishes dates through chapters.",
    fields: ["startup", "software", "hardware", "social"],
    unlocks: ["deca-icdc"],
    requires: "Placing at districts.",
    knowledge: "won",
    url: "https://ncdeca.org/",
    verified: "2026-09-16",
  },
  {
    id: "deca-icdc",
    name: "DECA ICDC",
    org: "DECA Inc.",
    what: "The international conference. Tens of thousands of students. The prepared-event submission window opens weeks before you travel.",
    who: "State qualifiers.",
    cost: "Travel and registration — start the fundraising conversation in January",
    deadline: "Apr 17–20, 2027 · Anaheim, CA",
    iso: "2027-04-17",
    window: "Prepared-event submissions open in late March and close in early April.",
    fields: ["startup", "software", "hardware", "social"],
    requires: "Placing at states.",
    knowledge: "entered",
    url: "https://www.deca.org/conferences/icdc",
    verified: "2026-09-16",
  },
  {
    id: "capture-accelerator",
    name: "Capture Success Accelerator",
    org: "Capture Success",
    what: "Six Mondays at Frontier RTP. Come with an idea or come alone and get matched. Ends in a pitch night in front of the Triangle startup community.",
    who: "Grades 9 and up. No application fee, no cost, ever.",
    cost: "Free",
    deadline: "Spring 2027 cohort — applications open after Oct 19",
    iso: "2027-01-05",
    window: "Six consecutive Mondays, 6–8 PM.",
    fields: ["startup", "software", "hardware", "social"],
    knowledge: "ours",
    url: "/accelerator",
    verified: "2026-09-16",
  },
  {
    id: "nc-idea-micro",
    name: "NC IDEA MICRO",
    org: "NC IDEA",
    what: "$10,000 plus an eight-week programme. Fifteen companies a cycle.",
    who: "Companies headquartered in North Carolina.",
    cost: "Free to apply",
    deadline: "Fall cycle closes late August",
    iso: "2027-08-24",
    window: "Two cycles a year, spring and fall.",
    fields: ["startup", "hardware", "software"],
    knowledge: "researched",
    catch:
      "Read this one carefully before you spend a weekend on it: they require at least one full-time founder living in NC, and they expect revenue within twelve months. You cannot be a full-time founder and a full-time student. Most high schoolers are not eligible. We list it because it is the right target the year after you graduate, not this year.",
    url: "https://ncidea.org/micro-grant-eligibility/",
    verified: "2026-09-16",
  },
];

// ---------------------------------------------------------------------------
// The step nobody else puts on a list
// ---------------------------------------------------------------------------

/** Not a competition. The thing that makes every competition above winnable. */
export const KNOCK = {
  id: "knock",
  title: "Get one real person outside your family to use it",
  body: "Every team we have watched win did this before they won anything. Not a survey of your friends — one named adult at one real organisation who uses the thing or lets you test it on their turf. A parks director, a fire chief, a clinic manager, a teacher who is not yours.",
  how: "One email a week. Four sentences: what their work actually is in your words, what you built, what you are asking for, and when. Send it from your school address, copy an adult, and expect roughly one reply in seven. Silence is not rejection, it is Tuesday.",
  why: "Judges at every event on this page ask the same question — has anyone actually used it. VisioCourt could say yes. That is the whole difference.",
};

// ---------------------------------------------------------------------------
// Arcs — real paths, walked by real teams, with the dates left in
// ---------------------------------------------------------------------------

export type ArcStep = { when: string; what: string; detail: string };

export type Arc = {
  team: string;
  tag: string;
  oneLine: string;
  steps: ArcStep[];
  result: string;
};

export const ARCS: Arc[] = [
  {
    team: "Beacon",
    tag: "Safety wearable · girl-led",
    oneLine:
      "From a cohort with no product to first place at TiE Young Entrepreneurs Regionals and a place at nationals.",
    steps: [
      {
        when: "Start",
        what: "Joined the first Capture Success cohort",
        detail:
          "No product, no team beyond themselves, six Mondays and a deadline. The deadline is the part that matters.",
      },
      {
        when: "Weeks 1–3",
        what: "Narrowed to one person with one problem",
        detail:
          "Most teams lose here by staying broad. A wearable for everyone is a wearable for nobody.",
      },
      {
        when: "Weeks 4–6",
        what: "Built something physical and pitched it",
        detail:
          "Cardboard before circuit boards. The first version existed, which put them ahead of every team still deciding.",
      },
      {
        when: "Regionals",
        what: "Won TiE Young Entrepreneurs Regionals",
        detail:
          "First place and $1,000 — and, more usefully, a judged result that is not self-reported.",
      },
      {
        when: "Next",
        what: "Qualified for nationals in Seattle",
        detail: "The regional win was the qualifier. That is what a sequence buys you.",
      },
    ],
    result: "First at TYE Regionals · qualified for nationals",
  },
  {
    team: "VisioCourt",
    tag: "Sports operations · deployed",
    oneLine:
      "From a school project to live deployment with a town's parks department, second at DECA States, and a presentation at MIT.",
    steps: [
      {
        when: "Start",
        what: "Court availability, solved for one town",
        detail: "Narrow on purpose. One county, one sport, one problem people complained about.",
      },
      {
        when: "The knock",
        what: "Emailed a town parks department and got a yes",
        detail:
          "This is the step the other nine teams skipped. It took an email, not a connection.",
      },
      {
        when: "Deployment",
        what: "Live across three Town of Morrisville facilities",
        detail:
          "Real users, real uptime, real complaints to answer. Nothing on a slide competes with this.",
      },
      {
        when: "DECA",
        what: "Second place at DECA States",
        detail:
          "They walked in able to answer the one question judges always ask: is anyone actually using it.",
      },
      {
        when: "Next",
        what: "Presented their research at MIT",
        detail: "Deployment first, credentials second. That order is not an accident.",
      },
    ],
    result: "Deployed in 3 town facilities · 2nd at DECA States · presented at MIT",
  },
];

// ---------------------------------------------------------------------------
// The plan engine
// ---------------------------------------------------------------------------

export type Stage = "nothing" | "idea" | "building" | "users";

export const STAGES: { id: Stage; label: string; blurb: string }[] = [
  { id: "nothing", label: "Nothing yet", blurb: "You want to start. That is a fine place to be." },
  { id: "idea", label: "An idea", blurb: "You can say it in a sentence but nothing exists." },
  { id: "building", label: "Something half-built", blurb: "It exists. It is ugly. It sort of runs." },
  { id: "users", label: "Someone uses it", blurb: "At least one person who is not related to you." },
];

export const HOURS = [
  { id: "low", label: "1–3 hrs/week", cap: 2 },
  { id: "mid", label: "4–8 hrs/week", cap: 4 },
  { id: "high", label: "9+ hrs/week", cap: 6 },
] as const;

export type HoursId = (typeof HOURS)[number]["id"];

export type Answers = {
  grade: 9 | 10 | 11 | 12;
  field: Field;
  stage: Stage;
  hours: HoursId;
  deca: boolean;
};

export type PlanStep = {
  entry?: Entry;
  knock?: boolean;
  when: string;
  why: string;
};

export type Plan = {
  steps: PlanStep[];
  story: string;
  cut: { name: string; why: string }[];
};

/**
 * Deterministic. No model, no scoring — a filter and a sort over a calendar we
 * checked by hand. If it cannot justify a step in one sentence, the step is cut.
 */
export function buildPlan(a: Answers): Plan {
  const cut: { name: string; why: string }[] = [];
  const cap = HOURS.find((h) => h.id === a.hours)!.cap;

  const eligible = ENTRIES.filter((e) => {
    if (!e.fields.includes(a.field)) {
      return false;
    }
    if (e.id === "congressional-app" && a.stage !== "building" && a.stage !== "users") {
      cut.push({
        name: e.name,
        why: "Forty days out and you do not have something that runs yet. Next year, from a stronger position.",
      });
      return false;
    }
    if (e.id.startsWith("deca") && !a.deca) {
      if (e.id === "deca-districts") {
        cut.push({
          name: "DECA",
          why: "No chapter at your school. Starting one is a bigger story than placing in one — ask a business teacher.",
        });
      }
      return false;
    }
    if (e.id === "nc-idea-micro") {
      cut.push({
        name: e.name,
        why: "Needs a full-time founder living in NC. You are a full-time student. This is a target for the year after you graduate.",
      });
      return false;
    }
    if (e.id === "tye-carolinas" && cap < 4) {
      cut.push({
        name: e.name,
        why: "A full school year of weekly sessions. At your hours it would eat everything else on this list.",
      });
      return false;
    }
    if (e.id === "capture-accelerator" && a.grade === 12) {
      cut.push({
        name: e.name,
        why: "The spring cohort ends after your applications are in. Worth doing for its own sake, not for the timing.",
      });
      return false;
    }
    return true;
  });

  const ordered = [...eligible].sort((x, y) => x.iso.localeCompare(y.iso));

  const steps: PlanStep[] = [];

  // The knock goes first for anyone who has built something and has no users,
  // because every later step is judged on whether the answer is yes.
  const knockFirst = a.stage === "building" || a.stage === "idea";
  if (knockFirst) {
    steps.push({
      knock: true,
      when: "This month, and every week after",
      why:
        a.stage === "idea"
          ? "Before you enter anything: one email a week until a real person confirms the problem is real. Judges can tell."
          : "You have a thing. Now get one named person outside your family using it — it is the question every judge on this list asks.",
    });
  }

  for (const e of ordered.slice(0, cap + 1)) {
    steps.push({ entry: e, when: e.deadline, why: reasonFor(e, a) });
  }

  if (!knockFirst && a.stage === "users") {
    steps.push({
      knock: true,
      when: "Ongoing",
      why: "You already have one. Get the second, then the third — a single user is an anecdote, three is a pattern.",
    });
  }

  return { steps, story: storyFor(a, steps), cut };
}

function reasonFor(e: Entry, a: Answers): string {
  const next = e.unlocks?.length
    ? ENTRIES.find((n) => n.id === e.unlocks![0])?.name
    : e.unlocksLabel;
  if (next) {
    return `Placing here is what qualifies you for ${next}. That is why it comes where it does, not because it is the biggest thing on the list.`;
  }
  if (e.id === "diamond-challenge") {
    return a.stage === "nothing" || a.stage === "idea"
      ? "Written concept and a pitch video, so it rewards clear thinking over a finished product. The most winnable thing on this page from a standing start."
      : "Free to enter, judged on the concept and the pitch. What you have built gives you something real to write about.";
  }
  if (e.id === "capture-accelerator") {
    return "Six weeks with a hard deadline and people who will tell you the truth. Both teams in the paths below started here.";
  }
  if (e.id === "congressional-app") {
    return "The nearest real deadline you have. A working demo video of something imperfect beats a polished idea, every time.";
  }
  return "On the calendar for your field this cycle.";
}

function storyFor(a: Answers, steps: PlanStep[]): string {
  const named = steps.filter((s) => s.entry).map((s) => s.entry!.name);
  const field = FIELDS.find((f) => f.id === a.field)!.label.toLowerCase();
  const gradeOut = 12 - a.grade;

  const spine =
    a.stage === "nothing" || a.stage === "idea"
      ? "You do not have a story yet, and that is the honest starting point. What you have is a calendar."
      : "You already have the only hard part — something that exists. What you are missing is the sequence that makes people notice it.";

  const arc = named.length
    ? `Across ${gradeOut > 0 ? `the ${gradeOut === 1 ? "year" : `${gradeOut} years`} you have left` : "this year"}, the through-line is one project in ${field} that gets tested in public ${named.length === 1 ? "once" : `${named.length} times`} — ${named.join(", then ")}. Same project each time, further along.`
    : `Across the time you have left, the through-line is one project in ${field}, built in public and shown to real people.`;

  return `${spine} ${arc} The thing that makes it read as a story rather than a list is that it is one project, not ${named.length || 3} unrelated entries — every round is the same work, further along, with a result attached. Write down what broke each time. That is the essay, and nobody else can write it.`;
}
