import React from 'react'
import TypewriterComponent from 'typewriter-effect';
import styles from './home.module.css';
import img1 from '../public/IMG3.jpg';
const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.someInfoContainer}>
                <div className={styles.Name}>
                    Prakhar Ojha
                </div>
                <div className={styles.someInfo}>
                    I am&nbsp;
                    <TypewriterComponent
                        onInit={typeWriter => {
                            typeWriter.typeString("Competent")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString(" Hardworking!")
                                .pauseFor(1000)
                                .start();
                        }}
                        options={{
                            loop: true,
                        }}
                    />
                </div>
                <div className={styles.otherInfo}>
                    I am a BackEnd Developer trying to learn Blockchain
                </div>
            </div>
            <div>
                <img src={img1} alt="ProfilePicture" className={styles.pfp} />
            </div>
        </div>
    )
}

export default Home
