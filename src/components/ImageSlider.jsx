import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderItem = ({ img, title, desc }) => {
  return (
    <div className="w-full relative">
      <img
        key={img} // Force re-render on image change
        src={img}
        alt={title}
        draggable="false"
        className="w-full h-[500px] object-cover z-10"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 p-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-2 text-center">{desc}</p>
      </div>
    </div>
  );
};

const ImageSlider = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true); // Ensures component fully mounts before rendering slider
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: "ondemand", // Ensures images load properly
    initialSlide: 0,
    arrows: true,
  };

  const slides = [
    {
      img: "/logos/slide1.jpg", // ✅ Ensure image is inside `public/logos`
      title: "Trident Academy of Technology",
      desc: "A name that has become a brand in the field of technical education, synonymous with excellence.",
    },
    {
      img: "https://tat.ac.in/wp-content/themes/tat/files/home_slider/slide5.jpg?itok=v8xPhXa5",
      title: "Campus",
      desc: "A corporate-styled college campus in the heart of Bhubaneswar in Infocity Area.",
    },
    {
      img: "https://tat.ac.in/wp-content/themes/tat/files/home_slider/slide3.jpg?itok=97Kzmdel",
      title: "Alumni Meet",
      desc: "Meet success like a gentleman and disaster like a man.",
    },
  ];

  if (!isReady) return <div className="text-center text-white">Loading Slider...</div>; // Avoid blank screen

  return (
    <div className="w-full max-w-6xl mx-auto mt-16 pt-20">
      <Slider key={slides.map((s) => s.img).join("")} {...settings}>
        {slides.map((slide, index) => (
          <SliderItem key={index} img={slide.img} title={slide.title} desc={slide.desc} />
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
