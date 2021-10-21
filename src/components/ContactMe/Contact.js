import React from 'react'
import styles from './Contact.module.css';
function Contact() {
    return (
        <>
            <h2 id="contact">CONTACT ME</h2>
            <form action="">
                <div className={styles.input_container}>
                    <div><label>Name</label></div>
                    <div><input type="text" /></div>
                </div>
                <div className={styles.input_container}>
                    <div><label>Email</label></div>
                    <div><input type="text" /></div>
                </div>
                <div className={styles.input_container}>
                    <div><label>Message</label></div>
                    <div><textarea cols="5"></textarea></div>
                </div>
                <div className={styles.btn_container}>
                    <button type="submit">SUBMIT</button>
                </div>
            </form>
        </>
    )
}

export default Contact
