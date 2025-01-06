import React from "react";
import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import penangImagine from "/Hero.jpg";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="innerWidth hero-container flexCenter">
        {/* Left Section */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 3, type: "spring" }}
            >
              Discover <br />
              <span className="highlight-text">Penang's Wonders</span> <br />
              Your Dream Destination
            </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <span>Explore the beauty, heritage, and culture of Penang.</span>
            <span>Your journey starts here!</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 3, type: "spring" }}
            className="image-container"
          >
            <img src="./Hero.jpg" alt="Penang Landscape" />
          </motion.div>
        </div>
      </div>

      {/* Centered Stats Section */}
      <div className="flexCenter stats">
        <div className="flexColCenter stat">
          <span>
            <CountUp start={300} end={500} duration={4} />
            <span>+</span>
          </span>
          <span className="secondaryText">Attractions</span>
        </div>
        <div className="flexColCenter stat">
          <span>
            <CountUp start={19000} end={20000} duration={4} />
            <span>+</span>
          </span>
          <span className="secondaryText">Visitors</span>
        </div>
        <div className="flexColCenter stat">
          <span>
            <CountUp end={30} />
            <span>+</span>
          </span>
          <span className="secondaryText">Top Awards</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
