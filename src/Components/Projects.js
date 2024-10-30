import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
// Import images if they are in src folder
import project1 from '../media/project1.png';
import project2 from '../media/project2.png';
import project3 from '../media/project3.png';

const Projects = () => {
  const projectList = [
    {
      title: 'E-cart',
      description: 'E-commerce website (crud application)',
      link: 'https://vercel.com/api/toolbar/link/ecart-bice.vercel.app?via=team-dashboard-project-entity&p=1&page=/',
      image: project1 
    },
    {
      title: 'Media Player',
      description: 'A personalised media player using react',
      link: 'https://vercel.com/api/toolbar/link/media-player-lilac-delta.vercel.app?via=team-dashboard-project-entity&p=1&page=/',
      image: project2
    },
    {
      title: 'Counter',
      description: 'A basic crud application using redux',
      link: 'https://vercel.com/api/toolbar/link/counter-kappa-orpin.vercel.app?via=team-dashboard-project-entity&p=1&page=/',
      image: project3
    }
  ];

  return (
    <Container id="projects" className="my-5">
      <h2>Projects</h2>
      <Row>
        {projectList.map((project, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4" >
              <Card.Img className='p-2 'style={{maxHeight:'50%',maxWidth:'auto'}} variant="top" src={project.image} alt={project.title} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" href={project.link} target="_blank">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
