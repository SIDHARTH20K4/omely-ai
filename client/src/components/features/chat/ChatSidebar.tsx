// src/components/features/chat/ChatSidebar.tsx
import { useState } from 'react';
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
  const navigate = useNavigate();
  const { disconnect } = useDisconnect();

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

  return (
    <>
      {isOpen && window.innerWidth < 768 && (
        <div
          onClick={onClose}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 998
          }}
        />
      )}

      <div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          width: '280px',
          backgroundColor: 'rgba(20, 20, 20, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRight: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease',
          zIndex: 999
        }}
      >
        <div style={{ padding: '0 12px', paddingTop: '12px', flexShrink: 0 }}>
          <NewChatButton onClick={onNewChat} />
        </div>
        <div style={{ flex: 1, overflowY: 'auto', minHeight: 0 }}>
          <ConversationList
            activeConversationId={activeConversationId}
            onSelectConversation={setActiveConversationId}
          />
        </div>
        <div style={{ flexShrink: 0 }}>
          <SidebarActions
            currentMode={currentMode}
            onChangeMode={onModeChange}
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