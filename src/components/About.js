import React from "react";
import Fade from "react-reveal/Fade";
import data from "../mydata";
import myImg from "../images/MyImg1.jpg";

const About = () => {
  return (
    <Fade bottom>
      <div className="container " id='about'>
        <h1 className="pb-1 pt-5 text-center">About</h1>
        <hr class="ribbon" />
        <hr class="ribbon-little" />
        <div className="row about">
          <div className="about-content  col-sm-6">
            <p>{data.abouttext[0]}</p>
            <p>{data.abouttext[1]}</p>
            <p>{data.abouttext[2]}</p>
          </div>

          <div className="col-sm-6 p-2  about-img">
            
              <img src={myImg} alt="Bhaskar Maity" className="about-img img-fluid"></img>
            
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default About;
