import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import SlideLayout from "./SlideLayout";
const SliderLayout = () => {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    fetch("/SliderData.json")
      .then((res) => res.json())
      .then((data) => setSliders(data));
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper h-[550px] rounded-lg"
      >
        <div>
          {sliders.map((slide) => (
            <SwiperSlide className="rounded-lg" key={slide.id}>
              <SlideLayout slide={slide}></SlideLayout>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default SliderLayout;
