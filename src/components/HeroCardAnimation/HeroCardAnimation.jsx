// src/components/HeroCardAnimation/HeroCardAnimation.jsx

import React, { useState, useEffect } from 'react';
import Card from './Card';
import styles from './HeroCardAnimation.module.css'; // We'll create this CSS Module next

// --- cardData array (moved here as per our last discussion) ---
const cardData = [
    {
        id: 0,
        thumbnail: '/images/thumbnails/marrakech-thumb.jpg',
        banner: '/images/banners/marrakech-banner.jpg',
        location: 'Sahara Desert - Morocco',
        title: 'MARRAKECH MERZOUGA',
        description: 'Discover the magic of Morocco, from the vibrant markets of Marrakech to the vast, serene dunes of Merzouga. An unforgettable journey through ancient cities and breathtaking desert landscapes.',
        buttonText: 'EXPLORE LOCATION',
    },
    {
        id: 1,
        thumbnail: '/images/thumbnails/yosemite-thumb.jpg',
        banner: '/images/banners/yosemite-banner.jpg',
        location: 'California, United States',
        title: 'YOSEMITE NATIONAL PARK',
        description: 'Immerse yourself in the grandeur of Yosemite National Park. Towering granite cliffs, giant sequoia groves, and stunning waterfalls await. A paradise for nature lovers and adventurers.',
        buttonText: 'VIEW PROJECT',
    },
    {
        id: 2,
        thumbnail: '/images/thumbnails/los-lances-thumb.jpg',
        banner: '/images/banners/los-lances-banner.jpg',
        location: 'Tarifa, Spain',
        title: 'LOS LANCES BEACH',
        description: 'Experience the wild beauty of Los Lances Beach in Tarifa, a renowned spot for kitesurfing and windsurfing. Feel the strong winds and vibrant atmosphere where the Atlantic meets the Mediterranean.',
        buttonText: 'LEARN MORE',
    },
    {
        id: 3,
        thumbnail: '/images/thumbnails/goreme-thumb.jpg',
        banner: '/images/banners/goreme-banner.jpg',
        location: 'Cappadocia, Turkey',
        title: 'GÖREME VALLEY',
        description: 'Explore the otherworldly landscape of Göreme Valley in Cappadocia, famous for its "fairy chimneys" and ancient cave dwellings. A surreal journey, especially at sunrise with hot air balloons.',
        buttonText: 'SEE PROJECT',
    },
    {
        id: 4,
        thumbnail: '/images/thumbnails/saint-antonien-thumb.jpg',
        banner: '/images/banners/saint-antonien-banner.jpg',
        location: 'Graubünden, Switzerland',
        title: 'SAINT ANTONIEN',
        description: 'Discover the pristine alpine beauty of Saint Antonien in Graubünden. Perfect for winter sports and summer hikes, offering breathtaking views of the Swiss Alps and serene valleys.',
        buttonText: 'VIEW CASE STUDY',
    },
    // Add more of your works here!
];

const HeroCardAnimation = () => {
    const [activeCardIndex, setActiveCardIndex] = useState(0); // Index of the currently active/expanded card
    const [currentBannerSrc, setCurrentBannerSrc] = useState(cardData[0].banner);
    const [bannerTransitioning, setBannerTransitioning] = useState(false);

    // Effect to update the main background banner and details panel content
    useEffect(() => {
        // Start banner fade-out for smooth transition
        setBannerTransitioning(true);

        // Timeout to change image source AFTER fade-out starts
        const bannerChangeTimeout = setTimeout(() => {
            setCurrentBannerSrc(cardData[activeCardIndex].banner);
            setBannerTransitioning(false); // End fade-out, which will trigger fade-in due to CSS
        }, 500); // This duration should match the CSS transition duration for `.backgroundBanner img` opacity

        // Cleanup function for the timeout
        return () => clearTimeout(bannerChangeTimeout);

    }, [activeCardIndex]); // Re-run this effect whenever activeCardIndex changes

    // Handler for when a card is clicked
    const handleCardClick = (id) => {
        const index = cardData.findIndex(card => card.id === id);
        if (index !== -1 && index !== activeCardIndex) { // Only update if a new card is clicked
            setActiveCardIndex(index);
        }
    };

    // Handler for "Previous" arrow button
    const handlePrev = () => {
        setActiveCardIndex(prevIndex =>
            prevIndex === 0 ? cardData.length - 1 : prevIndex - 1 // Loop back to end
        );
    };

    // Handler for "Next" arrow button
    const handleNext = () => {
        setActiveCardIndex(prevIndex =>
            prevIndex === cardData.length - 1 ? 0 : prevIndex + 1 // Loop back to start
        );
    };

    // Get the data for the currently active card to populate the details panel
    const activeCardContent = cardData[activeCardIndex];

    return (
        <section className={styles.heroSection}>
            {/* Main background banner */}
            <div className={styles.backgroundBanner}>
                <img
                    src={currentBannerSrc}
                    alt="Hero Background"
                    className={bannerTransitioning ? styles.bannerFading : ''}
                />
            </div>

            {/* Content Wrapper: Details Panel + Cards */}
            <div className={styles.contentWrapper}>
                {/* Details Panel */}
                <div className={`${styles.detailsPanel} ${bannerTransitioning ? styles.hidden : ''}`}>
                    <span className={styles.location}>{activeCardContent.location}</span>
                    <h1 className={styles.title}>{activeCardContent.title}</h1>
                    <p className={styles.description}>{activeCardContent.description}</p>
                    <button className={styles.exploreButton}>{activeCardContent.buttonText || 'EXPLORE'}</button>
                </div>

                {/* Cards Container */}
                <div className={styles.cardsContainer}>
                    {cardData.map((card, index) => {
                        const isActive = index === activeCardIndex;
                        let dynamicStyles = {}; // Object to hold inline styles

                        if (!isActive) {
                            // Calculate position and scale for inactive cards
                            const offsetFromActive = index - activeCardIndex; // -1 for left, 1 for right, etc.
                            const absOffset = Math.abs(offsetFromActive);

                            // Base scale and position for inactive cards
                            let scaleValue = 1 - (absOffset * 0.2); // Smaller scale for further cards
                            if (scaleValue < 0.4) scaleValue = 0.4; // Don't make them too small

                            let opacityValue = 1 - (absOffset * 0.3); // Fade out further cards
                            if (opacityValue < 0.3) opacityValue = 0.3; // Don't make them too transparent

                            let translateYValue = absOffset * 20; // Move further cards down slightly

                            let translateXValue = 0;
                            if (offsetFromActive > 0) { // Cards to the right of the active card
                                // Adjust based on card width and desired overlap.
                                // This is a starting point, requires fine-tuning.
                                translateXValue = `${(offsetFromActive * 180) + (absOffset * 10)}px`;
                            } else if (offsetFromActive < 0) { // Cards to the left of the active card
                                translateXValue = `${(offsetFromActive * 180) - (absOffset * 10)}px`;
                            }

                            // Z-index for layering: Closer cards have higher z-index
                            let zIndexValue = 2 - absOffset;
                            if (zIndexValue < 0) zIndexValue = 0; // Don't go below 0

                            dynamicStyles = {
                                transform: `translateX(${translateXValue}) scale(${scaleValue}) translateY(${translateYValue}px)`,
                                opacity: opacityValue,
                                zIndex: zIndexValue,
                                pointerEvents: 'auto', // Ensure these are clickable
                            };
                        } else {
                            // Styles for the active card (handled primarily by Card.module.css .card.active)
                            dynamicStyles = {
                                transform: 'none', // Ensure no conflicting JS transforms
                                opacity: 1,
                                zIndex: 3, // Active card highest z-index
                                pointerEvents: 'none', // Not clickable when active
                            };
                        }

                        return (
                            <Card
                                key={card.id}
                                data={card}
                                isActive={isActive}
                                onClick={handleCardClick}
                                style={dynamicStyles} // Pass calculated styles to the Card component
                            />
                        );
                    })}

                    {/* Navigation Arrows */}
                    <div className={styles.navigationArrows}>
                        <button className={styles.arrow} onClick={handlePrev}>&lt;</button>
                        <button className={styles.arrow} onClick={handleNext}>&gt;</button>
                    </div>
                    {/* Card Counter */}
                    <div className={styles.cardCounter}>
                        {String(activeCardIndex + 1).padStart(2, '0')}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroCardAnimation;
