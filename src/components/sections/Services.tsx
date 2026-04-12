import { motion } from "motion/react";
import { Crosshair, Leaf, Hand, Zap, Flame, Circle } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { OrganicBlob } from "@/components/decorative/OrganicBlob";
import { cn } from "@/lib/utils";

const iconMap = {
  Crosshair,
  Leaf,
  Hand,
  Zap,
  Flame,
  Circle,
} as const;

// SVG clip-path blobs — each is a unique organic shape
const blobPaths = [
  "M0.44,0.03 C0.7,0.0,0.96,0.14,0.97,0.38 C0.98,0.62,0.84,0.86,0.62,0.95 C0.40,1.04,0.14,0.90,0.05,0.62 C-0.04,0.34,0.18,0.06,0.44,0.03Z",
  "M0.55,0.0 C0.82,0.04,0.96,0.28,0.98,0.52 C1.0,0.76,0.84,1.0,0.56,0.99 C0.28,0.98,0.0,0.82,0.02,0.54 C0.04,0.26,0.28,-0.04,0.55,0.0Z",
  "M0.5,0.0 C0.78,0.02,1.0,0.18,0.98,0.5 C0.96,0.82,0.74,1.0,0.46,0.98 C0.18,0.96,0.0,0.72,0.04,0.44 C0.08,0.16,0.22,-0.02,0.5,0.0Z",
  "M0.42,0.02 C0.68,-0.04,1.0,0.16,0.96,0.46 C0.92,0.76,0.7,1.02,0.42,0.98 C0.14,0.94,0.0,0.7,0.06,0.42 C0.12,0.14,0.16,0.08,0.42,0.02Z",
  "M0.56,0.02 C0.86,0.08,1.0,0.32,0.94,0.58 C0.88,0.84,0.66,1.02,0.4,0.96 C0.14,0.9,0.0,0.66,0.08,0.4 C0.16,0.14,0.26,-0.04,0.56,0.02Z",
  "M0.48,0.02 C0.76,0.0,0.98,0.22,0.94,0.50 C0.90,0.78,0.70,0.98,0.44,0.96 C0.18,0.94,0.02,0.68,0.08,0.42 C0.14,0.16,0.20,0.04,0.48,0.02Z",
];

export function Services() {
  return (
    <section id="services" className="relative py-16 lg:py-20 overflow-hidden">
      <div className="absolute -top-20 -right-24 opacity-50">
        <OrganicBlob variant={1} color="var(--bloom-sage)" opacity={0.06} size={450} />
      </div>
      <div className="absolute -bottom-16 left-[20%] opacity-40">
        <OrganicBlob variant={0} color="var(--bloom-slate)" opacity={0.06} size={350} />
      </div>
      <div className="relative px-8 lg:px-16 xl:px-24 2xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-bloom-gold">
            Services
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-wide text-bloom-brown sm:text-5xl">
            Treatments & Therapies
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-bloom-gold/50" />
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            const clipId = `blob-clip-${i}`;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.45 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className="group relative cursor-default"
              >
                {/* SVG clip definition */}
                <svg className="absolute" width="0" height="0">
                  <defs>
                    <clipPath id={clipId} clipPathUnits="objectBoundingBox">
                      <path d={blobPaths[i]} />
                    </clipPath>
                  </defs>
                </svg>

                {/* Clipped card */}
                <div
                  className={cn(
                    "px-14 pb-16 pt-12 text-center",
                    i === 0 ? "bg-bloom-sage/8" : "bg-bloom-cream-light"
                  )}
                  style={{ clipPath: `url(#${clipId})` }}
                >
                  <div
                    className={cn(
                      "mx-auto mb-4 flex size-12 items-center justify-center rounded-full",
                      i === 0 ? "bg-bloom-sage/15 text-bloom-sage" : "bg-bloom-slate/10 text-bloom-slate"
                    )}
                  >
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold tracking-wide text-bloom-brown">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-bloom-brown-light">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
