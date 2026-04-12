import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-bloom-cream-dark/50 py-16 lg:py-20">
      <div className="px-8 lg:px-16 xl:px-24 2xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-bloom-gold">
            Testimonials
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-wide text-bloom-brown sm:text-5xl">
            Patient Stories
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-bloom-gold/50" />
        </motion.div>

        {/* Grid layout instead of horizontal scroll */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="rounded-2xl bg-bloom-cream-light p-6 shadow-sm"
            >
              <Quote className="size-7 text-bloom-gold/30" />
              <p className="mt-3 text-sm leading-relaxed text-bloom-brown-light italic">
                "{t.quote}"
              </p>
              <div className="mt-4 border-t border-bloom-gold/10 pt-3">
                <p className="font-display text-base font-semibold text-bloom-brown">{t.name}</p>
                <p className="text-xs tracking-wide text-bloom-sage">{t.condition}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
