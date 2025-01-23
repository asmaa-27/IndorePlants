import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import plant_1 from "../assets/plant-1.png"
import plant_2 from "../assets/plant-2.png"
import leaf_3 from "../assets/leaf-3.png"
const About = () => {
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
      sr.reveal(".about_data");
      sr.reveal('.about_leaf',{delay:100,origin:"right"})
     
      sr.reveal(`.about_item_1_img,.about_item_2_content`,{delay:100,origin:"left"})
     
      sr.reveal(`.about_item_2_img,.about_item_1_content`,{delay:100,origin:"right"})
      };

    revealElements();
    return () => {
      sr.destroy();
    };
  }, []);
  return (
    <div>
      <section id="about" className="relative overflow-hidden">
        <div className="about_leaf absolute -top-8 -right-12 opacity-50">
          <img
            src={leaf_3}
            className="w-40 md:w-52 xl:w-46"
            alt=""
          />
        </div>
        <div className="about_data flex flex-col items-center gap-3 text-center mb-10 md:mb-20">
          <h2 className="font-Lobster text-yellow-500">About Us</h2>
          <p className="max-w-2xl">Follow instruction for more</p>
        </div>
        <div className="container space-y-10 xl:space-x-0">
          {/* item 1 */}
          <div className="flex flex-col items-center lg:flex-row gap-5">
            {/* image */}
            <div className="about_item_1_img w-full lg:w-1/2">
              <img
                src={plant_1}
                alt=""
                className="w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto"
              />
            </div>
            {/* content */}
            <div className="about_item_1_content w-full lg:w-1/2">
              <div className="space-y-5">
                <h3>
                  Make your <span className="text-yellow-500">organic</span>{" "}
                  <br /> garden
                </h3>
                <p className="text-slate-300 font-Lobster">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Blanditiis ratione rem maxime veniam cum libero voluptas
                  tempora aut saepe similique, eos corporis. Expedita culpa
                  consequatur animi deleniti ullam adipisci iure sequi dolores
                  modi aliquam laudantium, explicabo nobis quia id
                  reprehenderit.?
                </p>
              </div>
            </div>
          </div>
          {/* item 2 */}
          <div className="flex flex-col items-center lg:flex-row-reverse gap-5">
            {/* image */}
            <div className="about_item_2_img w-full lg:w-1/2">
              <img
                src={plant_2}
                alt=""
                className="w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto"
              />
            </div>
            {/* content */}
            <div className="about_item_2_content w-full lg:w-1/2">
              <div className="space-y-5">
                <h3>
                  Come with us <br />
                  <span className="text-yellow-500">grow up</span> your plant
                </h3>
                <p className="text-slate-300 font-Lobster">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Blanditiis ratione rem maxime veniam cum libero voluptas
                  tempora aut saepe similique, eos corporis. Expedita culpa
                  consequatur animi deleniti ullam adipisci iure sequi dolores
                  modi aliquam laudantium, explicabo nobis quia id
                  reprehenderit.?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
