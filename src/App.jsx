import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Process from "./components/Process";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#080b14] text-white selection:bg-cyan-400 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Process />
        <TechStack />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
