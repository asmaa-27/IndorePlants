import { RiStarFill,RiStarHalfFill,RiStarLine,RiShoppingCartFill } from "react-icons/ri";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
function Popular() {
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
      sr.reveal(".popular_data");
      sr.reveal(".popular_card",{interval:100});
    
    
    };

    revealElements();
    return () => {
      sr.destroy();
    };
  }, []);
  return (
    <div>
      <section id="popular" className="bg-green-900">
        <div className="popular_data flex flex-col items-center gap-3 text-center mb-40 ">
          <h2 className="font-Lobster text-yellow-500">Your Choice Plant</h2>
          <p className="max-w-2xl">Follow instruction for more</p>
        </div>
        <div className="container w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-36">
          {/* card 1  */}
          <div className="popular_card bg-green-950 p-10 pt-24 rounded-md relative">
            <img
              src="/src/assets/cart-1.png"
              className="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
              alt=""
            />
            <p className=" italic">Nephrolepis exaltata </p>
            <h3>Boston Fern</h3>
            <div className=" flex text-yellow-500 text-xl py-3 ">
              <RiStarFill />
              <RiStarFill />
              <RiStarHalfFill />
              <RiStarLine className="text-gray-400" />
              <RiStarLine className="text-gray-400" />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xl">$5</p>
              <button className="bg-yellow-500 px-2 py-1 rounded-sm text-xl">
                <RiShoppingCartFill className="" />
              </button>
            </div>
          </div>
          {/* card 2  */}
          <div className="popular_card bg-green-950 p-10 pt-24 rounded-md relative">
            <img
              src="/src/assets/cart-2.png"
              className="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
              alt=""
            />
            <p className=" italic">Ficus elastica </p>
            <h3>Rubber Plant</h3>
            <div className=" flex text-yellow-500 text-xl py-3 ">
              <RiStarFill />
              <RiStarFill />
              <RiStarHalfFill />
              <RiStarLine className="text-gray-400" />
              <RiStarLine className="text-gray-400" />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xl">$5</p>
              <button className="bg-yellow-500 px-2 py-1 rounded-sm text-xl">
                <RiShoppingCartFill className="" />
              </button>
            </div>
          </div>
          {/* card 3  */}
          <div className="popular_card bg-green-950 p-10 pt-24 rounded-md relative">
            <img
              src="/src/assets/cart-3.png"
              className="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
              alt=""
            />
            <p className=" italic">Spathiphyllum wallisii </p>
            <h3>Peace Lily</h3>
            <div className=" flex text-yellow-500 text-xl py-3 ">
              <RiStarFill />
              <RiStarFill />
              <RiStarHalfFill />
              <RiStarLine className="text-gray-400" />
              <RiStarLine className="text-gray-400" />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xl">$5</p>
              <button className="bg-yellow-500 px-2 py-1 rounded-sm text-xl">
                <RiShoppingCartFill className="" />
              </button>
            </div>
          </div>
          {/* card 4  */}
          <div className="popular_card bg-green-950 p-10 pt-24 rounded-md relative">
            <img
              src="/src/assets/cart-4.png"
              className="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
              alt=""
            />
            <p className=" italic">Adenium obesum </p>
            <h3>Desert Rose</h3>
            <div className=" flex text-yellow-500 text-xl py-3 ">
              <RiStarFill />
              <RiStarFill />
              <RiStarHalfFill />
              <RiStarLine className="text-gray-400" />
              <RiStarLine className="text-gray-400" />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xl">$5</p>
              <button className="bg-yellow-500 px-2 py-1 rounded-sm text-xl">
                <RiShoppingCartFill className="" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Popular
