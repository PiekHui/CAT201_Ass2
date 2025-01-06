// export default Accommodation;
import React, { useState, useEffect } from "react";
import "./Accommodation.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";

const categories = [
  { name: "All", type: "All"},
  { name: "Hotels", type: "Hotel" },
  { name: "Homestays", type: "Homestay" },
  { name: "Apartments", type: "Apartment" },
];

const accommodations = [
  // Hotels
  { type: "Hotel", name: "Parkroyal Penang Resort", price: "RM 600/night", venue: "Batu Ferringhi", image: "/Parkroyal.jpg", description: "A beachfront resort with family-friendly amenities.", buttonColor: "red", rating: 4.5, pack: "Up to 4 People"},
  { type: "Hotel", name: "Hard Rock Hotel Penang", price: "RM 750/night", venue: "Batu Ferringhi", image: "/HardRock.jpg", description: "A vibrant hotel with rock-and-roll-themed decor.", buttonColor: "red", rating: 4.7, pack: "Up to 5 People"},
  { type: "Hotel", name: "The Prestige Hotel", price: "RM 500/night", venue: "Georgetown", image: "/Acc1.jpg", description: "A luxurious hotel with beautiful views and top-notch services.", buttonColor: "red", rating: 4.3, pack: "Up to 3 People"},
  { type: "Hotel", name: "G Hotel Gurney", price: "RM 800/night", venue: "Gurney Drive", image: "/GHotel.jpeg", description: "Modern luxury with excellent dining and shopping nearby.", buttonColor: "red", rating: 4.6, pack: "Up to 4 People"},
  { type: "Hotel", name: "Cititel Express", price: "RM 250/night", venue: "Downtown Penang", image: "/Cititel.jpg", description: "Affordable stays with convenient access to the city.", buttonColor: "red", rating: 4.0, pack: "Up to 2 People"},
  { type: "Hotel", name: "Eastin Hotel", price: "RM 400/night", venue: "Queensbay", image: "/Eastin.jpg", description: "A business-friendly hotel with excellent facilities.", buttonColor: "red", rating: 4.2, pack: "Up to 3 People"},

  // Homestays
  { type: "Homestay", name: "My GuestHouse 109", price: "RM 200/night", venue: "Georgetown", image: "/GuestHouse109.jpeg", description: "Cozy homestay with a welcoming vibe.", buttonColor: "red", rating: 4.1, pack: "Up to 3 People"},
  { type: "Homestay", name: "24 Kimberley", price: "RM 300/night", venue: "Kimberley Street", image: "/24Kimberley.jpg", description: "Charming heritage house with modern amenities.", buttonColor: "red", rating: 4.5, pack: "Up to 4 People"},
  { type: "Homestay", name: "Aayu Melayu", price: "RM 250/night", venue: "Chulia Street", image: "/AayuMelayu.jpg", description: "Traditional Malay-style homestay.", buttonColor: "red", rating: 4.3, pack: "Up to 3 People"},
  { type: "Homestay", name: "Pine Muntri", price: "RM 350/night", venue: "Muntri Street", image: "/PineMuntri.jpg", description: "Stylish and spacious homestay in a quiet area.", buttonColor: "red", rating: 4.6, pack: "Up to 5 People"},
  { type: "Homestay", name: "Smell Rose Beach Garden", price: "RM 400/night", venue: "Batu Ferringhi", image: "/RoseBeach.jpg", description: "Relaxing retreat near the beach.", buttonColor: "red", rating: 4.4, pack: "Up to 6 People"},

  // Apartments
  { type: "Apartment", name: "Bayu Emas Apartment", price: "RM 300/night", venue: "Batu Ferringhi", image: "/BayuEmas.jpg", description: "Simple and affordable apartment by the sea.", buttonColor: "red", rating: 4.0, pack: "Up to 4" },
  { type: "Apartment", name: "10 Island Resort", price: "RM 500/night", venue: "Tanjung Bungah", image: "/10Island.jpg", description: "Modern apartments with stunning ocean views.", buttonColor: "red", rating: 4.5, pack: "Up to 6" },
  { type: "Apartment", name: "Tropicana 218 Macalister", price: "RM 600/night", venue: "Georgetown", image: "/Tropicana218.jpg", description: "Luxurious apartment in the heart of the city.", buttonColor: "red", rating: 4.7, pack: "Up to 5" },
  { type: "Apartment", name: "The Regency", price: "RM 450/night", venue: "Gurney Drive", image: "/TheRegency.jpg", description: "Spacious and comfortable apartment for families.", buttonColor: "red", rating: 4.4, pack: "Up to 5" },
  { type: "Apartment", name: "Summerton Condo", price: "RM 550/night", venue: "Queensbay", image: "/Summerton.jpg", description: "Upscale condo near shopping and entertainment.", buttonColor: "red", rating: 4.6, pack: "Up to 6" }
];

const sliderSettings = {
  spaceBetween: 20,
  slidesPerView: 3,
  breakpoints: {
    768: { slidesPerView: 2 },
    480: { slidesPerView: 1 },
  },
};

const Accommodation = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  // const filteredAccommodations = accommodations.filter(
  //   (item) => item.type === categories.find((cat) => cat.name === selectedCategory)?.type
  // );

  const filteredAccommodations =
  selectedCategory === "All"
    ? accommodations
    : accommodations.filter(
        (item) => item.type === categories.find((cat) => cat.name === selectedCategory)?.type
      );

  return (
    <section className="accommodation" id="Accommodation">
      <div className="paddings innerWidth">
        <div className="accommodation-header flexColStart">
          <h2 className="orangeText" data-aos="fade-down">
            Explore Accommodations
          </h2>
          <span className="primaryText" data-aos="fade-up">
            Find the Perfect Stay
          </span>
        </div>

        <div className="categories" data-aos="fade-up">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`category-button ${selectedCategory === category.name ? "active" : ""}`}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <Swiper {...sliderSettings} onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}>
          <SliderButtons activeIndex={activeIndex} totalSlides={filteredAccommodations.length} />
          {filteredAccommodations.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="accommodation-card" data-aos="zoom-in">
                <div className="image-container">
                  <img src={item.image} alt={item.name} className="accommodation-image" />
                  <div className="description-overlay">
                  <p>{item.description}</p>
                </div>
                </div>
                <h3>{item.type}</h3>
                <p><strong>{item.name}&nbsp;{item.rating}/5.0</strong></p>
                <p><strong>Price: </strong>{item.price}</p>
                <p><strong>Venue: </strong>{item.venue}</p>
                <p><strong>Capacity: </strong>{item.pack}</p>
                <button
                  className={`explore-button ${item.buttonColor}`}
                  onClick={() => window.open(`https://www.google.com/search?q=${item.name}`, "_blank")}
                >
                  Explore
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const SliderButtons = ({ activeIndex, totalSlides }) => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter slider-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <span className="slider-counter">
        {activeIndex + 1} / {totalSlides-1}
      </span>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};

export default Accommodation;
