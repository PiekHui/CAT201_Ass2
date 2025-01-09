import React, { useEffect, useState } from "react";
import "./FoodBeverage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";

// Array of food and beverage items
const foodBeverages = [
  {
    title: "Penang Char Koay Teow",
    description:
      "Flavoured with a hint of spice, the stir-fried char koay teow here hits like Heaven.",
    image: "charkoayteow.jpg",
  },
  {
    title: "Penang Laksa",
    description:
      "Served with springy lai fun noodles in asam sardine broth, it comes with a wide depth of exceptional flavours.",
    image: "laksa.jpg",
  },
  {
    title: "Penang Oh Chien",
    description:
      "Comes with juicy, fresh oysters atop a bed of crispy yet sticky egg batter fried to perfection.",
    image: "oysteromelette.JPG",
  },
  {
    title: "Hokkien Mee",
    description:
      "A thick, aromatic concoction that leaves a spicy-savoury satisfaction.",
    image: "hokkienmee.jpg",
  },
  {
    title: "932",
    description: "A refreshing drink made from preserved calamansi.",
    image: "932.jpg",
  },
  {
    title: "Pat Poh Teh",
    description:
      "A herbal tea syrup made from a variety of Chinese herbs.",
    image:
      "patpoh.jpg",
  },
  {
    title: "Ma Tai Tek Cia",
    description:
      "This soothing drink is good especially when the weather is hot as water chestnut and sugar cane are believed to able to reduce heatiness and help cool the body.",
    image: "mataitekcia.jpg",
  },
  {
    title: "Tongsui",
    description:
      "An unbeatable range of choices when it comes to this Cantonese-style dessert that can be served either hot or cold.",
    image: "tongsui.jpg",
  },
  {
    title: "Nyonya Kuih",
    description:
      "A bite of tradition in every piece. It is sweet, colorful, and full of heritage.",
    image: "nyonyakuih.jpg",
  },
  {
    title: "Penang Chendul",
    description:
      "A perfect blend of shaved ice, creamy coconut milk, fragrant gula melaka, and chewy green jelly.",
    image: "chendul.jpg",
  }
];

const FoodBeverage = () => {
  const [slidesPerView, setSlidesPerView] = useState(2); // Default value for larger screens

  useEffect(() => {
    // Set the number of slides per view based on screen width
    const updateSlidesPerView = () => {
      if (window.innerWidth <= 650) {
        setSlidesPerView(1); // 1 slide per view on small screens
      } else {
        setSlidesPerView(2); // Default 2 slides per view on larger screens
      }
    };

    // Call the function initially and on window resize
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    // Initialize AOS (Animate On Scroll)
    AOS.init({ duration: 1000 });

    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  return (
    <section className="foodbeverage" id="FoodBeverage">
      <div className="paddings innerWidth">
        <header className="foodbeverage-header flexColStart">
          <h2 className="orangeText" data-aos="fade-down">
            Savor Food and Beverages
          </h2>
          <span className="primaryText" data-aos="fade-up">
            Delight your taste buds
          </span>
        </header>
      </div>

      <div className="food-beverage">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={slidesPerView} // Dynamically set slidesPerView
          loop={true}
          className="food-beverage-swiper"
        >
          {foodBeverages.map((item, index) => (
            <SwiperSlide key={index} className="food-beverage-slide">
              <div
                className="slide-content"
                style={{ backgroundImage: `url(${item.image})` }}
                data-aos="fade-up"
              >
                <div className="content-overlay">
                  <h2 className="slide-title">{item.title}</h2>
                  <p className="slide-description">{item.description}</p>
                  <button className="read-more-btn"
                    onClick={() => window.open(`https://www.google.com/search?q=${item.title}`, "_blank")}>
                    Explore
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FoodBeverage;