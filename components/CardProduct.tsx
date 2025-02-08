import React from 'react';
import styles from './CardProduct.module.css';

interface CardProductProps {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    // Ajoutez d'autres propriétés selon votre schéma de données
}

const CardProduct: React.FC<CardProductProps> = ({ name, price, stock, description }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.cardTitle}>{name}</h2>
            <h2 className={styles.cardTitle}>{price}</h2>
            <h2 className={styles.cardTitle}>{description}</h2>
            <h2 className={styles.cardTitle}>{stock}</h2>
            {/* Ajoutez d'autres éléments de la carte ici */}
        </div>
    );
};

export default CardProduct;