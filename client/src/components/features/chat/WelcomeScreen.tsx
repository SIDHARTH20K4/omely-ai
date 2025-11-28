// src/components/features/chat/WelcomeScreen.tsx
import { useState, useEffect } from 'react';

interface WelcomeScreenProps {
  onStartChat?: (message: string) => void;
}

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return isMobile;
};

export default function WelcomeScreen({ onStartChat }: WelcomeScreenProps) {
  const isMobile = useIsMobile();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const message = formData.get('message') as string;
    if (message?.trim()) {
      onStartChat?.(message.trim());
      e.currentTarget.reset();
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: '24px',
      left: isMobile ? '24px' : '304px',
      right: '24px',
      bottom: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      {/* Main Translucent Container */}
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Lighter for more minimal look
        backdropFilter: 'blur(24px)', // Stronger blur
        borderRadius: '24px', // Slightly less rounded for cleaner look
        border: '1px solid rgba(255, 255, 255, 0.08)', // More subtle border
        padding: isMobile ? '40px 24px' : '60px 48px',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)', // Softer shadow
        overflow: 'auto'
      }}>
        {/* Logo - Removed, cleaner without it */}
        
        {/* Heading */}
        <h1 style={{
          fontSize: isMobile ? '32px' : 'clamp(42px, 5vw, 52px)', // Slightly larger
          fontWeight: '700',
          color: 'white',
          marginBottom: '20px',
          lineHeight: '1.1',
          textAlign: 'center',
          padding: '0 20px',
          letterSpacing: '-0.02em' // Tighter letter spacing for modern look
        }}>
          Welcome to <span style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            padding: '6px 16px',
            borderRadius: '12px',
            border: '1px solid rgba(102, 126, 234, 0.2)', // More subtle
            backgroundColor: 'rgba(102, 126, 234, 0.08)', // More subtle
            display: 'inline-block'
          }}>Omely.ai</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: isMobile ? '15px' : 'clamp(16px, 1.8vw, 19px)',
          color: 'rgba(255, 255, 255, 0.7)', // Slightly muted
          lineHeight: '1.6',
          textAlign: 'center',
          margin: '0 auto',
          marginBottom: isMobile ? '40px' : '48px',
          padding: '0 20px',
          maxWidth: '580px',
          fontWeight: '400'
        }}>
          Stop memorizing. Start mastering. Your hyperpersonalized AI mentor is here.
        </p>

        {/* Search Input */}
        <form onSubmit={handleSubmit} style={{ 
          width: '100%', 
          maxWidth: '680px', 
          padding: '0 20px',
          margin: '0 auto',
          marginBottom: isMobile ? '40px' : '48px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '6px 6px 6px 20px',
            backgroundColor: 'rgba(255, 255, 255, 0.06)', // More subtle
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '14px',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(12px)'
          }}>
            <input
              type="text"
              name="message"
              placeholder="Ask me anything you want to truly understand..."
              style={{
                flex: 1,
                padding: '14px 0',
                backgroundColor: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'white',
                fontSize: isMobile ? '14px' : '15px',
                fontFamily: 'inherit',
                fontWeight: '400'
              }}
            />
            <button
              type="submit"
              style={{
                padding: isMobile ? '11px 20px' : '13px 26px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: 'none',
                borderRadius: '10px',
                color: 'white',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                flexShrink: 0,
                minWidth: '44px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(102, 126, 234, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span style={{ fontSize: '18px' }}>→</span>
            </button>
          </div>
        </form>

        {/* Feature Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? '16px' : '24px',
          width: '100%',
          padding: '0 20px',
          maxWidth: '980px',
          margin: '0 auto'
        }}>
          {[
            { emoji: '✨', title: 'True Understanding', text: 'Challenge yourself with socratic questioning, not memorization shortcuts.' },
            { emoji: '🎯', title: 'Personalized Path', text: 'Adapts to your pace, confusion points, and breakthrough moments.' },
            { emoji: '📈', title: 'Lasting Knowledge', text: 'Active learning techniques that build real mastery, not temporary recall.' }
          ].map((card, index) => (
            <div
              key={index}
              style={{
                padding: isMobile ? '28px 22px' : '32px 26px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)', // More subtle
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.08)', // More subtle
                borderRadius: '18px', // Slightly more rounded
                textAlign: 'center',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', // Smoother easing
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.25)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              }}
            >
              <div style={{ 
                fontSize: isMobile ? '32px' : '40px',
                marginBottom: '16px',
                lineHeight: '1'
              }}>
                {card.emoji}
              </div>
              <h3 style={{
                fontSize: isMobile ? '17px' : '19px',
                fontWeight: '600',
                color: 'white',
                marginBottom: '12px',
                letterSpacing: '-0.01em'
              }}>
                {card.title}
              </h3>
              <p style={{
                fontSize: isMobile ? '13px' : '14px',
                color: 'rgba(255, 255, 255, 0.65)', // More muted
                lineHeight: '1.7',
                margin: 0,
                fontWeight: '400'
              }}>
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}