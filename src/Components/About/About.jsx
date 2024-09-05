import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about container " >
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNVERSITY</h3>
        <h2>Nuturning Tomrrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          expedita recusandae hic, perferendis quas, quasi incidunt rem error
          assumenda blanditiis quia eum voluptatem aspernatur dignissimos ullam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          expedita recusandae hic, perferendis quas, quasi incidunt rem error
          assumenda blanditiis quia eum voluptatem aspernatur dignissimos ullam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          expedita recusandae hic, perferendis quas, quasi incidunt rem error
          assumenda blanditiis quia eum voluptatem aspernatur dignissimos ullam.
        </p>
      </div>
    </div>
  );
};

export default About;
