import { motion } from "motion/react";
import { OrganicBlob } from "@/components/decorative/OrganicBlob";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-16 lg:py-20">
      <div className="absolute -bottom-24 -left-16 opacity-60">
        <OrganicBlob variant={2} color="var(--bloom-slate)" opacity={0.06} size={400} />
      </div>
      <div className="grid gap-10 px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-16 lg:px-16 xl:px-24 2xl:px-32">
        {/* Left: text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-bloom-gold">
            About
          </span>
          <h2 className="mt-2 font-display text-4xl font-semibold leading-tight tracking-wide text-bloom-brown sm:text-5xl">
            Meet Dr. Anna
          </h2>
          <div className="mt-3 h-px w-12 bg-bloom-gold/50" />

          <div className="mt-6 space-y-4 text-base leading-relaxed text-bloom-brown-light">
            <p>
              Dr. Anna Bloomfield, L.Ac., DACM, is a board-certified acupuncturist and herbalist
              committed to offering compassionate, whole-person care rooted in trauma-informed
              practices. She earned her BA in Women's Studies and Psychology from Goucher College,
              where she co-led a sexual and reproductive health education club and contributed to
              sexual assault survey research.
            </p>
            <p>
              She went on to earn her Doctorate of Acupuncture and Chinese Medicine from Pacific
              College of Health and Science in 2024, completing clinical rotations at Jesse Brown
              VA Hospital and Chicago Women's Health Clinic. She currently serves as a Teaching
              Assistant at PCHS, supporting the next generation of practitioners.
            </p>
            <p>
              Her own experience living with a chronic pain condition inspired her career in
              acupuncture. She works collaboratively with her patients to achieve their health
              goals, ensuring they feel empowered and in control of their health journey. When
              she's not in the clinic, you'll find her reading science fiction, performing improv
              comedy around Chicago, or spending time with her cats, life partner, and friends.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <div className="rounded-full border border-bloom-sage/30 bg-bloom-sage/10 px-4 py-1.5 text-sm text-bloom-sage">
              L.Ac.
            </div>
            <div className="rounded-full border border-bloom-sage/30 bg-bloom-sage/10 px-4 py-1.5 text-sm text-bloom-sage">
              DACM
            </div>
            <div className="rounded-full border border-bloom-sage/30 bg-bloom-sage/10 px-4 py-1.5 text-sm text-bloom-sage">
              Board Certified Herbalist
            </div>
          </div>
        </motion.div>

        {/* Right: full headshot */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative mx-auto w-72 sm:w-80 lg:w-full lg:max-w-lg">
            <div className="overflow-hidden rounded-2xl shadow-xl ring-4 ring-bloom-sage/15" style={{ transform: "rotate(1.5deg)" }}>
              <img
                src="/Headshot.jpeg"
                alt="Dr. Anna Bloomfield, Licensed Acupuncturist"
                className="w-full object-cover object-top"
                style={{ maxHeight: "800px" }}
              />
            </div>
            <div
              className="absolute -inset-2 -z-10 rounded-2xl bg-bloom-slate/8"
              style={{ transform: "rotate(1.5deg) translate(6px, 6px)" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
