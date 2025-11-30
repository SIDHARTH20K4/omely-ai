// Footer.tsx
import React from 'react';

interface FooterProps {
  logoPath: string;
  socialLinks: {
    x?: string;
    discord?: string;
    telegram?: string;
  };
}

const Footer: React.FC<FooterProps> = ({ logoPath, socialLinks }) => {
  return (
    <>
      <style>
        {`
          .footer {
            background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
            backdrop-filter: blur(10px);
            padding: 24px 20px;
            border-top: 1px solid rgba(16, 185, 129, 0.2);
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Poppins', sans-serif;
            width: 100%;
            box-sizing: border-box;
          }

          .footer-content {
            max-width: 1200px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .footer-left {
            display: flex;
            align-items: center;
            gap: 16px;
          }

          .logo {
            height: 40px;
            width: auto;
            opacity: 0.9;
          }

          .copyright {
            color: rgba(255, 255, 255, 0.6);
            font-size: 13px;
            font-weight: 400;
            letter-spacing: 0.3px;
          }

          .footer-right {
            display: flex;
            gap: 24px;
            align-items: center;
          }

          .social-links {
            display: flex;
            gap: 12px;
            align-items: center;
          }

          .social-link {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(16, 185, 129, 0.1);
            border: 1px solid rgba(16, 185, 129, 0.3);
            color: #10b981;
            text-decoration: none;
            transition: all 0.3s ease;
          }

          .social-link:hover {
            background: rgba(16, 185, 129, 0.2);
            border-color: #10b981;
            transform: translateY(-3px);
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
          }

          .social-link svg {
            width: 20px;
            height: 20px;
          }

          .doc-links {
            display: flex;
            gap: 16px;
            align-items: center;
          }

          .doc-link {
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
            font-size: 13px;
            font-weight: 500;
            transition: all 0.3s ease;
            padding: 8px 12px;
            border-radius: 6px;
            background: rgba(16, 185, 129, 0.05);
            border: 1px solid rgba(16, 185, 129, 0.2);
          }

          .doc-link:hover {
            color: #10b981;
            background: rgba(16, 185, 129, 0.15);
            border-color: rgba(16, 185, 129, 0.4);
            transform: translateY(-2px);
          }

          @media (max-width: 768px) {
            .footer {
              padding: 20px;
            }

            .footer-content {
              flex-direction: column;
              gap: 16px;
            }

            .footer-left {
              flex-direction: column;
              gap: 8px;
            }

            .footer-right {
              flex-direction: column;
              gap: 16px;
            }

            .doc-links {
              flex-direction: column;
              gap: 8px;
              width: 100%;
            }

            .doc-link {
              width: 100%;
              text-align: center;
            }
          }
        `}
      </style>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <img src={logoPath} alt="Omely.AI" className="logo" />
            <span className="copyright">
              © 2025 Omely.AI • All rights reserved
            </span>
          </div>

          <div className="footer-right">
            <div className="doc-links">
              <a 
                href="https://omely.gitbook.io/docs/privacy-and-confidentiality" 
                className="doc-link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              <a 
                href="https://omely.gitbook.io/docs/beta-testing-agreement" 
                className="doc-link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Beta Agreement
              </a>
            </div>

            <div className="social-links">
              {socialLinks.x && (
                <a href={socialLinks.x} className="social-link" aria-label="X" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
              {socialLinks.discord && (
                <a href={socialLinks.discord} className="social-link" aria-label="Discord" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.18.33.25c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"/>
                  </svg>
                </a>
              )}
              {socialLinks.telegram && (
                <a href={socialLinks.telegram} className="social-link" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.76 15.568L9.944 12.66L16.864 6.36C17.16 6.096 16.8 5.964 16.392 6.192L7.08 11.54L4.264 10.66C3.656 10.484 3.652 10.1 4.4 9.8L18.916 4.212C19.492 3.996 20.04 4.348 19.86 5.148L17.388 16.892C17.24 17.568 16.832 17.728 16.24 17.424L12.52 14.712L10.732 16.456C10.516 16.668 10.34 16.844 9.96 16.788C9.708 16.752 9.64 16.532 9.76 15.568Z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;