import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi,I'm BOGA VAIBHAV
            </h1>
            <p className={styles.description}>
                I'm an aspiring Full Stack Developer with 2 years of experience in Java. I am currently learning React.Reach out if you wanna know more.
            </p>
            <a href="mailTo:boga.vaibhav183@gmail.com" className={styles.contactBtn}>Contact Me
            </a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")}
            alt="Image of me"
            className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
}
