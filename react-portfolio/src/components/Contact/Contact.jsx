import React from 'react'
import { getImageUrl } from '../../utils'

import styles from "./Contact.module.css";

export const Contact = () => {
    return <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")}
                    alt="Email Icon">
                </img>
                <a href="mailto:boga.vaibhav183@gmail.com">boga.vaibhav183@gmail.com
                </a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")}
                    alt="linkedinIcon Icon">
                </img>
                <a href="https://www.linkedin.com/in/bogavaibhav">linkedin.com/bogavaibhav
                </a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")}
                    alt="github Icon">
                </img>
                <a href="https://github.com/bogavaibhav">github.com/bogavaibhav
                </a>
            </li>
        </ul>
    </footer>
}
