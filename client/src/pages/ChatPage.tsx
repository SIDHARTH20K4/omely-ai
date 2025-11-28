// src/pages/ChatPage.tsx
import { useState } from 'react';
import VantaBackground from '../components/shared/VantaBackground';
import ChatSidebar from '../components/features/chat/ChatSidebar';
import WelcomeScreen from '../components/features/chat/WelcomeScreen';
import ChatInterface from '../components/features/chat/ChatInterface';
import type { MentorMode } from '../types/chat.types';

export default function ChatPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentMode, setCurrentMode] = useState<MentorMode>('socratic');
  const [chatStarted, setChatStarted] = useState(false);
  const [initialMessage, setInitialMessage] = useState<string>();

  const handleStartChat = (message: string) => {
    setInitialMessage(message);
    setChatStarted(true);
  };

  const handleNewChat = () => {
    const confirmed = window.confirm('Start a new conversation?');
    if (confirmed) {
      setChatStarted(false);
      setInitialMessage(undefined);
    }
  };

  const handleModeChange = (newMode: MentorMode) => {
    if (chatStarted) {
      const confirmed = window.confirm('Changing modes will start a new conversation. Continue?');
      if (!confirmed) return;
      setChatStarted(false);
      setInitialMessage(undefined);
    }
    setCurrentMode(newMode);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <VantaBackground />
      
      <ChatSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        currentMode={currentMode}
        onModeChange={handleModeChange}
        onNewChat={handleNewChat}
      />

      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          style={{
            position: 'fixed',
            top: '20px',
            left: '20px',
            zIndex: 1000,
            padding: '12px',
            background: 'rgba(124, 58, 237, 0.9)',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
            fontSize: '20px',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
          }}
        >
          ☰
        </button>
      )}

     
      <div style={{
        position: 'relative',
        zIndex: 1
      }}>
        {!chatStarted ? (
          <WelcomeScreen onStartChat={handleStartChat} />
        ) : (
          <ChatInterface mode={currentMode} initialMessage={initialMessage} />
        )}
      </div>
    </div>
  );
}