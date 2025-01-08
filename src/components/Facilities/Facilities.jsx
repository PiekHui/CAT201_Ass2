
import React, { useState, useEffect } from "react";
import "./Facilities.css";
import AOS from "aos";
import "aos/dist/aos.css";

const categories = [
  { name: "Transportation", image: "/transportation.jpg" },
  { name: "Healthcare", image: "/healthcare.jpg" },
  { name: "Emergency Service", image: "/emergency services.jpeg" },
  { name: "Information Center", image: "/information.jpg" }
];

const facilities = {
  "Transportation": [
    {
      name: "Rapid Penang",
      features: "Comprehensive bus network across Penang，Smart card payment system",
      openingHours: "8:00 AM – 5:00 PM",
      workday: " Monday - Friday",
      contactInfo: "+604-255 8000",
      location: "Lorong Kulit, 10460 Georgetown, Pulau Pinang",
      image: "/Rapid-Penang.jpg",
      websiteUrl: "https://myrapid.com.my/bus-train/rapid-penang/",
      description: "Rapid Penang is the primary public bus service provider in Penang, offering comprehensive coverage across the island and mainland."
    },
    {
      name: "Penang International Airport",
      features: "Provides flight information, services, and facilities for travelers",
      openingHours: "24 Hours",
      workday: " Monday - Sunday",
      contactInfo: "+604-252 0252",
      location: "Lapangan Terbang Antarabangsa Bayan Lepas, 11900 Bayan Lepas, Penang",
      image: "/Penang - Airport.jpg",
      websiteUrl: "https://www.malaysiaairlines.com/my/en/home.html",
      description: "As Penang's main gateway to the world, this modern airport handles both domestic and international flights."
    },
    {
      name: "Former Penang Ferry",
      features: "Vehicle and pedestrian transport, Convenient payment systems",
      openingHours: "6:30 AM - 11:00 PM",
      workday: " Monday - Sunday",
      contactInfo: "+604-310 2363",
      location: "Pangkalan Sultan Abdul Halim Ferry Terminal",
      image: "/penang-ferry.jpg",
      websiteUrl: "https://www.penangport.com.my/services/ferry-services",
      description: "An iconic transportation service connecting Penang Island to Butterworth on the mainland."
    },
    {
      name: "Penang Sentral",
      features: "Integrated urban TOD with a transport terminal include ferry, train, bus and taxi",
      openingHours: "24 Hours",
      workday: " Monday - Sunday",
      contactInfo: "+604-313 9888",
      location: "6, Jalan Pantai, 12000 Butterworth, Pulau Pinang",
      image: "/penang central.jpg",
      websiteUrl: "https://penangsentral.com.my/",
      description: "A state-of-the-art integrated transportation hub that seamlessly connects various modes of public transport."
    }
  ],
  "Healthcare": [
    {
      name: "Pantai hospital",
      features: "250 Specialist clinics, Modern diagnostic equipment",
      openingHours: "24 Hours",
      workday:" Monday - Sunday",
      contactInfo: "+604-643 3888",
      location: "82 Jalan Tengah 11950 Mukim 12 (Bayan Lepas) Pinang",
      image: "/pantai hospital.jpg",
      websiteUrl: "https://www.pantai.com.my/penang",
      description: "A leading private healthcare facility offering comprehensive medical services with state-of-the-art equipment and experienced specialists."
    },
    {
      name: "Gleneagles Hospital Penang",
      features: "Comprehensive health screening, Advanced medical technology",
      openingHours: "24 Hours",
      workday:" Monday - Sunday",
      contactInfo: "+604-222 9111",
      location: "1 Pangkor Rd 10400 George Town Pinang",
      image: "/geo hospital penang.jpg",
      websiteUrl: "https://gleneagles.com.my/penang",
      description: "One of Penang's premier private hospitals, renowned for its medical excellence and personalized care."
    },
    {
      name: "Island Hospital Sdn Bhd",
      features: "600-bed private hospital, Advanced imaging center",
      openingHours: "24 Hours",
      workday:" Monday - Sunday",
      contactInfo: "+604-228 8222",
      location: "BA, Blok 308, Jalan Macalister, Georgetown 10450 Bandaraya George Town Pulau Pinang",
      image: "/island-hospital-new.jpeg",
      websiteUrl: "https://islandhospital.com/",
      description: "A major private healthcare institution in Penang offering comprehensive medical services in modern facilities. "
    },
    {
      name: "Balik Pulau Hospital Penang",
      features: "Government healthcare services, Provide international-standard quality healthcare services",
      openingHours: "24 Hours",
      workday:" Monday - Sunday",
      contactInfo: "+604-866 9333",
      location: "Hospital Balik Pulau 11000 Mukim 4 (Batu Itam) Pulau Pinang",
      image: "/balik pulau.jpg",
      websiteUrl: "https://hospital.com.my/directory/Penang/public/Hospital_Balik_Pulau.htm#google_vignette",
      description: "A government hospital serving the Balik Pulau community with quality healthcare services at affordable rates."
    }
  ],
  "Emergency Service": [
    {
      name: "Penang Contingent Police Headquarters",
      features: "24/7 security, Emergency response, Patrol services",
      openingHours: "24 Hours",
      workday:" Monday - Sunday",
      contactInfo: "+604-222 1522 or 999",
      location: "Jln Penang 10760 Bandaraya George Town Pulau Pinang",
      image: "/Polis station.jpg",
      type: "police station",
      description: "The main police headquarters in Penang, coordinating law enforcement activities across the state."
    },
    {
      name: "Central Fire Station",
      features: "Fire response, Rescue services, Emergency support",
      openingHours: "24 Hours",
      workday:" Monday - Sunday",
      contactInfo: "+604-261 4444 or 999",
      location: "200, Beach St 10300 Bandaraya George Town Penang",
      image: "/fire rescue.jpg",
      type: "fire station",
      description: "The primary fire and rescue station in George Town, equipped with modern firefighting equipment and trained personnel."
    },
    {
      name: "ST. JOHN AMBULANS MALAYSIA NEGERI PULAU PINANG",
      features: "Emergency medical response, First aid training programs, Community health services",
      openingHours: "24 Hours",
      workday:" Monday - Sunday",
      contactInfo: "+604-8285972 or 999",
      location: "24-A, JALAN GROVE 11400 AYER ITAM PULAU PINANG",
      image: "/st.png",
      type: "ambulance services",
      description: "A vital emergency medical service provider offering professional ambulance services and first aid training."
    }
  ],
  "Information Center": [
    {
      name: "Penang Tourist Information Centre",
      features: "City tours, Visitor passes, Cultural event information",
      openingHours: "9:00 AM – 5:00 PM",
      workday:" Monday - Friday",
      contactInfo: "+604-263 1166",
      location: "8B (1st floor, The Whiteaways Arcade, Beach St 10300 Bandaraya George Town Pulau Pinang",
      image: "/tourist center.jpg",
      websiteUrl: "https://www.penang360.my/plan-your-trip/tourist-information-centre",
      description: "A comprehensive resource center for tourists, providing essential information about Penang's attractions, accommodations, and cultural events."
    },
    {
      name: "Penang Tourist Guides Association",
      features: "Local expertise sharing, Multi-lingual guides, Cultural interpretation",
      openingHours: "10:00 AM – 6:00 PM",
      workday:" Monday - Friday",
      contactInfo: "+6011-1546 1966",
      location: "Prangin Mall, Lot 33-5-01, Jalan Dr Lim Chwee Leong, Georgetown George Town Penang",
      image: "/ptga.jpg",
      websiteUrl: "https://ptga.my/",
      description: "A professional association of licensed tour guides offering expert guidance and cultural insights about Penang."
    }
  ]
}
const Facilities = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentFacilityIndex, setCurrentFacilityIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    setCurrentFacilityIndex(0);
  }, [selectedCategory]);

  const handleNext = () => {
    if (selectedCategory && facilities[selectedCategory]) {
      setCurrentFacilityIndex((prev) => 
        prev === facilities[selectedCategory].length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrev = () => {
    if (selectedCategory && facilities[selectedCategory]) {
      setCurrentFacilityIndex((prev) => 
        prev === 0 ? facilities[selectedCategory].length - 1 : prev - 1
      );
    }
  };

  const handleAction = (category, facility) => {
    if (category === "Transportation" || category === "Information Center" || category === "Healthcare" ) {
      // For Transportation, Information Center and Health Care, open the website
      window.open(facility.websiteUrl, "_blank");
    } else {
      // For Emergency Service, search for nearest facilities
      const searchQuery = facility.type === "police station" 
      ? "nearest police station"
       : facility.type === "fire station"
      ? "nearest fire station"
      : "nearest ambulance service";
     // const userLocation = encodeURIComponent(facility.location);
      window.open(`https://www.google.com/maps/search/${searchQuery}`, "_blank");
    }
  };

  // Function to get button text based on category
  const getButtonText = (category) => {
    switch (category) {
      case "Transportation":
      case "Information Center":
      case "Healthcare":
        return "Get More Information";
      case "Emergency Service":
        return "Get Nearest Position";
      default:
        return "Get More Information";
    }
  };
  return (
    <section className="facilities" id="Facilities">
      <div className="paddings innerWidth">
        <div className="facilities-header">
          <h2 className="orangeText" data-aos="fade-down">
            Provided Facilities
          </h2>
          <span className="primaryText" data-aos="fade-up">
            Essential Services & Information
          </span>
        </div>

        <div className="facility-categories-container">
          {categories.map(({ name, image }) => (
            <div key={name} className="facilities-category-card" data-aos="zoom-in">
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
            className={`facilities-container ${selectedCategory === name ? 'active' : ''}`}
          >
            {selectedCategory === name && facilities[name]?.length > 0 && (
              <>
                <h2 className="category-title">{name}</h2>
                <div className="facilities-slider">
                  <div className="facility-card" data-aos="fade-up">
                    <div className="image-container">
                      <img 
                        src={facilities[name][currentFacilityIndex].image} 
                        alt={facilities[name][currentFacilityIndex].name} 
                      />
                      <div className="description-overlay">
                        <p>{facilities[name][currentFacilityIndex].description}</p>
                      </div>
                    </div>
                    <div className="facility-card-content">
                      <h3>{facilities[name][currentFacilityIndex].name}</h3>
                      <p><strong>Features:</strong> {facilities[name][currentFacilityIndex].features}</p>
                      <p><strong>Opening Hours:</strong> {facilities[name][currentFacilityIndex].openingHours}</p>
                      <p><strong>Work Day:</strong>{facilities[name][currentFacilityIndex].workday}</p>
                      <p><strong>Contact:</strong> {facilities[name][currentFacilityIndex].contactInfo}</p>
                      <p><strong>Location:</strong> {facilities[name][currentFacilityIndex].location}</p>
                      <button 
                        className={`action-button ${name === "Transportation" || name === "Information Center" || name === "Healthcare"  ? 'info' : 'location'}`}
                        onClick={() => handleAction(name, facilities[name][currentFacilityIndex])}
                      >
                        {getButtonText(name)}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="slider-buttons">
                  <button onClick={handlePrev} className="slider-button">
                    &#8249;
                  </button>
                  <span className="slider-counter">
                    {currentFacilityIndex + 1} / {facilities[name].length}
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

export default Facilities;