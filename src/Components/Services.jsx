import React from "react";

import QualityImg from "../assets/Quality.jpg";
import libraryImg from "../assets/Library.jpg";
import placementImg from "../assets/Placement.jpg";
import researchImg from "../assets/Research.jpg";
import hostelImg from "../assets/Hostel.jpg";
import sportsImg from "../assets/Sports.jpg";

function Services() {
  const services = [
    {
      title: "Quality Education",
      desc: "Providing industry-oriented courses with experienced faculty members.",
      image: QualityImg,
    },
    {
      title: "Digital Library",
      desc: "Access thousands of e-books, journals, and research papers online.",
      image: libraryImg,
    },
    {
      title: "Placement Support",
      desc: "Career guidance, internship opportunities, and campus placements.",
      image: placementImg,
    },
    {
      title: "Research Programs",
      desc: "Advanced research facilities for innovation and academic excellence.",
      image: researchImg,
    },
    {
      title: "Hostel Facilities",
      desc: "Safe, comfortable, and modern accommodation for students.",
      image: hostelImg,
    },
    {
      title: "Sports & Activities",
      desc: "Indoor and outdoor sports facilities for overall development.",
      image: sportsImg,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8 sm:py-10 md:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-red-900 mb-3 sm:mb-4">
          Our Services
        </h1>

        <p className="text-center text-gray-600 mb-8 sm:mb-10 md:mb-12 text-base sm:text-lg max-w-2xl mx-auto">
          Empowering students through education, innovation, and opportunities.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-xl
                shadow-lg
                overflow-hidden
                hover:-translate-y-2
                hover:shadow-2xl
                transition
                duration-300
              "
            >

              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-44 sm:h-48 md:h-52 object-cover"
              />

              {/* Card Content */}
              <div className="p-4 sm:p-5 md:p-6">

                <h2 className="text-xl sm:text-2xl font-bold text-red-800 mb-2 sm:mb-3 md:mb-4">
                  {service.title}
                </h2>

                <p className="text-gray-600 text-sm sm:text-base leading-6 sm:leading-7">
                  {service.desc}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Services;