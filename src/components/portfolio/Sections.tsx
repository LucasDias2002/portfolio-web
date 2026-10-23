import { useEffect, useRef, useState, type MouseEvent, type ReactNode, type SVGProps } from "react";
import profilePhoto from "@/assets/profile-portrait.jpg";
import formationImg from "@/assets/formation.jpg";
import cv from "@/assets/cv-download.pdf";
import {
  profile, experiences, projects, education, certifications, skills,
} from "./data";

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShown(true),
      { threshold: 0.12 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, shown };
}

function IconMail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}
function IconGithub(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M9 19c-4.3 1.4-4.3-2.1-6-2.5M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.3c0 4.6 2.7 5.7 5.5 6-.6.5-.6 1.2-.5 2V21" />
    </svg>
  );
}
function IconLinkedin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M8 11v8M8 7.5v.01" strokeLinecap="round" />
      <path d="M12 19v-5.2c0-1.6.8-2.8 2.5-2.8 1.6 0 2.5 1.1 2.5 2.8V19" strokeLinecap="round" />
      <path d="M4 4h16v16H4z" opacity="0" />
    </svg>
  );
}
function IconDownload(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M12 4v12m0 0 4-4m-4 4-4-4M5 20h14" />
    </svg>
  );
}
function IconArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M5 12h14m0 0-5-5m5 5-5 5" />
    </svg>
  );
}

function Section({
  id, index, eyebrow, title, children,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <section id={id} className="pt-24 pb-28 scroll-mt-24">
      <div
        ref={ref}
        className={`page-wrap transition-all duration-700 ${
          shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <header className="mb-14 max-w-3xl">
          <p className="font-mono text-[0.7rem] tracking-[0.18em] text-primary mb-3">
            {index} <span className="text-muted-foreground font-sans tracking-normal italic lowercase">/ {eyebrow}</span>
          </p>
          <h2 className="text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05]">
            {title}
          </h2>
        </header>
        {children}
      </div>
    </section>
  );
}

function SpotlightCard({
  children, className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r || !ref.current) return;
    ref.current.style.setProperty("--sx", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--sy", `${e.clientY - r.top}px`);
  };
  return (
    <article ref={ref} onMouseMove={onMove} className={`spotlight-card ${className}`}>
      {children}
    </article>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-dvh flex items-center">
      <div className="page-wrap w-full pt-28 pb-16 md:pb-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <p className="font-mono text-xs tracking-[0.22em] text-primary mb-5">
              {profile.role}
            </p>
            <h1 className="font-display text-[clamp(3rem,9vw,6.75rem)] leading-[0.9] tracking-[-0.04em]">
              {profile.firstName}
              <br />
              <span className="italic text-primary">{profile.lastName}</span>
            </h1>
            <p className="mt-7 max-w-[38ch] text-muted-foreground text-lg leading-[1.7]">
              {profile.tagline}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={cv}
                download="cv-lucasdias.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <IconDownload className="size-4" />
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:text-primary"
              >
                Contact
                <IconArrow className="size-4" />
              </a>
            </div>
            <div className="mt-8 flex items-center gap-5 font-mono text-xs text-muted-foreground">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors duration-200">
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors duration-200">
                GitHub
              </a>
              <a href={`mailto:${profile.email}`} className="hover:text-foreground transition-colors duration-200">
                Email
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative animate-fade-in">
            <div className="relative max-w-md mx-auto lg:ml-auto">
              <div className="absolute -inset-3 rounded-[2rem] bg-primary/10 -z-10" />
              <img
                src={profilePhoto}
                alt={`${profile.name}, Full Stack Developer`}
                width={640}
                height={800}
                className="relative w-full aspect-[4/5] max-h-[min(32rem,72vh)] object-cover object-[center_22%] rounded-[1.75rem] ring-1 ring-primary/15"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title="A path from the classroom to production systems.">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-7 space-y-5 text-muted-foreground leading-[1.8] max-w-[62ch]">
          <p>
            I hold a degree in{" "}
            <span className="text-foreground font-medium">
              Systems Analysis and Development
            </span>{" "}
            and work as a Full Stack Developer, building applications focused on
            solving real-world problems. My journey started during college, where
            personal and academic projects helped me turn theory into practical
            experience.
          </p>
          <p>
            I primarily work with{" "}
            <span className="text-foreground font-medium">
              C#, .NET, Angular, and SQL
            </span>
            , developing APIs, enterprise systems, and web applications. I am
            particularly interested in software architecture, clean code, and
            building solutions that are reliable and easy to evolve.
          </p>
          <p>
            More recently, I have started{" "}
            <span className="text-foreground font-medium">
              exploring cloud computing and AWS
            </span>
            , studying core cloud concepts, AWS services, infrastructure, and how
            cloud technologies can be applied to build scalable and resilient
            applications. This is an area I am continuously developing as part of
            my professional growth.
          </p>
        </div>
        <aside className="lg:col-span-5 lg:pt-2 space-y-8">
          {[
            { label: "Currently", value: "Software Development Intern", detail: "Stefanini IHM" },
            { label: "Education", value: "Systems Analysis and Development", detail: "PUC Minas · 2024 — 2026" },
            { label: "Focus", value: "APIs, enterprise systems, web apps", detail: "C#, .NET, Angular, SQL" },
          ].map((item) => (
            <div key={item.label} className="border-t border-border pt-4">
              <p className="font-mono text-[0.7rem] tracking-[0.16em] text-primary mb-2">
                {item.label}
              </p>
              <p className="font-display text-2xl leading-snug">{item.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{item.detail}</p>
            </div>
          ))}
        </aside>
      </div>
    </Section>
  );
}

const technologyLogos: { name: string; src: string; mono?: boolean }[] = [
  { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "Spring Boot", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
  { name: "C#", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
  { name: ".NET", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Angular", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "SQL Server", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Git / GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", mono: true },
];

export function Technologies() {
  return (
    <section id="technologies" className="py-16 overflow-hidden scroll-mt-24">
      <div className="tech-marquee" aria-label="Technologies I use">
        <div className="tech-marquee__track">
          {[0, 1].map((copy) => (
            <div className="tech-marquee__group" key={copy} aria-hidden={copy === 1}>
              {technologyLogos.map((technology) => (
                <div className="tech-marquee__item" key={`${copy}-${technology.name}`} title={technology.name}>
                  <img
                    src={technology.src}
                    alt={copy === 0 ? technology.name : ""}
                    loading="lazy"
                    className={technology.mono ? "is-mono" : undefined}
                  />
                  <span>{technology.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function skillWeight(level: number) {
  if (level >= 90) return 600;
  if (level >= 82) return 500;
  return 400;
}

export function Skills() {
  return (
    <Section id="skills" index="02" eyebrow="Skills" title="Languages and tools I use every week.">
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-x-10 gap-y-12">
        {Object.entries(skills).map(([group, items], i) => (
          <div key={group} className={i === 0 ? "xl:-mt-2" : i === 3 ? "xl:mt-10" : ""}>
            <h3 className="font-display italic text-2xl mb-5">{group}</h3>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item.name} className="border-b border-border/70 pb-2">
                  <span style={{ fontWeight: skillWeight(item.level) }}>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" index="03" eyebrow="Work" title="Professional experience.">
      <ol className="space-y-0">
        {experiences.map((exp) => (
          <li
            key={exp.id}
            className="grid md:grid-cols-12 gap-3 md:gap-8 py-10 border-t border-border first:border-t-0 first:pt-0"
          >
            <p className="md:col-span-3 font-mono text-xs text-primary tabular-nums pt-1">
              {exp.period}
            </p>
            <div className="md:col-span-9">
              <h3 className="font-display text-2xl md:text-3xl leading-tight">{exp.role}</h3>
              <p className="text-muted-foreground mt-1">{exp.company}</p>
              <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground leading-relaxed max-w-[65ch]">
                {exp.bullets.map((b) => (
                  <li key={b} className="grid grid-cols-[0.55rem_1fr] gap-3">
                    <span className="mt-2 size-1.5 rounded-full bg-primary/80" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="font-mono text-[0.65rem] tracking-wide text-muted-foreground mt-5">
                {exp.stack.join(" · ")}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Projects() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p.title !== featured.title);

  return (
    <Section id="projects" index="04" eyebrow="Projects" title="Selected work.">
      <div className="space-y-8">
        <SpotlightCard className="rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-7 aspect-[16/10] lg:min-h-[22rem] overflow-hidden bg-muted">
              <img
                src={featured.image}
                alt={featured.title}
                width={1024}
                height={640}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-5 p-6 md:p-8 flex flex-col">
              <h3 className="font-display text-3xl leading-tight">{featured.title}</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-[42ch]">
                {featured.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1">
                {featured.stack.map((t) => (
                  <span key={t} className="font-mono text-[0.65rem] text-primary">{t}</span>
                ))}
              </div>
              {featured.github ? (
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto pt-8 inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors duration-200"
                >
                  <IconGithub className="size-4" />
                  View source
                </a>
              ) : null}
            </div>
          </div>
        </SpotlightCard>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {rest.map((p, i) => (
            <SpotlightCard
              key={p.title}
              className={`rounded-xl overflow-hidden flex flex-col ${i === 1 ? "md:mt-8" : ""}`}
            >
              <div className={`overflow-hidden bg-muted ${i === 2 ? "aspect-[4/3]" : "aspect-video"}`}>
                <img
                  src={p.image}
                  alt={p.title}
                  width={1024}
                  height={640}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display text-xl leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
                  {p.stack.map((t) => (
                    <span key={t} className="font-mono text-[0.65rem] text-primary">{t}</span>
                  ))}
                </div>
                <div className="mt-auto pt-5">
                  {p.github ? (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors duration-200"
                    >
                      <IconGithub className="size-4" />
                      View source
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground">Private source</span>
                  )}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Formation() {
  const course = education[0];
  return (
    <Section id="formation" index="05" eyebrow="Education" title="Academic formation.">
      <div className="grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-6 lg:pb-6">
          <p className="font-display italic text-primary text-xl mb-3">{course.school}</p>
          <h3 className="font-display text-3xl md:text-4xl leading-tight">{course.course}</h3>
          <p className="font-mono text-xs text-muted-foreground mt-3 tabular-nums">{course.period}</p>
          <p className="font-mono text-[0.7rem] tracking-[0.16em] text-primary mt-10 mb-4">
            Key subjects
          </p>
          <ul className="space-y-2 max-w-md">
            {course.subjects.map((s) => (
              <li key={s} className="text-sm text-muted-foreground border-b border-border/60 pb-2">
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-6 relative">
          <img
            src={formationImg}
            alt="Lucas Phillipe at graduation, PUC Minas"
            className="w-full h-[22rem] md:h-[28rem] object-cover rounded-2xl lg:-mb-8"
          />
        </div>
      </div>
    </Section>
  );
}

export function Certifications() {
  return (
    <Section id="certifications" index="06" eyebrow="Certificates" title="Certifications.">
      <ul>
        {certifications.map((c) => (
          <li
            key={c.title}
            className="grid grid-cols-[3.5rem_1fr] sm:grid-cols-[4.5rem_1fr_auto] gap-x-6 gap-y-1 py-5 border-t border-border"
          >
            <span className="font-mono text-xs text-primary tabular-nums pt-1">{c.year}</span>
            <p className="font-display text-lg sm:text-xl leading-snug">{c.title}</p>
            <p className="col-start-2 sm:col-start-auto text-sm text-muted-foreground sm:text-right sm:pt-1">
              {c.issuer}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Contact() {
  return (
      <Section id="contact" index="07" eyebrow="Contact" title="Let’s talk about the next system.">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <p className="text-muted-foreground max-w-[48ch] leading-relaxed">
            Open to new opportunities, freelance projects, and collaborations.
            Reach out and I will get back to you as soon as possible.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-block font-display text-[clamp(1.5rem,4vw,3rem)] leading-tight text-foreground hover:text-primary transition-colors duration-200 break-all"
          >
            {profile.email}
          </a>
        </div>
        <div className="lg:col-span-5 flex flex-col justify-end gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between border-t border-border pt-4 text-sm transition-colors duration-200 hover:text-primary"
          >
            <span className="inline-flex items-center gap-3">
              <IconLinkedin className="size-4" />
              linkedin.com/in/lucasphillipe
            </span>
            <IconArrow className="size-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between border-t border-border pt-4 text-sm transition-colors duration-200 hover:text-primary"
          >
            <span className="inline-flex items-center gap-3">
              <IconGithub className="size-4" />
              github.com/LucasDias2002
            </span>
            <IconArrow className="size-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center justify-between border-t border-border pt-4 text-sm transition-colors duration-200 hover:text-primary"
          >
            <span className="inline-flex items-center gap-3">
              <IconMail className="size-4" />
              Write an email
            </span>
            <IconArrow className="size-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </a>
        </div>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border px-6 pt-10 pb-12">
      <div className="page-wrap flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <p className="font-display text-xl">
            {profile.name}
            <span className="text-primary">.</span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
        <p className="text-xs text-muted-foreground max-w-xs sm:text-right">
          This site does not use cookies or collect personal data.
        </p>
      </div>
    </footer>
  );
}
