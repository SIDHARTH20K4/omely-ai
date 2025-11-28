import React from 'react';
import type { ButtonProps } from '../../../index';

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  onClick,
  variant = 'primary',
  width,
  height,
  disabled = false,
  className,
  style,
  backgroundColor,
}) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: backgroundColor || (variant === 'primary' ? 'rgba(37, 99, 235, 0.8)' : undefined),
    color: 'white',
    fontWeight: 600,
    padding: '0.5rem 1.5rem',
    borderRadius: '25px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(5px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    width: width ? (typeof width === 'number' ? `${width}px` : width) : undefined,
    height: height ? (typeof height === 'number' ? `${height}px` : height) : undefined,
    opacity: disabled ? 0.6 : 1,
    ...style,
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      e.currentTarget.style.background = backgroundColor || 'rgba(37, 99, 235, 1)';
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 119, 255, 0.4)';
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      e.currentTarget.style.background = 'rgba(37, 99, 235, 0.8)';
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }
  };

  return (
    <button
      className={className}
      style={buttonStyle}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
    >
      {icon && <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>}
      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;