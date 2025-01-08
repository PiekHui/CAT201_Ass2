import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-scroll";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };

  return (
    <section className="h-wrapper">
      <div className="paddings innerWidth h-container">
        <a href="/" style={{ cursor: "pointer" }}>
          <img src="./GeoPenang.png" alt="logo" width={120} />
        </a>

          <OutsideClickHandler
            onOutsideClick={() => {
              setMenuOpened(false);
            }}
          >
          <div className="Centerflex h-menu" style={getMenuStyles(menuOpened)}>
            <Link
              to="TouristSpot"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Tourist Spots
            </Link>
            <Link
              to="FoodBeverage"
              spy={true}
              smooth={true}
              offset={-8}
              duration={500}
            >
              Food Beverages
            </Link>
            <Link
              to="Accommodation"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Accommodations
            </Link>
            <Link
              to="Facilities"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Facilities
            </Link>

          </div>
        </OutsideClickHandler>
        
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;

