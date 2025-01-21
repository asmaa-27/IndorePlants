import { useEffect, useState } from "react";
import { RiArrowUpLine } from "react-icons/ri";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Popular from "./components/Popular";
import Review from "./components/Review";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [activeLink, setActiveLink] = useState("home"); // State to track active link

  // Function to handle active link on scroll
  const handleActiveLink = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        setActiveLink(section.getAttribute("id"));
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${activeLink}`) {
        link.classList.add("active");
      }
    });
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleActiveLink);

    return () => {
      window.removeEventListener("scroll", handleActiveLink);
    };
  }, [activeLink]);

  // Scroll-up button logic
  useEffect(() => {
    const scrollUp = () => {
      const scrollUpBtn = document.getElementById("scroll-up");
      if (window.scrollY >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
      } else {
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
      }
    };

    window.addEventListener("scroll", scrollUp);

    return () => {
      window.removeEventListener("scroll", scrollUp);
    };
  }, []);

  return (
    <>
      <div>
        <Header activeLink={activeLink} />
        <main>
          <Home />
          <About />
          <Popular />
          <Review />
        </main>
        <Footer />
        {/* scroll-up button */}
        <a
          href="#"
          className="fixed right-4 -bottom-1/2 bg-yellow-500 shadow-sm inline-block px-3 py-1 md:px-4 md:py-2 rounded-md text-lg z-50 hover:-translate-y-1 duration-300"
          id="scroll-up"
        >
          <RiArrowUpLine className="w-6 h-6" />
        </a>
      </div>
    </>
  );
}

export default App;
