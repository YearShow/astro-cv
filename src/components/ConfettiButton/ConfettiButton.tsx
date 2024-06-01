import React, { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import styles from "./ConfettiButton.module.css";

export const ConfettiButton = ({message, link}: {message: string, link: string}) => {
    const [hasConfetti, toggleConfetti] = useState(false);

    const fireworkAndOpen = (ms: number) => {
        toggleConfetti(true);
        setTimeout(() => {
            window.open(link);
        }, ms)
    }
    return (
        <>
                {hasConfetti && (
                    <div className={styles.confettiContainer}>
                        <ConfettiExplosion
                            onComplete={() => toggleConfetti(false)}
                        />
                    </div>
                )}
                    <button className={styles.btn}
                        onClick={() => fireworkAndOpen(1100)}
                    >
                        <span>{message}</span>
                    </button>
        </>
    );
};