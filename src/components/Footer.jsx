import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXLine,
  RiLinkedinFill,
  RiSendPlane2Fill,
  RiLeafLine,
} from "react-icons/ri";

const Footer = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      reset: true,
    });

    // Reveal elements on scroll
    const revealElements = () => {
      sr.reveal(".footer_icon,.footer_content,.copy_right");
      sr.reveal(".footer_floral", { delay: 1000, origin: "left" });

    };

    revealElements();
    return () => {
      sr.destroy();
    };
  }, []);
  return (
    <>
      <footer className="bg-yellow-100 text-green-950 pt-20 pb-10 md:pt-28 relative">
        {/* newsletter */}
        <div className="container text-white absolute top-0 right-0 left-0 -translate-y-1/2">
          <div className="bg-green-900 px-10 pt-5 pb-10 space-y-5 rounded-md">
            <h3>
              <span className="text-yellow-500">Subscribe</span> to our
              newsletter
            </h3>
            <div className="flex flex-col md:flex-row gap-1">
              <input
                type="email"
                className="w-full px-5 py-3 text-green-900 rounded-md outline-none"
                placeholder="Your Email Address"
              />
              <button className="flex items-center justify-center gap-1 bg-green-950 px-5 py-3 rounded-md hover:opacity-80 duration-300">
                <span>Subscribe</span>
                <RiSendPlane2Fill className="w-5 h-5"/>
              </button>
            </div>
          </div>
        </div>

        {/* social icons */}
        <div className="footer_icon container mt-16 mb-10">
          <div className="border-b border-green-500 relative">
            <div className="absolute top-0 transform -translate-y-1/2 left-0 right-0 max-w-36 mx-auto">
              <div className="flex bg-yellow-100 text-lg text-center space-x-2">
                <RiFacebookFill className="w-7 h-7 hover:text-yellow-500 duration-300 cursor-pointer" />
                <RiInstagramLine className="w-7 h-7 hover:text-yellow-500 duration-300 cursor-pointer" />
                <RiTwitterXLine className="w-7 h-7 hover:text-yellow-500 duration-300 cursor-pointer" />
                <RiLinkedinFill className="w-7 h-7 hover:text-yellow-500 duration-300 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* content */}
        <div className="footer_content container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center md:text-start">
          {/* item 1 */}
          <div>
            <div className="text-7xl text-green-700 text-center inline-block">
              <RiLeafLine className="w-20 h-20" />
              <p className="font-Lobster text-xl sm:text-2xl">IndorePlants.</p>
            </div>
          </div>

          {/* item 2 */}
          <div>
            <p className="mb-5 font-bold text-xl">Quick Link</p>
            <div className="flex flex-col gap-1">
              <a href="#">Plants</a>
              <a href="#">Flowers</a>
              <a href="#">Gardening</a>
              <a href="#">Seeds</a>
              <a href="#">Shipping</a>
            </div>
          </div>

          {/* item 3 */}
          <div>
            <p className="mb-5 font-bold text-xl">Popular Services</p>
            <div className="flex flex-col gap-1">
              <a href="#">Tree Planting</a>
              <a href="#">Grass Cutting</a>
              <a href="#">Weeds Control</a>
              <a href="#">Project</a>
            </div>
          </div>

          {/* item 4 */}
          <div>
            <p className="mb-5 font-bold text-xl">Contact Us</p>
            <div className="flex flex-col gap-1">
              <a href="tel:+88 333 78 901">+88 333 78 901</a>
              <a href="mailto:JhonDoe@gmail.com">JhonDoe@gmail.com</a>
              <br />
              <p>1234 Tailwind Ave, CSS City, Webland 56789, USA</p>
            </div>
          </div>
        </div>

        {/* copyright */}
        <div className=" copy_right container">
          <p className="text-center mt-10 opacity-50">
            Copyright &copy; 2024 John Doe. All rights reserved.
          </p>
        </div>

        {/* floral image */}
        <div className="footer_floral  absolute bottom-0 left-0 opacity-30 pointer-events-none">
          <img
            src="/src/assets/floral-1.png"
            alt="floral decoration"
            className="w-full lg:w-1/2"
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
