// src/api/openai.ts
import OpenAI from 'openai';
import type { Message, MentorMode } from '../types/chat.types';

export const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const MAX_REQUESTS_PER_DAY = 5;

function canUserSend(wallet: string): boolean {
  if (!wallet) return false;

  const stored = localStorage.getItem(`usage_${wallet}`);
  const today = new Date().toISOString().slice(0,10);

  if (!stored) {
    localStorage.setItem(`usage_${wallet}`, JSON.stringify({ count: 0, date: today }));
    return true;
  }

  const data = JSON.parse(stored);

  // Reset if new day
  if (data.date !== today) {
    localStorage.setItem(`usage_${wallet}`, JSON.stringify({ count: 0, date: today }));
    return true;
  }

  return data.count < MAX_REQUESTS_PER_DAY;
}

function recordUsage(wallet: string) {
  const stored = localStorage.getItem(`usage_${wallet}`);
  const today = new Date().toISOString().slice(0,10);

  if (!stored) {
    localStorage.setItem(`usage_${wallet}`, JSON.stringify({ count: 1, date: today }));
    return;
  }

  const data = JSON.parse(stored);
  data.count += 1;
  localStorage.setItem(`usage_${wallet}`, JSON.stringify(data));
}

// Add the third prompt here:
export const PROMPTS: Record<MentorMode, string> = {
  socratic: `You are Omely, an AI hyperpersonalized mentor designed to revolutionize global learning by detecting and breaking users' limiting beliefs.
Always respond in English only.
You are NOT an assistant that gives ready-made answers. You are a MENTOR who guides users toward real understanding.
YOUR ROLE:
* Ask Socratic questions to make them think
* Detect misunderstandings and address them immediately
* Challenge superficial explanations
* Encourage active learning over passive consumption
* Proactively detect EVERY limiting belief (e.g., "I'm bad at math", "I can't learn this") in user statements, behaviors, or hesitations; challenge them empathetically, reframe positively, and guide users to evidence-based breakthroughs for lasting mindset shifts
* ALWAYS assess user's level BEFORE explaining a new topic`,

  feynman: `You are Omely in Feynman Mode: an AI mentor using the Feynman Technique to deepen understanding.
Always respond in English only.
YOUR ROLE:
* Instruct user to explain concepts in their own words as if teaching a child.
* Respond as a curious 12-year-old kid: ask simple, naive questions to probe gaps (e.g., "Why does that happen? Can you explain it like I'm five?").
* Detect misunderstandings and limiting beliefs; challenge them playfully.
* Guide toward clarity without giving answers—encourage re-explanation.
* Assess user's level through their explanations before advancing.`,

  // ← ADD THIS:
  challenge: `You are Omely in Challenge Mode: an AI mentor stress-testing users' learning for deeper mastery.
Always respond in English only.
YOUR ROLE:
* Question everything the user says about their learning—play devil's advocate without being annoying.
* Ask "but what about..." questions to probe assumptions.
* Point out edge cases and counterexamples.
* Make them defend their understanding with evidence.
* Push them to think deeper by stress-testing their knowledge, strengthening understanding through constructive challenge.
* Detect misunderstandings and limiting beliefs; address them empathetically.
* Assess user's level through responses before advancing.`
};

// Update conversation storage to include challenge mode:
const conversations: Record<MentorMode, Message[]> = {
  socratic: [],
  feynman: [],
  challenge: [] 
};

function initializeConversation(mode: MentorMode): void {
  if (conversations[mode].length === 0) {
    conversations[mode].push({
      role: 'system',
      content: PROMPTS[mode]
    });
  }
}

function trimHistory(messages: Message[], keepLastExchanges: number = 5): Message[] {
  const systemMessage = messages[0];
  const conversationMessages = messages.slice(1);
  const messagesToKeep = keepLastExchanges * 2;
  const trimmedMessages = conversationMessages.slice(-messagesToKeep);
  return [systemMessage, ...trimmedMessages];
}

// src/api/openai.ts
export async function sendMessage(
  message: string,
  mode: MentorMode = 'socratic',
  walletAddress?: string
): Promise<string> {
  try {
    if (!walletAddress) {
      throw new Error('Wallet not connected. Please connect wallet.');
    }

    // 🔥 RATE LIMIT CHECK
    if (!canUserSend(walletAddress)) {
      throw new Error('Daily message limit reached (50). Try again tomorrow.');
    }

    if (!import.meta.env.VITE_OPENAI_API_KEY) {
      throw new Error('OpenAI API key is not configured. Please add VITE_OPENAI_API_KEY to your .env file.');
    }

    initializeConversation(mode);

    conversations[mode].push({
      role: 'user',
      content: message
    });

    const trimmedHistory = trimHistory(conversations[mode], 5);

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: trimmedHistory,
      temperature: 0.7,
      max_tokens: 300,
    });

    const choice = completion.choices[0];
    if (!choice) throw new Error('No response received from AI');

    const aiResponse = choice.message?.content;

    if (!aiResponse || aiResponse.trim() === '') {
      throw new Error('Received empty response from AI. Please try again.');
    }

    conversations[mode].push({
      role: 'assistant',
      content: aiResponse
    });

    // 🔥 RECORD USAGE AFTER SUCCESS
    recordUsage(walletAddress);

    return aiResponse;
  } catch (error: any) {
    console.error('OpenAI API Error:', error);
    throw error;
  }
}


export function clearConversation(mode: MentorMode): void {
  conversations[mode] = [{
    role: 'system',
    content: PROMPTS[mode]
  }];
}

export function getConversationHistory(mode: MentorMode): Message[] {
  return conversations[mode];
}

export function estimateTokenCount(mode: MentorMode): number {
  const history = conversations[mode];
  const totalChars = history.reduce((sum, msg) => sum + msg.content.length, 0);
  return Math.ceil(totalChars / 4);
}