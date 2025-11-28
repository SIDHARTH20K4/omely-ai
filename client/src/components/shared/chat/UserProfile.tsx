// src/components/shared/chat/UserProfile.tsx
import { useState, useRef, useEffect } from 'react';
import { useAccount } from 'wagmi';

interface UserProfileProps {
  name?: string;
  role?: string;
  avatarUrl?: string;
  onClearAll?: () => void;
  onToggleTheme?: () => void;
  onLogout?: () => void;
  isDarkMode?: boolean;
}

export default function UserProfile({ 
  name = "Beta Tester", 
  role,
  avatarUrl,
  onClearAll,
  onToggleTheme,
  onLogout,
  isDarkMode = true
}: UserProfileProps) {
  const { address } = useAccount();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  // Format wallet address for display (truncate to show first 6 and last 4 characters)
  const formatAddress = (addr: string | undefined) => {
    if (!addr) return '';
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };
  
  // Use wallet address if available, otherwise use provided role or "Beta Tester" as fallback
  const displayRole = address ? formatAddress(address) : (role || 'Beta Tester');

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (action: () => void) => {
    action();
    setIsMenuOpen(false);
  };

  return (
    <div style={{ position: 'relative' }} ref={menuRef}>
      <div 
        onClick={handleMenuClick}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '16px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          cursor: 'pointer',
          transition: 'background-color 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          color: 'white',
          fontWeight: '600',
          flexShrink: 0
        }}>
          {avatarUrl ? (
            <img 
              src={avatarUrl} 
              alt={name}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />
          ) : (
            name.charAt(0).toUpperCase()
          )}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            color: 'white',
            fontSize: '15px',
            fontWeight: '600',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>
            {name}
          </div>
          <div style={{
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '13px',
            marginTop: '2px'
          }}>
            {displayRole}
          </div>
        </div>
         <div style={{
           color: 'rgba(255, 255, 255, 0.5)',
           fontSize: '18px',
           transition: 'transform 0.2s ease'
         }}>
           ⚙️
         </div>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div style={{
          position: 'absolute',
          bottom: '100%',
          left: 0,
          right: 0,
          marginBottom: '8px',
          backgroundColor: 'rgba(20, 20, 20, 0.98)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
          overflow: 'hidden',
          zIndex: 1000
        }}>
          {onToggleTheme && (
            <div
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                padding: '12px 16px',
                backgroundColor: 'transparent',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '14px',
                textAlign: 'left',
                cursor: 'not-allowed',
                opacity: 0.6
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '16px' }}>{isDarkMode ? '☀️' : '🌙'}</span>
                <span>Switch to {isDarkMode ? 'Light' : 'Dark'} Mode</span>
              </div>
              <span style={{
                fontSize: '10px',
                padding: '2px 8px',
                backgroundColor: 'rgba(102, 126, 234, 0.2)',
                border: '1px solid rgba(102, 126, 234, 0.4)',
                borderRadius: '12px',
                color: '#a78bfa',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Soon
              </span>
            </div>
          )}
          
          {onClearAll && (
            <div
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                padding: '12px 16px',
                backgroundColor: 'transparent',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '14px',
                textAlign: 'left',
                cursor: 'not-allowed',
                opacity: 0.6,
                borderTop: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '16px' }}>🗑️</span>
                <span>Clear all conversations</span>
              </div>
              <span style={{
                fontSize: '10px',
                padding: '2px 8px',
                backgroundColor: 'rgba(102, 126, 234, 0.2)',
                border: '1px solid rgba(102, 126, 234, 0.4)',
                borderRadius: '12px',
                color: '#a78bfa',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                 Soon
              </span>
            </div>
          )}

          {onLogout && (
            <button
              onClick={() => handleMenuItemClick(onLogout)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                backgroundColor: 'transparent',
                border: 'none',
                color: '#ef4444',
                fontSize: '14px',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'background-color 0.2s ease',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <span style={{ fontSize: '16px' }}>🚪</span>
              Logout
            </button>
          )}
        </div>
      )}
    </div>
  );
}