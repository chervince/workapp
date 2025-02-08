import React from 'react';
import styles from './VideoPlayer.module.css';

interface VideoPlayerProps {
    src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
    return (
        <div className={styles.videoContainer}>
            <iframe
                className={styles.video}
                src={src}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoPlayer;