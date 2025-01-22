'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules"
import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";
import { data } from "@/lib/data";

export function Slider() {
    const carouselData = data

    return (
        <Swiper
            spaceBetween={30}
            grabCursor={true}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            breakpoints={{
                1000: {
                    slidesPerView: 3
                },
                500: {
                    slidesPerView: 1
                },
                300: {
                    slidesPerView: 1
                }
            }}
            className="mySwiper flex items-center"
        >
            {carouselData.map((item, index) => (
                <SwiperSlide className="" key={index}>
                    {/* <div className=""> */}
                        <Image
                            src={`/images/test/${item.imagePath}`}
                            alt="Integrante Abel"
                            width={item.width}
                            height={item.height}
                            layout="cover"
                            className="rounded-xl h-full"
                        />
                    {/* </div> */}
                </SwiperSlide>
            ))}
        </Swiper>
    )
}