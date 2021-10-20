import React from 'react'
import styles from './Projects.module.css';
import proj1 from '../public/Proj1.png';
const Projects = () => {
    return (
        <div className={styles.projectContainer} id="projects">
            <div className={styles.header}>
                <h1 className={styles.title}>PROJECTS</h1>
            </div>
            <div className={styles.projectCardContainer}>
                <div className={styles.projectCards}>
                    <img src={proj1} alt="Project1" />
                    <h3> AUTHENTICATION TEMPLATE </h3>
                    <div className={styles.projectInfo}>
                        This project was made so that it can be cloned and used at it is without worrying about adding external auth.
                    </div>
                </div>
                <div className={styles.projectCards}>
                    <img src={proj1} alt="Project1" />
                    <h3> AUTHENTICATION TEMPLATE </h3>
                    <div className={styles.projectInfo}>
                        This project was made so that it can be cloned and used at it is without worrying about adding external auth.
                    </div>
                </div>
                <div className={styles.projectCards}>
                    <img src={proj1} alt="Project1" />
                    <h3> AUTHENTICATION TEMPLATE </h3>
                    <div className={styles.projectInfo}>
                        This project was made so that it can be cloned and used at it is without worrying about adding external auth.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
