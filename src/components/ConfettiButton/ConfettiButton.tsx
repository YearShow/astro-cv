import React, { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import styles from "./ConfettiButton.module.css";

export const ConfettiButton = ({message, link}: {message: string, link: string}) => {
    const [hasConfetti, toggleConfetti] = useState(false);

    return (
        <div className={styles.container}>
                {hasConfetti && (
                    <div className={styles.confettiContainer}>
                        <ConfettiExplosion
                            onComplete={() => toggleConfetti(false)}
                        />
                    </div>
                )}
                    <button className={styles.btn}
                        onClick={() => {
                            toggleConfetti(true);
                            setTimeout(() => {
                                window.open(link);
                            }, 800)
                        }}
                    >
                        <span>{message}</span>
                    </button>
        </div>
    );
};