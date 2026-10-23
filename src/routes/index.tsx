import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { BackToTop } from "@/components/portfolio/BackToTop";
import {
  Hero, About, Technologies, Skills, Experience, Projects, Formation, Certifications, Contact, Footer,
} from "@/components/portfolio/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lucas Phillipe | .NET & Angular Developer" },
      {
        name: "description",
        content:
          "Portfolio of Lucas Phillipe, Full Stack Developer specializing in C#, .NET, Angular, SQL, and scalable web applications.",
      },
      {
        property: "og:title",
        content: "Lucas Phillipe — Full Stack Developer",
      },
      {
        property: "og:description",
        content:
          "Full Stack Developer focused on .NET, Angular, REST APIs, enterprise applications, and scalable solutions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "author", content: "Lucas Phillipe" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&family=Outfit:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="min-h-dvh">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <BackToTop />
      <main id="main">
        <Hero />
        <About />
        <Technologies />
        <Skills />
        <Experience />
        <Projects />
        <Formation />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
