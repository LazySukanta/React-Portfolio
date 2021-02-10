import React from "react";
import Fade from "react-reveal/Fade";
import data from "../mydata";
import myImg from "../images/MyImg1.jpg";

const About = () => {
  return (
    <Fade bottom>
        <hr class="ribbon" />
      <div className="container " id='about'>
        {/* <hr class="ribbon-little" /> */}
        <h1 className="pb-1 pt-5 text-center">About</h1>
        <div className="row about">
          <div className="about-content  col-sm-6">
            <p>{data.abouttext[0]}</p>
            <p>{data.abouttext[1]}</p>
            <p>{data.abouttext[2]}</p>
          </div>

          <div className="col-sm-6 p-2  about-img">
            
              <img src={myImg} alt="Bhaskar Maity" className="about-img img-fluid" style={{borderRadious: "50%"}}></img>
            
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default About;
