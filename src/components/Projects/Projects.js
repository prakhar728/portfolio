import React from 'react'
import styles from './Projects.module.css';
import proj1 from '../public/Proj1.png';
const Projects = () => {
    return (
        <div className={styles.projectContainer}>
            <div className={styles.header}>
                <h1 className={styles.title}>PROJECTS</h1>
            </div>
            <div className={styles.projectCards}>
                <h3> AUTHENTICATION TEMPLATE </h3>
                <img src={proj1} alt="Project1" />
                <div className={styles.projectInfo}>
                    This project was made so that it can be cloned and used at it is without worrying about adding external auth.
                </div>
            </div>
        </div>
    )
}

export default Projects
