import React, { useState } from 'react';
import { Card, cardData } from '../../index';

const CardSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const getCardStyle = (index: number): React.CSSProperties => ({
    transform: hoveredCard === index ? 'translateY(-8px)' : 'translateY(0)',
    borderColor: hoveredCard === index ? 'var(--color-border-hover)' : 'var(--color-border)',
    background: hoveredCard === index ? 'var(--color-bg-hover)' : 'var(--color-bg)',
    boxShadow: hoveredCard === index ? '0 12px 40px rgba(0, 0, 0, 0.3)' : '0 8px 32px rgba(0, 0, 0, 0.2)',
  });

  return (
    <div style={styles.container}>
      <div style={styles.threeCardsSection}>
        <div style={styles.threeCardsContainer}>
          <div style={styles.cardsRow}>
            {cardData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                image={card.image}
                body={card.description}
                imageWidth="120px"
                imageHeight="120px"
                style={getCardStyle(index)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// CSS Styles - Reduced padding
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px 20px 60px', // Changed from '60px 20px' - reduced top padding
  },
  threeCardsSection: {
    padding: '0 var(--spacing-md)', // Removed vertical padding
    background: 'transparent',
    color: 'var(--color-text)',
    position: 'relative',
    zIndex: 10,
    fontFamily: 'system-ui, -apple-system, sans-serif',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  threeCardsContainer: {
    width: '100%',
  },
  cardsRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: 'var(--spacing-md)',
    alignItems: 'stretch',
    flexWrap: 'wrap',
  }
};

export default CardSection;