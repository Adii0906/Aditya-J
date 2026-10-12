import { About } from '@/components/About';
import { Achievements } from '@/components/Achievements';
import { Contact } from '@/components/Contact';
import { CurrentlyBuilding } from '@/components/CurrentlyBuilding';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { OpenSource } from '@/components/OpenSource';
import { Projects } from '@/components/Projects';
import { Toolkit } from '@/components/Toolkit';
import { WhyMe } from '@/components/WhyMe';
import { getResumeHref } from '@/lib/resume';

export default function Home() {
  const resumeHref = getResumeHref();

  return (
    <>
      <Navbar resumeHref={resumeHref} />
      <main id="main" className="relative">
        <Hero resumeHref={resumeHref} />
        <About />
        <Projects />
        <Toolkit />
        <Achievements />
        <OpenSource />
        <CurrentlyBuilding />
        <WhyMe />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
