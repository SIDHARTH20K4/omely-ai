import mixpanel from './MixPanel';

class Analytics {
  private sessionStart: number | null = null;
  private messageCount: number = 0;

  // Start session tracking
  startSession(walletAddress: string) {
    this.sessionStart = Date.now();
    this.messageCount = 0;

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

    mixpanel.track('Session Ended', {
      wallet_address: walletAddress,
      session_length_seconds: sessionLength,
      session_length_minutes: Math.floor(sessionLength / 60),
      messages_sent: this.messageCount,
      timestamp: new Date().toISOString()
    });

    console.log(`📊 Session ended: ${sessionLength}s, ${this.messageCount} messages`);

    // Reset
    this.sessionStart = null;
    this.messageCount = 0;
  }

  // Track message sent
  trackMessage(walletAddress: string, mode: string) {
    this.messageCount++;

    mixpanel.track('Message Sent', {
      wallet_address: walletAddress,
      mode: mode,
      message_count: this.messageCount,
      timestamp: new Date().toISOString()
    });
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

    // Set user property
    mixpanel.people.set({
      learning_style: learningStyle,
      dna_completed: true,
      dna_completion_date: new Date().toISOString()
    });

    console.log('📊 DNA Discovery completed:', learningStyle);
  }

  // Track mode switch
  trackModeSwitch(walletAddress: string, fromMode: string, toMode: string) {
    mixpanel.track('Mode Switched', {
      wallet_address: walletAddress,
      from_mode: fromMode,
      to_mode: toMode,
      timestamp: new Date().toISOString()
    });
  }
}

export default new Analytics();