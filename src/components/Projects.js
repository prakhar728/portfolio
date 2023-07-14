import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projects/P1_i1.jpg";
import projImg2 from "../assets/img/projects/P2_i2.jpg";
import projImg3 from "../assets/img/projects/P3.jpg";
import projImg4 from "../assets/img/projects/P4.jpg";
import projImg5 from "../assets/img/projects/P5.jpg";
import projImg6 from "../assets/img/projects/P6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "MediBridge",
      description: "Empowering Healthcare Through Secure Decentralization.",
      imgUrl: projImg1,
      tags:['React.js', 'Rust','Typescript','Near Blockchain'],
      link:"https://devpost.com/software/medibridge-7ky93d",
      type:"W3"
    },
    {
      title: "JournaLink",
      description: "A data DAO for news enthusiasts that incentivizes their enthusiasm.",
      imgUrl: projImg1,
      tags:['Next.js', 'Solidity','Typescript'],
      link:"https://ethglobal.com/showcase/journalink-ix7qs",
      type:"W3"
    },
    {
      title: "Training and Placement Website",
      description: "Easing the way for companies to hire on-campus",
      imgUrl: projImg1,
      tags:['React.js','Node.js','MongoDB'],
      link:"https://github.com/prakhar728/TNP",
      type:"FS"
    },
    {
      title: "CrimeAwarenessBot",
      description: "This is a User Friendly CrimeAwareness Bot to report crimes by witnesses",
      imgUrl: projImg2,
      tags:['Node.js','Postman API','Nodemailer'],
      link:"https://devfolio.co/projects/crimeawarenessbot-bc4a",
      type:"FS"
    },
    {
      title: "Stream You",
      description: "Decentralized Content Creators' platform",
      imgUrl: projImg3,
      tags:['Next.js','Typescript','Solidity'],
      link:"https://devfolio.co/projects/streamyou-392f ",
      type:"W3"

    },
    {
      title: "ZAPP NFT",
      description: "Lending and Borrowing made easy, with NFTs as collateral",
      imgUrl: projImg4,
      tags:['Next.js','Node.js','Solidity'],
      link:"https://devfolio.co/projects/zapp-0819",
      type:"W3"

    },
    {
      title: "Daan",
      description: "A social goods fundraising platform",
      imgUrl: projImg5,
      tags:["React.js","Node.js","Polygon"],
      link:"https://devfolio.co/projects/daan-cff2",
      type:"W3"
      
    },
    {
      title: "CrerTube",
      description: "SSIP FUNDED CURRENT STARTUP",
      imgUrl: projImg6,
      tags:["React Native","Nest.js","Cassandra"],
      link:"#",
      type:"FS"

    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Welcome to the showcase of my creative endeavors, where you can immerse yourself in a collection of captivating projects that highlight my expertise and dedication to delivering impactful solutions.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">All Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web3</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Full Stack</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row size={8}>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row size={8}>
                        {
                          projects.map((project, index) => {
                            if(project.type==="W3")
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row size={8}>
                        {
                          projects.map((project, index) => {
                            if(project.type==="FS")
                            {return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )}
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
