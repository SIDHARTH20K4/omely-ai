// src/components/ui/Button/ComingSoonButton.tsx
import React from 'react';

export const ComingSoonButton: React.FC = () => {
  return (
    <>
      <div className="coming-soon-wrapper">
        <span className="coming-soon-badge">COMING SOON</span>
        <button className="login-button" disabled>
          <span className="login-text">Login</span>
          <span className="login-lock">🔒</span>
        </button>
      </div>
      
      <style>{`
        .coming-soon-wrapper {
          position: relative;
          display: inline-block;
        }

        .coming-soon-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background: linear-gradient(135deg, #00d4ff 0%, #0099ff 100%);
          color: #0a0e27;
          font-size: 9px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 20px;
          letter-spacing: 1px;
          text-transform: uppercase;
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(0, 212, 255, 0.3);
          animation: glow-pulse 2s ease-in-out infinite;
          z-index: 10;
          border: 1px solid rgba(0, 212, 255, 0.5);
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(0, 212, 255, 0.3);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 30px rgba(0, 212, 255, 0.7), 0 0 60px rgba(0, 212, 255, 0.4);
            transform: scale(1.02);
          }
        }

        .login-button {
          position: relative;
          background: rgba(10, 14, 39, 0.6);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(0, 153, 255, 0.3);
          color: rgba(255, 255, 255, 0.9);
          padding: 11px 26px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: not-allowed;
          transition: all 0.3s ease;
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 20px rgba(0, 153, 255, 0.15);
        }

        .login-button:hover {
          background: rgba(10, 14, 39, 0.8);
          border-color: rgba(0, 212, 255, 0.5);
          box-shadow: 0 4px 30px rgba(0, 212, 255, 0.3);
          transform: translateY(-1px);
        }

        .login-text {
          position: relative;
          z-index: 2;
          letter-spacing: 0.5px;
        }

        .login-lock {
          font-size: 13px;
          opacity: 0.7;
          filter: grayscale(0.2);
        }

        /* Scan line effect */
        .login-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 212, 255, 0.2),
            transparent
          );
          animation: scan 3s ease-in-out infinite;
          z-index: 1;
        }

        @keyframes scan {
          0% {
            left: -100%;
          }
          50%, 100% {
            left: 100%;
          }
        }

        /* Top edge glow */
        .login-button::after {
          content: '';
          position: absolute;
          top: 0;
          left: 20%;
          right: 20%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 212, 255, 0.8),
            transparent
          );
          opacity: 0.6;
          z-index: 1;
        }

        /* Subtle corner accents */
        .coming-soon-wrapper::before,
        .coming-soon-wrapper::after {
          content: '';
          position: absolute;
          width: 4px;
          height: 4px;
          background: #00d4ff;
          opacity: 0.4;
          animation: corner-pulse 2s ease-in-out infinite;
        }

        .coming-soon-wrapper::before {
          top: 8px;
          left: -6px;
          border-radius: 50%;
        }

        .coming-soon-wrapper::after {
          bottom: 8px;
          right: -6px;
          border-radius: 50%;
          animation-delay: 1s;
        }

        @keyframes corner-pulse {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.5);
          }
        }
      `}</style>
    </>
  );
};