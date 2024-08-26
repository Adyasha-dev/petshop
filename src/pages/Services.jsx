import React, { useState } from "react";
import {
  Pet_Boarding,
  Petfeeding,
  Petgrooming,
  Traning,
  Treatment,
  Exercise,
} from "../assets";

import { FaArrowRightLong } from "react-icons/fa6";

const contents = [
  {
    id: 1,
    img: Pet_Boarding,
    title: "pet boarding",
    paragraph:
      "We propose a safe,comfortable, and fun boarding experience for your pets.",
    details:
      "Our pet boarding services include comfortable accommodations, personalized attention, and daily exercise to ensure your pet feels at home.",
  },
  {
    id: 2,
    img: Petfeeding,
    title: "pet feeding",
    paragraph:
      "Provide your pets with a balanced diet, fresh water, and healthy treats to ensure they stay happy, energetic, and thrive under your loving care!",
    details:
      "We offer a variety of feeding plans tailored to your pet's needs, ensuring they get the right nutrition every day.",
  },
  {
    id: 3,
    img: Petgrooming,
    title: "pet grooming",
    paragraph:
      "Keep your pets clean and comfortable with regular grooming, including nail trimming, brushing, and bathing.",
    details:
      "Our grooming services include professional care for your pet's coat, nails, and overall hygiene, making them look and feel their best.",
  },
  {
    id: 4,
    img: Traning,
    title: "Training",
    paragraph:
      "Give your pets the best care with our comprehensive training services, from basic obedience to advanced skills.",
    details:
      "Our training programs are designed to help your pet learn and grow in a supportive environment, with personalized lessons for every need.",
  },
  {
    id: 5,
    img: Treatment,
    title: "Treatment",
    paragraph:
      "Provide your pets with top-notch treatment, including vaccinations, parasite control, and preventative care for a healthy life.",
    details:
      "We offer comprehensive veterinary services to keep your pet healthy, including regular check-ups, treatments, and emergency care.",
  },
  {
    id: 6,
    img: Exercise,
    title: "Exercise",
    paragraph:
      "Help your pets stay happy and healthy with regular exercise, such as walking, running, and playtime.",
    details:
      "Our exercise programs include fun and engaging activities that keep your pet active and fit, tailored to their individual needs.",
  },
];

function Services() {
  const [display, setDisplay] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  const handleDisplay = (content) => {
    setSelectedContent(content);
    setDisplay(true);
  };

  const closeModal = () => {
    setDisplay(false);
    setSelectedContent(null);
  };

  return (
    <>
      <div className="w-full mt-16 flex flex-col px-16">
        <p className="text-2xl text-lime-500 mb-1 ml-10 border-l-4 border-lime-500 pl-8">
          Services
          <p className="uppercase text-3xl font-bold text-black md:text-5xl">
            our excellent pet <br className="hidden md:block" /> care services
          </p>
        </p>

        <div className="flex flex-col gap-4 mt-20 mb-14 md:grid md:grid-cols-2">
          {contents.map((content) => (
            <div
              className="flex flex-row items-center bg-lime-200 py-4"
              key={content.id}
            >
              <img
                className="h-10 w-16 pl-4"
                src={content.img}
                alt={content.title}
              />
              <div className="flex flex-col">
                <p className="text-2xl font-semibold uppercase ml-4 pb-1">
                  {content.title}
                </p>
                <p className="flex flex-col mr-10 pl-5">
                  {content.paragraph}
                  <p
                    className="uppercase text-lime-500 flex flex-row mt-3 cursor-pointer"
                    onClick={() => handleDisplay(content)}
                  >
                    read more <FaArrowRightLong className="w-10 h-8 pl-4" />
                  </p>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {display && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">{selectedContent.title}</h2>
            <p className="mb-4">{selectedContent.details}</p>
            <button
              className="bg-lime-500 text-white px-4 py-2 rounded-lg"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Services;
