import { Container, Row, Col } from "react-bootstrap";
import Carousel from  "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import './Skills.css';

export const Skills = () => {
    const responsive ={
        superLargeDesktop:{
        breakpoint:{ max:4000, min: 3000},
        items: 5
    },
    desktop: {
        breakpoint:{ max:3000, min: 1024},
        items: 3
    },
    tablet: {
        breakpoint:{ max:1024, min: 464},
        items: 2
    },
    mobile: {
        breakpoint:{ max:464, min: 0},
        items: 1
    }
};

return(
    <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                <div className="skill-box">
                    <h2>
                        Skills
                    </h2>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                            <h5>HTML/CSS</h5>
                        </div>
                        <div className="item">
                            <h5>JavaScript</h5>
                        </div>
                        <div className="item">
                            <h5>React</h5>
                        </div>
                        <div className="item">
                            <h5>TypeScript</h5>
                        </div>
                        <div className="item">
                            <h5>Figma</h5>
                        </div>
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
)

}