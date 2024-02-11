import React from 'react';
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
    return <section className={styles.container}
        id="about"
    >
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")}
                alt="Me sitting with a laptop"
                className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")}
                        alt="Cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>FrontEnd Developer</h3>
                        <p>
                            I'm a software developer with building optimized applications.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")}
                        alt="Server icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>
                            I worked on Java projects and helped the websites to be more efficient.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")}
                        alt="DSA icon" />
                    <div className={styles.aboutItemText}>
                        <h3>DSA Enthusiast</h3>
                        <p>
                            I'm a enthusiast in Data Structures and Algorithms.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
}
