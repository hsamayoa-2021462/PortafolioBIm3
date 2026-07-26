import Navbar from '../shared/components/layout/Navbar';
import Footer from '../shared/components/layout/Footer';
import ScrollProgress from '../shared/components/ui/ScrollProgress';
import Welcome from '../features/welcome/Welcome';
import About from '../features/about/About';
import Skills from '../features/skills/Skills';
import Education from '../features/education/Education';
import Projects from '../features/projects/Projects';
import Contact from '../features/contact/Contact';
import { useReveal } from '../shared/hooks/useReveal';

export default function App() {
  useReveal();

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Welcome />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
