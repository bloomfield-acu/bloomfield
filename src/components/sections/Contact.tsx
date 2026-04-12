import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CONTACT, FORM_ENDPOINT } from "@/lib/constants";
import { toast } from "sonner";

export function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        toast.success("Message sent! We'll be in touch soon.");
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-bloom-cream-dark/30 py-16 lg:py-20">
      <div className="grid gap-12 px-8 lg:grid-cols-[1fr_1fr] lg:items-stretch lg:gap-16 lg:px-16 xl:px-24 2xl:px-32">
        {/* Left: info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-bloom-gold">
            Contact
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-wide text-bloom-brown sm:text-5xl">
            Get in Touch
          </h2>
          <div className="mt-4 h-px w-12 bg-bloom-gold/50" />

          <p className="mt-6 leading-relaxed text-bloom-brown-light">
            If you have a question or are interested in working together, please reach out.
            You can expect a reply within 1–2 business days.
          </p>

          <div className="mt-6 space-y-4">
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-3 text-bloom-brown-light transition-colors hover:text-bloom-slate"
            >
              <div className="flex size-10 items-center justify-center rounded-full bg-bloom-slate/10">
                <Mail className="size-4 text-bloom-slate" />
              </div>
              {CONTACT.email}
            </a>
            <a
              href="tel:7082523732"
              className="flex items-center gap-3 text-bloom-brown-light transition-colors hover:text-bloom-slate"
            >
              <div className="flex size-10 items-center justify-center rounded-full bg-bloom-slate/10">
                <Phone className="size-4 text-bloom-slate" />
              </div>
              (708)-252-3732
            </a>
          </div>

          <div className="mt-8 rounded-xl border border-bloom-gold/15 bg-bloom-cream-light p-5">
            <p className="text-sm leading-relaxed text-bloom-brown-light">
              <span className="font-medium text-bloom-brown">Please note:</span> I am not able to
              dispense medical advice over phone or email. If you have an urgent medical concern,
              please contact your primary care provider or emergency services as appropriate.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-bloom-brown-light">
              For non-urgent questions about our services, scheduling, or what to expect at your
              visit, I'm happy to help.
            </p>
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <form onSubmit={handleSubmit} className="mt-8 flex h-full flex-col gap-5 rounded-2xl bg-bloom-cream-light p-8 shadow-sm">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="bg-bloom-cream"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="bg-bloom-cream"
                />
              </div>
            </div>
            <div className="flex min-h-0 flex-1 flex-col gap-2">
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us how we can help..."
                required
                className="min-h-[120px] w-full flex-1 rounded-md border border-input bg-bloom-cream px-3 py-2 text-sm transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 resize-none"
              />
            </div>
            <Button type="submit" disabled={loading} className="w-full gap-2 sm:w-auto">
              <Send className="size-4" />
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
