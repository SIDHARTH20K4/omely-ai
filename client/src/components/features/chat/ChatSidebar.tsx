// src/components/features/chat/ChatSidebar.tsx - MOBILE RESPONSIVE VERSION (NO TOP BUTTON)
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDisconnect } from 'wagmi';
import UserProfile from '../../shared/chat/UserProfile';
import ConversationList from '../../shared/chat/ConversationList';
import NewChatButton from '../../shared/chat/NewChatButton';
import SidebarActions from '../../shared/chat/SidebarActions';
import type { MentorMode } from '../../../types/chat.types';

interface ChatSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  onToggle?: () => void;
  currentMode?: MentorMode;
  onModeChange?: (mode: MentorMode) => void;
  onNewChat?: () => void;
}

export default function ChatSidebar({
  isOpen = true,
  onClose,
  currentMode = 'socratic',
  onModeChange,
  onNewChat
}: ChatSidebarProps) {
  const [activeConversationId, setActiveConversationId] = useState<string>();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();
  const { disconnect } = useDisconnect();

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClearAll = () => {
    const confirmed = window.confirm('Clear all conversations? This cannot be undone.');
    if (confirmed) {
      console.log('Clear all conversations');
    }
  };

  const handleLogout = () => {
    const confirmed = window.confirm('Are you sure you want to log out?');
    if (confirmed) {
      disconnect();
      navigate('/');
    }
  };

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Add theme switching logic here if needed
  };

  const handleSidebarClose = () => {
    if (isMobile && onClose) {
      onClose();
    }
  };

  return (
    <>
      {/* Overlay (Mobile Only) */}
      {isMobile && isOpen && (
        <div
          onClick={handleSidebarClose}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(4px)',
            zIndex: 998,
            transition: 'opacity 0.3s ease'
          }}
        />
      )}

      {/* Sidebar */}
      <div
        style={{
          position: 'fixed',
          left: isOpen ? 0 : '-280px',
          top: 0,
          bottom: 0,
          width: '280px',
          backgroundColor: 'rgba(20, 20, 20, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRight: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          transition: 'left 0.3s ease',
          zIndex: 999,
          boxShadow: isOpen ? '4px 0 24px rgba(0, 0, 0, 0.3)' : 'none'
        }}
      >
        {/* New Chat Button */}
        <div style={{ 
          padding: '0 12px', 
          paddingTop: '12px',
          flexShrink: 0 
        }}>
          <NewChatButton onClick={() => {
            onNewChat?.();
            if (isMobile) handleSidebarClose();
          }} />
        </div>

        {/* Conversation List */}
        <div style={{ flex: 1, overflowY: 'auto', minHeight: 0 }}>
          <ConversationList
            activeConversationId={activeConversationId}
            onSelectConversation={(id) => {
              setActiveConversationId(id);
              if (isMobile) handleSidebarClose();
            }}
          />
        </div>

        {/* Actions & Profile */}
        <div style={{ flexShrink: 0 }}>
          <SidebarActions
            currentMode={currentMode}
            onChangeMode={(mode) => {
              onModeChange?.(mode);
              if (isMobile) handleSidebarClose();
            }}
          />
          <UserProfile
            onClearAll={handleClearAll}
            onToggleTheme={handleToggleTheme}
            onLogout={handleLogout}
            isDarkMode={isDarkMode}
          />
        </div>
      </div>
    </>
  );
}