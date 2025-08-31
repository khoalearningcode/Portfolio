import Header from "@/components/shared/header";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/shared/footer";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <div className="relative z-10">
      <Header />
      <main className="container mx-auto px-4 md:px-8">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
