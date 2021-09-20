import React from 'react'
import styles from './About.module.css';
import ill from '../public/illustration2.svg';
const About = () => {
    return (
        <div className={styles.first}>
           
            <div className={styles.image}>
                <img src={ill} alt="Illustration" />
            </div>
            <div className={styles.text}> I am a Second year student at Indian Institute of Information Technology, Surat. Currently persuing my bachelors in Electronics and communication engineering.<br />
            I am a BackEnd developer and hgihly interested in Blochain Development. I listen to music.</div>
        </div>
    )
}

export default About
