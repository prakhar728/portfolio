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
            <ProjectCardTemplate title="Mind Space" description="Solve the problems that botehr you! Post them and everyone will solve them. Too embarrassed or too shy? Be anonymous " id="3"/>
            <ProjectCardTemplate title="Crypto Wallet" description="Store all your transactions and make your own portfolio. This web app stores your previous transactions and helps keep track of your 'invested' amount. " id="1"/>
            <ProjectCardTemplate title="CrimeAwarenessBot" description="Report any crime to the concerened authorities immediately. Make your neighbourhood safe with the CrimeAwarenessBot" id="2"/>
            
        </div>
    )
}

export default Projects
