// src/components/layouts/Header.tsx - HYBRID DESKTOP/MOBILE HEADER
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

          {/* Desktop Navigation - Hidden on Mobile */}
          <nav className="desktop-nav">
            {navLinks.map((link, index) => {
              const isExternal = link.href.startsWith('http');
              
              if (isExternal) {
                return (
                  <a 
                    key={index} 
                    href={link.href} 
                    className="desktop-nav-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                );
              }
              
              return (
                <Link 
                  key={index} 
                  to={link.href} 
                  className="desktop-nav-link"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="header-right">
            {/* Desktop Wallet Button - Hidden on Mobile */}
            <div className="desktop-wallet">
              {actionButton}
            </div>

            {/* Mobile Menu Button - Hidden on Desktop */}
            <button 
              className="mobile-menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown - Only visible on mobile when open */}
        <div className={`mobile-dropdown ${isMenuOpen ? 'active' : ''}`}>
          <div className="dropdown-content">
            {/* Navigation Links */}
            <nav className="dropdown-nav">
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

            {/* Mobile Wallet Section */}
            <div className="wallet-section">
              <div className="wallet-divider"></div>
              <div className="wallet-wrapper">
                {actionButton}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
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