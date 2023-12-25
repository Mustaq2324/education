import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../index.css"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper
      
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        <SwiperSlide>
          <div
            className="relative w-full h-[500px] lg:h-[700px] bg-cover"
            style={{
              backgroundImage: `url(${img1})`,
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
            <div className="text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-2xl lg:text-5xl font-vast-shadow">
              Unlock Knowledge on Demand
              </h1>
              {/* <div className=" mt-2">
                <button className="bg-[#E8AF3E] px-4 py-2 text-black hover:bg-white transition-all duration-500 hover:text-[#e8af3e] mt-2 font-[reemkufi]">
                  PARTIES
                </button>
              </div> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative w-full h-[500px] lg:h-[700px] bg-cover "
            style={{
              backgroundImage: `url(${img3})`,
              backgroundPosition: "center",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
            <div className="text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              < h1 className="text-2xl lg:text-5xl font-vast-shadow">Transforming Education, One Slide at a Time</h1>
              {/* <div className=" mt-2">
                <button className="bg-[#E8AF3E] px-4 py-2 text-black hover:bg-white transition-all duration-500 hover:text-[#e8af3e] mt-2 font-[reemkufi]">
                  RESERVATIONS
                </button>
              </div> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative w-full h-[500px] lg:h-[700px] bg-cover"
            style={{
              backgroundImage: `url(${img2})`,
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
            <div className="text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-2xl lg:text-5xl font-vast-shadow">
              Revolutionizing Learning for the Digital Era
              </h1>
              {/* <div className=" mt-2">
                <button className="bg-[#E8AF3E] px-4 py-2 text-black hover:bg-white transition-all duration-500 hover:text-[#e8af3e] mt-2 font-[reemkufi]">
                  ORDER ONLINE
                </button>
              </div> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative w-full h-[500px] lg:h-[700px] bg-cover"
            style={{
              backgroundImage: `url(${img4})`,
              backgroundPosition:"center"
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
            <div className="text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-2xl lg:text-5xl font-vast-shadow">
              Dive into a World of Possibilities
              </h1>
              {/* <div className=" mt-2">
                <button className="bg-[#E8AF3E] px-4 py-2 text-black hover:bg-white transition-all duration-500 hover:text-[#e8af3e] mt-2 font-[reemkufi]">
                 OUR MENU
                </button>
              </div> */}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}