import { Mail, Phone, Globe, MapPin } from "lucide-react";
import { NAV_ITEMS, CONTACT, LOCATIONS } from "@/lib/constants";

export function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.getElementById(href.slice(1));
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-bloom-slate text-bloom-cream">
      <div className="mx-auto px-8 py-16 lg:px-16 xl:px-24 2xl:px-32">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img src="/Logo.png" alt="" className="h-10 w-auto brightness-110" />
              <span className="font-display text-2xl font-semibold tracking-wide">
                Bloomfield
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-bloom-cream/70">
              Acupuncture and herbal medicine in Hyde Park, Chicago and Frankfort, IL. Compassionate, whole-person care in a warm, welcoming environment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold tracking-wide text-bloom-gold">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-sm text-bloom-cream/70 transition-colors hover:text-bloom-cream"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-display text-lg font-semibold tracking-wide text-bloom-gold">
              Locations
            </h3>
            <ul className="mt-4 space-y-4">
              {LOCATIONS.map((loc) => (
                <li key={loc.name} className="flex items-start gap-2">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-bloom-cream/50" />
                  <div>
                    <p className="text-sm font-medium text-bloom-cream/90">{loc.name}</p>
                    <p className="text-xs text-bloom-cream/60">{loc.address}</p>
                    <p className="text-xs text-bloom-cream/60">{loc.city}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold tracking-wide text-bloom-gold">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2 text-sm text-bloom-cream/70 transition-colors hover:text-bloom-cream"
                >
                  <Mail className="size-4 shrink-0" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phone.replace(/-/g, "")}`}
                  className="flex items-center gap-2 text-sm text-bloom-cream/70 transition-colors hover:text-bloom-cream"
                >
                  <Phone className="size-4 shrink-0" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://${CONTACT.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-bloom-cream/70 transition-colors hover:text-bloom-cream"
                >
                  <Globe className="size-4 shrink-0" />
                  {CONTACT.website}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-bloom-cream/10 pt-8 text-center text-xs text-bloom-cream/50">
          &copy; {new Date().getFullYear()} Dr. Anna Bloomfield, L.Ac., DACM. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
