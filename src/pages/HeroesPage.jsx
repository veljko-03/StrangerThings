import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { heroes } from "../assets/data/heroes";
import "../styles/HeroesPage.css";
import Navbar from "../components/NavBar";


const HeroesPage = () => {
  return (
    <div className="heroes-page">
      <Navbar />
      <div className="container">
        <Swiper
          modules={[Pagination, Mousewheel]}
          grabCursor
          centeredSlides
          speed={1000}
          initialSlide={4}
          mousewheel={{ thresholdDelta: 30 }}
          pagination={{ clickable: true }}
          onClick={(swiper) => swiper.slideTo(swiper.clickedIndex)}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: "auto",
              spaceBetween: 10,
            },
          }}
          className="swiper"
        >
          {heroes.map((hero, index) => (
            <SwiperSlide key={index}>
              <img src={hero.img} alt={hero.name} />
              <p>{hero.name}</p>
              <span>{hero.actor}</span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroesPage;
