// src/components/shared/chat/ConversationList.tsx
import type { MentorMode } from '../../../types/chat.types';

interface Conversation {
  id: string;
  title: string;
  mode: MentorMode;
}

interface ConversationListProps {
  conversations?: Conversation[];
  activeConversationId?: string;
  onSelectConversation?: (id: string) => void;
}

export default function ConversationList({
  conversations = [
    { id: '1', title: 'How to write an impacting...', mode: 'socratic' },
    { id: '2', title: 'Web accessibility', mode: 'feynman' },
    { id: '3', title: 'Design inspiration', mode: 'challenge' },
    { id: '4', title: 'What is machine learning', mode: 'socratic' },
  ],
  activeConversationId: _activeConversationId,
  onSelectConversation: _onSelectConversation
}: ConversationListProps) {
  return (
    <div style={{
      flex: 1,
      overflowY: 'auto',
      padding: '8px'
    }}>
      {conversations.map((conv) => (
        <div
          key={conv.id}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px',
            marginBottom: '4px',
            backgroundColor: 'transparent',
            borderRadius: '8px',
            cursor: 'not-allowed',
            opacity: 0.6,
            position: 'relative'
          }}
        >
          <div style={{ fontSize: '18px', opacity: 0.7, flexShrink: 0 }}>💬</div>
          <div style={{
            flex: 1,
            minWidth: 0,
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '14px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>
            {conv.title}
          </div>
          <span style={{
            fontSize: '9px',
            padding: '2px 6px',
            backgroundColor: 'rgba(102, 126, 234, 0.2)',
            border: '1px solid rgba(102, 126, 234, 0.4)',
            borderRadius: '10px',
            color: '#a78bfa',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            flexShrink: 0
          }}>
            Soon
          </span>
        </div>
      ))}
      
      {/* Coming Soon Message */}
      <div style={{
        padding: '16px 12px',
        textAlign: 'center',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        marginTop: '8px'
      }}>
        <p style={{
          fontSize: '12px',
          color: 'rgba(255, 255, 255, 0.4)',
          margin: 0,
          lineHeight: '1.5'
        }}>
          Conversation history<br/>
          <span style={{
            fontSize: '11px',
            color: '#a78bfa',
            fontWeight: '600'
          }}>
            Coming in next version
          </span>
        </p>
      </div>
    </div>
  );
}