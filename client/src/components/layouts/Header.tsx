// src/components/layouts/Header.tsx - CREATIVE UNIFIED MENU
import React, { useState } from 'react';
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
    { label: 'Our Vision', href: 'https://omely.gitbook.io/docs' },
    { label: 'Lightpaper', href: 'https://omely.gitbook.io/docs/lightpaper' },
  ],
  actionButton
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logo = logoPath || logoImage;

  return (
    <>
      <header className="header">
        <div className="header-content">
          {/* Left Side - Logo */}
          <div className="header-left">
            <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
              <img src={logo} alt="Logo" className="logo-image" />
            </Link>
          </div>

          {/* Right Side - Unified Menu Button */}
          <div className="header-right">
            <button 
              className="unified-menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="menu-icon-wrapper">
                <span className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </span>
              <span className="menu-label">Menu</span>
            </button>
          </div>
        </div>

        {/* Dropdown Panel - Contains Navigation + Wallet */}
        <div className={`unified-dropdown ${isMenuOpen ? 'active' : ''}`}>
          <div className="dropdown-content">
            {/* Navigation Links */}
            <nav className="dropdown-nav">
              <div className="nav-section-title">Navigation</div>
              {navLinks.map((link, index) => {
                const isExternal = link.href.startsWith('http');
                
                if (isExternal) {
                  return (
                    <a 
                      key={index} 
                      href={link.href} 
                      className="dropdown-link"
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="link-icon">→</span>
                      <span className="link-text">{link.label}</span>
                    </a>
                  );
                }
                
                return (
                  <Link 
                    key={index} 
                    to={link.href} 
                    className="dropdown-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="link-icon">→</span>
                    <span className="link-text">{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Wallet Section */}
            <div className="wallet-section">
              <div className="wallet-divider"></div>
              <div className="wallet-wrapper">
                {actionButton}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay - Outside header to cover entire page */}
      {isMenuOpen && (
        <div 
          className="menu-overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;