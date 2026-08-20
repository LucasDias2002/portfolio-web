import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import {
  Hero, About, Technologies, Experience, Projects, Formation, Certifications, Stats, Contact, Footer,
} from "@/components/portfolio/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lucas Dias — Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Lucas Dias, Full Stack Developer specializing in C#, .NET, Angular, SQL, and scalable web applications.",
      },
      {
        property: "og:title",
        content: "Lucas Dias — Full Stack Developer",
      },
      {
        property: "og:description",
        content:
          "Full Stack Developer focused on .NET, Angular, REST APIs, enterprise applications, and scalable solutions.",
      },
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
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Technologies />
        {/* <Stats /> */}
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
