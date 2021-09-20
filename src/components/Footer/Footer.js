import React from 'react'
import styles from './Footer.module.css';
import {FaInstagram,FaGithub,FaStackOverflow,FaLinkedin} from 'react-icons/fa';
import {SiLeetcode} from 'react-icons/si';

const Footer = () => {
    return (
       
       <footer className={styles.Footer}>
           <div className={styles.creator}>
               CREATED BY PRAKHAR OJHA
           </div>
           <div className={styles.connections}>
           <a href="#Insta"> <FaInstagram className={styles.icon1} id={styles.instagram}/></a>
           <a href="#Insta"> <FaGithub className={styles.icon1} id={styles.github}/></a>
           <a href="#Insta"> <FaStackOverflow className={styles.icon1} id={styles.stackoverflow}/></a>
           <a href="#Insta"> <SiLeetcode className={styles.icon1} id={styles.leetcode}/></a>
           <a href="#Insta"> <FaLinkedin className={styles.icon1} id={styles.linkedIn}/></a>
           </div>
       </footer>
    )
}

export default Footer
