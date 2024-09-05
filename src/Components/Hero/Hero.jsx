import React from "react";
import "./Hero.css";
import "../../assets/hero.png";
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className="hero container ">
      <div className="hero-txt">
        <h1>We Ensure eduction for a better world</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum numquam
          iure eligendi atque, quia ut in velit voluptate necessitatibus eius.
          Dignissimos ratione quaerat laborum impedit perspiciatis, saepe magnam
          amet? Voluptas, culpa cumque perspiciatis nobis maiores odit autem
          voluptates enim illo.
        </p>
        <button className="btn">Explore more 
            <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
