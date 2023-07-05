import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faGithub,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";
import Navbar from "../../components/navbar";
import PP from "../../assets/images/kamiya.jpg";
import "./style.css";
import useLocalStorage from "use-local-storage";

const Profile = () => {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const navigate = useNavigate();
  const handleClick = (link) => {
    navigate(link);
  };
  const experiences = [
    {
      name: "Bangkit Academy 2023: Mobile Development Path",
      organizer: "Dicoding Indonesia",
      year: "2023",
      desc: "",
    },
    {
      name: "Binar Academy Full-stack Web Development Bootcamp",
      organizer: "Binar Academy",
      year: "2022-2023",
      desc: "",
    },
  ];
  const projects = [
    {
      name: "Gradee",
      year: "2023",
      desc: "Gradee is a online learning platform with a variety of learning path for high school students and college students. Gradee is a team-based learning that uses a course system that connects students with mentors and experts.",
    },
    {
      name: "Weatheria",
      year: "2023",
      desc: "Weatheria is a weather app that can show weather informations in your area, including weather, outdoor temperature, forecasting, and others.",
    },
    {
      name: "Chatopia",
      year: "2023",
      desc: "Chatopia is a chat app.",
    },
  ];
  return (
    <React.Fragment>
      <Navbar />
      <div className="scroll-container profile" data-theme={theme}>
        <div className="profile-container">
          <div className="profile-thumbnail">
            <img className="profile-pic" src={PP} alt="me" />
            <div className="thumbnail-body">
              <h1>Dzaky Adla Hikmatiyar</h1>
              <h6>Full-stack Web Developer</h6>
              <h6>Android Developer</h6>
              <h6>Game Developer</h6>
              <hr></hr>
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
          </div>
          <div className="profile-body">
            <div className="aboutme">
              <h6>
                I am a motivated individual with a Bachelor's degree in
                Engineering Physics and a strong background in full-stack web
                development and Android development. With a deep understanding
                of complex systems and a passion for technology, I have honed my
                skills to create robust web applications and intuitive mobile
                experiences. Constantly seeking new challenges, I thrive in
                dynamic environments where I can apply my technical expertise to
                develop innovative solutions. With a diverse skill set and a
                dedication to delivering high-quality results, I am eager to
                contribute to projects that push the boundaries of what is
                possible in the ever-evolving world of technology.
              </h6>
            </div>
            <hr></hr>
            <div className="biodata">
              <h2>Biodata</h2>
              <row className="profile-body-data">
                <h3>Age:</h3>
                <h6>20</h6>
              </row>
              <row className="profile-body-data">
                <h3>Gender:</h3>
                <h6>Male</h6>
              </row>
              <row className="profile-body-data">
                <h3>Residence:</h3>
                <h6>Surabaya, Indonesia</h6>
              </row>
            </div>
            <hr></hr>
            <div className="education">
              <h2>Education</h2>
              <li>
                <div>
                  <h3>Bachelor of Engineering Physics</h3>
                  <h6>Sepuluh Nopember Institute of Technology</h6>
                  <h6>GPA: 3.50</h6>
                </div>
                <div>
                  <h6>2020-2024</h6>
                </div>
              </li>
            </div>
            <hr></hr>
            <div className="experiences">
              <h2>Experiences</h2>
              {experiences.map((row, index) => (
                <li key={index}>
                  <div className="exp-desc">
                    <h3>{row.name}</h3>
                    <h6>{row.organizer}</h6>
                  </div>
                  <div>
                    <h6>{row.year}</h6>
                  </div>
                </li>
              ))}
            </div>
            <hr></hr>
            <div className="projects">
              <h2>Projects</h2>
              {projects.map((row, index) => (
                <li key={index}>
                  <div className="exp-desc">
                    <h3>{row.name}</h3>
                    <h6>{row.desc}</h6>
                  </div>
                  <div>
                    <h6>{row.year}</h6>
                  </div>
                </li>
              ))}
              <Link className="links" onClick={() => handleClick("/projects")}>
                More projects...
              </Link>
            </div>
            <hr></hr>
            <div className="skills">
              <h2>Skills</h2>
              <h6>Fluent English, Native Indonesian</h6>
              <h6>
                Web Development: HTML, CSS, Javascript, React JS, Node JS,
                PostgreSQL
              </h6>
              <h6>Mobile Development: Kotlin, Swift, Flutter</h6>
              <h6>Game Development: Unreal Engine, Blueprint, C++</h6>
            </div>
            <hr></hr>
            <div className="cv">
              <Link className="links" onClick={() => handleClick("")}>
                View my CV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
