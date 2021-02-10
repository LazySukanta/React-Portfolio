import React from "react"
import Fade from "react-reveal/Fade"
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaKaggle } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <Fade bottom>
      <section id="contact">
    <div class="container mt-5">
          <div className="row justify-content-center">             
                <div className="col-auto">
                  <h1 class="title text-center">Contact Me</h1>
                  <hr class="ribbon"/>
                  <hr class="ribbon-little"/>
                </div>
                </div>
        
        <div className='row'>
          <div className='col-md-6 text-center'>
          <ul className='social-icons-footer mr-auto'>
          <li><a href='https://github.com/Bhaskar-maity' target="_blank" rel="noopener noreferrer"><FaGithub/></a></li>
                                <li><a href='https://www.linkedin.com/in/bhaskar-maity-882653190' target="_blank" rel="noopener noreferrer"><FaLinkedin/></a></li>
                                <li><a href='https://www.instagram.com/btw_bhaskar/' target="_blank" rel="noopener noreferrer"><FaInstagram/></a></li>
                                <li><a href='https://twitter.com/Bhaskar14153687' target="_blank" rel="noopener noreferrer"><FaTwitter/></a></li>
                                <li><a href='mailto:maitybhaskar2015@gmail.com' target="_blank" rel="noopener noreferrer"><FiMail/></a></li>
                                <li><a href='https://www.kaggle.com/bhaskar321' target="_blank" rel="noopener noreferrer"><FaKaggle/></a></li>
                                  
          </ul>
          </div>
          <div className=' col-md-6 text-center'>
                          <p className='ml-quto copyright-footer'> Copyright © 2020 – Site designed & developed by Bhaskar Maity</p>
          </div>
        </div>
    </div>
  </section>
    </Fade>
  )
}

export default Footer
