import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import image1 from '../media/image1.jpg'

const About = () => (
  <Container id="about" className="my-5">
    <Row>
      <Col md={4}>
        <Image src={image1} roundedCircle style={{maxHeight:'300px',aspectRatio:'1:1'}} />
      </Col>
      <Col md={8}>
        <h2><b>About Me</b></h2>
        <p>"Hi, I'm <b>MUHAMMED SHIFIL K</b>, a passionate web developer with a strong foundation in full-stack development, particularly with the MERN stack (MongoDB, Express, React, and Node.js). I’m currently enhancing my front-end skills with Angular as part of my internship, where I've been working on building dynamic and responsive web applications.

My journey into tech began with a curiosity for solving problems and creating digital solutions. Over the years, I've developed projects using various technologies and frameworks, including React, Node.js, and MongoDB. I am continuously exploring new technologies to broaden my skill set and am particularly interested in scalable web applications and efficient back-end architecture.

Beyond coding, I enjoy photography,chess,solving puzzles which helps me bring a creative perspective to my work. I’m excited to continue learning and collaborating with like-minded individuals to build impactful solutions."

</p>
      </Col>
    </Row>
  </Container>
);

export default About;
