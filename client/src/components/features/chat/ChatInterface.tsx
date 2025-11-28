// src/components/features/chat/ChatInterface.tsx - MOBILE RESPONSIVE VERSION
import React, { useState, useEffect, useRef } from 'react';
import { useAccount } from 'wagmi';
import { sendMessage } from '../../../api/openai';
import Analytics from '../../../Services/Analytics';
import type { MentorMode, ChatMessage } from '../../../types/chat.types';

interface ChatInterfaceProps {
  mode: MentorMode;
  initialMessage?: string;
  sidebarOpen?: boolean;
}

export default function ChatInterface({ mode, initialMessage, sidebarOpen = true }: ChatInterfaceProps) {
  const { address } = useAccount();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (initialMessage && messages.length === 0) {
      handleSendMessage(initialMessage);
    }
  }, [initialMessage]);

  // Auto-scroll to bottom when messages or loading state changes
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [messages, loading]);

  const handleSendMessage = async (messageText: string) => {
    if (!messageText.trim()) return;

    setError('');
    setLoading(true);

    const userMessage: ChatMessage = { role: 'user', content: messageText };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Track message
    if (address) {
      Analytics.trackMessage(address, mode);
    }

    try {
      const result = await sendMessage(messageText, mode);
      const aiMessage: ChatMessage = { role: 'assistant', content: result };
      setMessages(prev => [...prev, aiMessage]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong';
      setError(errorMessage);
      setMessages(prev => prev.slice(0, -1));
      setInput(messageText);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(input);
  };

  const getModeIcon = () => {
    switch (mode) {
      case 'socratic': return '🎯';
      case 'feynman': return '🧠';
      case 'challenge': return '😈';
      default: return '🤖';
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      padding: '0',
      paddingLeft: isMobile ? '0' : (sidebarOpen ? '280px' : '0'),
      position: 'relative',
      zIndex: 1,
      transition: 'padding-left 0.3s ease'
    }}>
      {/* Chat Messages - ChatGPT Style */}
      <div 
        ref={messagesContainerRef}
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: isMobile ? '12px' : '16px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '0px'
        }}
      >
        {messages.length === 0 && !loading && (
          <div style={{
            textAlign: 'center',
            padding: isMobile ? '40px 16px' : '60px 20px',
            color: 'rgba(255, 255, 255, 0.5)',
            margin: 'auto'
          }}>
            <p style={{ fontSize: isMobile ? '16px' : '18px' }}>
              Start your conversation...
            </p>
          </div>
        )}

        {messages.map((msg, index) => {
          const isLastMessage = index === messages.length - 1;
          const isUserMessage = msg.role === 'user';
          const prevMessage = index > 0 ? messages[index - 1] : null;
          const isGrouped = prevMessage && prevMessage.role === msg.role;
          
          return (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent: isUserMessage ? 'flex-end' : 'flex-start',
                marginBottom: isLastMessage ? '16px' : '8px',
                marginTop: isGrouped ? '2px' : '16px'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: isMobile ? '8px' : '12px',
                maxWidth: isMobile ? '90%' : '75%',
                flexDirection: isUserMessage ? 'row-reverse' : 'row'
              }}>
              {/* Avatar - only show if not grouped or first message */}
              {(!isGrouped || index === 0) && (
                <div style={{
                  width: isMobile ? '24px' : '30px',
                  height: isMobile ? '24px' : '30px',
                  borderRadius: '50%',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  backgroundColor: isUserMessage 
                    ? 'rgba(59, 130, 246, 0.3)' 
                    : 'rgba(102, 126, 234, 0.3)',
                  marginTop: '2px'
                }}>
                  {isUserMessage ? (
                    <span style={{ fontSize: isMobile ? '14px' : '16px' }}>👤</span>
                  ) : (
                    <span style={{ fontSize: isMobile ? '16px' : '18px' }}>{getModeIcon()}</span>
                  )}
                </div>
              )}
              
              {/* Spacer for grouped messages */}
              {isGrouped && index > 0 && (
                <div style={{ width: isMobile ? '24px' : '30px', flexShrink: 0 }} />
              )}
              
              {/* Message Bubble */}
              <div style={{
                padding: isMobile ? '10px 12px' : '12px 16px',
                borderRadius: isUserMessage 
                  ? '18px 18px 4px 18px' 
                  : '18px 18px 18px 4px',
                backgroundColor: isUserMessage
                  ? 'rgba(59, 130, 246, 0.9)'
                  : 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                border: isUserMessage
                  ? 'none'
                  : '1px solid rgba(255, 255, 255, 0.1)',
                color: 'white',
                whiteSpace: 'pre-wrap',
                lineHeight: '1.6',
                fontSize: isMobile ? '14px' : '15px',
                wordWrap: 'break-word'
              }}>
                {msg.content}
              </div>
            </div>
          </div>
          );
        })}
        
        {/* Invisible element at the bottom for scrolling */}
        <div ref={messagesEndRef} />

        {loading && (
          <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            marginTop: '16px',
            marginBottom: '16px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: isMobile ? '8px' : '12px',
              maxWidth: isMobile ? '90%' : '75%'
            }}>
              {/* Avatar */}
              <div style={{
                width: isMobile ? '24px' : '30px',
                height: isMobile ? '24px' : '30px',
                borderRadius: '50%',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                backgroundColor: 'rgba(102, 126, 234, 0.3)',
                marginTop: '2px'
              }}>
                <span style={{ fontSize: isMobile ? '16px' : '18px' }}>{getModeIcon()}</span>
              </div>
              
              {/* Loading Bubble */}
              <div style={{
                padding: isMobile ? '10px 12px' : '12px 16px',
                borderRadius: '18px 18px 18px 4px',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: isMobile ? '14px' : '15px',
                lineHeight: '1.6'
              }}>
                Thinking...
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Form - WhatsApp Style */}
      <form onSubmit={handleSubmit} style={{
        padding: isMobile ? '10px 12px' : '12px 20px',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{
          position: 'relative',
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center'
        }}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            disabled={loading}
            style={{
              width: '100%',
              minHeight: isMobile ? '40px' : '44px',
              maxHeight: isMobile ? '100px' : '120px',
              padding: isMobile ? '8px 52px 8px 12px' : '10px 60px 10px 16px',
              fontSize: isMobile ? '14px' : '15px',
              borderRadius: isMobile ? '20px' : '24px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              resize: 'none',
              fontFamily: 'inherit',
              outline: 'none',
              overflowY: 'auto'
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            style={{
              position: 'absolute',
              right: isMobile ? '6px' : '8px',
              width: isMobile ? '32px' : '36px',
              height: isMobile ? '32px' : '36px',
              borderRadius: '50%',
              border: 'none',
              background: loading || !input.trim()
                ? 'rgba(255, 255, 255, 0.1)'
                : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              cursor: loading || !input.trim() ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: isMobile ? '14px' : '16px',
              flexShrink: 0
            }}
          >
            {loading ? '⏳' : '✨'}
          </button>
        </div>

        {error && (
          <div style={{
            marginTop: '8px',
            padding: isMobile ? '8px 12px' : '10px 16px',
            backgroundColor: 'rgba(239, 68, 68, 0.2)',
            border: '1px solid rgba(239, 68, 68, 0.4)',
            borderRadius: '8px',
            color: '#ef4444',
            fontSize: isMobile ? '12px' : '13px',
            maxWidth: '1400px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            ⚠️ {error}
          </div>
        )}
      </form>
    </div>
  );
}