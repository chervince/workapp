import React from 'react';
import VideoPlayer from '../../components/VideoPlayer';
import styles from './page.module.css';
import Image from 'next/image';

const AboutPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1>Salut la terre</h1>
            <Image
                src="/images/1st-screen-image.webp"
                alt="Description de l'image"
                className={styles.heroImage}
                layout="responsive"
                width={700}
                height={475}
            />
            <div className={styles.videoSection}>
                <VideoPlayer src="https://www.youtube.com/embed/uWI1O9RloqE" />
                <VideoPlayer src="https://www.youtube.com/embed/gVD4ZKmYWvw" />
                <VideoPlayer src="https://www.youtube.com/embed/M4wpEW-6bso" />
            </div>
        </div>
    );
};

export default AboutPage;