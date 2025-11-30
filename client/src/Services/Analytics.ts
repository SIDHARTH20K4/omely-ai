// src/Services/Analytics.ts
import mixpanel from './MixPanel';

export type ModeType = 'socratic' | 'feynman' | 'challenge';

// Mode session tracker
class ModeSessionTracker {
  private currentMode: ModeType | null = null;
  private modeStartTime: number | null = null;
  private modeMessageCount: number = 0;
  private sessionData: Map<ModeType, { totalTime: number; messageCount: number }> = new Map();

  constructor() {
    ['socratic', 'feynman', 'challenge'].forEach((mode) => {
      this.sessionData.set(mode as ModeType, { totalTime: 0, messageCount: 0 });
    });
  }

  startMode(mode: ModeType) {
    if (this.currentMode && this.modeStartTime) {
      this.endCurrentMode();
    }

    this.currentMode = mode;
    this.modeStartTime = Date.now();
    this.modeMessageCount = 0;

    console.log(`📊 Started tracking mode: ${mode}`);
  }

  endCurrentMode() {
    if (!this.currentMode || !this.modeStartTime) return;

    const timeSpent = Date.now() - this.modeStartTime;
    const sessionData = this.sessionData.get(this.currentMode);

    if (sessionData) {
      sessionData.totalTime += timeSpent;
      sessionData.messageCount += this.modeMessageCount;
    }

    console.log(`📊 Ended mode: ${this.currentMode}, Time: ${timeSpent}ms, Messages: ${this.modeMessageCount}`);

    return {
      mode: this.currentMode,
      timeSpent,
      messageCount: this.modeMessageCount,
    };
  }

  incrementMessageCount() {
    this.modeMessageCount++;
  }

  getCurrentMode() {
    return this.currentMode;
  }

  getSessionData() {
    return this.sessionData;
  }

  getCurrentModeTime() {
    if (!this.modeStartTime) return 0;
    return Date.now() - this.modeStartTime;
  }

  reset() {
    this.currentMode = null;
    this.modeStartTime = null;
    this.modeMessageCount = 0;
    this.sessionData.forEach((data) => {
      data.totalTime = 0;
      data.messageCount = 0;
    });
  }
}

const modeTracker = new ModeSessionTracker();

class Analytics {
  private sessionStart: number | null = null;

  // Track wallet connection
  trackWalletConnect(walletAddress: string) {
    mixpanel.track('Wallet Connected', {
      wallet_address: walletAddress,
      timestamp: new Date().toISOString()
    });

    mixpanel.people.set({
      wallet_address: walletAddress,
      last_login: new Date().toISOString()
    });

    mixpanel.identify(walletAddress);

    console.log('📊 Wallet connected:', walletAddress);
  }

  // Start session tracking
  startSession(walletAddress: string) {
    this.sessionStart = Date.now();
    modeTracker.reset();

    mixpanel.track('Session Started', {
      wallet_address: walletAddress,
      timestamp: new Date().toISOString()
    });

    console.log('📊 Session started');
  }

  // End session tracking
  endSession(walletAddress: string) {
    if (!this.sessionStart) return;

    const sessionLength = Math.floor((Date.now() - this.sessionStart) / 1000);

    // End current mode
    modeTracker.endCurrentMode();

    // Get all session data
    const sessionData = modeTracker.getSessionData();
    const sessionSummary: Record<string, any> = {
      wallet_address: walletAddress,
      session_length_seconds: sessionLength,
      session_length_minutes: Math.floor(sessionLength / 60),
      timestamp: new Date().toISOString(),
    };

    // Build session summary per mode
    sessionData.forEach((data, mode) => {
      sessionSummary[`${mode}_total_time_ms`] = data.totalTime;
      sessionSummary[`${mode}_total_time_seconds`] = Math.round(data.totalTime / 1000);
      sessionSummary[`${mode}_total_messages`] = data.messageCount;
    });

    // Calculate totals
    const totalMessages = Array.from(sessionData.values()).reduce((sum, data) => sum + data.messageCount, 0);
    sessionSummary.total_messages = totalMessages;

    // Find most used mode
    let mostUsedMode: ModeType | null = null;
    let maxTime = 0;
    sessionData.forEach((data, mode) => {
      if (data.totalTime > maxTime) {
        maxTime = data.totalTime;
        mostUsedMode = mode;
      }
    });
    sessionSummary.most_used_mode = mostUsedMode;

    mixpanel.track('Session Ended', sessionSummary);

    console.log(`📊 Session ended: ${sessionLength}s, ${totalMessages} messages`);

    // Reset
    this.sessionStart = null;
    modeTracker.reset();
  }

  // Track message sent
  trackMessage(walletAddress: string, mode: ModeType) {
    // Start mode tracking if not already started
    if (modeTracker.getCurrentMode() !== mode) {
      this.trackModeSwitch(walletAddress, modeTracker.getCurrentMode(), mode);
    }

    modeTracker.incrementMessageCount();

    mixpanel.track('Message Sent', {
      wallet_address: walletAddress,
      mode: mode,
      current_mode_time_seconds: Math.round(modeTracker.getCurrentModeTime() / 1000),
      current_mode_message_count: modeTracker['modeMessageCount'],
      timestamp: new Date().toISOString()
    });

    mixpanel.people.increment('total_messages');
    mixpanel.people.increment(`${mode}_mode_messages`);
  }

  // Track mode switch
  trackModeSwitch(walletAddress: string, fromMode: ModeType | null, toMode: ModeType) {
    const previousModeData = modeTracker.endCurrentMode();

    mixpanel.track('Mode Switched', {
      wallet_address: walletAddress,
      from_mode: fromMode,
      to_mode: toMode,
      previous_mode_time_seconds: previousModeData ? Math.round(previousModeData.timeSpent / 1000) : 0,
      previous_mode_messages: previousModeData?.messageCount || 0,
      timestamp: new Date().toISOString()
    });

    modeTracker.startMode(toMode);

    mixpanel.people.increment(`${toMode}_mode_switches`);
    mixpanel.people.set({
      current_mode: toMode,
      last_mode_switch: new Date().toISOString()
    });

    console.log('📊 Mode switch tracked:', { fromMode, toMode });
  }

  // Track DNA Discovery completion
  trackDNACompletion(walletAddress: string, learningStyle: string, completionTime: number) {
    mixpanel.track('DNA Discovery Completed', {
      wallet_address: walletAddress,
      learning_style: learningStyle,
      completion_time_seconds: completionTime,
      completion_time_minutes: Math.floor(completionTime / 60),
      timestamp: new Date().toISOString()
    });

    mixpanel.people.set({
      learning_style: learningStyle,
      dna_completed: true,
      dna_completion_date: new Date().toISOString()
    });

    console.log('📊 DNA Discovery completed:', learningStyle);
  }

  // Get current mode (for debugging)
  getCurrentMode() {
    return modeTracker.getCurrentMode();
  }

  // Get session statistics (for debugging)
  getSessionStats() {
    return {
      currentMode: modeTracker.getCurrentMode(),
      sessionData: Object.fromEntries(modeTracker.getSessionData()),
      currentModeTime: modeTracker.getCurrentModeTime(),
    };
  }
}

export default new Analytics();