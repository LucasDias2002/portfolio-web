import { useEffect, useRef, useState } from "react";
import {
  Download, Mail, Linkedin, Github, ArrowRight,
  Code2, Database, Cloud, GraduationCap, Award, MapPin,
} from "lucide-react";
import profilePhoto from "@/assets/profile.jpg";
import formationImg from "@/assets/formation.jpg";
import cv from "@/assets/cv-download.pdf";
import {
  profile, experiences, projects, education, certifications, stats,
} from "./data";

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShown(true),
      { threshold: 0.15 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, shown };
}

function Section({
  id, eyebrow, title, children,
}: { id: string; eyebrow?: string; title: string; children: React.ReactNode }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <section id={id} className="py-24 px-6 scroll-mt-20">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-700 ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
      >
        <div className="mb-12 text-center">
          {eyebrow && (
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              {eyebrow}
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {title}
          </h2>
          <div className="mt-4 mx-auto h-1 w-16 rounded-full" style={{ background: "var(--gradient-primary)" }} />
        </div>
        {children}
      </div>
    </section>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-12 px-6 overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="animate-fade-up">
          {/* <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full surface-card text-xs text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Disponível para novos projetos
          </span> */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Hello, I am <br />
            <span className="text-gradient">{profile.name}</span>
          </h1>
          <p className="mt-4 text-xl text-primary font-medium">{profile.role}</p>
          <p className="mt-6 text-muted-foreground text-lg max-w-xl leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={cv}
              download="cv-lucasdias.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 glow"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Download size={18} /> Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium border border-border surface-card hover:bg-accent transition-colors"
            >
              <Mail size={18} /> Contact
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank" rel="noreferrer"
              className="p-3 rounded-lg surface-card hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={profile.github}
              target="_blank" rel="noreferrer"
              className="p-3 rounded-lg surface-card hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-3 rounded-lg surface-card hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end animate-fade-in">
          <div className="relative">
            {/* Glow */}
            <div
              className="absolute -inset-2 sm:-inset-4 rounded-full blur-xl sm:blur-2xl opacity-30 sm:opacity-60"
              style={{ background: "var(--gradient-primary)" }}
            />

            {/* Foto */}
            <div className="relative w-64 h-64 sm:w-100 sm:h-100 overflow-hidden rounded-full border border-border surface-card animate-float">
              <img
                src={profilePhoto}
                alt={profile.name}
                width={768}
                height={896}
                className="w-full h-full object-cover"
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
    <Section id="about" eyebrow="About Me" title="A little about my journey">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 surface-card rounded-2xl p-8 space-y-4 text-muted-foreground leading-relaxed">
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
            , developing APIs, enterprise systems, and web applications. I’m
            particularly interested in software architecture, clean code, and
            building solutions that are reliable and easy to evolve.
          </p>

          <p>
            More recently, I’ve started{" "}
            <span className="text-foreground font-medium">
              exploring cloud computing and AWS
            </span>
            , studying core cloud concepts, AWS services, infrastructure, and how
            cloud technologies can be applied to build scalable and resilient
            applications. This is an area I’m continuously developing as part of
            my professional growth.
          </p>
        </div>
        <div className="space-y-4">
          {[
            { icon: Code2, title: "Clean Code", desc: "Readable, maintainable, and well-structured code." },
            { icon: Database, title: "Architecture", desc: "Scalable APIs and systems built with solid architecture." },
            { icon: Cloud, title: "Technology", desc: "Modern technologies focused on reliable and efficient solutions." },
          ].map((c) => (
            <div key={c.title} className="surface-card rounded-xl p-5 flex gap-4">
              <div className="p-2 rounded-lg bg-primary/15 text-primary h-fit">
                <c.icon size={20} />
              </div>
              <div>
                <h3 className="font-semibold">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

const technologyLogos: Record<string, string> = {
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
  ".NET": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  Angular: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "SQL Server": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  //AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  "Git / GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
};

const technologies = Object.keys(technologyLogos);

export function Technologies() {
  return (
    <section id="technologies" className="py-16 px-6 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            Tools
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold">Technologies I Use</h2>
        </div>

        <div className="tech-marquee" aria-label="Technologies I Use">
          <div className="tech-marquee__track">
            {[0, 1].map((copy) => (
              <div className="tech-marquee__group" key={copy} aria-hidden={copy === 1}>
                {technologies.map((technology) => (
                  <div className="tech-marquee__item" key={`${copy}-${technology}`} title={technology}>
                    <img src={technologyLogos[technology]} alt={copy === 0 ? technology : ""} loading="lazy" />
                    <span>{technology}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <Section id="experience" eyebrow="Career" title="Proffissional Experience">
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}
            >
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-2 glow" />
              <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                <span className="text-sm text-primary font-medium">{exp.period}</span>
                <h3 className="text-xl font-bold mt-1">{exp.role}</h3>
                <p className="text-muted-foreground flex items-center gap-1.5 md:justify-end mt-1"
                  style={{ justifyContent: i % 2 === 0 ? "flex-end" : "flex-start" }}>
                  <MapPin size={14} /> {exp.company}
                </p>
              </div>
              <div className={`pl-12 md:pl-0 mt-3 md:mt-0 ${i % 2 === 0 ? "md:pl-8" : "md:text-right md:pr-8"}`}>
                <div className="surface-card rounded-xl p-5">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {exp.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <ArrowRight size={14} className="text-primary shrink-0 mt-1" />
                        <span className="text-left">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.stack.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="Portfolio" title="Projects in the Spotlight">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="surface-card rounded-2xl overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="aspect-video overflow-hidden border-b border-border">
              <img
                src={p.image}
                alt={p.title}
                width={1024} height={640}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                <a href={p.github} className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors">
                  <Github size={16} /> Código
                </a>
                {/* <a href={p.demo} className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors">
                  <ExternalLink size={16} /> Demo
                </a> */}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Formation() {
  return (
    <Section
      id="formation"
      eyebrow="Learning"
      title="Academic Formation"
    >
      <div className="surface-card rounded-2xl p-6">
        <div className="grid md:grid-cols-[1fr_380px] gap-8 items-center">

          {/* Conteúdo */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/15 text-primary">
                <GraduationCap size={20} />
              </div>

              <h3 className="text-lg font-bold">
                Academic Formation
              </h3>
            </div>

            {education.map((e) => (
              <div key={e.course}>
                <h4 className="font-semibold text-base">
                  {e.course}
                </h4>

                <p className="text-sm text-muted-foreground mt-1">
                  {e.school} · {e.period}
                </p>

                <p className="text-xs uppercase tracking-wider text-primary mt-5 mb-3">
                  KEY SUBJECTS
                </p>

                <div className="flex flex-wrap gap-2">
                  {e.subjects.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1.5 rounded-md border border-border"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Foto da formatura */}
          <div className="w-full">
            <img
              src={formationImg}
              alt="Foto da formatura"
              className="w-full h-80 object-cover rounded-xl"
            />
          </div>

        </div>
      </div>
    </Section>
  );
}

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Learning"
      title="Certifications"
    >
      <div className="surface-card rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 rounded-lg bg-primary/15 text-primary">
            <Award size={20} />
          </div>

          <h3 className="text-lg font-bold">
            Certifications
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
          {certifications.map((c) => (
            <div
              key={c.title}
              className="py-3 border-b border-border"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-medium text-sm">
                    {c.title}
                  </p>

                  <p className="text-xs text-muted-foreground mt-1">
                    {c.issuer}
                  </p>
                </div>

                <span className="text-xs text-primary shrink-0">
                  {c.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Stats() {
  return (
    <section className="px-6 py-12">
      <div className="max-w-7xl mx-auto surface-card rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient">{s.value}</div>
            <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section id="contact" eyebrow="Let's Connect" title="Get in Touch">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <p className="text-muted-foreground">
          Open to new opportunities, freelance projects, and collaborations.
          Feel free to reach out and I'll get back to you as soon as possible.
        </p>

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              icon: Mail,
              label: "Email",
              value: profile.email,
              href: `mailto:${profile.email}`,
            },
            {
              icon: Linkedin,
              label: "LinkedIn",
              value: "linkedin.com/in/lucasphillipe",
              href: profile.linkedin,
            },
            {
              icon: Github,
              label: "GitHub",
              value: "github.com/LucasDias2002",
              href: profile.github,
            },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 surface-card rounded-xl p-5 hover:border-primary/50 transition-colors"
            >
              <div className="p-3 rounded-lg bg-primary/15 text-primary">
                <c.icon size={20} />
              </div>

              <div className="min-w-0">
                <p className="text-xs text-muted-foreground mb-1">
                  {c.label}
                </p>
                <p className="text-sm font-medium truncate max-w-full">
                  {c.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <a href={profile.linkedin} aria-label="LinkedIn" className="p-2 rounded-md hover:text-primary transition-colors"><Linkedin size={18} /></a>
          <a href={profile.github} aria-label="GitHub" className="p-2 rounded-md hover:text-primary transition-colors"><Github size={18} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="p-2 rounded-md hover:text-primary transition-colors"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
