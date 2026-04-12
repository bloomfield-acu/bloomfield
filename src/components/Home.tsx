import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { FAQ } from "@/components/sections/FAQ";
import { Booking } from "@/components/sections/Booking";
import { Contact } from "@/components/sections/Contact";
import { LeafDivider } from "@/components/decorative/LeafDivider";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LeafDivider />
        <Services />
        <LeafDivider />
        <About />
        <Testimonials />
        <LeafDivider />
        <Gallery />
        <LeafDivider />
        <FAQ />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </>
  );
}

export default Home;
