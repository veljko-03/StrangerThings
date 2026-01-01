import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "../styles/HeroesPage.css";
import Navbar from "../components/NavBar";

const heroes = [
  {
    name: "Mike",
    actor: "Finn Wolfhard",
    img: "/images/mike.webp",
  },
  {
    name: "Will",
    actor: "Noah Schnapp",
    img: "/images/will2.jpg",
  },
  {
    name: "Dustin",
    actor: "Gaten Matarazzo",
    img: "/images/dustin.jpg",
  },
  {
    name: "Lucas",
    actor: "Caleb McLaughlin",
    img: "/images/lucas.webp",
  },
  {
    name: "Eleven",
    actor: "Millie Bobby Brown",
    img: "/images/eleven.avif",
  },
  {
    name: "Max",
    actor: "Sadie Sink",
    img: "/images/max.jpg",
  },
  {
    name: "Nancy",
    actor: "Natalia Dyer",
    img: "/images/nancy.webp",
  },
  {
    name: "Jonathan",
    actor: "Charlie Heaton",
    img: "/images/jonathan.jpg",
  },
  {
    name: "Robin",
    actor: "Maya Hawke",
    img: "/images/robin.jpg",
  },
  {
    name: "Steve",
    actor: "Joe Keery",
    img: "/images/steve.webp",
  },
  {
    name: "Hopper",
    actor: "David Harbour",
    img: "/images/hopper.avif",
  },
  {
    name: "Joyce",
    actor: "Winona Ryder",
    img: "/images/joyce.webp",
  },
  {
    name: "Murray",
    actor: "Brett Gelman",
    img: "/images/murray.png",
  },
  {
    name: "Erica",
    actor: "Priah Ferguson",
    img: "/images/erica.webp",
  },
];

const HeroesPage = () => {
  return (
    <div className="heroes-page">
      <Navbar />
      <div className="container">
        <Swiper
          modules={[Pagination, Mousewheel]}
          grabCursor
          centeredSlides
          slidesPerView="auto"
          spaceBetween={10}
          speed={1000}
          initialSlide={4}
          mousewheel={{ thresholdDelta: 30 }}
          pagination={{ clickable: true }}
          onClick={(swiper) => swiper.slideTo(swiper.clickedIndex)}
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
