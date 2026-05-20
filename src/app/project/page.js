import Navbar from "../part/Navbar";
import Projects from "../part/Projects";
import Footer from "../part/Footer";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />
      <Projects />
      <Footer />
    </main>
  );
}
