import React from 'react';
import Image from 'next/image';
import styles from './Welcome.module.css';

const Welcome: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Bienvenue</h1>
            <h2 className={styles.subtitle}>Bienvenue sur notre site</h2>
            <p className={styles.description}>Nous sommes ravis de vous accueillir. Découvrez nos services et produits.</p>
            <div className={styles.imageContainer}>
                <Image 
                    src="https://wallpapercave.com/wp/wp6415210.jpg" 
                    alt="Panoramic view" 
                    layout="responsive" 
                    width={1920} 
                    height={1080} 
                />
            </div>
        </div>
    );
};

export default Welcome;