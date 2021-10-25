import React from 'react'
import styles from './Projects.module.css';
// import proj1 from '../public/Crypto_Wallet.png';
// import proj2 from '../public/Crime_Awareness_Bot.png';
import "./Projects.css"
import ProjectCardTemplate from './ProjectCardTemplate';

const Projects = () => {

    return (
        <div className={styles.projectContainer} id="projects">

            <div className={styles.header}>
                <h1 className={styles.title}>PROJECTS</h1>
            </div>

            {/* <div className="ProjectCard">
                <div className="ProjectCard__Button">
                    <button onClick={handleCardOpenClose}><i className={buttonIcon}></i></button>
                </div>
                <div id="ProjectCard__Image" className="ProjectCard__Image"></div>
                <div id="ProjectCard__Info" className="ProjectCard__Info">
                    <h3><a href="https://www.youtube.com">SOS_Web App</a></h3>
                    <p>This project was made so that it can be cloned and used at it is without worrying about adding external auth.</p>
                </div>
            </div> */}

            <ProjectCardTemplate title="njdiwob" description="vbw9bvdbsdbddw" id="1"/>
            <ProjectCardTemplate title="" descripttion="" link="" imageURL="" id="2"/>
            <ProjectCardTemplate title="" descripttion="" link="" imageURL="" id="3"/>
            <ProjectCardTemplate title="" descripttion="" link="" imageURL="" id="4"/>
            
        </div>
    )
}

export default Projects
