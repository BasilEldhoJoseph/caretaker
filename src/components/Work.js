import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const servicesData = [
  {
    title: "Full House Cleaning",
    text: "Complete interior cleaning of every room — spotless and fresh!",
  },
  {
    title: "Kitchen & Bathroom Deep Cleaning",
    text: "We tackle the grime so you don't have to — every tile and tap shines!",
  },
  {
    title: "Dusting & Floor Polishing",
    text: "Say goodbye to dust bunnies and dull tiles — hello shine!",
  },
  {
    title: "Garden & Outdoor Area Clean-Up",
    text: "Neat lawns, clean paths, and fresh air — your outdoors, perfected.",
  },
  {
    title: "Pre-arrival and Post-departure Maintenance",
    text: "We prep your space before you arrive and tidy up after you're gone.",
  },
  {
    title: "Regular House Visits (for NRI homeowners)",
    text: "Peace of mind from afar — we keep an eye on your home while you're away.",
  },
];

const Services = () => {
  return (
    <div className="services-section-wrapper" id="services">
      <div className="services-section-top">
        <p className="primary-subheading">Services</p>
        <h1 className="primary-heading">What We Offer</h1>
        <p className="primary-text">
          Your home, vacation-ready — here’s what we take care of for you:
        </p>
      </div>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {servicesData.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="service-card">
              <h2 className="service-title">{service.title}</h2>
              <p className="service-text">{service.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;
