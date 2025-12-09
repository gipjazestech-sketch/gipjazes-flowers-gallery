import React from 'react';
import styles from './Background.module.css';

export default function Background() {
    return (
        <div className={styles.background}>
            <div className={styles.tesseract}>
                {/* Outer Cube */}
                <div className={styles.cube}>
                    <div className={`${styles.face} ${styles.front}`} />
                    <div className={`${styles.face} ${styles.back}`} />
                    <div className={`${styles.face} ${styles.right}`} />
                    <div className={`${styles.face} ${styles.left}`} />
                    <div className={`${styles.face} ${styles.top}`} />
                    <div className={`${styles.face} ${styles.bottom}`} />
                </div>

                {/* Inner Cube (The 4th Dimension projection) */}
                <div className={`${styles.cube} ${styles.inner}`}>
                    <div className={`${styles.face} ${styles.faceInner} ${styles.front}`} />
                    <div className={`${styles.face} ${styles.faceInner} ${styles.back}`} />
                    <div className={`${styles.face} ${styles.faceInner} ${styles.right}`} />
                    <div className={`${styles.face} ${styles.faceInner} ${styles.left}`} />
                    <div className={`${styles.face} ${styles.faceInner} ${styles.top}`} />
                    <div className={`${styles.face} ${styles.faceInner} ${styles.bottom}`} />
                </div>
            </div>
        </div>
    );
}
