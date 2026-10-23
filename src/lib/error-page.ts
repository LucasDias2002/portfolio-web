export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 16px/1.6 Outfit, system-ui, sans-serif; background: #f6f7fa; color: #1c2740; display: grid; place-items: center; min-height: 100dvh; margin: 0; padding: 1.5rem; }
      .card { max-width: 32rem; width: 100%; padding: 2rem 0; }
      h1 { font-family: "Instrument Serif", Georgia, serif; font-size: 2rem; font-weight: 400; margin: 0 0 0.75rem; }
      p { color: #5b6780; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; flex-wrap: wrap; }
      a, button { padding: 0.65rem 1.1rem; border-radius: 0.4rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #2f4d8a; color: #f6f7fa; }
      .secondary { background: transparent; color: #1c2740; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
