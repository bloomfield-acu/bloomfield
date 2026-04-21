import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OrganicBlob } from "@/components/decorative/OrganicBlob";
import { smoothScroll } from "@/lib/hooks/use-smooth-navigate";
import { asset } from "@/lib/utils";


const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.12, duration: 0.6, ease: EASE },
  }),
};

export function Hero() {
  return (
    <section id="home" className="relative flex h-screen min-h-[600px] items-center overflow-hidden">
      {/* Decorative blobs */}
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 right-[15%]"
      >
        <OrganicBlob variant={0} color="var(--bloom-slate)" opacity={0.06} size={700} />
      </motion.div>
      <motion.div
        animate={{ x: [0, -12, 0], y: [0, 15, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 -left-20"
      >
        <OrganicBlob variant={1} color="var(--bloom-sage)" opacity={0.06} size={500} />
      </motion.div>

      <div className="relative grid h-full w-full grid-cols-1 items-center lg:grid-cols-2">
        {/* Text content */}
        <div className="z-10 px-8 lg:pl-16 xl:pl-24 2xl:pl-32 lg:pr-8">
          <div className="mb-6 hidden [@media(min-height:700px)]:block">
            <img
              src={asset("Logo.png")}
              alt="Bloomfield Acupuncture"
              className="h-[clamp(7rem,14vh,11rem)] w-auto"
            />
          </div>

          <motion.h1
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-display text-5xl font-semibold leading-[1.05] tracking-wide text-bloom-brown sm:text-6xl xl:text-7xl"
          >
            Dr. Anna
            <br />
            Bloomfield
          </motion.h1>

          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-3 text-lg tracking-wide text-bloom-brown-light"
          >
            Licensed Acupuncturist &middot; Board Certified Herbalist
            <br />
            <span className="text-base text-bloom-brown-light/70">Hyde Park, Chicago &middot; Frankfort, IL</span>
          </motion.p>

          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="my-5"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: EASE }}
              className="h-px w-16 origin-left bg-bloom-gold"
            />
          </motion.div>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-lg font-display text-xl italic leading-relaxed text-bloom-brown-light/80 xl:text-2xl"
          >
            Experience the healing power of acupuncture and Chinese medicine
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="px-10 py-6 text-lg font-semibold tracking-wide"
              onClick={() => smoothScroll("booking")}
            >
              Book an Appointment
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="group gap-2 text-base text-bloom-brown-light hover:text-bloom-brown"
              onClick={() => smoothScroll("services")}
            >
              Our Services
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            </Button>
          </motion.div>
        </div>

        {/* Hero image — fills right half */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: EASE }}
          className="relative hidden h-full items-center justify-center lg:flex"
        >
          <div className="relative h-[75%] w-[80%] max-w-xl">
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
            >
              <img
                src={asset("treatment-patient-care.jpeg")}
                alt="Dr. Bloomfield performing acupuncture treatment"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-bloom-sage/10 mix-blend-multiply" />
            </div>
            <div
              className="absolute -inset-3 -z-10 border-2 border-bloom-sage/20"
              style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-bloom-gold/40"
        />
      </motion.div>
    </section>
  );
}
