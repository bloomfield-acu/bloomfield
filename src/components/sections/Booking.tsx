import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Calendar, Phone, Navigation, ChevronDown, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OrganicBlob } from "@/components/decorative/OrganicBlob";
import { LOCATIONS } from "@/lib/constants";

const DIRECTIONS = [
  {
    text: "Our Chicago location is conveniently located in the Hyde Park Bank Building at 1525 E 53rd St, Suite 814 in Hyde Park. There are numerous public transportation options nearby including the 53rd Street Metra stop, which is less than a 5 minute walk from the building. There are paid parking options on 53rd and unpaid parking options on Harper Ave and the surrounding side streets.",
    fullAddress: "1525 E 53rd St, Ste 814, Chicago, IL 60615",
    mapQuery: "1525+E+53rd+St+Ste+814+Chicago+IL+60615",
  },
  {
    text: "Dr. Bloomfield works at the renowned Acu-Rehab-Med at 20500 S La Grange Rd, Ste. 5 in Frankfort, IL, just down the road from I-80 W. There is abundant free parking in front of the building.",
    fullAddress: "20500 S La Grange Rd, Ste 5, Frankfort, IL 60423",
    mapQuery: "20500+S+La+Grange+Rd+Ste+5+Frankfort+IL+60423",
  },
];

function CopyAddressButton({ address }: { address: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 rounded-lg border border-bloom-gold/20 bg-bloom-cream-light px-3 py-1.5 text-xs text-bloom-brown-light transition-colors hover:border-bloom-gold/40 hover:text-bloom-brown"
    >
      {copied ? <Check className="size-3.5 text-bloom-sage" /> : <Copy className="size-3.5" />}
      {copied ? "Copied!" : "Copy address"}
    </button>
  );
}

export function Booking() {
  const [openDirections, setOpenDirections] = useState<Set<number>>(new Set());

  const toggleDirections = (idx: number) => {
    setOpenDirections((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
        // Scroll to center the card after expansion
        setTimeout(() => {
          const card = document.getElementById(`booking-card-${idx}`);
          if (!card) return;
          const rect = card.getBoundingClientRect();
          const targetY = rect.top + window.scrollY - (window.innerHeight - rect.height) / 2;
          const startY = window.scrollY;
          const diff = targetY - startY;
          let start: number | null = null;
          const step = (ts: number) => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / 400, 1);
            const ease = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
            window.scrollTo(0, startY + diff * ease);
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }, 350);
      }
      return next;
    });
  };

  return (
    <section id="booking" className="relative overflow-hidden bg-bloom-cream-dark/40 py-16 lg:py-20">
      <div className="absolute -top-16 -right-20 opacity-40">
        <OrganicBlob variant={2} color="var(--bloom-sage)" opacity={0.06} size={350} />
      </div>
      <div className="absolute -bottom-16 -left-16 opacity-40">
        <OrganicBlob variant={0} color="var(--bloom-slate)" opacity={0.06} size={300} />
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
            Appointments
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-wide text-bloom-brown sm:text-5xl">
            Book Your Visit
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-bloom-gold/50" />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* Hyde Park */}
          <motion.div
            id="booking-card-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-bloom-cream-light px-8 py-7 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-bloom-slate/10">
                <MapPin className="size-5 text-bloom-slate" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-wide text-bloom-brown">
                  Hyde Park, Chicago
                </h3>
                <p className="mt-1 text-sm text-bloom-brown-light">
                  {LOCATIONS[0].address}, {LOCATIONS[0].city}
                </p>
                <a
                  href="tel:7082523732"
                  className="mt-1 inline-flex items-center gap-1.5 text-sm text-bloom-slate transition-colors hover:text-bloom-brown"
                >
                  <Phone className="size-3.5" />
                  (708)-252-3732
                </a>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 text-sm text-bloom-sage">
              <Calendar className="size-4" />
              <span className="font-medium">Tuesdays, Wednesdays & Thursdays</span>
            </div>

            <p className="mt-4 leading-relaxed text-bloom-brown-light">
              Dr. Bloomfield sees patients in the historic Hyde Park Bank building at Bodhi & Sage,
              offering attentive care in a serene, professional setting.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="px-8 py-5 text-base font-semibold tracking-wide">
                <a href={LOCATIONS[0].bookingUrl} target="_blank" rel="noopener noreferrer">
                  Schedule at Hyde Park
                </a>
              </Button>
              <button
                onClick={() => toggleDirections(0)}
                className="flex items-center gap-1.5 text-sm text-bloom-brown-light transition-colors hover:text-bloom-slate"
              >
                <Navigation className="size-4" />
                How to find us
                <ChevronDown className={`size-3.5 transition-transform duration-200 ${openDirections.has(0) ? "rotate-180" : ""}`} />
              </button>
            </div>

            {/* Always-rendered directions — CSS collapse instead of mount/unmount */}
            <div
              className="grid transition-[grid-template-rows,opacity] duration-300"
              style={{
                gridTemplateRows: openDirections.has(0) ? "1fr" : "0fr",
                opacity: openDirections.has(0) ? 1 : 0,
              }}
            >
              <div className="overflow-hidden">
                <div className="mt-6 space-y-4">
                  <div className="overflow-hidden rounded-xl border border-bloom-gold/15">
                    <iframe
                      title="Hyde Park location"
                      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${DIRECTIONS[0].mapQuery}`}
                      width="100%"
                      height="280"
                      style={{ border: 0 }}
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <div className="rounded-xl border border-bloom-gold/15 bg-bloom-cream p-5">
                    <p className="text-sm leading-relaxed text-bloom-brown-light">
                      {DIRECTIONS[0].text}
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <CopyAddressButton address={DIRECTIONS[0].fullAddress} />
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${DIRECTIONS[0].mapQuery}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-lg border border-bloom-gold/20 bg-bloom-cream-light px-3 py-1.5 text-xs text-bloom-brown-light transition-colors hover:border-bloom-gold/40 hover:text-bloom-brown"
                      >
                        <Navigation className="size-3.5" />
                        Get directions
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Frankfort */}
          <motion.div
            id="booking-card-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl bg-bloom-cream-light px-8 py-7 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-bloom-slate/10">
                <MapPin className="size-5 text-bloom-slate" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-wide text-bloom-brown">
                  Frankfort, IL
                </h3>
                <p className="mt-1 text-sm text-bloom-brown-light">
                  {LOCATIONS[1].address}, {LOCATIONS[1].city}
                </p>
                <a
                  href="tel:6303242866"
                  className="mt-1 inline-flex items-center gap-1.5 text-sm text-bloom-slate transition-colors hover:text-bloom-brown"
                >
                  <Phone className="size-3.5" />
                  630-324-2866
                </a>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 text-sm text-bloom-sage">
              <Calendar className="size-4" />
              <span className="font-medium">Mondays & Fridays</span>
            </div>

            <p className="mt-4 leading-relaxed text-bloom-brown-light">
              Dr. Bloomfield serves the southwest suburbs at Acu Rehab Med, an integrative specialty
              physical therapy clinic in Frankfort, IL.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="px-8 py-5 text-base font-semibold tracking-wide">
                <a href={LOCATIONS[1].bookingUrl} target="_blank" rel="noopener noreferrer">
                  Schedule at Frankfort
                </a>
              </Button>
              <button
                onClick={() => toggleDirections(1)}
                className="flex items-center gap-1.5 text-sm text-bloom-brown-light transition-colors hover:text-bloom-slate"
              >
                <Navigation className="size-4" />
                How to find us
                <ChevronDown className={`size-3.5 transition-transform duration-200 ${openDirections.has(1) ? "rotate-180" : ""}`} />
              </button>
            </div>

            <div
              className="grid transition-[grid-template-rows,opacity] duration-300"
              style={{
                gridTemplateRows: openDirections.has(1) ? "1fr" : "0fr",
                opacity: openDirections.has(1) ? 1 : 0,
              }}
            >
              <div className="overflow-hidden">
                <div className="mt-6 space-y-4">
                  <div className="overflow-hidden rounded-xl border border-bloom-gold/15">
                    <iframe
                      title="Frankfort location"
                      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${DIRECTIONS[1].mapQuery}`}
                      width="100%"
                      height="280"
                      style={{ border: 0 }}
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <div className="rounded-xl border border-bloom-gold/15 bg-bloom-cream p-5">
                    <p className="text-sm leading-relaxed text-bloom-brown-light">
                      {DIRECTIONS[1].text}
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <CopyAddressButton address={DIRECTIONS[1].fullAddress} />
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${DIRECTIONS[1].mapQuery}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-lg border border-bloom-gold/20 bg-bloom-cream-light px-3 py-1.5 text-xs text-bloom-brown-light transition-colors hover:border-bloom-gold/40 hover:text-bloom-brown"
                      >
                        <Navigation className="size-3.5" />
                        Get directions
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
