// src/components/shared/chat/SidebarActions.tsx
import { useState, useRef, useEffect } from 'react';
import type { MentorMode } from '../../../types/chat.types';

interface SidebarActionsProps {
  currentMode?: MentorMode;
  onChangeMode?: (mode: MentorMode) => void;
}

const modeOptions: { value: MentorMode; label: string; emoji: string }[] = [
  { value: 'socratic', label: 'Adaptive', emoji: '🎯' },
  { value: 'feynman', label: 'Feynman', emoji: '🧠' },
  { value: 'challenge', label: 'Devil Mode', emoji: '😈' }
];

export default function SidebarActions({
  currentMode = 'socratic',
  onChangeMode
}: SidebarActionsProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const currentModeOption = modeOptions.find(opt => opt.value === currentMode) || modeOptions[0];

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

  const handleModeSelect = (mode: MentorMode) => {
    onChangeMode?.(mode);
    setIsMenuOpen(false);
  };

  return (
    <div style={{
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '12px 16px'
    }}>
      <div style={{ position: 'relative' }} ref={menuRef}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            width: '100%',
            padding: '12px 16px',
            backgroundColor: 'rgba(124, 58, 237, 0.1)',
            border: '1px solid rgba(124, 58, 237, 0.3)',
            borderRadius: '8px',
            color: '#a78bfa',
            fontSize: '14px',
            cursor: 'pointer',
            outline: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            transition: 'background-color 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(124, 58, 237, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(124, 58, 237, 0.1)';
          }}
        >
          <span>
            {currentModeOption.emoji} {currentModeOption.label}
          </span>
          <span style={{
            fontSize: '12px',
            transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease'
          }}>
            ▼
          </span>
        </button>

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
            {modeOptions.map((option, index) => (
              <button
                key={option.value}
                onClick={() => handleModeSelect(option.value)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  backgroundColor: currentMode === option.value 
                    ? 'rgba(59, 130, 246, 0.2)' 
                    : 'transparent',
                  border: 'none',
                  color: currentMode === option.value 
                    ? 'white' 
                    : 'rgba(255, 255, 255, 0.7)',
                  fontSize: '14px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background-color 0.2s ease',
                  borderTop: index > 0 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (currentMode !== option.value) {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentMode !== option.value) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <span style={{ fontSize: '16px' }}>{option.emoji}</span>
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}