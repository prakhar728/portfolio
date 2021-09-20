import React from 'react'
import styles from './Skills.module.css';
import icons1 from '../public/ICONS/C++.png'
import icons2 from '../public/ICONS/CSS3.png'
import icons3 from '../public/ICONS/HTML5.png'
import icons4 from '../public/ICONS/NODEJS.png'
import icons5 from '../public/ICONS/MONGODB.png'
import icons6 from '../public/ICONS/JAVASCRIPT.png'


const Skills = () => {
    return (
        <div className={styles.Skills}>
            <h1 className={styles.heading}>SKILLS</h1>
            <div className={styles.icon}>
                <img src={icons1} alt="C++" />
                <img src={icons2} alt="CSS3" />
                <img src={icons3} alt="HTML5" />
                <img src={icons4} alt="NODEJS" />
                <img src={icons5} alt="MONGODB" />
                <img src={icons6} alt="JAVASCRIPT" />
            </div>
        </div>
    )
}

export default Skills
