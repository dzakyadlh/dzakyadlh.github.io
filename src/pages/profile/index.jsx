import React from "react";
import PP from "../../assets/images/kamiya.jpg";
import "./style.css";

const Profile = () => {
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
  return (
    <div className="scroll-container profile">
      <div className="profile-container">
        <div className="profile-thumbnail">
          <img className="profile-pic" src={PP} alt="me" />
          <div className="thumbnail-body">
            <h1>Dzaky Adla Hikmatiyar</h1>
            <h6>Full-stack Web Developer</h6>
            <h6>Android Developer</h6>
            <h6>Game Developer</h6>
          </div>
        </div>
        <div className="profile-body">
          <div className="aboutme">
            <p>
              I am a motivated individual with a Bachelor's degree in
              Engineering Physics and a strong background in full-stack web
              development and Android development. With a deep understanding of
              complex systems and a passion for technology, I have honed my
              skills to create robust web applications and intuitive mobile
              experiences. Constantly seeking new challenges, I thrive in
              dynamic environments where I can apply my technical expertise to
              develop innovative solutions. With a diverse skill set and a
              dedication to delivering high-quality results, I am eager to
              contribute to projects that push the boundaries of what is
              possible in the ever-evolving world of technology.
            </p>
          </div>
          <hr></hr>
          <div className="biodata">
            <h2>Biodata</h2>
            <row className="profile-body-data">
              <h4>Age:</h4>
              <h4>20</h4>
            </row>
            <row className="profile-body-data">
              <h4>Gender:</h4>
              <h4>Male</h4>
            </row>
            <row className="profile-body-data">
              <h4>Residence:</h4>
              <h4>Surabaya, Indonesia</h4>
            </row>
            <row className="profile-body-data">
              <h4></h4>
              <h4></h4>
            </row>
            <row className="profile-body-data"></row>
            <row className="profile-body-data"></row>
            <row className="profile-body-data"></row>
            <row className="profile-body-data"></row>
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
                <div>
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
        </div>
      </div>
    </div>
  );
};

export default Profile;
