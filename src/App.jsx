import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import Projects from "./sections/Projects";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <Projects />
    </>
  );
};

export default App;
