import React, { useState, useEffect } from "react";
import "./TouristSpot.css";
import AOS from "aos";
import "aos/dist/aos.css";

const categories = [
  { name: "Culture & Heritage", image: "/Culture.jpg" },
  { name: "Nature", image: "/Nature.jpg" },
  { name: "Adventure", image: "/Adventure.jpeg" },
  { name: "Beach", image: "/Beach.jpg" },
  { name: "Urban", image: "/Urban.jpg" }
];

const touristSpots = {
  "Culture & Heritage": [
    {
      name: "Kek Lok Si Temple",
      features: "Prayer halls, gardens, and pagoda",
      openingHours: "8:30 AM – 5:30 PM",
      entryFee: "Free for most areas; RM 2 for the Pagoda",
      image: "/Kek-Lok-Si.jpg",
      mapsUrl: "https://maps.app.goo.gl/h2UTbLBv43BN3y6B9",
      description: "Known as the largest Buddhist temple in Malaysia, Kek Lok Si showcases stunning pagodas, a grand Guan Yin statue, and breathtaking hilltop views."
    },
    {
      name: "Street Art in George Town",
      features: "Photography spots and walking tours",
      openingHours: "Open all day",
      entryFee: "Free",
      image: "/Penang-Street-Art.jpg",
      mapsUrl: "https://maps.app.goo.gl/HBqitioof6JhFcoV7",
      description: "Discover the vibrant murals and creative street art that adorn the streets of George Town. These artworks uniquely reflect Penang’s rich blend of Malay, Indian, and Chinese heritage."
    },
    {
      name: "Little India",
      features: "Shopping, street food, and cultural performances",
      openingHours: "Open all day",
      entryFee: "Free",
      image: "/Little-India.jpg",
      mapsUrl: "https://maps.app.goo.gl/nzyGtfUrHKqutjVh7",
      description: "Immerse yourself in the lively sights, sounds, and aromas of Little India, a colorful district filled with Indian spices, vibrant textiles, and authentic eateries."
    },
    {
      name: "Khoo Kongsi Clan House",
      features: "Cultural exhibits, performances, and photography spots",
      openingHours: "9:00 AM – 5:00 PM",
      entryFee: "RM 10 per person",
      image: "/Khoo-Kongsi-Clan-House.jpg",
      mapsUrl: "https://maps.app.goo.gl/4TCwU3N7RjaYDWaeA",
      description: "Explore the intricate carvings and majestic architecture of the Khoo Kongsi Clan House, one of the largest Hokkien clan houses in Malaysia."
    }
  ],
  "Nature": [
    {
      name: "Penang Hill",
      features: "Funicular train, nature walks, and The Habitat",
      openingHours: "6:30 AM – 11:00 PM",
      entryFee: "RM 16 for Malaysians; RM 30 for foreigners",
      image: "/Penang-Hill.jpg",
      mapsUrl: "https://maps.app.goo.gl/dfsnpA26vVPVZ7th6",
      description: "Escape the city’s heat and enjoy the cool breeze, stunning panoramic views, and lush greenery on Penang Hill, also known as Bukit Bendera."
    },
    {
      name: "Botanical Gardens",
      features: "Jogging trails, gardens, and guided tours",
      openingHours: "6:30 AM – 7:00 PM",
      entryFee: "Free",
      image: "/Botanical-Gardens.jpg",
      mapsUrl: "https://maps.app.goo.gl/Go3C4xGVpYgYXubT9",
      description: "Enjoy a serene retreat at the Penang Botanical Gardens, home to diverse plant species, scenic waterfalls, and long-tailed macaque monkeys that roam freely."
    },
    {
      name: "Penang National Park",
      features: "Hiking, boat rides, and wildlife spotting",
      openingHours: "8:00 AM – 4:30 PM",
      entryFee: "Free entry; fees for boat rides",
      image: "/Penang-National-Park.jpg",
      mapsUrl: "https://maps.app.goo.gl/iUyakk5fyUDKjgZb7",
      description: "Explore Malaysia's smallest national park, offering diverse ecosystems, hiking trails, and stunning beaches. Look out for wildlife like flying lemurs and silvered leaf monkeys."
    },
    {
      name: "Tropical Spice Garden",
      features: "Guided tours, spice shop, and cooking classes",
      openingHours: "9:00 AM – 6:00 PM (Friday - Sunday) 9:00 AM – 4:30 PM (Monday to Thursday)",
      entryFee: "RM 20 for adults; RM 10 for children",
      image: "/Tropical-Spice-Garden.jpg",
      mapsUrl: "https://maps.app.goo.gl/HWi29i2GYG2ZuwE17",
      description: "Discover over 500 species of tropical plants and learn about spices at this lush garden oasis. Participate in cooking classes or relax amidst fragrant greenery."
    }
  ],
  "Adventure": [
    {
      name: "Escape Theme Park",
      features: "Water park, jungle adventures, and a zip coaster",
      openingHours: "10:00 AM – 6:00 PM",
      entryFee: "RM 129 - RM 184 for adults; RM 86 - RM 122 for children",
      image: "/Escape-Penang-Theme-Park.jpg",
      mapsUrl: "https://maps.app.goo.gl/i1mLEZvqwQxQ7V5a7",
      description: "Experience thrilling rides, ziplining, and water adventures at this eco-friendly theme park. ESCAPE Penang offers over 30 activities suitable for all ages and energy levels."
    },
    {
      name: "The Gravityz at Komtar",
      features: "Safety harness, stunning views, and thrilling activities",
      openingHours: "10:00 AM – 7:00 PM",
      entryFee: "RM 149 per person",
      image: "/The-Gravityz.jpg",
      mapsUrl: "https://maps.app.goo.gl/uBnJEWoZzpVAdAeS8",
      description: "Challenge your courage with this high-altitude outdoor ropes course on Komtar Tower’s 65th floor, offering stunning views of Penang."
    },
    {
      name: "Penang Water Sport Recreation Centre",
      features: "Water sports equipment rental, professional guides, and beach access",
      openingHours: "9:00 AM – 6:00 PM (Wednesday - Sunday)",
      entryFee: "Activity charges vary (starting from RM 50)",
      image: "/Penang-Water-Sport-Recreation-Centre.jpg",
      mapsUrl: "https://maps.app.goo.gl/ZdKBbu7ug2jdexa68",
      description: "For adrenaline junkies, the Penang Water Sports Centre in Tanjung Bungah offers exciting water-based adventures like jet skiing, windsurfing, and kayaking."
    },
    {
      name: "Penang ATV Eco Adventure Park",
      features: "ATV rides, guided tours, and jungle trails",
      openingHours: "9:00 AM – 6:00 PM",
      entryFee: "RM 100 - RM 200 depending on the route",
      image: "/Penang-ATV-Eco-Adventure-Park.jpg",
      mapsUrl: "https://maps.app.goo.gl/UeZvGQAr6zYuZL4s5",
      description: "For adrenaline junkies, this park offers thrilling ATV rides through rugged terrains, jungles, and streams in Balik Pulau. Riders can enjoy a blend of nature and excitement."
    }
  ],
  "Beach": [
    {
      name: "Batu Ferringhi Beach",
      features: "Jet skiing, parasailing, and dining",
      openingHours: "Open all day",
      entryFee: " Free",
      image: "/Batu-Ferringhi-Beach.jpg",
      mapsUrl: "https://maps.app.goo.gl/Bo2ERouU6aukm9YG6",
      description: "A popular destination for water sports, beach activities, and vibrant night markets. Relax or enjoy jet skiing and parasailing with friends or family."
    },
    {
      name: "Tanjung Bungah Beach",
      features: "Water sports and scenic views",
      openingHours: "Open all day",
      entryFee: " Free",
      image: "/Tanjung-Bungah-Beach.jpg",
      mapsUrl: "https://maps.app.goo.gl/SmZ14Swzwj1ZEGMR9",
      description: "A quieter beach perfect for kayaking, swimming, and picnicking."
    },
    {
      name: "Monkey Beach",
      features: "Picnic spots, swimming, and camping",
      openingHours: "Open all day",
      entryFee: " Free",
      image: "/Monkey-Beach.jpg",
      mapsUrl: "https://maps.app.goo.gl/1UEj9VqHhHaLBE6z7",
      description: "Located within Penang National Park, this secluded beach is accessible by hiking or boat. Enjoy calm waters, picnic spots, and a peaceful environment."
    },
    {
      name: "Kerachut Beach",
      features: "Hiking trails, picnic spots, swimming, camping, and the seasonal meromictic lake",
      openingHours: "Open all day",
      entryFee: " Free (fees apply for boat rides to access the beach)",
      image: "/Kerachut-Beach.jpg",
      mapsUrl: "https://maps.app.goo.gl/yebWrTaDpTvFNTH99",
      description: "Known for its serene ambiance, it is a favorite spot for nature enthusiasts and those seeking tranquility away from the city. The beach is also home to a unique meromictic lake, creating a fascinating natural phenomenon."
    }
  ],
  "Urban": [
    {
      name: "Penang Esplanade",
      features: "Walking paths and cultural events",
      openingHours: "Open all day",
      entryFee: " Free",
      image: "/Penang-Esplanade.jpg",
      mapsUrl: "https://maps.app.goo.gl/3w5PhgRqTs3mrQmz9",
      description: "A scenic waterfront area in George Town that offers stunning sea views and occasional cultural events. Ideal for evening strolls and a glimpse of local heritage."
    },
    {
      name: "Hin Bus Depot",
      features: "Art exhibitions, artisanal goods, and live events",
      openingHours: "12:00 PM – 7:00 PM (Monday - Friday) 11:00 AM - 5:00 PM (Saturday - Sunday)",
      entryFee: " Free",
      image: "/Hin-Bus-Depot.jpg",
      mapsUrl: "https://maps.app.goo.gl/16w9EySaes5KDRJg6",
      description: "A creative art space featuring galleries, markets, live performances, and artisanal food stalls. This repurposed bus depot is a hub for Penang’s vibrant art scene."
    },
    {
      name: "Straits Quay",
      features: "Marina views, al fresco dining, and live music events",
      openingHours: "10:00 AM – 10:00 PM",
      entryFee: " Free",
      image: "/Straits-Quay.jpg",
      mapsUrl: "https://maps.app.goo.gl/7YcfP3ySXAcdnvT28",
      description: "A charming marina mall offering waterfront dining, boutique shopping, and a vibrant nightlife scene. It’s a great place for leisurely strolls or enjoying a sunset view over the sea."
    },
    {
      name: "Gurney Drive",
      features: "Street food, shopping malls, and waterfront views",
      openingHours: "Open all day",
      entryFee: " Free",
      image: "/Gurney-Drive.jpg",
      mapsUrl: "https://maps.app.goo.gl/KeWBNompdwjDdvn6A",
      description: "A famous seafront promenade known for its food courts, upscale dining, and proximity to Gurney Plaza and Gurney Paragon Mall. It’s a favorite spot for both locals and tourists."
    }
  ]
};

const TouristSpot = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentSpotIndex, setCurrentSpotIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    setCurrentSpotIndex(0);
  }, [selectedCategory]);

  const handleNext = () => {
    if (selectedCategory && touristSpots[selectedCategory]) {
      setCurrentSpotIndex((prev) => 
        prev === touristSpots[selectedCategory].length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrev = () => {
    if (selectedCategory && touristSpots[selectedCategory]) {
      setCurrentSpotIndex((prev) => 
        prev === 0 ? touristSpots[selectedCategory].length - 1 : prev - 1
      );
    }
  };

  return (
    <section className="tourist-spot" id="TouristSpot">
      <div className="paddings innerWidth">
        <div className="tourist-header">
          <h2 className="orangeText" data-aos="fade-down">
            Discover Penang Tourist Spot
          </h2>
          <span className="primaryText" data-aos="fade-up">
            Tourist Attractions by Category
          </span>
        </div>

        <div className="categories-container">
          {categories.map(({ name, image }) => (
            <div key={name} className="category-card" data-aos="zoom-in">
              <h3 className="category-name">{name}</h3>
              <img src={image} alt={name} className="category-icon" />
              <button 
                className="explore-button"
                onClick={() => setSelectedCategory(selectedCategory === name ? null : name)}
              >
                {selectedCategory === name ? 'Show Less' : 'Explore'}
              </button>
            </div>
          ))}
        </div>

        {categories.map(({ name }) => (
          <div 
            key={name}
            className={`spots-container ${selectedCategory === name ? 'active' : ''}`}
          >
            {selectedCategory === name && touristSpots[name]?.length > 0 && (
              <>
                <h2 className="category-title">{name}</h2>
                <div className="spots-slider">
                  <div className="tourist-card" data-aos="zoom-in">
                    <div className="image-container">
                      <img 
                        src={touristSpots[name][currentSpotIndex].image} 
                        alt={touristSpots[name][currentSpotIndex].name} 
                      />
                      <div className="description-overlay">
                        <p>{touristSpots[name][currentSpotIndex].description}</p>
                      </div>
                    </div>
                    <div className="tourist-card-content">
                      <h3>{touristSpots[name][currentSpotIndex].name}</h3>
                      <p><strong>Features:</strong> {touristSpots[name][currentSpotIndex].features}</p>
                      <p><strong>Opening Hours:</strong> {touristSpots[name][currentSpotIndex].openingHours}</p>
                      <p><strong>Entry Fee:</strong> {touristSpots[name][currentSpotIndex].entryFee}</p>
                      <button 
                        className="directions-button"
                        onClick={() => window.open(touristSpots[name][currentSpotIndex].mapsUrl, "_blank")}
                      >
                        Get Directions
                      </button>
                    </div>
                  </div>
                </div>
                <div className="slider-buttons">
                  <button onClick={handlePrev} className="slider-button">
                    &#8249;
                  </button>
                  <span className="slider-counter">
                    {currentSpotIndex + 1} / {touristSpots[name].length}
                  </span>
                  <button onClick={handleNext} className="slider-button">
                    &#8250;
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TouristSpot;