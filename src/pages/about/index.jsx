import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/navbar";
import "./style.css";
import useLocalStorage from "use-local-storage";

const About = () => {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const contacts = [
    {
      name: "LinkedIn",
      contact: "dzakyadlh",
      logo: faLinkedinIn,
    },
    {
      name: "Instagram",
      contact: "@dzakyadlh",
      logo: faInstagram,
    },
    {
      name: "Indeed",
      contact: "dzakyadlh",
      logo: faSun,
    },
    {
      name: "Gmail",
      contact: "dzakyadlh.work@gmail.com",
      logo: faGoogle,
    },
    {
      name: "Whatsapp",
      contact: "+62 813-5188-1037",
      logo: faWhatsapp,
    },
  ];
  return (
    <React.Fragment>
      <Navbar />
      <div className="scroll-container about" data-theme={theme}>
        <div className="about-container">
          <h1>About</h1>
          <p>
            Dzaky Adla Hikmatiyar is a skilled software engineer specializing in
            web development and Android development, with a deep passion for
            game development. He possesses a strong curiosity for learning new
            technologies, exhibits great adaptability, and excels in
            collaborative team environments. Dzaky creates engaging websites and
            applications that prioritize user experience while maintaining
            simplicity and accessibility.
          </p>
          <hr></hr>
          <h2>Contacts</h2>
          <div className="contacts">
            {contacts.map((row, index) => (
              <div className="contacts-list" key={index}>
                <FontAwesomeIcon icon={row.logo} />
                <h3>{row.name}:</h3>
                <h4>{row.contact}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
