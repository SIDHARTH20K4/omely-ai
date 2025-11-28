import React from 'react';
import type { CardProps } from '../../../index';

const Card: React.FC<CardProps> = ({
  title,
  image,
  body,
  width,
  height,
  imageWidth = '120px',
  imageHeight = '120px',
  className,
  style,
  onMouseEnter,
  onMouseLeave,
}) => {
  const cardStyle: React.CSSProperties = {
    flex: width ? undefined : 1,
    textAlign: 'justify', 
    lineHeight: 1.6,
    background: 'var(--color-bg)',
    backdropFilter: 'blur(10px)',
    border: '1px solid var(--color-border)',
    borderRadius: '16px',
    padding: '2.5rem',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: height ? (typeof height === 'number' ? `${height}px` : height) : '450px',
    width: width ? (typeof width === 'number' ? `${width}px` : width) : undefined,
    ...style,
  };

  const imageStyle: React.CSSProperties = {
    width: typeof imageWidth === 'number' ? `${imageWidth}px` : imageWidth,
    height: typeof imageHeight === 'number' ? `${imageHeight}px` : imageHeight,
    objectFit: 'contain',
  };

  return (
    <div
      className={className}
      style={cardStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {image && (
        <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={image} alt={title || 'Card image'} style={imageStyle} />
        </div>
      )}
      
      {(title || body) && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {title && (
            <h3 style={{
              fontSize: '1.4rem',
              fontWeight: 600,
              marginBottom: '1rem',
              color: '#f8fafc',
              lineHeight: 1.3,
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
            }}>
              {title}
            </h3>
          )}
          {body && (
            <p style={{
              color: '#e5e7eb',
              lineHeight: 1.6,
              fontSize: '1rem',
              margin: 0,
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)',
            }}>
              {body}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;