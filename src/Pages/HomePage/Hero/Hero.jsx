import React from "react";
import "./Hero.css";
const TypeWriterEffect = React.lazy(() => import("react-typewriter-effect"));
// import TypeWriterEffect from "react-typewriter-effect";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div>
      <div className="slider">
        <div className="sliderContent">
          <div className="heading">
            <TypeWriterEffect
              textStyle={{ fontFamily: "Red Hat Display", fontSize: "43px" }}
              startDelay={0}
              cursorColor="black"
              text="ROLLSRUSH"
              typeSpeed={150}
            />

            <TypeWriterEffect
              textStyle={{
                fontFamily: "Red Hat Display",
                color: "#3F3D56",
                fontWeight: 500,
                fontSize: "30px",
              }}
              startDelay={0}
              cursorColor="#3F3D56"
              multiText={[
                "Experience the Thrill of Luxury Unleashed.",
                "Embark on a Journey of Elegance and Performance.",
                "Discover the Pinnacle of Prestige and Power.",
                "Indulge in the Artistry of Engineering Excellence.",
                "Experience the Thrill of Luxury Unleashed.",
                "Embark on a Journey of Elegance and Performance.",
                "Discover the Pinnacle of Prestige and Power.",
                "Indulge in the Artistry of Engineering Excellence.",
              ]}
              multiTextDelay={500}
              typeSpeed={30}
            />
          </div>
          <div className="paragraphs">
            <p>
              Rolls Rush: Where opulence meets velocity, experience luxury
              redefined in motion.
            </p>
            <p>
              Unleash the power of elegance with every exhilarating drive,
              igniting your passion for luxury at every turn.
            </p>
          </div>
          <div className="buttons">
            <Link to="/FreeConcept3">
              {" "}
              <button id="heroButton">Discover Demos</button>
            </Link>
          </div>
        </div>
        <div className="sliderImage">
          <div className="empty"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
