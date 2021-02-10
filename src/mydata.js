import notes from "./images/notes.png";
import meme from "./images/meme.jpg";
import weather from "./images/Weather.png"
import ticTac from "./images/ticTac.png"
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaBootstrap,
  FaReact,
  FaNpm,
  FaGitAlt,
  FaGithubSquare,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

export default {
  name: "Sukanta.",
  headerTagline: [
    "Web Developer,Competitive programmer, ",

    "Machine Learning Enthusiast",

    "Love exploring new things!",
  ],
  //Contact Email
  contactEmail: "dindasukanta19@gmail.com",
  // About Text
  abouttext: [
    "Hi there! I am Sukanta. I am persuing my undergraduation in Computer Science from University Of Engineering & Management , Kolkata .",
    "My areas of interests are Competetive Programming, Web Development, Machine Learning.",
    "I love exploring new things.I don't fear failures or rejections they are ways to enrich you and glorify your personality.",
  ],

  //  Projects
  projects: [
    {
      id: 1,
      title: "Todo app",
      para:
        "It is a React Todo app. We can add, edit and delete items.", 

      imageSrc: notes,

      url: "https://lazysukanta.github.io/Todo__App/",
    },
    {
      id: 2,
      title: "Meme Creator App",
      para:
        "A React base meme creator app. It generate meme image and can edit that image. Whole Process is done by imgflip API",

      imageSrc: meme,

      url: "https://jy0qn.csb.app/",
    },
    {
      id: 3,
      title: "Weather App",
      para:
        " Weather app made with React and fetched weather details from OpenWeatherMAP API",

      imageSrc: weather,

      url: "https://lazysukanta.github.io/Weather__App/",
    },
    // {
    //   id: 4,
    //   title: "Tic-tac-toe",
    //   para:
    //     " JavaScript based game.",

    //   imageSrc: ticTac,

    //   url: "https://lazysukanta.github.io/Tic-Tac-Toe/",
    // },
 
  ],

  skills: [
    {
      id: 1,
      skill: <FaHtml5 className="display-4" />,
      name: "HTML5",
    },
    {
      id: 2,
      skill: <FaCss3Alt className="display-4" />,
      name: "CSS3",
    },
    {
      id: 3,
      skill: <SiJavascript className="display-4" />,
      name: "JavaScript",
    },
    {
      id: 4,
      skill: <FaPython className="display-4" />,
      name: "Python",
    },
    {
      id: 5,
      skill: <FaBootstrap className="display-4" />,
      name: "Bootstrap",
    },
    {
      id: 6,
      skill: <FaReact className="display-4" />,
      name: "React",
    },
    {
      id: 7,
      skill: <FaNpm className="display-4" />,
      name: "npm",
    },
    {
      id: 8,
      skill: <FaGitAlt className="display-4" />,
      name: "Git",
    },
    {
      id: 9,
      skill: <FaGithubSquare className="display-4" />,
      name: "GitHub",
    },
  ],
};
