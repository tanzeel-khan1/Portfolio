import Navbar from "./part/Navbar";
import Second from "./part/Second";
import Skills from "./part/Skills";
import Projects from "./part/Projects";
import Footer from "./part/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />
      <Second />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
