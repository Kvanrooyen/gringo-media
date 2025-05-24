import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Videos from "@/components/Videos";
import CTA from "@/components/AboutServicesCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Videos />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
