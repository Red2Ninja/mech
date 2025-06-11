import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./GallerySection.css"; // Optional: for styling

const images = [
  "/images/gallery/gallery1.jpg",
  "/images/gallery/gallery2.jpg",
  "/images/gallery/gallery3.jpg",
  "/images/gallery/gallery4.jpg",
  "/images/gallery/gallery5.jpg",
  "/images/gallery/gallery6.jpg",
  "/images/gallery/gallery7.jpg",
  "/images/gallery/gallery8.jpg",
  "/images/gallery/gallery9.jpg",
  "/images/gallery/gallery10.jpg",
  "/images/gallery/gallery11.jpg",
  "/images/gallery/gallery12.jpg",
  "/images/gallery/gallery13.jpg",
  "/images/gallery/gallery14.jpg",
  "/images/gallery/gallery15.jpg",
  "/images/gallery/gallery16.jpg",
  "/images/gallery/gallery17.jpg"
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
