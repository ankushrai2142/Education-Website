import React from "react";
import "./Campus.css";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import drak_arrow from "../../assets/dark-arrow.png";
const Campus = () => {
  return (
    <div className="campus container " id="campus">
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className="btn da">
        See More
        <img src={drak_arrow} alt="" className="img-da"  />
      </button>
    </div>
  );
};

export default Campus;
