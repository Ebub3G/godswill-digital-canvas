// src/components/HeroCardAnimation/Card.jsx

import React from 'react';
import styles from './Card.module.css'; // We'll create this CSS Module file next

const Card = ({ data, isActive, onClick }) => {
    return (
        <div
            className={`${styles.card} ${isActive ? styles.active : ''}`}
            onClick={() => onClick(data.id)}
            // Dynamically applied styles for inactive cards will be added here later by parent
            // e.g., style={dynamicStyles}
        >
            <img src={data.thumbnail} alt={`${data.title} Thumbnail`} className={styles.thumbnail} />
            <div className={styles.cardInfo}>
                <span>{data.location}</span>
                <h3>{data.title}</h3>
            </div>
        </div>
    );
};

export default Card;
