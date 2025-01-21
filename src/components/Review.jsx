import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { RiDoubleQuotesR } from "react-icons/ri";
import Swiper from "swiper";
import "swiper/swiper-bundle.css"; 
import "swiper/css/pagination"; 
import { Pagination, Autoplay } from "swiper/modules";

function Review() {
  useEffect(() => {
    // Initialize Swiper after the component mounts
    const swiper = new Swiper(".swiper", {
      modules: [Pagination, Autoplay], 
      speed: 400,
      spaceBetween: 30,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true, 
      },
      grabCursor: true,
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        780: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    // Cleanup Swiper instance on component unmount
    return () => {
      swiper.destroy();
    };
  }, []);
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
      sr.reveal(".review_data,.review_swiper");
      sr.reveal(".review_leaf",{delay:1000,origin:"left"})
    };

    revealElements();
    return () => {
      sr.destroy();
    };
  }, []);

  return (
    <div>
      <section id="review" className="relative mb-20 md:mb-28 overflow-hidden">
        <div className=" review_leaf absolute -top-8 -left-12 opacity-50">
          <img
            src="/src/assets/leaf-4.png"
            className="w-40 md:w-52 xl:w-64"
            alt=""
          />
        </div>
        <div className=" review_data flex flex-col items-center gap-3 text-center mb-40">
          <h2 className="font-Lobster text-yellow-500">Customer Review</h2>
          <p className="max-w-2xl">Follow instruction for more</p>
        </div>
        <div className="review_swiper container">
          <div className="swiper py-12">
            <ul className="swiper-wrapper">
              <li className="swiper-slide">
                <div className="flex flex-col gap-5 bg-green-900 rounded-md p-6">
                  <p className="font-Lobster">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique culpa ut amet voluptas asperiores alias sed
                    consequatur.
                  </p>
                  <div className="flex items-center">
                    <img
                      src="/src/assets/review-1.jpg"
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="ml-2">
                      <p className="text-yellow-500 uppercase">John Doe</p>
                      <p>Designer</p>
                    </div>
                    <RiDoubleQuotesR className="text-4xl ml-auto" />
                  </div>
                </div>
              </li>
              <li className="swiper-slide">
                <div className="flex flex-col gap-5 bg-green-900 rounded-md p-6">
                  <p className="font-Lobster">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique culpa ut amet voluptas asperiores alias sed
                    consequatur.
                  </p>
                  <div className="flex items-center">
                    <img
                      src="/src/assets/review-2.jpg"
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="ml-2">
                      <p className="text-yellow-500 uppercase">Jane Smith</p>
                      <p>Developer</p>
                    </div>
                    <RiDoubleQuotesR className="text-4xl ml-auto" />
                  </div>
                </div>
              </li>
              <li className="swiper-slide">
                <div className="flex flex-col gap-5 bg-green-900 rounded-md p-6">
                  <p className="font-Lobster">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique culpa ut amet voluptas asperiores alias sed
                    consequatur.
                  </p>
                  <div className="flex items-center">
                    <img
                      src="/src/assets/review-3.jpg"
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="ml-2">
                      <p className="text-yellow-500 uppercase">Alice Johnson</p>
                      <p>Manager</p>
                    </div>
                    <RiDoubleQuotesR className="text-4xl ml-auto" />
                  </div>
                </div>
              </li>
              <li className="swiper-slide">
                <div className="flex flex-col gap-5 bg-green-900 rounded-md p-6">
                  <p className="font-Lobster">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique culpa ut amet voluptas asperiores alias sed
                    consequatur.
                  </p>
                  <div className="flex items-center">
                    <img
                      src="/src/assets/review-4.jpg"
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="ml-2">
                      <p className="text-yellow-500 uppercase">Bob Brown</p>
                      <p>Marketer</p>
                    </div>
                    <RiDoubleQuotesR className="text-4xl ml-auto" />
                  </div>
                </div>
              </li>
              <li className="swiper-slide">
                <div className="flex flex-col gap-5 bg-green-900 rounded-md p-6">
                  <p className="font-Lobster">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique culpa ut amet voluptas asperiores alias sed
                    consequatur.
                  </p>
                  <div className="flex items-center">
                    <img
                      src="/src/assets/review-2.jpg"
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="ml-2">
                      <p className="text-yellow-500 uppercase">Jane Smith</p>
                      <p>Developer</p>
                    </div>
                    <RiDoubleQuotesR className="text-4xl ml-auto" />
                  </div>
                </div>
              </li>
            </ul>
            {/* Custom Pagination */}
            <div className="swiper-pagination !relative !mt-8"></div>
          </div>
        </div>
      </section>

      {/* Custom CSS for Swiper Pagination */}
      <style>
        {`
          .swiper-pagination-bullet {
            background-color: #d1d5db; 
            opacity: 1;
            width: 12px;
            height: 12px;
            margin: 0 8px !important;
          }
          .swiper-pagination-bullet-active {
            background-color: #f59e0b; 
          }
        `}
      </style>
    </div>
  );
}

export default Review;
