import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";
import { OrganicBlob } from "@/components/decorative/OrganicBlob";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const leftCol = FAQ_ITEMS.slice(0, 4);
  const rightCol = FAQ_ITEMS.slice(4);

  return (
    <section id="faq" className="relative py-16 lg:py-20 overflow-hidden">
      <div className="absolute -top-16 right-[10%] opacity-40">
        <OrganicBlob variant={2} color="var(--bloom-sage)" opacity={0.06} size={380} />
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
            FAQ
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-wide text-bloom-brown sm:text-5xl">
            Common Questions
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-bloom-gold/50" />
        </motion.div>

        {/* Two-column FAQ */}
        <div className="grid grid-cols-1 gap-x-12 lg:grid-cols-2">
          {[leftCol, rightCol].map((col, colIdx) => (
            <div key={colIdx} className="space-y-0">
              {col.map((item, i) => {
                const globalIdx = colIdx === 0 ? i : i + 4;
                return (
                  <motion.div
                    key={globalIdx}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: globalIdx * 0.05, duration: 0.35 }}
                    className="border-b border-bloom-gold/15"
                  >
                    <button
                      onClick={() => toggle(globalIdx)}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left"
                      aria-expanded={openIdx === globalIdx}
                    >
                      <span className="font-display text-lg font-medium tracking-wide text-bloom-brown">
                        {item.question}
                      </span>
                      <motion.div
                        animate={{ rotate: openIdx === globalIdx ? 45 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="shrink-0"
                      >
                        <Plus
                          className={cn(
                            "size-5 transition-colors",
                            openIdx === globalIdx ? "text-bloom-gold" : "text-bloom-brown-light"
                          )}
                        />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {openIdx === globalIdx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-5 pr-10 text-sm leading-relaxed text-bloom-brown-light">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
