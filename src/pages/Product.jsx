import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
  Dogf1,
  Dogf2,
  Dogf3,
  Dogf4,
  Dogf5,
  Cat1,
  Puppy1,
  Rabit,
  Bird,
  Cat2,
  Toy1,
  Toy2,
  Toy5,
  Bowls,
  Boot,
  Tool1,
} from "../assets";

import ReactStars from "react-stars";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

function Product() {
  const [perSlide, setPerSlide] = useState(null);
  const [Size, setSize] = useState(null);
  useEffect(() => {
    // Your side effect code here
    const width = window.innerWidth;
    console.log(width);
    if (width <= 426) {
      setPerSlide(1);
      setSize(5);
    } else {
      setPerSlide(3);
      setSize(24);
    }
  }, []);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <>
      <div>
        <div className="mx-5 sm:mx-10 lg:w-3/5  lg:mt-9 md:mb-8  lg:mb-8">
          <p className="text-2xl text-lime-500 mb-1 ml-10  border-l-4 border-lime-500 pl-8 my-16 py-8">
            Product
            <p className="uppercase font-bold text-3xl text-black  ">
              products for your best friend
            </p>
          </p>
        </div>
      </div>
      <p className="uppercase text-3xl font-Cambria px-14 py-10 lg:px-32">
        pets foodies
      </p>
      <Swiper
        slidesPerView={perSlide}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500, // Time in milliseconds before the slide changes automatically
          disableOnInteraction: true, // Keeps autoplay even after user interaction
        }}
        className="w-full h-auto px-8  py-8 md:px-32 overflow-hidden"
      >
        <SwiperSlide>
          <div className="h-[18rem]    ">
            <img
              src={Dogf1}
              alt="dogf1"
              className="w-44 h-auto object-cover"
            ></img>
            <div className="flex flex-row ">
              <p className="text-2xl text-amber-400 my-2 mx-3">$655</p>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={Size}
                color2={"#ffd700"}
                className="my-2"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[18rem]  ">
            <img src={Dogf2} alt="" className="w-48 h-auto object-cover"></img>
            <div className="flex flex-row ">
              <p className="text-2xl text-amber-400 my-2 mx-3">$678</p>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={Size}
                color2={"#ffd700"}
                className="my-2"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[18rem]    ">
            <img
              src={Dogf3}
              alt="dogf1"
              className="w-44 h-auto object-cover"
            ></img>
            <div className="flex flex-row ">
              <p className="text-2xl text-amber-400 my-2 mx-3">$455</p>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={Size}
                color2={"#ffd700"}
                className="my-2"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[18rem]  ">
            <img src={Dogf4} alt="" className="w-40 h-auto object-cover "></img>
            <div className="flex flex-row ">
              <p className="text-2xl text-amber-400 my-2 mx-3">$555</p>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={Size}
                color2={"#ffd700"}
                className="my-2"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[18rem]  ">
            <img src={Dogf5} alt="" className="w-48 h-auto object-cover"></img>
            <div className="flex flex-row ">
              <p className="text-2xl text-amber-400 my-2 mx-3">$499</p>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={Size}
                color2={"#ffd700"}
                className="my-2"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <p className="uppercase text-3xl font-Cambria px-18 py-10 lg:px-32">
        pets clothing
      </p>
      <Swiper
        slidesPerView={perSlide}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: true }}
        className="w-full px-8 py-10  h-auto "
      >
        <SwiperSlide>
          <div>
            <img
              src={Cat1}
              className="w-48 h-auto object-cover mx-28 "
              alt="cat12"
            ></img>
            <div className="flex flex-row px-24">
              <p className="text-2xl text-amber-400 my-2 mx-3">$655</p>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={Size}
                color2={"#ffd700"}
                className="my-2"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={Puppy1}
              alt="puppy"
              className="w-48 h-auto object-cover mx-28"
            ></img>
            <div className="flex flex-row px-24">
              <p className="text-2xl text-amber-400 my-2 mx-3">$655</p>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={Size}
                color2={"#ffd700"}
                className="my-2"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={Rabit}
              alt="puppy"
              className="w-48 h-auto object-cover mx-28"
            ></img>
            <div className="flex flex-row px-24">
              <p className="text-2xl text-amber-400 my-2 mx-3">$655</p>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={Size}
                color2={"#ffd700"}
                className="my-2"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={Bird}
              alt="puppy"
              className="w-48 h-auto object-cover mx-28"
            ></img>
            <div className="flex flex-row px-24">
              <p className="text-2xl text-amber-400 my-2 mx-3">$655</p>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={Size}
                color2={"#ffd700"}
                className="my-2"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={Cat2}
              alt="puppy"
              className="w-48 h-auto object-cover mx-28"
            ></img>
            <div className="flex flex-row px-24">
              <p className="text-2xl text-amber-400 my-2 mx-3">$655</p>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={Size}
                color2={"#ffd700"}
                className="my-2"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <p className="uppercase text-3xl font-Cambria px-18 py-10 lg:px-32">
        pets selling products
      </p>
      <Swiper
        slidesPerView={perSlide}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 1900, disableOnInteraction: true }}
        className="w-full px-8 py-10  h-auto "
      >
        <SwiperSlide>
          <div>
            <img
              src={Toy1}
              className="w-48 h-auto object-cover mx-28 "
              alt="cat12"
            ></img>
            <div className="flex flex-row px-24">
              <p className="text-2xl text-amber-400 my-2 mx-3">$399</p>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={Size}
                color2={"#ffd700"}
                className="my-2"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={Toy2}
              alt="puppy"
              className="w-48 h-auto object-cover mx-28"
            ></img>
            <div className="flex flex-row px-24">
              <p className="text-2xl text-amber-400 my-2 mx-3">$675</p>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={Size}
                color2={"#ffd700"}
                className="my-2"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={Toy5}
              alt="puppy"
              className="w-48 h-auto object-cover mx-28"
            ></img>
            <div className="flex flex-row px-24">
              <p className="text-2xl text-amber-400 my-2 mx-3">$685</p>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={Size}
                color2={"#ffd700"}
                className="my-2"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={Bowls}
              alt="puppy"
              className="w-48 h-auto object-cover mx-28"
            ></img>
            <div className="flex flex-row px-24">
              <p className="text-2xl text-amber-400 my-2 mx-3">$885</p>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={Size}
                color2={"#ffd700"}
                className="my-2"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={Boot}
              alt="puppy"
              className="w-48 h-auto object-cover mx-28"
            ></img>
            <div className="flex flex-row px-24">
              <p className="text-2xl text-amber-400 my-1 mx-3">$657</p>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={Size}
                color2={"#ffd700"}
                className="my-1"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={Tool1}
              alt="puppy"
              className="w-48 h-auto object-cover mx-28"
            ></img>
            <div className="flex flex-row px-24">
              <p className="text-2xl text-amber-400 my-1 mx-3">$955</p>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={Size}
                color2={"#ffd700"}
                className="my-1"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Product;
