import { useEffect } from "react";
import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Crosshair, Leaf, Hand, Zap, Flame, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OrganicBlob } from "@/components/decorative/OrganicBlob";
import { SERVICES } from "@/lib/constants";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const iconMap = {
  Crosshair,
  Leaf,
  Hand,
  Zap,
  Flame,
  Circle,
} as const;

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Update meta tags
  useEffect(() => {
    if (!service) return;
    document.title = service.detail.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", service.detail.metaDescription);
    return () => {
      document.title = "Acupuncture in Hyde Park Chicago & Frankfort IL | Bloomfield Acupuncture";
      if (metaDesc) metaDesc.setAttribute("content", "Acupuncture, herbal medicine, cupping, and gua sha in Hyde Park, Chicago and Frankfort, IL. Accepting BlueCross BlueShield. Book online with Dr. Anna Bloomfield, L.Ac., DACM.");
    };
  }, [service]);

  if (!service) {
    return (
      <>
        <Navbar />
        <div className="flex min-h-screen items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="font-display text-3xl text-bloom-brown">Service not found</h1>
            <Link to="/" className="mt-4 inline-block text-bloom-slate underline">
              Back to home
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const Icon = iconMap[service.icon];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-16 lg:pb-20">
          <div className="absolute -top-20 -right-24 opacity-50">
            <OrganicBlob variant={1} color="var(--bloom-sage)" opacity={0.06} size={500} />
          </div>
          <div className="absolute -bottom-16 -left-16 opacity-40">
            <OrganicBlob variant={0} color="var(--bloom-slate)" opacity={0.06} size={400} />
          </div>

          <div className="relative px-8 lg:px-16 xl:px-24 2xl:px-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/"
                className="mb-8 inline-flex items-center gap-2 text-sm text-bloom-brown-light transition-colors hover:text-bloom-slate"
              >
                <ArrowLeft className="size-4" />
                Back to Services
              </Link>

              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex size-14 items-center justify-center rounded-full bg-bloom-slate/10 text-bloom-slate">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <h1 className="font-display text-4xl font-semibold tracking-wide text-bloom-brown sm:text-5xl lg:text-6xl">
                      {service.name}
                    </h1>
                    <div className="mt-3 h-px w-16 bg-bloom-gold/50" />
                  </div>
                </div>

                {/* Mini service nav */}
                <div className="flex flex-wrap gap-2">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.id}
                      to={`/services/${s.id}`}
                      className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                        s.id === service.id
                          ? "bg-bloom-slate text-bloom-cream"
                          : "border border-bloom-gold/20 text-bloom-brown-light hover:border-bloom-slate/30 hover:text-bloom-brown"
                      }`}
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="pb-16 lg:pb-20">
          <div className="grid gap-12 px-8 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:px-16 xl:px-24 2xl:px-32">
            {/* Left: description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="font-display text-2xl font-semibold tracking-wide text-bloom-brown">
                About This Treatment
              </h2>
              <p className="mt-4 text-base leading-relaxed text-bloom-brown-light">
                {service.detail.fullDescription}
              </p>

              <div className="mt-10">
                <h3 className="font-display text-xl font-semibold tracking-wide text-bloom-brown">
                  Benefits
                </h3>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {service.detail.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <CheckCircle className="size-4 shrink-0 text-bloom-sage" />
                      <span className="text-sm text-bloom-brown-light">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <Button
                  size="lg"
                  className="px-10 py-6 text-base font-semibold tracking-wide"
                  onClick={() => {
                    window.location.href = "/#booking";
                  }}
                >
                  Book an Appointment
                </Button>
              </div>
            </motion.div>

            {/* Right: conditions treated */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="rounded-2xl bg-bloom-cream-light p-8 shadow-sm">
                <h3 className="font-display text-xl font-semibold tracking-wide text-bloom-brown">
                  Conditions Treated
                </h3>
                <ul className="mt-5 space-y-3">
                  {service.detail.conditions.map((condition) => (
                    <li
                      key={condition}
                      className="flex items-center gap-3 border-b border-bloom-gold/10 pb-3 text-bloom-brown-light last:border-0"
                    >
                      <div className="size-1.5 shrink-0 rounded-full bg-bloom-gold" />
                      {condition}
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
