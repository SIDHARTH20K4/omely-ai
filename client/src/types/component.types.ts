import type { ReactNode } from 'react';

export interface ButtonProps {
  text?: string;
  icon?: ReactNode | string;
  onClick?: () => void;
  variant?: string;
  width?: string | number;
  height?: string | number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  backgroundColor?: string;
}

export interface CardProps {
  title?: string;
  image?: string;
  body?: string | ReactNode;
  width?: string | number;
  height?: string | number;
  imageWidth?: string | number;
  imageHeight?: string | number;
  className?: string;
  style?: React.CSSProperties;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}