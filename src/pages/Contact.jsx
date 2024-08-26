import React, { useState, useRef } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { CgSmartphoneShake } from "react-icons/cg";
import Footer from "../componet/Footer";

import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const form = useRef();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    emailjs
      .sendForm("service_8bwwc35", "template_r5b65im", form.current, {
        publicKey: "HQqwcSlLlZq5hddlL",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <>
      <div className="mx-5 sm:mx-10 lg:w-3/5 lg:mt-9 md:mb-8 lg:mb-8 ">
        <p className="text-2xl text-lime-500 mb-2 ml-10 border-l-4 border-lime-500 pl-8 my-16 py-8">
          Contact us
          <p className="uppercase font-bold text-3xl text-black lg:text-5xl">
            please feel free to
            <br /> contact us
          </p>
        </p>
      </div>

      <div className="flex flex-col px-8 gap-1 lg:flex-row md:gap-4 lg:px-20 ">
        <form onSubmit={handleSubmit} ref={form}>
          <input
            type="text"
            name="name"
            className="bg-gray-300 h-16 mx-8 my-1 w-[16rem] md:w-[42rem] rounded-md lg:w-[56rem]"
            placeholder="YOUR NAME"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            className="bg-gray-300 h-16 mx-8 my-1 w-[16rem] md:w-[42rem] rounded-md lg:w-[56rem]"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="subject"
            className="bg-gray-300 h-16 mx-8 my-1 w-[16rem] md:w-[42rem] rounded-md lg:w-[56rem]"
            placeholder="YOUR SUBJECT"
            value={formData.subject}
            onChange={handleInputChange}
          />
          <textarea
            className="bg-gray-300 h-48 mx-8 my-1 w-[16rem] md:w-[42rem] rounded-md lg:w-[56rem]"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
          <button className="bg-lime-500 h-16 mx-8 my-1 w-[16rem] md:w-[42rem] rounded-md lg:w-[56rem] ">
            Send Message
          </button>
        </form>
        <div className="flex flex-col bg-gray-200 px-8 py-6 w-full  lg:w-[96rem]  ">
          <p className="inline-flex font-bold text-neutral-900">
            <span className="mx-3 text-neutral-900">
              <IoLocationOutline className="h-8 w-8" />
            </span>
            OUR OFFICE
          </p>
          <p className="mx-10 text-gray-500">
            123 street, Bhubaneswar, Cuttack
          </p>
          <div className="mt-4">
            <p className="inline-flex font-bold text-neutral-900">
              <span className="mx-3 text-neutral-900">
                <HiOutlineMailOpen className="h-8 w-auto" />
              </span>
              EMAIL US
            </p>
            <p className="mx-10 text-gray-500">adyashabiswal02@gmail.com</p>
          </div>
          <div className="mt-4">
            <p className="inline-flex font-bold text-neutral-900">
              <span className="mx-3 text-neutral-900">
                <CgSmartphoneShake className="h-8 w-8" />
              </span>
              CALL US
            </p>
            <p className="mx-10 text-gray-500">9938795482</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
