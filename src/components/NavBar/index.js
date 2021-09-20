import React from 'react'
import styles from './style.module.css';
const index = () => {
    return (
        <div className={styles.Header}>
            <header>
            <ul className={styles.navBar}>
                <li>
                    <a href="HOME">HOME</a>
                </li>
                <li>
                <a href="HOME">ABOUT</a>

                </li>
                <li>
                <a href="#HOME">PROJECTS</a>

                </li>
                <li>
                <a href="#HOME">SKILLS</a>

                </li>
                <li>
                <a href="#HOME">CONNECT WITH ME</a>

                </li>
            </ul>
            </header>
        </div>
    )
}

export default index
