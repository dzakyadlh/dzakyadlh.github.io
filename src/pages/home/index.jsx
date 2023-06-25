import React from "react";
import {} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedinIn,
  faGithub,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";
import { Card } from "react-bootstrap";
import "./style.css";

import Navbar from "../../components/navbar";
import PP from "../../assets/images/kamiya.jpg";
import Thumb from "../../assets/images/sukidakara.png";
import Scripts from "../../scripts";

const Home = () => {
  const services = [
    {
      name: "Web Development",
      desc: "Unleash the potential of your online presence with personalized web development solutions. From captivating design to seamless functionality, I create custom websites that leave a lasting impression.",
    },
    {
      name: "UI/UX Design",
      desc: "Elevate your digital experiences with my UI/UX design services. I combine aesthetics and user-centric design principles to create captivating interfaces that engage users.",
    },
    {
      name: "Mobile Development",
      desc: "Unlock the power of mobile with my mobile development services. From native apps to cross-platform solutions, I create high-performance and user-friendly mobile experiences.",
    },
  ];
  return (
    <React.Fragment>
      <Navbar />
      <div className="scroll-container home-container">
        <div className="mini-profile">
          <div className="me-container">
            <img className="profile-pic" src={PP} alt="me" />
            <h1>Dzaky Adla Hikmatiyar</h1>
            <p>Full-stack Web Developer</p>
            <p>Associate Android Developer</p>
          </div>
          <div className="profile-details">
            <row>
              <h5>Gender:</h5>
              <h6>Male</h6>
            </row>
            <row>
              <h5>Residence:</h5>
              <h6>Surabaya, Indonesia</h6>
            </row>
            <row>
              <h5>Age:</h5>
              <h6>20</h6>
            </row>
            <hr />
            <h4>Skills</h4>
            <ul className="profile-skills">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Node.Js</li>
              <li>PostgreSQL</li>
              <li>Kotlin</li>
              <li>Swift</li>
            </ul>
          </div>
          <div className="profile-contacts">
            <ul>
              <li className="contacts-icon">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </li>
              <li className="contacts-icon">
                <FontAwesomeIcon icon={faGithub} />
              </li>
              <li className="contacts-icon">
                <FontAwesomeIcon icon={faGitlab} />
              </li>
              <li className="contacts-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </li>
            </ul>
          </div>
        </div>
        <div className="content-container">
          <div className="thumbnail-container">
            <img className="thumbnail" src={Thumb} alt="mythumbnail" />
            <h2>Explore and See for Yourself</h2>
            <h2>My Amazing Art Space</h2>
            <button className="thumbnail-button">Explore Now</button>
          </div>
          <div className="services-container">
            <h1>My Services</h1>
            <div className="d-flex">
              {services.map((row, index) => (
                <Card className="services-card" key={index}>
                  <Card.Body>
                    <Card.Title className="services-card-title">
                      {row.name}
                    </Card.Title>
                    <Card.Text className="services-card-text">
                      {row.desc}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
