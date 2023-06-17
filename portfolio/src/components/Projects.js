import { Col, Container, Row, Nav, Tab, Card } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorsharp2 from "../assets/color-sharp2.png";
export const Projects = () => {
  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Some of the projects that I have developed</p>
            <ProjectCard></ProjectCard>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorsharp2}></img>
    </section>
  );
};
