// src/types/chat.types.ts
export type MentorMode = 'socratic' | 'feynman' | 'challenge';

export interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}