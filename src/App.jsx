import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import Projects from "./sections/Projects";
import Navbar from "./components/Navbar";
import LogoSection from "./sections/LogoSection";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <Projects />
      <LogoSection />
    </>
  );
};

export default App;
