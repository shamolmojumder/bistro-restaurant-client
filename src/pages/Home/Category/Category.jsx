// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// slide image import from asset
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle 
      subHeading={"From 11:00am to 10:00pm"}
        heading={"ORDER ONLINE"}
      ></SectionTitle> 
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />{" "}
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Salads
          </h3>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />{" "}
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Pizza
          </h3>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />{" "}
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Soups
          </h3>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />{" "}
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Dessert
          </h3>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />{" "}
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Salads
          </h3>{" "}
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
