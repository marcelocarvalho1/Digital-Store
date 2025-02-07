import "./Caroussel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { ButtonRosa } from "../../components/buttons";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    title: "Melhores Ofertas Personalizadas",
    subtitle: "Queima de Estoque Nike 🔥",
    description:
      "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
    image: "/public/TenisSlide.svg",
  },
  {
    title: "Melhores Ofertas Personalizadas",
    subtitle: "Queima de Estoque Nike 🔥",
    description:
      "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
    image: "/public/TenisSlide.svg",
  },
  {
    title: "Melhores Ofertas Personalizadas",
    subtitle: "Queima de Estoque Nike 🔥",
    description:
      "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
    image: "/public/TenisSlide.svg",
  },
  {
    title: "Melhores Ofertas Personalizadas",
    subtitle: "Queima de Estoque Nike 🔥",
    description:
      "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
    image: "/public/TenisSlide.svg",
  },
];

export function Carousel() {
  return (
    <Swiper
      loop
      slidesPerView={1}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      spaceBetween={30}
      modules={[Pagination, Autoplay]}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="swiper-slide">
          <div className="slide-group">
            <div className="info-slide">
              <h5>{slide.title}</h5>
              <h1>{slide.subtitle}</h1>
              <p className="text-responsive">{slide.description}</p>
              {/* <Link to="/products"> */}
              <ButtonRosa />
              {/* </Link> */}
            </div>
            <img
              src={slide.image}
              className="slide-image"
              alt={`Slide ${index + 1}`}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
