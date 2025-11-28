// src/components/layouts/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 
import logoImage from "../../assets/logo.png";

interface HeaderProps {
  logoPath?: string;
  navLinks?: Array<{ label: string; href: string }>;
  actionButton?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ 
  logoPath,
  navLinks = [
    { label: 'Our Vision', href: '/vision' },
    { label: 'Lightpaper', href: '/lightpaper' },
  ],
  actionButton
}) => {
  // Use provided logoPath or fall back to imported image
  const logo = logoPath || logoImage;

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
      </div>

      <div className="header-right">
        <nav className="nav-links">
          {navLinks.map((link, index) => {
            // Check if it's an external link (starts with http)
            const isExternal = link.href.startsWith('http');
            
            if (isExternal) {
              return (
                <a key={index} href={link.href} className="nav-link" target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              );
            }
            
            return (
              <Link key={index} to={link.href} className="nav-link">
                {link.label}
              </Link>
            );
          })}
          <div className="action-button-container">
            {actionButton}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;