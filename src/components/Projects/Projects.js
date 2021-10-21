import React from 'react'
import styles from './Projects.module.css';
import proj1 from '../public/Crypto_Wallet.png';
import proj2 from '../public/Crypto_Wallet.png';
const Projects = () => {
    return (
        <div className={styles.projectContainer} id="projects">
            <div className={styles.header}>
                <h1 className={styles.title}>PROJECTS</h1>
            </div>
            <div className={styles.projectCardContainer}>
                <div className={styles.projectCards}>
                    <img src={proj1} alt="Project1" />
                    <div>
                    <h3> <a href="https://floating-sands-23365.herokuapp.com/" >CRYPTO WALLET</a></h3>
                    <div className={styles.projectInfo}>
                        Store your recent transactions and find out your current portoflio value.
                    </div>
                    </div>
                    
                </div>
                <div className={styles.projectCards}>
                    <img src={proj2} alt="Project1" />
                    <div>
                    <h3> <a href="https://github.com/prakhar728/CrimeAwarenessBot" >CRIME AWARENESS BOT</a></h3>
                    <div className={styles.projectInfo}>
                        Report any crime on the go with
                        the CrimeAwarenessBot!
                    </div>
                    </div>
                </div>
                <div className={styles.projectCards}>
                    <img src={proj1} alt="Project1" />
                    <div>
                    <h3> SOS_Web App </h3>
                    <div className={styles.projectInfo}>
                        This project was made so that it can be cloned and used at it is without worrying about adding external auth.
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Projects
