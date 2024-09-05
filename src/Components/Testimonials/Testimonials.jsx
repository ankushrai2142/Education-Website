import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef(); // use for forward and backward button
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      // logic for forward button
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      // logic for backward
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testmon">
      <img
        src={next_icon}
        alt=""
        className="next-icon"
        onClick={slideForward}
      />
      <img
        src={back_icon}
        alt=""
        className="back-icon"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Ritu Yadav </h3>
                  <span>India , New Delhi</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                aperiam repudiandae autem assumenda facere vel voluptas sunt
                eveniet excepturi explicabo, ea reprehenderit tempora voluptates
                tempore!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Sajid Ansari </h3>
                  <span>India , UTTAR PRADESH</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas dolores voluptate ipsam earum eveniet? Eaque,
                laboriosam ea reprehenderit voluptatibus natus explicabo quas
                cumque dicta maiores!
              </p>
            </div>
          </li>
          <li>
            
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>DIKSHA PRIYA </h3>
                  <span>India , PUNJAB</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas dolores voluptate ipsam earum eveniet? Eaque,
                laboriosam ea reprehenderit voluptatibus natus explicabo quas
                cumque dicta maiores!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>ROHAN SINGH </h3>
                  <span>India , WEST BENGAL</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas dolores voluptate ipsam earum eveniet? Eaque,
                laboriosam ea reprehenderit voluptatibus natus explicabo quas
                cumque dicta maiores!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
