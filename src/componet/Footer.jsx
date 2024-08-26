import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { CiTwitter } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <footer className="bg-gray-200 pt-24 pl-5 mt-16 md:pt-14 md:px-10 pb-6 ">
        <div className="md:flex flex-row  md:pb-8">
          <div className="ml-2 w-52 md:pt-10">
            <p className="uppercase font-bold border-l-4 border-lime-400 text-2xl pl-3  ">
              get in touch
            </p>
            <p className="font-rubik text-1xl text-gray-600 pl-3 pt-2 mb-2">
              We'd love to hear from you-contact us today!
            </p>
            <div className="flex flex-row pt-1">
              <div className="mt-1 w-10 h-auto">
                <IoLocationOutline />
              </div>
              <p className=" text-gray-600 font-rubik text-1xl pl-1 ">
                123street,Bhubneswar,cuttack
              </p>
            </div>
            <div className="flex flex-row  pt-1">
              <div className="mt-1 w-10 h-auto">
                <HiOutlineMailOpen />
              </div>
              <p className=" text-gray-600 font-rubik text-1xl pl-1 ">
                adyashabiswal02@gmail.com
              </p>
            </div>
            <div className="flex flex-row pt-1">
              <div className="mt-1 w-10 h-auto">
                <FiPhone />
              </div>
              <p className=" text-gray-600 font-rubik text-1xl  ">
                +91 9938795482
              </p>
            </div>
          </div>
          <div className="pt-10 w-52  pl-12 lg:ml-80  ">
            <p className="uppercase font-bold border-l-4 border-lime-400 text-2xl pl-3  ">
              quick link
            </p>
            <div className=" flex flex-row pt-6 w-52 ">
              <div className=" h-8 w-auto">
                <IoIosArrowRoundForward />
              </div>
              <Link to="/" className="uppercase text-sm ">
                home
              </Link>
            </div>
            <div className="w-56  ">
              <div className="flex flex-row">
                <div className=" h-8 w-auto">
                  <IoIosArrowRoundForward />
                </div>
                <Link to="/about" className="uppercase text-sm ">
                  about
                </Link>
              </div>
              <div className="flex flex-row">
                <div className=" h-8 w-auto">
                  <IoIosArrowRoundForward />
                </div>
                <Link to="/services" className="uppercase text-sm ">
                  service
                </Link>
              </div>
              <div className="flex flex-row">
                <div className=" h-8 w-auto">
                  <IoIosArrowRoundForward />
                </div>
                <Link to="/product" className="uppercase text-sm ">
                  product
                </Link>
              </div>
              <div className="flex flex-row">
                <div className=" h-8 w-auto">
                  <IoIosArrowRoundForward />
                </div>
                <Link to="/contact" className="uppercase text-sm ">
                  contact
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-6 w-48 pl-10 md:mt-6 lg:ml-80">
            <p className="uppercase font-bold border-l-4 border-lime-400 text-2xl pl-3  ">
              newsletter
            </p>
            <form>
              <label className="flex flex-row my-8 ">
                <input
                  type="email"
                  name="email"
                  placeholder="YOUR EMAIL"
                ></input>
                <button className="bg-lime-700 w-40 h-auto text-white ">
                  SIGN UP
                </button>
              </label>
            </form>
            <div className="">
              <p className="font-extrabold text-2xl uppercase">follow us</p>
              <div className="flex flex-row pl-4 py-4 items-center">
                <div className="w-10 h-auto">
                  <CiTwitter />
                </div>
                <div className="w-10 h-auto">
                  <FaFacebook />
                </div>
                <div className="w-10 h-auto">
                  <FaLinkedin />
                </div>
                <div className="w-10 h-auto">
                  <FaSquareInstagram />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div classname="py-6 ">
          <p className="text-gray-500 text-1xl mx-10 mb-6 lg:pl-96">
            Terms & condition |PrivacyPolicy|customerSupport| Payments| Help|
            FAQs
          </p>
        </div>
      </footer>
      <p className="text-sm text-white text-center py-10 bg-black lg:px-0">
        &copy; 2024 PetLoveShop.com,All Rights Reserved.
      </p>
    </>
  );
}

export default Footer;
