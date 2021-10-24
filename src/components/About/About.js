import React from 'react'
import styles from './About.module.css';
import ill from '../public/illustration2.svg';
const About = () => {
    return (
        <div className={styles.first} id="about">
           
            <div className={styles.image}>
                <img src={ill} alt="Illustration" />
            </div>
            <div className={styles.text}> I am a Second year student at Indian Institute of Information Technology, Surat.
            <br /> Currently persuing my bachelors in Electronics and communication engineering.<br />
            <br />
            I am a BackEnd developer and highly interested in Blochain Development. I listen to music.</div>
        </div>
    )
}

export default About
