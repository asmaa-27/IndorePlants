import {
  RiLeafLine,
  RiFlowerLine,
  RiPlantLine,
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXLine,
  RiLinkedinFill,
  RiTruckLine,
  RiMoneyDollarCircleLine,
  RiCustomerServiceLine,
} from "react-icons/ri";
import ScrollReveal from "scrollreveal";
import {useEffect} from 'react'
import home1 from '../assets/home.png'
const Home = () => {

  useEffect(() => {
    // Initialize ScrollReveal
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      reset: true
    });

    // Reveal elements on scroll
    const revealElements = () => {
      sr.reveal(".home_data");
      sr.reveal(".home_image",{delay:500,scale:0.5});
      sr.reveal(".service_card",{interval:100});

    };

    revealElements();
    return () => {
      sr.destroy();
    };
  }, []);
  return (
    <>
      {/* ------------Home---------------- */}
      <section id="home" className="relative">
        <div className="container">
          {/* blob 1 */}
          <div className="w-64 h-64 bg-green-700 rounded-full blur-3xl -z-10 opacity-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          {/* blob 2 */}
          <div className="w-64 h-64 bg-green-700 rounded-full blur-3xl -z-10 opacity-40 absolute right-0 bottom-0 "></div>
          <div className="flex flex-col items-center gap-5 lg:flex-row ">
            {/* content */}
            <div className=" home_data w-full space-y-5 lg:w-1/2">
              <h1>
                <span className="text-yellow-500">Plants</span> make a <br />
                positive
                <span className="text-yellow-500">impact</span> on <br />
                your environment
              </h1>
              <p className="text-slate-300 font-Lobster">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Distinctio fugiat eveniet, reprehenderit veritatis aut explicabo
                voluptatum ullam itaque tenetur numquam!
              </p>
              <div className="flex flex-col gap-2 sm:flex-row md:gap-4 lg:pt-5 xl:py-10">
                <button className="btn border border-yellow-500 bg-yellow-500 rounded-md px-5 py-2 duration-300 hover:opacity-90 flex gap-3 ">
                  <span className="font-bold ">Shop Now</span>
                  <RiLeafLine className="w-6 h-6" />
                </button>
                <button className="btn border border-yellow-500 bg-transparent  rounded-md px-5 py-2 duration-300 hover:opacity-90 flex gap-3 hover:bg-yellow-500 ">
                  <span className="font-bold ">Know More</span>
                  <RiLeafLine className="w-6 h-6" />
                </button>
              </div>
              <p className="text-xs font-Lobster text-slate-300">
                You will get 30-days free trial.
              </p>
              <div className="flex items-center gap-5 text-lg  lg:pt-10">
                <RiFacebookFill className="text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer w-6 h-6" />
                <RiTwitterXLine className="text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer w-6 h-6" />
                <RiInstagramLine className="text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer w-6 h-6 " />
                <RiLinkedinFill className="text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer w-6 h-6" />
              </div>
            </div>
            {/* image */}
            <div className=" w-full relative lg:w-1/2">
              <img src={home1} alt="" className=" home_image" />
              {/* leaf */}
              <div className="absolute -top-10 right-0 opacity-30 animate-movingY xl:top-5">
                <RiLeafLine className="text-6xl text-yellow-500" />
              </div>
              {/* flower */}
              <div className="absolute bottom-0 left-0 opacity-30 animate-rotating xl:bottom-12">
                <RiFlowerLine className="text-6xl text-yellow-500" />
              </div>
              {/* plant */}
              <div className=" hidden lg:block absolute -top-8 -left-5 opacity-30 animate-scalingUp">
                <RiPlantLine className="text-6xl text-yellow-500" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -------------Serivces-------- */}
      <div className="bg-white text-green-900 py-20">
        <div className="container w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* card 1 */}
          <div className=" service_card border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300 space-y-5">
            <div className="flex items-center gap-5 ">
              <RiTruckLine className="text-3xl md:text-4xl xl:text-5xl" />
              <p className="md:text-lg font-bold">
                Fast <br /> Delivery
              </p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              facere debitis omnis
            </p>
          </div>
          {/* card 2 */}
          <div className=" service_card border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300 space-y-5">
            <div className="flex items-center gap-5 ">
              <RiCustomerServiceLine className="text-3xl md:text-4xl xl:text-5xl" />
              <p className="md:text-lg font-bold">
                Great Customer <br />
                Service
              </p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              facere debitis omnis
            </p>
          </div>
          {/* card 3 */}
          <div className=" service_card border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300 space-y-5">
            <div className="flex items-center gap-5 ">
              <RiPlantLine className="text-3xl md:text-4xl xl:text-5xl" />
              <p className="md:text-lg font-bold">
                Original <br /> Plants
              </p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              facere debitis omnis
            </p>
          </div>
          {/* card 4 */}
          <div className=" service_card border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300 space-y-5">
            <div className="flex items-center gap-5 ">
              <RiMoneyDollarCircleLine className="text-3xl md:text-4xl xl:text-5xl" />
              <p className="md:text-lg font-bold">
                Affordable <br /> Price
              </p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              facere debitis omnis
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
