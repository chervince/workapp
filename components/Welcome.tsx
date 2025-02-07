import React from 'react';
import Image from 'next/image';

const Welcome: React.FC = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Bienvenue</h1>
            <h2>Bienvenue sur notre site</h2>
            <p>Nous sommes ravis de vous accueillir. Découvrez nos services et produits.</p>
            <div>
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