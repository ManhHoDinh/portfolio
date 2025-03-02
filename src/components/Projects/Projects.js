import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/MovieTicketApp.png";
import MovieTicketApp from "../../Assets/Projects/MovieTicketApp.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MovieTicketApp}
              isBlog={false}
              title="CitySense - Traffic Solution Application"
              description="CitySense is a traffic solution in UIT DataScience for smart city using technologies such as Flutter, Firebase, YOLOv8, and Deep Sort. The project incorporates Google Maps APIs and Trueway for seamless navigation and has been successfully deployed to the Google Store."
              ghLink="https://github.com/ManhHoDinh/traffic_solution_dsc"
              demoLink="https://www.youtube.com/watch?v=kdKI1uDDsek&list=PL4jE5bHezhPD70zWYzIMkuCwgBfRlO1l7"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MovieTicketApp}
              isBlog={false}
              title="Paradise Hotel Management"
              description="Paradise is a comprehensive hotel management system. Using technologies such as Flutter, Visual Studio Code, and Firebase, the system aids in managing hotels including personnel, expenses, and revenues with features like account management, room management, customer management, and management of rental vouchers and invoices."
              ghLink="https://github.com/ManhHoDinh/MovieTicketApp"
              demoLink="https://www.youtube.com/watch?v=kdKI1uDDsek&list=PL4jE5bHezhPD70zWYzIMkuCwgBfRlO1l7"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MovieTicketApp}
              isBlog={false}
              title="Movie Ticket Application"
              description="Movie lover is a movie ticket management application. Providing a user-friendly interface for booking movie tickets conveniently. The application utilizes Java android for the frontend and Firebase for the backend, offering features like account management, ticket booking, payment integration and movie information display."
              ghLink="https://github.com/ManhHoDinh/MovieTicketApp"
              demoLink="https://www.youtube.com/watch?v=kdKI1uDDsek&list=PL4jE5bHezhPD70zWYzIMkuCwgBfRlO1l7"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Spotify"
              description="Spotify is a music player for desktop user. Using technologies including WPF, XAML, SQL Server, and Git, the system provides a modern and intuitive interface to enjoy music with features like real-time song tracking, playlist management, and account management. Implemented using a MVVM model, it offers a robust and seamless music streaming experience."
              ghLink="https://github.com/ManhHoDinh/Spotify"
              demoLink="https://github.com/ManhHoDinh/Spotify"
            />
          </Col>
          {/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
