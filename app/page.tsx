


import { JoinCsaForm, WHATSAPP_GROUP_URL } from "@/app/components/JoinCsaForm";

import ScrollReveal from "@/app/components/ScrollReveal";


import Image from "next/image";

const SITE = "https://www.stanneschaplaincy.com";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Karibu, Class of 2026/2027 — St. Anne's Chaplaincy, CSA Maseno",
  description:
    "A picture brochure for first-years at Maseno University: prayer houses, groups, Mass times, events and the CSA welcome ceremony at St. Anne's Catholic Chaplaincy.",
};

function Icon({ path, className = "h-6 w-6" }: { path: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

const icons = {
  cross: "M12 2v20M6 8h12",
  book: "M4 19.5A2.5 2.5 0 016.5 17H20V4H6.5A2.5 2.5 0 004 6.5v13z M4 19.5V6.5",
  calendar:
    "M8 2v4M16 2v4M3.5 9h17M4.5 4.5h15A1.5 1.5 0 0121 6v14a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 20V6a1.5 1.5 0 011.5-1.5z",
  users: "M17 20v-1a4 4 0 00-4-4H7a4 4 0 00-4 4v1M10 11a4 4 0 100-8 4 4 0 000 8zM23 20v-1a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
  shirt: "M8 3l4 2 4-2 4 4-3 3v11H7V10L4 7l4-4z",
  compass: "M12 2a10 10 0 100 20 10 10 0 000-20zM15 9l-2 6-6 2 2-6 6-2z",
  external: "M14 5h5v5M19 5l-8 8M8 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-2",
  arrow: "M5 12h14M13 6l6 6-6 6",
  phone: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z",
  map: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z M12 10a2 2 0 100-4 2 2 0 000 4z",
};

/* --- Colour ribbon used all over the brochure ------------------------------ */
const RIBBON = [
  "bg-primary",
  "bg-gold",
  "bg-brick",
  "bg-teal",
  "bg-plum",
  "bg-sun",
  "bg-sky",
  "bg-leaf",
];

function Ribbon({ className = "" }: { className?: string }) {
  return (
    <div className={`flex h-2 w-full ${className}`} aria-hidden="true">
      {RIBBON.map((c) => (
        <span key={c} className={`${c} h-full flex-1`} />
      ))}
    </div>
  );
}

function SectionTag({
  num,
  color,
  children,
}: {
  num: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3" data-reveal>
      <span
        className={`${color} inline-flex h-11 w-11 items-center justify-center rounded-xl font-mono text-sm font-bold text-cream shadow-md transition-transform duration-300 hover:rotate-6 hover:scale-110`}
      >
        {num}
      </span>
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
        {children}
      </p>
    </div>
  );
}



const PRAYER_HOUSES = [
  {
    name: "St. Agnes",
    note: "Saturday 5pm - Chaplaincy",
    color: "bg-brick",
    communities: [
      "St. Elizabeth",
      "St. Getrude",
      "St. Kizito",
      "St. Andrew",
    ],
  },
  {
    name: "St. Augustine",
    note: "Saturday 5pm Underground Chapel (Chaplaincy)",
    color: "bg-primary",
    communities: [
      "St. Charity",
      "St. Rita",
      "St. Francis",
    ],
  },
  {
    name: "St. Faustina",
    note: "Sunday 5pm - Chaplaincy",
    color: "bg-sky",
    communities: [
      "St. JohnBosco",
      "St. Joseph",
      "St. Cecilia",
      "St. Maria Goretti",
      "St. Michael",
      "St. Monica",
    ],
  },
  {
    name: "St. Peter",
    note: "Sunday 5pm - Urban Room",
    color: "bg-leaf",
    communities: [
      "St. Stephen",
      "St. Scholastica",
      "St. Theresa of Avila",
      "St. Charles Lwanga",
    ],
  },
  {
    name: "St. Rose of Lima",
    note: "Sunday 5pm - Chaplaincy",
    color: "bg-plum",
    communities: [
      "St. Christopher",
      "St. George",
      "St. Josephine Bakhita",
    ],
  },
  {
    name: "St. Thomas Aquinas",
    note: "Sunday 5pm - Chaplaincy",
    color: "bg-teal",
    communities: [
      "St. Ambrose",
      "St. Raphael",
      "St. Veronica",
    ],
  },
];



const GROUPS = [
  { name: "Prolife", note: "Dignity of every human life", color: "bg-brick" },
  { name: "CJPD", note: "Justice, Peace & Development", color: "bg-teal" },
  { name: "NMCS", note: "National Movement of Catholic Students", color: "bg-primary" },
  { name: "Legion of Mary", note: "Prayer & service under Mary", color: "bg-sky" },
  { name: "Ogopa Mungu", note: "Liturgical Dancers", color: "bg-plum" },
  { name: "Choir", note: "Leading worship in song", color: "bg-sun" },
  { name: "Divine Mercy", note: "The Chaplet & Mercy Sunday", color: "bg-leaf" },
  { name: "Praise & Worship", note: "Worship and adoration", color: "bg-gold" },
];

const EVENTS = [
  {
    title: "CSA Hikes & Fun Day",
    note: "Trails, games, and laughter as one family.",
    img: "https://res.cloudinary.com/dfdegqwp6/image/upload/v1775742087/group_gallery/2026/04/09/WhatsApp_Image_2026-04-09_at_4.01.57_PM_1_i7p83f.jpg",
    color: "bg-leaf",
    tag: "Outdoors",
  },
  {
    title: "Cultural Week",
    note: "Celebrating the many heritages that make up CSA.",
    img: "https://res.cloudinary.com/dfdegqwp6/image/upload/v1786858929/group_gallery/2026/08/16/culture_rnqetj.jpg",
    color: "bg-plum",
    tag: "Heritage",
  },
  {
    title: "Charity & Outreach",
    note: "Visiting children's homes and giving back locally.",
    img: "https://res.cloudinary.com/dfdegqwp6/image/upload/v1786858902/group_gallery/2026/08/16/WhatsApp_Image_2026-08-16_at_8.39.55_AM_qpmkvk.jpg",
    color: "bg-brick",
    tag: "Service",
  },
  {
    title: "St. Anne's Feast Day",
    note: "Our patronal feast — a day of celebration.",
    img: "https://res.cloudinary.com/dfdegqwp6/image/upload/v1786944555/WhatsApp_Image_2026-08-17_at_8.28.13_AM_p6mhrm.jpg",
    color: "bg-gold",
    tag: "Patronal",
  },
  {
    title: "Spiritual Retreats",
    note: "Stepping away to grow closer to God.",
    img: "/assets/vph.jpg",
    color: "bg-teal",
    tag: "Silence",
  },
];

const SCHEDULE: { day: string; label: string; time: string; color: string }[] = [
  { day: "Mon – Fri", label: "Evening Mass", time: "5:00 PM", color: "bg-gold" },
  { day: "Sunday", label: "First Mass", time: "7:00 AM", color: "bg-sky" },
  { day: "Sunday", label: "Second Mass", time: "9:00 AM", color: "bg-sun" },
  { day: "Friday", label: "Confessions", time: "4:00 PM", color: "bg-plum" },
];

const STATS: { n: string; l: string; color: string }[] = [
  { n: "1000+", l: "Community members", color: "bg-primary" },
  { n: "6", l: "Prayer houses", color: "bg-brick" },
  { n: "8", l: "Groups & movements", color: "bg-teal" },
  { n: "2", l: "Sunday Masses", color: "bg-plum" },
];

const RESOURCES = [
  {
    title: "Semester Program & Calendar",
    note: "Every Mass, event, and prayer house meeting in one place.",
    href: `${SITE}/events`,
    icon: icons.calendar,
    color: "bg-sky",
  },
  {
    title: "Daily Catholic Readings",
    note: "The day's Mass readings and reflections, updated daily.",
    href: `${SITE}/prayer`,
    icon: icons.book,
    color: "bg-leaf",
  },
  {
    title: "Full Chaplaincy Website",
    note: "About us, leadership, groups, and how to get involved.",
    href: SITE,
    icon: icons.cross,
    color: "bg-brick",
  },
];

export default function HomePage() {
  // const pageRef = useRef<HTMLDivElement>(null);
  // useScrollReveal(pageRef);

  return (
   
    <div className="min-h-screen bg-background">

      <ScrollReveal />

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur">
  <Ribbon />

  <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
    <span className="flex items-center gap-2 font-display text-base font-semibold text-foreground">
      <Image
        src="https://res.cloudinary.com/dfdegqwp6/image/upload/v1786945731/WhatsApp_Image_2026-08-17_at_8.42.11_AM_rthtlc.jpg"
        alt="St. Anne's Catholic Chaplaincy CSA Maseno logo"
        width={32}
        height={32}
        className="h-8 w-8 object-contain"
      />

      St. Anne's · CSA Maseno
    </span>

    <div className="flex items-center gap-2">
      <a
        href="#join"
        className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground transition-transform hover:-translate-y-0.5"
      >
        Join CSA
      </a>

      <a
        href={SITE}
        className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
      >
        Visit our website
        <Icon path={icons.external} className="h-4 w-4" />
      </a>
    </div>
  </div>
</header>
      {/* <header className="sticky top-0 z-50 bg-background/90 backdrop-blur">
        <Ribbon />
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <span className="flex items-center gap-2 font-display text-base font-semibold text-foreground">
            <Icon path={icons.cross} className="h-4 w-4 text-primary" />
            St. Anne's · CSA Maseno
          </span>
          <div className="flex items-center gap-2">
            <a
              href="#join"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground transition-transform hover:-translate-y-0.5"
            >
              Join CSA
            </a>
            <a
              href={SITE}
              className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
            >
              Visit our website
              <Icon path={icons.external} className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header> */}


      {/* HERO — full bleed poster cover */}
      <section className="relative isolate overflow-hidden bg-ink">
        <Image
          src="https://res.cloudinary.com/dfdegqwp6/image/upload/v1786942060/WhatsApp_Image_2026-08-16_at_10.23.05_PM_gqlaop.jpg"
          loading="eager"
          alt="Catholic students welcoming first-years outside St. Anne's Chaplaincy at Maseno University"
          width={1280}
          height={1600}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
          <p
            className="flex animate-float-up items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-gold"
            style={{ animationDelay: "80ms" }}
          >
            <Icon path={icons.compass} className="h-4 w-4" />
            0°00' — the versity at the Equator
          </p>
          <h1
            className="mt-6 max-w-3xl animate-float-up font-display text-6xl leading-[0.98] font-semibold text-cream md:text-8xl"
            style={{ animationDelay: "180ms" }}
          >
            Karibu sana,
            <br />
            <span className="italic text-gold">Class of 2026/2027.</span>
          </h1>
          <p
            className="mt-6 max-w-xl animate-float-up text-lg leading-relaxed text-cream/80"
            style={{ animationDelay: "320ms" }}
          >
            A little picture-brochure of your new home: St. Anne's Catholic Chaplaincy and the
            Catholic Students' Association at Maseno University.
          </p>
          <div
            className="mt-8 flex animate-float-up flex-wrap gap-3"
            style={{ animationDelay: "440ms" }}
          >
            <a
              href="#welcome-ceremony"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Join the First-Years' Welcome
              <Icon path={icons.arrow} className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#groups"
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-6 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-1 hover:bg-cream/10"
            >
              Meet CSA
            </a>
          </div>

        </div>
        <Ribbon />
      </section>

      {/* STATS — colour blocks */}
      <section className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-5 py-10 md:grid-cols-4">
        {STATS.map((s, i) => (
          <div
            key={s.l}
            data-reveal
            data-reveal-delay={i * 90}
            className={`${s.color} lift rounded-2xl p-6 text-cream shadow-sm`}
          >
            <p className="font-display text-4xl font-semibold">{s.n}</p>
            <p className="mt-1 text-sm text-cream/85">{s.l}</p>
          </div>
        ))}
      </section>

      {/* 01 — ABOUT */}
      <section className="mx-auto max-w-6xl px-5 py-10">
        <SectionTag num="01" color="bg-primary">
          About us
        </SectionTag>
        <div className="mt-6 grid items-stretch gap-4 md:grid-cols-5">
          <div data-reveal className="reveal-left rounded-3xl bg-secondary p-8 md:col-span-3">
            <h2 className="font-display text-4xl font-semibold leading-tight text-foreground">
              A family that prays, laughs, and grows together
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              St. Anne's Catholic Chaplaincy is the spiritual home of the Catholic community at
              Maseno University, under the Archdiocese of Kisumu. At its heart is CSA — a vibrant,
              student-led community of over a thousand members bound by faith, friendship, and
              service.
            </p>
            <ul className="mt-6 space-y-2">
              {[
                ["bg-brick", "A prayer house that feels like a small family"],
                ["bg-teal", "A movement that matches your gifts"],
                ["bg-plum", "A chaplaincy family for every season"],
              ].map(([c, t]) => (
                <li key={t} className="flex items-center gap-3 text-sm font-medium text-foreground">
                  <span className={`${c} h-2.5 w-2.5 shrink-0 rounded-full`} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src= "https://res.cloudinary.com/dfdegqwp6/image/upload/v1775735304/group_gallery/2026/04/09/WhatsApp_Image_2026-04-09_at_2.44.31_PM_l1ykhl.jpg"
            alt="Students of the Catholic Students' Association praying together on campus"
            width={1200}
            height={1400}
            loading="lazy"
            data-reveal
            data-reveal-delay={120}
            className="reveal-right h-full min-h-64 w-full rounded-3xl object-cover md:col-span-2"
          />
        </div>
      </section>

      
      {/* 02 — PRAYER HOUSES as a colourful numbered list */}
      <section className="mx-auto max-w-6xl px-5 py-10">
        <SectionTag num="02" color="bg-brick">
          Small Christian Communities
        </SectionTag>
        <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-foreground">
          Six prayer houses. One family.
        </h2>

        <ol className="mt-8 overflow-hidden rounded-3xl border border-border bg-card">
          {PRAYER_HOUSES.map((h, i) => (
            <li
              key={h.name}
              data-reveal
              data-reveal-delay={i * 80}
              className="group border-b border-border px-5 py-5 transition-colors duration-300 last:border-b-0 hover:bg-secondary sm:px-7"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <span
                  className={`${h.color} flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl font-mono text-sm font-bold text-cream transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {h.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{h.note}</p>
                </div>
                <Icon path={icons.cross} className="hidden h-5 w-5 text-border sm:block" />
              </div>

              {/* Small Christian Communities under this prayer house */}
              <ul className="mt-4 ml-16 grid gap-1.5 sm:ml-[4.5rem] sm:grid-cols-2">
                {h.communities.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span
                      className={`${h.color} mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full`}
                    />
                    {c}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* 03 — GROUPS as colour tiles */}
      <section id="groups" className="mx-auto max-w-6xl px-5 py-10">
        <SectionTag num="03" color="bg-teal">
          Find your gift
        </SectionTag>
        <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-foreground">
          Groups & movements for every calling
        </h2>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map((g, i) => (
            <article
              key={g.name}
              data-reveal
              data-reveal-delay={i * 70}
              className={`${g.color} lift rounded-2xl p-5 text-cream`}
            >
              <h3 className="font-display text-lg font-semibold">{g.name}</h3>
              <p className="mt-1 text-sm text-cream/85">{g.note}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 04 — MASS SCHEDULE */}
      <section className="mt-10 bg-ink py-16 text-cream">
        <div className="mx-auto max-w-6xl px-5">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-gold">04 — Come, pray with us</p>
          <h2 className="mt-4 font-display text-4xl font-semibold">Mass schedule</h2>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {SCHEDULE.map((s, i) => (
              <div
                key={`${s.day}-${s.label}`}
                data-reveal
                data-reveal-delay={i * 70}
                className="lift flex items-center gap-4 overflow-hidden rounded-2xl bg-cream/5 hover:bg-cream/10"
              >
                <span className={`${s.color} h-full w-2 self-stretch`} aria-hidden="true" />
                <div className="flex flex-1 items-baseline justify-between gap-4 py-5 pr-5">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-gold">
                      {s.day}
                    </p>
                    <p className="mt-1 text-lg font-semibold">{s.label}</p>
                  </div>
                  <p className="font-display text-2xl font-semibold text-gold">{s.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — EVENTS as picture list rows */}
      {/* <section className="mx-auto max-w-6xl px-5 py-14">
        <SectionTag num="05" color="bg-plum">
          Life at CSA
        </SectionTag>
        <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-foreground">
          Our signature moments
        </h2>

        <div className="mt-8 space-y-4">
          {EVENTS.map((e, i) => (
            <article
              key={e.title}
              data-reveal
              className={`zoom-img lift grid overflow-hidden rounded-3xl border border-border bg-card sm:grid-cols-2 ${
                i % 2 === 1 ? "reveal-right sm:[&>img]:order-2" : "reveal-left"
              }`}
            >
              <Image
                src={e.img}
                alt={e.title}
                width={1024}
                height={768}
                sizes="(max-width: 640px) 100vw, 50vw"
                loading="lazy"
                className="h-56 w-full object-cover sm:h-full"
              />
              <div className="flex flex-col justify-center p-7">
                <span
                  className={`${e.color} inline-flex w-fit rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-cream`}
                >
                  {e.tag}
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">
                  {e.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{e.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section> */}
      {/* 05 — EVENTS as picture list rows */}
<section className="mx-auto max-w-6xl px-5 py-14">
  <SectionTag num="05" color="bg-plum">
    Life at CSA
  </SectionTag>
  <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-foreground">
    Our signature moments
  </h2>

  <div className="mt-8 space-y-4">
    {EVENTS.map((e, i) => (
      <article
        key={e.title}
        data-reveal
        className={`zoom-img lift grid overflow-hidden rounded-3xl border border-border bg-card sm:grid-cols-2 sm:h-72 ${
          i % 2 === 1 ? "reveal-right sm:[&>div:first-child]:order-2" : "reveal-left"
        }`}
      >
        {/* Image container – fixed height on all screens */}
        <div className="relative h-56 w-full sm:h-full">
          <Image
            src={e.img}
            alt={e.title}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            loading="lazy"
            className="object-cover"
          />
        </div>

        {/* Text content */}
        <div className="flex flex-col justify-center p-7">
          <span
            className={`${e.color} inline-flex w-fit rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-cream`}
          >
            {e.tag}
          </span>
          <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">
            {e.title}
          </h3>
          <p className="mt-2 leading-relaxed text-muted-foreground">{e.note}</p>
        </div>
      </article>
    ))}
  </div>
</section>

      {/* 06 — T-SHIRT + CEREMONY */}
      <section className="mx-auto max-w-6xl px-5 pb-14">
        <SectionTag num="06" color="bg-sun">
          Welcome week
        </SectionTag>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="zoom-img lift overflow-hidden rounded-3xl bg-secondary" data-reveal>
            <Image
              src="/assets/tshirt.jpg"
              alt="CSA semester t-shirt in forest green with a gold cross emblem"
              width={1024}
              height={768}
              loading="lazy"
              className="h-56 w-full object-cover"
            />
            <div className="p-7">
              <h3 className="flex items-center gap-2 font-display text-2xl font-semibold text-foreground">
                <Icon path={icons.shirt} className="h-5 w-5 text-primary" />
                Semester T-Shirt
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Wear the CSA family with pride. Every semester we release a new design — a small way
                to belong and support the ministry.
              </p>
              <p className="mt-5 inline-block rounded-full bg-gold px-4 py-1.5 font-mono text-sm font-bold text-gold-foreground">
                Ksh 800
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Available from the Executive leadership and during welcome week.
              </p>
            </div>
          </article>

          <article
            id="welcome-ceremony"
            data-reveal
            data-reveal-delay={120}
            className="lift rounded-3xl bg-primary p-8 text-primary-foreground"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cream/15">
              <Icon path={icons.users} className="h-6 w-6" />
            </span>
            <h3 className="mt-6 font-display text-3xl font-semibold">
              First-Years' Welcome Ceremony
            </h3>
            <p className="mt-3 leading-relaxed text-primary-foreground/85">
              CSA will officially welcome the Class of 2026/2027 with a special ceremony — prayer,
              introductions, food, and a first taste of the CSA family spirit. Date and venue will
              be shared on our socials and the Chaplaincy website.
            </p>
            <a
              href={`${SITE}/events`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-transform hover:-translate-y-0.5"
            >
              Check the Events Calendar
              <Icon path={icons.external} className="h-4 w-4" />
            </a>
          </article>
        </div>
      </section>

      {/* 07 — JOIN THE FAMILY: FORM + WHATSAPP */}
      <section id="join" className="mx-auto max-w-6xl px-5 pb-16">
        <SectionTag num="07" color="bg-brick">
          Join the family
        </SectionTag>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div data-reveal className="reveal-left">
            <h2 className="font-display text-4xl font-semibold leading-tight text-foreground">
              Leave your details — we'll welcome you personally
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Name, phone number and the course you're doing. That's all we need to link you to a
              prayer house, a group and a friendly face during welcome week.
            </p>

            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="lift mt-7 flex items-center gap-4 rounded-3xl bg-leaf p-6 text-cream"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cream/20">
                <Icon path={icons.phone} className="h-6 w-6" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-xl font-semibold">
                  CSA Maseno WhatsApp Group
                </span>
                <span className="block text-sm text-cream/85">
                  Daily updates, Mass reminders and event alerts — tap to join.
                </span>
              </span>
              <Icon path={icons.external} className="hidden h-5 w-5 sm:block" />
            </a>
          </div>

          <div data-reveal data-reveal-delay={120} className="reveal-right">
            <JoinCsaForm />
          </div>
        </div>
      </section>

      {/* 08 — RESOURCES */}
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <SectionTag num="08" color="bg-sky">
          Stay connected
        </SectionTag>
        <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-foreground">
          Everything else lives on our website
        </h2>

        <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-card">
          {RESOURCES.map((r, i) => (
            <a
              key={r.title}
              href={r.href}
              data-reveal
              data-reveal-delay={i * 70}
              className="group flex items-center gap-5 border-b border-border px-5 py-5 transition-colors duration-300 last:border-b-0 hover:bg-secondary sm:px-7"
            >
              <span
                className={`${r.color} inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-cream`}
              >
                <Icon path={r.icon} className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-lg font-semibold text-foreground">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.note}</p>
              </div>
              <Icon
                path={icons.arrow}
                className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1"
              />
            </a>
          ))}
        </div>
      </section>

      {/* 09 — LOCATOR + CONTACT */}
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div data-reveal className="reveal-left">

            <SectionTag num="09" color="bg-leaf">
              Find us
            </SectionTag>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-foreground">
              St. Anne's on the Maseno campus
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              The chaplaincy sits right on the Equator, at the heart of Maseno University. Pin the
              map below and come find us for Mass, a prayer house, or a chat.
            </p>
            <div className="mt-6 overflow-hidden rounded-3xl border border-border shadow-sm">
              {/* <iframe
                title="St. Anne's Catholic Chaplaincy location"
                src={`https://www.google.com/maps/embed/v1/place?key=${
                  process.env.NEXT_PUBLIC_GOOGLE_MAPS_BROWSER_KEY
                }&q=place_id:ChIJ6Xft7_GpKhgR1goBzFWlyLk`}
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block bg-secondary"
              /> */}
              <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8182763092873!2d34.596192821512474!3d-0.008512447724042497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa9f7db000001%3A0x458077a06358c7ec!2sSt.%20Anne's%20Chaplaincy%20Maseno!5e0!3m2!1sen!2ske!4v1786857235530!5m2!1sen!2ske" 
               width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block bg-secondary">

               </iframe>
            </div>
          </div>

          <div data-reveal className="reveal-right">

            <SectionTag num="10" color="bg-sun">
              Reach the leadership
            </SectionTag>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-foreground">
              Call the student executive
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              The CSA executive is happy to answer questions about prayer houses, groups, events,
              or the First-Years' Welcome.
            </p>
            <div className="mt-6 space-y-4">
              {[
                { role: "CSA Chair", name: "Chairperson - Vincent Otiende", phone: "+254 769 028 829", color: "bg-primary" },
                { role: "CSA Secretary", name: "Secretary - Celestine Mwongeli", phone: "+254 759 556 624", color: "bg-sun" },
              ].map((c) => (
                <a
                  key={c.role}
                  href={`tel:${c.phone.replace(/\s/g, "")}`}
                  className="lift group flex items-center gap-5 overflow-hidden rounded-2xl border border-border bg-card p-5 transition-colors hover:bg-secondary"
                >
                  <span
                    className={`${c.color} inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-cream`}
                  >
                    <Icon path={icons.phone} className="h-6 w-6" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {c.role}
                    </p>
                    <p className="font-display text-lg font-semibold text-foreground">{c.name}</p>
                    <p className="text-sm text-primary">{c.phone}</p>
                  </div>
                  <Icon
                    path={icons.external}
                    className="hidden h-5 w-5 text-primary transition-transform group-hover:translate-x-1 sm:block"
                  />
                </a>
              ))}
            </div>
            <p className="mt-5 text-xs text-muted-foreground">
              Numbers are placeholders — tap the card to call.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-cream">
        <Ribbon />
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-3">
          <div>
            <h2 className="font-display text-xl font-semibold">St. Anne's Chaplaincy</h2>
            <p className="mt-3 text-sm leading-relaxed text-cream/70">
              Maseno University Campus, Archdiocese of Kisumu. A vibrant Catholic community
              fostering faith, fellowship, and service.
            </p>
          </div>
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-gold">Contact</h2>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              <li>+254 759 556 624</li>
              <li>info@stanneschaplaincy.com</li>
              <li>csa.maseno@stanneschaplaincy.com</li>
            </ul>
          </div>
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-gold">Quick links</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["Home", SITE],
                ["Groups & Movements", `${SITE}/groups`],
                ["Prayer & Daily Readings", `${SITE}/prayer`],
                ["Events Calendar", `${SITE}/events`],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-cream/70 transition-colors hover:text-gold">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-cream/15 py-6 text-center text-xs text-cream/50">
          © {new Date().getFullYear()} St. Anne's Chaplaincy, Maseno University — Archdiocese of
          Kisumu.
        </div>
      </footer>


      {/* Floating WhatsApp button */}
      <a
        href={WHATSAPP_GROUP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join CSA Maseno WhatsApp Group"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-300 hover:scale-110 hover:shadow-2xl animate-whatsapp-vibrate sm:bottom-8 sm:right-8 sm:h-20 sm:w-20"
      >
        {/* WhatsApp icon */}
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-9 w-9 sm:h-11 sm:w-11"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>

        {/* Optional small “Join” label on hover / larger screens */}
        <span className="absolute -top-10 right-0 hidden whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-cream shadow-md sm:group-hover:block">
          Join WhatsApp
        </span>
      </a>
    </div>
  );
}
