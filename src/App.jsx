import Navbar from "./components/Navbar";
import Description from "./components/description";
import About from "./components/about";
import Technologies from "./components/technologies";
import Certifications from "./components/certificate";
import Education from "./components/education";
import Projects from "./components/project";
import Experiences from "./components/experience";
import Contact from "./components/contact";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-indigo-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Description />
        <About />
        <Education />
        <Experiences />
        <Certifications />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
