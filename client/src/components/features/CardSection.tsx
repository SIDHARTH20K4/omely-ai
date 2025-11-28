import React, { useState } from 'react';
import { Card, cardData } from '../../index';
import './CardSection.css';

const CardSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const getCardStyle = (index: number): React.CSSProperties => ({
    transform: hoveredCard === index ? 'translateY(-8px)' : 'translateY(0)',
    borderColor: hoveredCard === index ? 'var(--color-border-hover)' : 'var(--color-border)',
    background: hoveredCard === index ? 'var(--color-bg-hover)' : 'var(--color-bg)',
    boxShadow: hoveredCard === index ? '0 12px 40px rgba(0, 0, 0, 0.3)' : '0 8px 32px rgba(0, 0, 0, 0.2)',
  });

  return (
    <section className="cards-section">
      <div className="cards-section__inner">
        <div className="cards-grid">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              image={card.image}
              body={card.description}
              imageWidth="120px"
              imageHeight="120px"
              className={index === 2 ? "fix-small-image" : ""}
              style={getCardStyle(index)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;