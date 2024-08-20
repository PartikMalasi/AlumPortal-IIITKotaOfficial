import React, { useEffect } from "react";
import CountUp from "countup";
import "intersection-observer"; // Polyfill for older browsers

import Navbar from "../components/navbar";
import CarouselHome from "../components/carouselHome";
import InfiniteText from "../components/infiniteText";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");

    const animateCounters = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = +counter.getAttribute("data-target");
          const countElement = counter.querySelector(".count");

          new CountUp(countElement, 0, target, 0, 2.5).start();
          observer.unobserve(counter);
        }
      });
    };

    const observer = new IntersectionObserver(animateCounters, {
      threshold: 0.5, // Trigger when at least 50% of the element is visible
    });

    counters.forEach((counter) => {
      observer.observe(counter);
    });
  }, []);

  return (
    <div className="w-full h-full overflow-x-hidden custom-scrollbar">
      <Navbar />
      <CarouselHome />
      <InfiniteText />
      {/* Benefits Offered */}
      <div className="w-full h-auto">
        <h1 className="text-center text-3xl font-semibold my-8 text-[#19194D]">
          Benefits Offered
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-evenly py-4">
          <div className="h-[15rem] lg:h-[20rem] w-[85%] rounded-md lg:w-[30%] hover:shadow-2xl hover:border-1 transition-shadow duration-500 ease-in-out mb-8 lg:my-8 border border-gray-300 px-3 py-4 lg:p-4 flex flex-col">
            <div className="w-full h-1/4 flex items-start lg:items-center text-2xl font-semibold text-[#19194D]">
              <h1>Lorem, ipsum dolor.</h1>
            </div>
            <div className="w-full h-3/4 flex items-center text-md lg:text-lg text-[#19194D]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                similique officiis modi odio? Ipsam error, atque voluptates enim
                consectetur quisquam distinctio asperiores iusto, totam, dolorem
                molestiae architecto. Sint, voluptate iure.
              </p>
            </div>
          </div>
          <div className="h-[15rem] lg:h-[20rem] w-[85%] rounded-md lg:w-[30%] hover:shadow-2xl hover:border-1 transition-shadow duration-500 ease-in-out mb-8 lg:my-8 border border-gray-300 px-3 py-4 lg:p-4 flex flex-col">
            <div className="w-full h-1/4 flex items-start lg:items-center text-2xl font-semibold text-[#19194D]">
              <h1>Lorem, ipsum dolor.</h1>
            </div>
            <div className="w-full h-3/4 flex items-center text-md lg:text-lg text-[#19194D]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                similique officiis modi odio? Ipsam error, atque voluptates enim
                consectetur quisquam distinctio asperiores iusto, totam, dolorem
                molestiae architecto. Sint, voluptate iure.
              </p>
            </div>
          </div>
          <div className="h-[15rem] lg:h-[20rem] w-[85%] rounded-md lg:w-[30%] hover:shadow-2xl hover:border-1 transition-shadow duration-500 ease-in-out mb-8 lg:my-8 border border-gray-300 px-3 py-4 lg:p-4 flex flex-col">
            <div className="w-full h-1/4 flex items-start lg:items-center text-2xl font-semibold text-[#19194D]">
              <h1>Lorem, ipsum dolor.</h1>
            </div>
            <div className="w-full h-3/4 flex items-center text-md lg:text-lg text-[#19194D]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                similique officiis modi odio? Ipsam error, atque voluptates enim
                consectetur quisquam distinctio asperiores iusto, totam, dolorem
                molestiae architecto. Sint, voluptate iure.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Stats Component */}
      <div className="w-full h-[15rem] bg-[#19194D] lg:p-4 p-2">
        <div className="w-full h-full lg:flex lg:flex-row flex-col">
          <div className="counter w-full lg:w-1/3 lg:h-full h-1/3 flex lg:flex-col gap-4 justify-center items-center text-white text-xl lg:text-3xl" data-target="3500">
            <p className="count">0</p>
            <p>Alumni Registered</p>
          </div>
          <div className="counter w-full lg:w-1/3 lg:h-full h-1/3 flex lg:flex-col gap-4 justify-center items-center text-white text-xl lg:text-3xl" data-target="5800">
            <p className="count">0</p>
            <p>Alumni Registered</p>
          </div>
          <div className="counter w-full lg:w-1/3 lg:h-full h-1/3 flex lg:flex-col gap-4 justify-center items-center text-white text-xl lg:text-3xl" data-target="72000">
            <p className="count">0</p>
            <p>Alumni Registered</p>
          </div>
        </div>
      </div>
      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
