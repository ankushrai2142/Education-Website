import React from "react";
import "./Conatact.css";
import msg_icon from "../../assets/msg-icon.png";
import email_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import loction_icon from "../../assets/location-icon.png";
import arrow_line from "../../assets/white-arrow.png";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3004fee7-9930-4b22-b140-1d31ed9c7823");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully 😊👍");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-info">
        <h3>
          Send us a Message
          <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            {" "}
            <img src={email_icon} alt="" />
            raiankush189@gamil.com
          </li>
          <li>
            {" "}
            <img src={phone_icon} alt="" />
            +91-99999-88888
          </li>
          <li>
            {" "}
            <img src={loction_icon} alt="" />
            I-622 , Alph2 , Greater Noida , <br />
            Near Delta-1 Metro Gate-no-2.
          </li>
        </ul>
      </div>
      <div className="contact-form">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name "
            required
          />
          <label>Mobile Number </label>
          <input
            type="tel"
            name="mobile"
            placeholder="Enter your Mobile Number"
            required
          />
          <label>Your Email </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email Id"
            required
          />
          <label>Write Your Message here 😊</label>
          <textarea
            name="message"
            rows="10"
            placeholder="Enter Your message here "
            required
          ></textarea>
          <button type="submit" className="btn dark-nav">
            Submit now
            <img src={arrow_line} alt="" />
          </button>
        </form>
        <span> {result} </span>
      </div>
    </div>
  );
};

export default Contact;
