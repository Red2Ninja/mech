import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./GallerySection.css";

const images = [
    "https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752237242/gallery16_ggxmvw.jpg",
    "https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752237235/gallery14_uyhsc7.jpg",

  "https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752237245/gallery17_xhknan.jpg",
  "https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752237266/gallery9_zir3nn.jpg",
  "https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752237263/gallery8_lmovex.jpg",
  "https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752237261/gallery7_zq6tds.jpg",
  "https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752237257/gallery6_samwfa.jpg",
  "https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752237254/gallery5_q0xzjk.jpg",
  "https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752237251/gallery3_uel7rv.jpg",
  "https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752237248/gallery2_yxmpoh.jpg",
  "https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752237239/gallery15_xifko5.jpg",
  
  "https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752237232/gallery13_cckrqe.jpg",
  "https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752237228/gallery12_pfzprf.jpg",
  "https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752237224/gallery11_g6vesy.jpg",
  "https://res.cloudinary.com/detarpq3q/image/upload/f_webp/v1752237223/gallery10_hhpjai.jpg"
];

function GallerySection() {
  const [loadedImages, setLoadedImages] = useState(new Set());

  const handleImageLoad = (index) => {
    setLoadedImages(prev => new Set([...prev, index]));
  };

  return (
    <div className="gallery-section" id="gallery">
      <h2 className="gallery-title">Gallery</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ 
          clickable: true,
          dynamicBullets: true 
        }}
        autoplay={{ 
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        loop={true}
        grabCursor={true}
        className="mySwiper"
        breakpoints={{
          // Mobile
          480: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          // Tablet
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // Desktop
          1024: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          // Large desktop
          1280: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div 
              className={`gallery-img-container ${loadedImages.has(index) ? 'loaded' : ''}`}
            >
              <img 
                src={src} 
                alt={`Gallery ${index + 1}`} 
                className="gallery-img"
                loading="lazy"
                onLoad={() => handleImageLoad(index)}
                onError={(e) => {
                  // Fallback for broken images
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0xMjUgNzVMMTc1IDEyNUgxNzVMMTI1IDc1WiIgZmlsbD0iI0NDQ0NDQyIvPgo8L3N2Zz4K';
                  handleImageLoad(index);
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default GallerySection;