import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { useNavigate, Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

function Hero({
  slides,
  autoplayDelay = 5000,
  sectionStyle = "h-[100vh] w-full relative",
  titleStyle = "font-outfit font-black text-4xl md:text-6xl lg:text-7xl text-left text-[#FFFFFF]",
  divStyle = "flex flex-col absolute inset-0 right-[50%] top-[50%] my-auto gap-5 w-[100%] lg:w-[75%] h-[75vh] px-3 md:px-5 lg:px-10",
}) {
  const navigate = useNavigate();
  return (
    <div className={sectionStyle}>
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={800}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/*Background Image*/}
            <div
              className="relative h-full w-full bg-cover bg-center flex px-5 md:px-10 lg:px-20"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* <img src="/4.png" className="" /> */}
              {/* Overlay to enhance visibility */}
              <div className="absolute inset-0 bg-black/50" />

              {/* content */}
              <div className={divStyle}>
                <h1 className={titleStyle}>{slide.title}</h1>
                <p className="font-sans font-normal text-xl md:text-2xl lg:text-4xl text-[#cccbcb] text-left tracking-tight">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    //   #8c5c07
  );
}

export default Hero;
