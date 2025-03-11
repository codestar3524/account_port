"use client"; // If using this as a client component in Next.js 13 or later  

import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles  
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "React,Web3, Node",
          path: "/portfolio/p1.jpg",
          link: "https://www.exodus.com",
        },
        {
          title: "Vue, Element, Laravel",
          path: "/portfolio/p2.jpg",
          link: "https://malaysiatrip.co",
        },
        {
          title: "WordPress",
          path: "/portfolio/p3.jpg",
          link: "https://zenfounder.com",
        },
        {
          title: "WooCommerce",
          path: "/portfolio/p4.jpg",
          link: "https://slimtastes.com",
        }
      ],
    },
    {
      images: [
        {
          title: "WooCommerce",
          path: "/portfolio/p5.jpg",
          link: "https://watchhouse.de",
        },
        {
          title: "React, Web3",
          path: "/portfolio/p6.jpg",
          link: "https://claim.scottybeam.io",
        },
        {
          title: "WooCommerce & Elementor",
          path: "/portfolio/p7.jpg",
          link: "https://superdominicano.com",
        },
        {
          title: "WooCommerce & UX Builder",
          path: "/portfolio/p8.jpg",
          link: "https://viali.co.uk",
        }
      ],
    },
    {
      images: [
        {
          title: "React, Web3",
          path: "/portfolio/p9.jpg",
          link: "https://palmshiba.com",
        },
        {
          title: "WooCommerce",
          path: "/portfolio/p10.jpg",
          link: "https://servicedogkits.com",
        },
        {
          title: "WordPress",
          path: "/portfolio/p11.jpg",
          link: "https://plate2plate.com",
        },
        {
          title: "WooCommerce & UX Builder",
          path: "/portfolio/p12.jpg",
          link: "https://barnnova.com",
        }
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      navigation={{
        enabled: true,
      }}
      modules={[Pagination, Navigation]}
      className=""
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-lg overflow-hidden flex group"
                key={imageI}
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  <Image
                    src={image.path}
                    alt={image.title}
                    width={500}
                    height={300}
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                    aria-hidden
                  />

                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-[100%] transition-all duration-300">
                    <Link
                      href={image.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                    >
                      <div className="translate-y-[50%] group-hover:translate-y-[-150%] transition-all duration-300 delay-150">
                        {image.link.substring(8, image.link.length)}
                      </div>
                      <div className="text-xl translate-y-[50%] group-hover:translate-y-[-150%] transition-all duration-300 delay-150">
                        <BsArrowRight aria-hidden />
                      </div>
                    </Link>
                    <div className="text-center">{image.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;