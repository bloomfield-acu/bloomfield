import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/constants";
import { OrganicBlob } from "@/components/decorative/OrganicBlob";

export function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prevImage = () =>
    setLightboxIdx((i) => (i !== null ? (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null));
  const nextImage = () =>
    setLightboxIdx((i) => (i !== null ? (i + 1) % GALLERY_IMAGES.length : null));

  return (
    <section id="gallery" className="relative py-16 lg:py-20 overflow-hidden">
      <div className="absolute -bottom-20 -left-16 opacity-60">
        <OrganicBlob variant={0} color="var(--bloom-slate)" opacity={0.06} size={400} />
      </div>
      <div className="absolute top-10 -right-20 opacity-40">
        <OrganicBlob variant={1} color="var(--bloom-sage)" opacity={0.06} size={300} />
      </div>

      <div className="px-8 lg:px-16 xl:px-24 2xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-bloom-gold">
            Gallery
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-wide text-bloom-brown sm:text-5xl">
            In Practice
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-bloom-gold/50" />
        </motion.div>

        {/* Two rows of 5 equal photos */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.button
              key={img.src}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              onClick={() => openLightbox(i)}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-bloom-slate"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-bloom-brown/0 transition-colors duration-300 group-hover:bg-bloom-brown/10" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-bloom-brown/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <motion.img
              key={lightboxIdx}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3 }}
              src={GALLERY_IMAGES[lightboxIdx].src}
              alt={GALLERY_IMAGES[lightboxIdx].alt}
              className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 rounded-full bg-bloom-cream/10 p-2 text-bloom-cream transition-colors hover:bg-bloom-cream/20"
              aria-label="Close"
            >
              <X className="size-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 rounded-full bg-bloom-cream/10 p-3 text-bloom-cream transition-colors hover:bg-bloom-cream/20"
              aria-label="Previous image"
            >
              <ChevronLeft className="size-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 rounded-full bg-bloom-cream/10 p-3 text-bloom-cream transition-colors hover:bg-bloom-cream/20"
              aria-label="Next image"
            >
              <ChevronRight className="size-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
