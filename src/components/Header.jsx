import { useState, useEffect, useRef } from "react";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";

const Header = ({ activeLink }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasBorder, setHasBorder] = useState(false); 
  const navMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Add event listener for menuButton menu
  useEffect(() => {
    const menuButton = menuButtonRef.current;
    if (!menuButton) return; // Ensure menuButton exists

    menuButton.addEventListener("click", toggleMenu);

    return () => {
      menuButton.removeEventListener("click", toggleMenu);
    };
  }, []);

  // Add event listener for scroll
  useEffect(() => {
    const scrollHeader = () => {
      if (window.scrollY >= 50) {
        setHasBorder(true); // Add border
      } else {
        setHasBorder(false); // Remove border
      }
    };

    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <header
      id="navbar"
      className={`bg-green-950 fixed w-full top-0 left-0 z-50 ${
        hasBorder ? "border-b border-yellow-500" : ""
      }`}
    >
      <nav className="container flex items-center justify-between h-16 sm:h-20">
        <div className="font-Lobster sm:text-2xl">IndorePlants.</div>
        <div
          ref={navMenuRef}
          id="nav-menu"
          className={`absolute top-0 left-[-100%] min-h-[80vh] w-full bg-green-950/80 backdrop-blur-sm flex items-center justify-center duration-300 overflow-hidden lg:static lg:min-h-fit lg:bg-transparent lg:w-auto ${
            isMenuOpen ? "left-[0]" : ""
          }`}
        >
          <ul className="flex flex-col items-center gap-8 lg:flex-row">
            <li>
              <a
                href="#home"
                className={`nav-link text-lg font-bold duration-300 hover:text-yellow-500 ${
                  activeLink === "home" ? "text-yellow-500" : ""
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`nav-link text-lg font-bold duration-300 hover:text-yellow-500 ${
                  activeLink === "about" ? "text-yellow-500" : ""
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#popular"
                className={`nav-link text-lg font-bold duration-300 hover:text-yellow-500 ${
                  activeLink === "popular" ? "text-yellow-500" : ""
                }`}
              >
                Popular
              </a>
            </li>
            <li>
              <a
                href="#review"
                className={`nav-link text-lg font-bold duration-300 hover:text-yellow-500 ${
                  activeLink === "review" ? "text-yellow-500" : ""
                }`}
              >
                Review
              </a>
            </li>
          </ul>
          <div className="absolute bottom-0 -right-10 opacity-90 lg:hidden">
            <img src="/src/assets/leaf-1.png" alt="leaf-1" className="w-32" />
          </div>
          <div className="absolute -top-5 -left-5 rotate-90 opacity-90 lg:hidden">
            <img src="/src/assets/leaf-2.png" alt="leaf-2" className="w-32" />
          </div>
        </div>
        <div
          ref={menuButtonRef}
          className="text-xl sm:text-3xl cursor-pointer z-50 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <RiCloseLine /> : <RiMenu4Line />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
