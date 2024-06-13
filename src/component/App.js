import React, { useEffect } from "react";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "./Banner";
import Bienvenue from "./Bienvenue";
import PhotoInfo from "./PhotoInfo";
import Cv from "./CV";
import Realisations from "./Realisations";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  useEffect(() => {
    AOS.init();

    // Smooth scrolling for anchor links
    const handleSmoothScroll = (event) => {
      if (
        event.target.tagName === "A" &&
        event.target.getAttribute("href").startsWith("#")
      ) {
        event.preventDefault();
        const targetId = event.target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);

    // Back to top button functionality
    const handleScroll = () => {
      const button = document.getElementById("backToTop");
      if (window.scrollY > 300) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    document.addEventListener("scroll", handleScroll);
    document.getElementById("backToTop").addEventListener("click", scrollToTop);

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Banner />
      <div id="bannerNav" className="panelBienvuenue align-content-center">
        <Bienvenue />
      </div>
      <div id="presentationNav" className="panel align-content-center mb-5">
        <PhotoInfo />
      </div>
      <div id="profilNav" className="panel align-content-center">
        <Cv />
      </div>
      <div
        id="realisationNav"
        className="panel align-content-center overflow-y-hidden"
      >
        <Realisations />
      </div>
      <div
        id="contactNav"
        data-aos="zoom-in"
        className="panelContact align-content-center h-100"
      >
        <Contact />
      </div>
      <div className="justify-content-center text-center">
        <button id="backToTop">Top</button>
        <Footer />
      </div>
    </div>
  );
}

export default App;
