import React from 'react'
import styles from './Contact.module.css';
function Contact() {
    return (
        <div className={styles.form_container}>
            <h2 id="contact">CONTACT ME</h2>
            <form name="contact" method="POST" data-netlify="true">
                <div className={styles.input_container}>
                    <div><label>Name</label></div>
                    <div><input type="text" name="Name"/></div>
                </div>
                <div className={styles.input_container}>
                    <div><label>Email</label></div>
                    <div><input type="text" name="Email"/></div>
                </div>
                <div className={styles.input_container}>
                    <div><label>Message</label></div>
                    <div><textarea cols="5" name=
                    "message"></textarea></div>
                </div>
                <div className={styles.btn_container}>
                    <button type="submit">SUBMIT</button>
                </div>
            </form>
        </div>
    )
}

export default Contact
 