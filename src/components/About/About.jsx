import React from "react";
import "./About.css";
import abouts from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

function About({ setPlayState }) {
  return (
    <div className="about">
      <div className="about-left">
        <img src={abouts} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          The modern Western university evolved from the medieval schools known
          as studia generalia; they were generally recognized places of study
          open to students from all parts of Europe. The earliest studia arose
          out of efforts to educate clerks and monks beyond the level of the
          cathedral and monastic schools.{" "}
        </p>
        <p>
          These early universities were corporations of students and masters,
          and they eventually received their charters from popes, emperors, and
          kings.
        </p>
        <p>
          From the 13th century on, universities were established in many of the
          principal cities of Europe. Universities were founded at Montpellier
          (beginning of the 13th century) and Aix-en-Provence (1409) in France,
          at Padua (1222), Rome (1303),
        </p>
      </div>
    </div>
  );
}

export default About;
