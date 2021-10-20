import React from 'react'
import styles from './style.module.css';
import { Link } from 'react-scroll';
const index = () => {
    return (
        <div className={styles.Header}>
            <header>
                <ul className={styles.navBar}>
                    <li>
                        <Link activeClass="active" to="home" spy={true} smooth={true} duration={1000}>
                        HOME
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="about" spy={true} smooth={true} duration={1000}>
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="projects" spy={true} smooth={true} duration={1000}>
                        PROJECTS
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="skills" spy={true} smooth={true} duration={1000}>
                        SKILLS
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>
                        CONNECT WITH ME
                        </Link>
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default index
