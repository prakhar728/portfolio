import React from 'react'

const Navbar2 = () => {
    return (
        <div className={styles.mobileHeader}>
        <header>
        <ul className={styles.mobilenavBar}>
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

export default Navbar2
