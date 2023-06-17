import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorsharp from '../assets/color-sharp.png'

export const Skills = () =>{

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div classsname="skill-bx">
                            <h2>Skills</h2>
                            <p>The Skills that I have acquired during my Studies</p>
                            <Carousel responsive={responsive}>
                                <div className='item'>
                                    <h5>Programming Languages</h5>
                                    <h6>C, C++, Java, Python</h6>
                                </div>
                                <div className='item'>
                                    <h5>Database</h5>
                                    <h6>MySQL, AzureDB</h6>
                                </div>
                                <div className='item'>
                                    <h5>Frontend Frameworks</h5>
                                    <h6>Angular JS, React</h6>
                                </div>
                                <div className='item'>
                                    <h5>Data Analytics</h5>
                                    <h6>Numpy, Pandas, PowerBI</h6>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorsharp}></img>
        </section>
    )  

}