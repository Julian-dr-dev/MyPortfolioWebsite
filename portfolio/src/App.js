import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import { useState, useEffect } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Landing from "./scenes/Landing";
import { motion } from "framer-motion";
import LineGradient from "./components/LineGradient";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import AboutMe from "./scenes/AboutMe";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return <div className="App bg -deep-blue">
    <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
    />
    <div className="w-5/6 mx-auto md:h-full">
      {isAboveMediumScreens && (
          <DotGroup
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
          />
      )}
      <Landing setSelectedPage={setSelectedPage}/>
    </div>


    <LineGradient />
    <div className="w-5/6 mx-auto md:h-full ">
      <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
      >
        <AboutMe />
      </motion.div>
    </div>



    <LineGradient />
    <div className="w-5/6 mx-auto md:h-full ">
      <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
      >
        <MySkills />
      </motion.div>
    </div>




    <LineGradient />
    <div className="w-5/6 mx-auto">
      <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
      >
        <Projects />
      </motion.div>
    </div>



    <LineGradient />
    <div className="w-5/6 mx-auto md:h-full">
      <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
      >
        <Contact />
      </motion.div>
    </div>


    <Footer/>


  </div>

}

export default App;
