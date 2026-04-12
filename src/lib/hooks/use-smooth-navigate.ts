export function smoothNavigate(targetId: string) {
  const el = document.getElementById(targetId);
  if (!el) return;

  const main = document.querySelector("main");
  if (!main) return;

  // Fade out
  main.style.transition = "opacity 200ms ease-out";
  main.style.opacity = "0";

  setTimeout(() => {
    // Jump instantly
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "instant" as ScrollBehavior });

    // Fade in
    requestAnimationFrame(() => {
      main.style.transition = "opacity 300ms ease-in";
      main.style.opacity = "1";
    });
  }, 200);
}

export function smoothScroll(targetId: string, duration = 450) {
  const el = document.getElementById(targetId);
  if (!el) return;

  const targetY = el.getBoundingClientRect().top + window.scrollY - 80;
  const startY = window.scrollY;
  const diff = targetY - startY;

  // If the distance is too far, use fade transition instead
  if (Math.abs(diff) > window.innerHeight * 1.5) {
    smoothNavigate(targetId);
    return;
  }

  let start: number | null = null;
  const step = (ts: number) => {
    if (!start) start = ts;
    const p = Math.min((ts - start) / duration, 1);
    const ease = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
    window.scrollTo(0, startY + diff * ease);
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
