import React from 'react';
import type { CardProps } from '../../../index';
import './Card.css';

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
    flex: width ? undefined : '1 1 280px',
    minHeight: height ? (typeof height === 'number' ? `${height}px` : height) : undefined,
    width: width ? (typeof width === 'number' ? `${width}px` : width) : '100%',
    ...style,
  };

  const imageStyle: React.CSSProperties = {
    width: typeof imageWidth === 'number' ? `${imageWidth}px` : imageWidth,
    height: typeof imageHeight === 'number' ? `${imageHeight}px` : imageHeight,
    objectFit: 'contain',
  };

  const combinedClassName = ['omely-card', className].filter(Boolean).join(' ');

  return (
    <div
      className={combinedClassName}
      style={cardStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {image && (
        <div className="omely-card__image">
          <img src={image} alt={title || 'Card image'} style={imageStyle} />
        </div>
      )}
      
      {(title || body) && (
        <div className="omely-card__body">
          {title && (
            <h3 className="omely-card__title">
              {title}
            </h3>
          )}
          {body && (
            <p className="omely-card__text">
              {body}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;