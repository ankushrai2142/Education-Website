import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Contact from "./Components/Contactus/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navabar from "./Components/Navabar/Navabar";
import Programs from "./Components/Programs/Programs";
import Testimonials from "./Components/Testimonials/Testimonials";
import Title from "./Components/Title/Title";

function App() {
  return (
    <div>
      <Navabar />
      <Hero />
      <Title subTitle="Our Program" subTitle2="What We Offer you" />
      <Programs />
      <About />
      <Title subTitle="Gallery " subTitle2="Campus photos" />
      <Campus />
      <Title subTitle="TESTIMONIALS" subTitle2="YOUR STUDENT REVIEWS " />
      <div className="container">
        <Testimonials />
        <Title subTitle="CONTACT US" subTitle2="Get in Touch " />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
