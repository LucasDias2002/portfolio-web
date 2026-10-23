import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#home"
      aria-label="Back to top"
      className={`fixed right-5 bottom-5 z-50 flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_12px_28px_-16px_oklch(0.32_0.06_255_/_0.55)] transition-[opacity,transform] duration-200 hover:-translate-y-0.5 active:scale-[0.96] ${
        visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"
      }`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 19V6m0 0 6 6M12 6 6 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}
