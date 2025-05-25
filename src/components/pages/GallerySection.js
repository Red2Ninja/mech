import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./GallerySection.css"; // Optional: for styling

const images = [
  "/images/gears.jpeg",
  "/images/Asme_bg.png",
  "/images/gears2.jpeg",
  "/images/robo.jpng",
];

function GallerySection() {
  return (
    <div className="gallery-section" id="gallery">
      <h2 className="gallery-title">Gallery</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Gallery ${index + 1}`} className="gallery-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default GallerySection;
