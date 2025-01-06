import React from "react";
import "./Footer.css";
import { Footer as footerData } from "../../Utils/Footer";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-inner-container">
          <div className="f-left">
            <img src="GeoPenang.png" alt="logo" width={120} />
            <p className="secondaryText">
            Discover the Vibrant Culture of Penang!
            </p>
            <br />
            <br />
            <br />
            <span className="copyright">Copyright © GeoPenang.</span>
          </div>
        </div>

        <div className="f-right">
          <div className="footer-column">
            <h4>{footerData[0].title}</h4>
            <ul>
              {footerData[0].links.map((link, linkIndex) => (
                <li key={linkIndex} className=" secondaryText element">
                  <a href={link.link} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>{footerData[1].title}</h4>
            <ul>
              {footerData[1].links.map((link, linkIndex) => (
                <li key={linkIndex} className="secondaryText element">
                  <a href={link.link} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>{footerData[2].title}</h4>
            <ul>
              {footerData[2].links.map((link, linkIndex) => (
                <li key={linkIndex} className="secondaryText element">
                  <a href={link.link} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;