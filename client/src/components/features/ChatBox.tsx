// src/components/features/ChatBox.tsx - MOBILE RESPONSIVE VERSION
import { useState, useEffect } from 'react';
import { sendMessage, clearConversation } from '../../api/openai';
import type { MentorMode, ChatMessage } from '../../types/chat.types';

export default function ChatBox() {
  const [mode, setMode] = useState<MentorMode>('socratic');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim()) {
      setError('Please enter a message');
      return;
    }

    setError('');
    setLoading(true);

    // Add user message to UI
    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput(''); // Clear input immediately

    try {
      // Send to OpenAI
      const result = await sendMessage(currentInput, mode);

      // Add AI response to UI
      const aiMessage: ChatMessage = { role: 'assistant', content: result };
      setMessages(prev => [...prev, aiMessage]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong';
      setError(errorMessage);
      
      // Remove user message from UI if request failed
      setMessages(prev => prev.slice(0, -1));
      setInput(currentInput); // Restore input
    } finally {
      setLoading(false);
    }
  };

  const handleModeSwitch = (newMode: MentorMode) => {
    if (newMode !== mode) {
      // Confirm if user has messages
      if (messages.length > 0) {
        const confirmed = window.confirm(
          'Switching modes will start a new conversation. Continue?'
        );
        if (!confirmed) return;
      }

      setMode(newMode);
      setMessages([]);
      setError('');
      clearConversation(newMode);
    }
  };

  const handleClearChat = () => {
    if (messages.length > 0) {
      const confirmed = window.confirm('Clear this conversation?');
      if (!confirmed) return;
    }

    clearConversation(mode);
    setMessages([]);
    setError('');
  };

  const getModeInfo = (currentMode: MentorMode) => {
    if (currentMode === 'socratic') {
      return {
        icon: '🎯',
        title: 'Adaptive',
        description: "I'll guide you with questions to help you discover answers yourself.",
        placeholder: 'Ask me about any topic you want to learn...',
        exampleUser: 'What is photosynthesis?',
        exampleAI: "Great question! What do you already know about how plants get energy?"
      };
    } else if (currentMode === 'feynman') {
      return {
        icon: '🧠',
        title: 'Feynman',
        description: "Explain concepts to me like I'm a curious 12-year-old. I'll ask simple questions to test your understanding.",
        placeholder: 'Explain a concept as if teaching a child...',
        exampleUser: 'Let me explain how photosynthesis works...',
        exampleAI: "Ooh interesting! But why do plants need sunlight? What does it do?"
      };
    } else { // challenge mode
      return {
        icon: '😈',
        title: 'Devil Mode',
        description: "I'll question your understanding and play devil's advocate to stress-test your knowledge.",
        placeholder: 'Teach me something you think you know well...',
        exampleUser: 'I understand how gravity works.',
        exampleAI: "Interesting! But what about astronauts floating in space? If gravity pulls everything down, why don't they fall?"
      };
    }
  };

  const modeInfo = getModeInfo(mode);

  return (
    <div style={{
      maxWidth: '900px',
      margin: isMobile ? '20px auto' : '50px auto',
      padding: isMobile ? '16px' : '24px',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      borderRadius: '16px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: isMobile ? 'flex-start' : 'center',
        marginBottom: '24px',
        flexDirection: isMobile ? 'column' : 'row',
        gap: '16px'
      }}>
        <h2 style={{
          color: 'white',
          margin: 0,
          fontSize: isMobile ? '20px' : '24px',
          fontWeight: '600'
        }}>
          🤖 Chat with Omely
        </h2>

        {/* Mode Selector - Desktop: Buttons / Mobile: Dropdown */}
        {isMobile ? (
          <div style={{ width: '100%', display: 'flex', gap: '8px' }}>
            <select
              value={mode}
              onChange={(e) => handleModeSwitch(e.target.value as MentorMode)}
              style={{
                flex: 1,
                padding: '12px 16px',
                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                color: 'white',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                outline: 'none'
              }}
            >
              <option value="socratic" style={{ background: '#1a1a1a' }}>🎯 Adaptive</option>
              <option value="feynman" style={{ background: '#1a1a1a' }}>🧠 Feynman</option>
              <option value="challenge" style={{ background: '#1a1a1a' }}>😈 Devil Mode</option>
            </select>
            <button
              onClick={handleClearChat}
              style={{
                padding: '12px 16px',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                color: '#ef4444',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600',
                transition: 'all 0.2s ease'
              }}
            >
              Clear
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => handleModeSwitch('socratic')}
              style={{
                padding: '10px 20px',
                backgroundColor: mode === 'socratic' ? '#10b981' : 'rgba(255, 255, 255, 0.1)',
                color: mode === 'socratic' ? 'white' : '#9ca3af',
                border: mode === 'socratic' ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: mode === 'socratic' ? '600' : '400',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              🎯 Adaptive
            </button>
            
            <button
              onClick={() => handleModeSwitch('feynman')}
              style={{
                padding: '10px 20px',
                backgroundColor: mode === 'feynman' ? '#10b981' : 'rgba(255, 255, 255, 0.1)',
                color: mode === 'feynman' ? 'white' : '#9ca3af',
                border: mode === 'feynman' ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: mode === 'feynman' ? '600' : '400',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              🧠 Feynman
            </button>

            <button
              onClick={() => handleModeSwitch('challenge')}
              style={{
                padding: '10px 20px',
                backgroundColor: mode === 'challenge' ? '#10b981' : 'rgba(255, 255, 255, 0.1)',
                color: mode === 'challenge' ? 'white' : '#9ca3af',
                border: mode === 'challenge' ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: mode === 'challenge' ? '600' : '400',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              😈 Devil Mode
            </button>

            <button
              onClick={handleClearChat}
              style={{
                padding: '10px 16px',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                color: '#ef4444',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'all 0.2s ease'
              }}
            >
              Clear
            </button>
          </div>
        )}
      </div>

      {/* Mode Info Banner */}
      <div style={{
        padding: isMobile ? '12px' : '16px',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        border: '1px solid rgba(16, 185, 129, 0.3)',
        borderRadius: '12px',
        marginBottom: '24px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '8px'
        }}>
          <span style={{ fontSize: isMobile ? '18px' : '20px' }}>{modeInfo.icon}</span>
          <strong style={{ color: '#10b981', fontSize: isMobile ? '14px' : '15px' }}>
            {modeInfo.title}
          </strong>
        </div>
        <p style={{
          color: 'rgba(255, 255, 255, 0.8)',
          margin: 0,
          fontSize: isMobile ? '13px' : '14px',
          lineHeight: '1.5'
        }}>
          {modeInfo.description}
        </p>
      </div>

      {/* Chat Messages */}
      <div style={{
        height: isMobile ? '350px' : '450px',
        overflowY: 'auto',
        marginBottom: '20px',
        padding: isMobile ? '12px' : '16px',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        {messages.length === 0 && !loading && (
          <div style={{
            textAlign: 'center',
            padding: isMobile ? '40px 12px' : '60px 20px',
            color: 'rgba(255, 255, 255, 0.5)'
          }}>
            <p style={{ fontSize: isMobile ? '16px' : '18px', marginBottom: '20px' }}>
              {modeInfo.icon} Start a conversation
            </p>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              padding: isMobile ? '12px' : '16px',
              borderRadius: '8px',
              textAlign: 'left',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              <p style={{
                fontSize: isMobile ? '12px' : '13px',
                color: 'rgba(255, 255, 255, 0.6)',
                marginBottom: '8px'
              }}>
                Example:
              </p>
              <div style={{ marginBottom: '12px' }}>
                <span style={{
                  color: '#60a5fa',
                  fontSize: isMobile ? '11px' : '12px',
                  fontWeight: '600'
                }}>
                  You:
                </span>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: isMobile ? '13px' : '14px',
                  margin: '4px 0'
                }}>
                  {modeInfo.exampleUser}
                </p>
              </div>
              <div>
                <span style={{
                  color: '#10b981',
                  fontSize: isMobile ? '11px' : '12px',
                  fontWeight: '600'
                }}>
                  Omely:
                </span>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: isMobile ? '13px' : '14px',
                  margin: '4px 0'
                }}>
                  {modeInfo.exampleAI}
                </p>
              </div>
            </div>
          </div>
        )}

        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              marginBottom: '16px',
              padding: isMobile ? '12px' : '14px',
              borderRadius: '12px',
              backgroundColor: msg.role === 'user'
                ? 'rgba(59, 130, 246, 0.15)'
                : 'rgba(16, 185, 129, 0.15)',
              border: msg.role === 'user'
                ? '1px solid rgba(59, 130, 246, 0.3)'
                : '1px solid rgba(16, 185, 129, 0.3)'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '8px'
            }}>
              <span style={{ fontSize: isMobile ? '16px' : '18px' }}>
                {msg.role === 'user' ? '👤' : modeInfo.icon}
              </span>
              <strong style={{
                color: msg.role === 'user' ? '#60a5fa' : '#10b981',
                fontSize: isMobile ? '13px' : '14px'
              }}>
                {msg.role === 'user' ? 'You' : 'Omely'}
              </strong>
            </div>
            <p style={{
              color: 'white',
              margin: 0,
              whiteSpace: 'pre-wrap',
              lineHeight: '1.6',
              fontSize: isMobile ? '13px' : '14px'
            }}>
              {msg.content}
            </p>
          </div>
        ))}

        {loading && (
          <div style={{
            padding: isMobile ? '12px' : '14px',
            borderRadius: '12px',
            backgroundColor: 'rgba(16, 185, 129, 0.15)',
            border: '1px solid rgba(16, 185, 129, 0.3)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ fontSize: isMobile ? '16px' : '18px' }}>{modeInfo.icon}</span>
              <strong style={{ color: '#10b981', fontSize: isMobile ? '13px' : '14px' }}>
                Omely
              </strong>
            </div>
            <p style={{
              color: 'rgba(255, 255, 255, 0.6)',
              margin: '8px 0 0 0',
              fontSize: isMobile ? '13px' : '14px'
            }}>
              {mode === 'socratic' 
                ? 'Thinking of a question...' 
                : mode === 'feynman'
                ? 'Thinking like a curious kid...'
                : 'Preparing to challenge you...'
              }
            </p>
          </div>
        )}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={modeInfo.placeholder}
          disabled={loading}
          style={{
            width: '100%',
            minHeight: isMobile ? '80px' : '100px',
            padding: isMobile ? '12px' : '14px',
            fontSize: isMobile ? '13px' : '14px',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            color: 'white',
            resize: 'vertical',
            marginBottom: '12px',
            fontFamily: 'inherit',
            outline: 'none',
            transition: 'border-color 0.2s ease'
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        />

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '12px' : '0'
        }}>
          <p style={{
            fontSize: isMobile ? '11px' : '12px',
            color: 'rgba(255, 255, 255, 0.5)',
            margin: 0
          }}>
            Press Enter to send • Shift+Enter for new line
          </p>

          <button
            type="submit"
            disabled={loading || !input.trim()}
            style={{
              padding: isMobile ? '12px 24px' : '12px 32px',
              fontSize: isMobile ? '14px' : '15px',
              fontWeight: '600',
              borderRadius: '10px',
              border: 'none',
              backgroundColor: loading || !input.trim() ? 'rgba(255, 255, 255, 0.1)' : '#10b981',
              color: loading || !input.trim() ? 'rgba(255, 255, 255, 0.3)' : 'white',
              cursor: loading || !input.trim() ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
              width: isMobile ? '100%' : 'auto'
            }}
          >
            {loading ? '⏳ Sending...' : '✨ Send'}
          </button>
        </div>
      </form>

      {/* Error Message */}
      {error && (
        <div style={{
          marginTop: '16px',
          padding: isMobile ? '12px' : '14px',
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '10px',
          color: '#ef4444',
          fontSize: isMobile ? '13px' : '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span>⚠️</span>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}