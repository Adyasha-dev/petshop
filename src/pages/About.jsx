import React, { useState } from "react";
import { Dog2 } from "../assets";
const TextComponetOne = () => {
  return (
    <>
      <p className=" mx-5 text-justify mt-4 text-gray-600  font-rubik">
        Welcome to our "paws & Whiskers Haven" where we're passionate about pets
        and their well-being! our mission is to provide top-quality products,
        expert advice, and exceptional service to help you care for your furry,
        feathered, or scaly friends. with a wide range of items and a team of
        dedicated animal lovers, we strive to make every pet's life a little
        brighter. Thank you for choosing us to be a part of your pet's journey!
      </p>
    </>
  );
};
const TextComponetTwo = () => {
  return (
    <>
      <p className="  text-justify mx-5 mt-4 text-gray-600 font-rubik ">
        At "paws & Whiskers Haven", we're more than just a pet store-we're a
        community of animal lovers. our mission is to provide high-quality
        supplies, expert advice, and a warm welcome to all. we belive every pet
        deserves a happy, healthy life, and we're here to help. join our pack
        and let's care for your pets together!
      </p>
    </>
  );
};

function About() {
  const [tab, setTab] = useState("A");

  return (
    <>
      <div className="max-h-full  flex flex-col  lg:flex-row lg:my-auto lg:px-16">
        <div className=" mt-24 mx-10 mb-10 sm:mx-10  lg:w-2/5">
          <img
            className="h-64 w-96 sm:h-full sm:w-full  "
            src={Dog2}
            alt="dog2"
          ></img>
        </div>
        <div className="mx-5 sm:mx-10 lg:w-3/5  lg:mt-9 md:mb-8  lg:mb-8">
          <p className="text-2xl text-lime-500 mb-1 ml-10  border-l-4 border-lime-500 pl-8 my-16 py-8">
            About us
            <p className="uppercase font-bold text-3xl text-black  ">
              we keep your pets happy all time
            </p>
          </p>

          <div className=" bg-lime-100 p-4">
            <div className="flex flex-row gap-4 mx-10 sm:justify-center  ">
              <button
                className=" bg-green-400 px-2 py-2 text-white uppercase "
                onClick={() => {
                  setTab("A");
                }}
              >
                our mission
              </button>
              <button
                className=" bg-green-400 px-2 py-2 text-white uppercase mx-5  "
                onClick={() => {
                  setTab("B");
                }}
              >
                our vision
              </button>
            </div>
            <div className="flex">
              {tab === "A" && <TextComponetOne />}
              {tab === "B" && <TextComponetTwo />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
