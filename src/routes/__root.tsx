import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import favicon from "../assets/favicon.ico";

import appCss from "../styles.css?url";
import { reportError } from "../lib/error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center bg-background px-6">
      <div className="page-wrap w-full py-24">
        <p className="font-mono text-xs tracking-[0.18em] text-primary">404</p>
        <h1 className="mt-4 font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.9] tracking-tight">
          Page not found.
        </h1>
        <p className="mt-6 max-w-[42ch] text-muted-foreground leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-10 inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center bg-background px-6">
      <div className="page-wrap w-full py-24">
        <p className="font-mono text-xs tracking-[0.18em] text-primary">Error</p>
        <h1 className="mt-4 font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-tight">
          This page did not load.
        </h1>
        <p className="mt-4 max-w-[42ch] text-muted-foreground leading-relaxed">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:text-primary"
          >
            Back to home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lucas Phillipe — Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Lucas Phillipe, Full Stack Developer specializing in C#, .NET, Angular, SQL, and scalable web applications.",
      },
      { name: "author", content: "Lucas Phillipe" },
      { property: "og:title", content: "Lucas Phillipe — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Full Stack Developer focused on .NET, Angular, REST APIs, enterprise applications, and scalable solutions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      {
        rel: "icon",
        href: favicon,
        type: "image/x-icon",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
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
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}",
          }}
        />
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
