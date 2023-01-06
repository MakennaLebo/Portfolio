import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import "./Projects.css";

export const Projects = () => {
    const projects = [
        {
            title:"Jeopardy Game",
            description: "Car Jeapardy Game built to have fun and test my friends",
            imgUrl: ""
        },
        {
            title:"Clone Website",
            description: "Cloned website of ...",
            imgUrl: ""
        },
        {
            title:"Ev-Charger",
            description: "Capstone project from my bootcamp",
            imgUrl: ""
        },
    ]
    
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Take a look at some recent projects I've been working on! </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="First">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Third">Tab Three</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return(
                                                <ProjectCard
                                                key={index}
                                                {...project} 
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
                            <Tab.Pane eventKey="third">Loren Ipsum four thousand</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}