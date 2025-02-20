import About from "./about";
import Skills from "./skills";
import Projects from "./projects";

export default function Home() {
  return (
    <div>
      <section className="section">
        <h1>Hi, I'm [Your Name]</h1>
        <p>Welcome to my portfolio website!</p>
      </section>
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
