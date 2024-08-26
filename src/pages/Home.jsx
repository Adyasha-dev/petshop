import React, { useState } from "react";
import { Bgdog1, Dog2, Dog3 } from "../assets";
function Home() {
  return (
    <>
      {/* Home */}
      <main
        className={` flex flex-col custom-bg overflow-hidden max-h-scree px-8 sm:px-16`}
      >
        <h1 className=" text-6xl font-sans uppercase font-bold mt-20 mb-4 sm:mt-28  sm:text-7xl  ">
          pet shop
        </h1>
        <p className="text-xl font-medium font-serif uppercase  my-2 sm:my-4 sm:text-2xl md:text-3xl  md:text-bold lg:text-3xl ">
          make your pets happy
        </p>
        <p className=" text-2xl font-mono  my-6  text-yellow-500 sm:text-3xl  md:text-1xl md:text-yellow-400  ">
          {" "}
          Discover how to keep your pets happy and healthy with our expert tips
          <br />
          and quality products!"
        </p>
      </main>
    </>
  );
}

export default Home;
