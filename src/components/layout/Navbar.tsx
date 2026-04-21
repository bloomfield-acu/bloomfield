import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollSpy } from "@/lib/hooks/use-scroll-spy";
import { NAV_ITEMS } from "@/lib/constants";
import { smoothScroll } from "@/lib/hooks/use-smooth-navigate";
import { cn, asset } from "@/lib/utils";

const SECTION_IDS = NAV_ITEMS.map((item) => item.href.slice(1));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    smoothScroll(href.slice(1));
  };

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-500",
          scrolled
            ? "bg-bloom-cream/85 backdrop-blur-md shadow-sm border-b border-bloom-gold/10"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto grid grid-cols-[1fr_auto_1fr] items-center px-8 py-4 lg:px-16 xl:px-24 2xl:px-32">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-3 justify-self-start"
          >
            <img src={asset("Logo.png")} alt="Bloomfield" className="h-9 w-auto md:h-10" />
            <span className="font-display text-lg font-semibold leading-tight tracking-wide text-bloom-brown md:text-xl lg:text-2xl">
              Bloomfield Acupuncture
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 justify-self-center md:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "relative px-2 py-2 text-sm tracking-wide transition-colors xl:px-4",
                  activeId === item.href.slice(1)
                    ? "text-bloom-slate"
                    : "text-bloom-brown-light hover:text-bloom-brown"
                )}
              >
                {item.label}
                {activeId === item.href.slice(1) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-bloom-gold"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <Button
            className="hidden px-4 py-3 text-sm font-semibold tracking-wide justify-self-end md:inline-flex xl:px-8 xl:py-5 xl:text-base"
            size="lg"
            onClick={() => handleNavClick("#booking")}
          >
            Book Now
          </Button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 col-start-3 row-start-1 justify-self-end p-2 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="size-6 text-bloom-brown" />
            ) : (
              <Menu className="size-6 text-bloom-brown" />
            )}
          </button>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-bloom-cream/98 backdrop-blur-sm md:hidden"
          >
            <nav className="flex flex-col items-center gap-2">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  onClick={() => handleNavClick(item.href)}
                  className="font-display text-3xl font-medium tracking-wide text-bloom-brown transition-colors hover:text-bloom-slate"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + NAV_ITEMS.length * 0.08 }}
                className="mt-6"
              >
                <Button size="lg" onClick={() => handleNavClick("#booking")}>
                  Book Appointment
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
