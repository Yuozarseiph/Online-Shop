import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./BannerSlider.css";

const BannerSlider = () => {
    const slides = [
        {
            title: "Big Sale Today!",
            description: "Up to 70% off on selected items. Don't miss out!",
        },
        {
            title: "New Collection Arrived",
            description: "Explore our latest fashion collection now!",
        },
        {
            title: "Free Shipping",
            description: "Enjoy free shipping on all orders over $50.",
        },
    ];

    return (
        <div className="banner-slider">
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={true}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="mySwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="slide-content">
                            <div className="slide-text">
                                <h2>{slide.title}</h2>
                                <p>{slide.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BannerSlider;
