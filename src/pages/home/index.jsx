import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedinIn,
  faGithub,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";
import "./style.css";

import Navbar from "../../components/navbar";
import PP from "../../assets/images/kamiya.jpg";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="main-container home-container">
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
              <li>
                <span>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                HTML
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                CSS
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                Javascript
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                React
              </li>
            </ul>
            <ul className="profile-skills">
              <li>
                <span>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                Node.Js
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                PostgreSQL
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                Kotlin
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                Swift
              </li>
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
        <div className="content-container"></div>
      </div>
    </React.Fragment>
  );
};

export default Home;
