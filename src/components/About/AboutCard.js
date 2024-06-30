import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Manh Ho Dinh </span>
            from <span className="purple"> Ho Chi Minh City, Viet Nam.</span>
            <br />
            <br />
            I am a Software Engineering student at the University of Information
            Technology - VNUHCM.
            <br />
            <br />
            Currently, I am an intern at Danieli Group, working remotely with
            the team in Italy, utilizing technologies such as .Net, WPF, SQL
            Server, Redis, RabbitMQ, and Docker.
            <br />
            <br />
            Previously, I interned at DI4L, focusing on mobile app development
            using Flutter, integrating RESTful API, Bloc, and Cubit.
            <br />
            <br />
            I am also a member of the UIT Together research group, focusing on
            Computer Vision and Machine Learning, supporting the development of
            international links and enhancing scientific publishing abilities.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning English
            </li>
            <li className="about-activity">
              <ImPointRight /> Read book
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching tech news
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
