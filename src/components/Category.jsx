import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import img1 from "../images/home/slide1.jpg"
import img2 from "../images/home/slide2.jpg"
import img3 from "../images/home/slide3.jpg"
import img4 from "../images/home/slide4.jpg"
import img5 from "../images/home/slide5.jpg"


const Category = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className="mySwiper mb-24"
    >
      <SwiperSlide>
        <img src={img1} alt="" />
        <h3 className="text-2xl uppercase text-center -mt-12 text-white font-bold">Salads</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img5} alt="" />
      </SwiperSlide>
      
    </Swiper>
  );
};

export default Category;
