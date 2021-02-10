import React from "react";
import Fade from "react-reveal/Fade";
import data from "../mydata";
import Typed from "react-typed";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaKaggle,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Button } from "react-bootstrap";

const Header = () => {
  return (
    <div className="container header" id="home" >
      <div className="row">
        <div className="col-12 text-center">
          <Fade bottom>
          <Typed 
          className="typed-text"
          strings={["I am Sukanta Dinda."]}
          typeSpeed={40}
          className="header-title"
        />
            <p className="header-banner" style={{color:"white"}}>
              {data.headerTagline[0]}
              {data.headerTagline[1]}
              <br></br>
            </p>

            <p className="header-para" style={{color:"white"}}>
              {data.headerTagline[2]}
              <br></br>
            </p>
            <ul className="social-icons" >
              <li>
                <a
                  href="https://github.com/LazySukanta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sukantadinda/"
                  target="_blank"
                  rel="noopener noreferrer"

                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/19_sukanta/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/19Sukanta"
                  target="_blank"
                  rel="noopener noreferrer"
  
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="mailto:dindasukanta19@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"

                >
                  <FiMail />
                </a>
              </li>
              {/*  */}
            </ul>
            <Button className="resume-button">
              <a
                href="https://drive.google.com/file/d/1KabM0urY0KDT4j4DVjd6aVUuK88WHf8n/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                RESUME
              </a>
            </Button>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Header;

