import { Contact } from "./components/Contact";
import { EducationTimeline } from "./components/EducationTImeline";
import { Experiences } from "./components/Experiences";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { WorkTimeline } from "./components/WorkTimeline";

function App() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      {/* <Experiences /> */}
      <WorkTimeline />
      <EducationTimeline />
      <Contact />
    </div>
  );
}

export default App;
