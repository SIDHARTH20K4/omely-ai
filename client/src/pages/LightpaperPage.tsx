// src/pages/LightpaperPage.tsx
import VantaBackground from '../components/shared/VantaBackground';
import Header from '../components/layouts/Header';
import { ConnectWallet } from '../components/ui/Button/ConnectWallet';

export default function LightpaperPage() {
  return (
    <>
      <VantaBackground />
      <div style={{ 
        position: 'relative', 
        zIndex: 1,
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 'var(--header-height, 80px)'
      }}>
        <Header 
          navLinks={[
            { label: 'Our Vision', href: '/vision' },
            { label: 'Lightpaper', href: '/lightpaper' },
          ]}
          actionButton={<ConnectWallet />}
        />
        
        {/* Content Container with Translucent Background */}
        <div style={{
          flex: 1,
          padding: '0 20px',
          margin: '20px',
          width: 'calc(100% - 40px)',
          maxWidth: 'none'
        }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(30px)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            padding: '60px 48px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            color: 'white',
            lineHeight: '1.8',
            marginTop: '100px'
          }}>
            <h1 style={{
              fontSize: 'clamp(36px, 5vw, 48px)',
              fontWeight: '700',
              marginBottom: '40px',
              color: 'white',
              lineHeight: '1.2',
              background: 'linear-gradient(135deg, #ffffff 0%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Lightpaper
            </h1>

            <p style={{
              fontSize: 'clamp(18px, 2vw, 20px)',
              marginBottom: '40px',
              color: 'rgba(255, 255, 255, 0.95)',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
              fontStyle: 'italic'
            }}>
              This isn't a roadmap. This isn't a promise. This is exploration.
            </p>

            <p style={{
              fontSize: 'clamp(16px, 1.8vw, 18px)',
              marginBottom: '48px',
              color: 'rgba(255, 255, 255, 0.95)',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
            }}>
              These are the crazy ideas we think about at 2am. Some will happen. Most won't. But if even 20% of this becomes real, learning will never be the same.
            </p>

            <section style={{ marginBottom: '48px' }}>
              <h2 style={{
                fontSize: 'clamp(24px, 3vw, 32px)',
                fontWeight: '600',
                marginBottom: '32px',
                color: 'white',
                borderLeft: '4px solid #667eea',
                paddingLeft: '20px',
                marginLeft: '-24px'
              }}>
                The Insane Possibilities
              </h2>

              {/* Item 1 */}
              <div style={{
                marginBottom: '32px',
                padding: '24px',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderRadius: '16px',
                border: '1px solid rgba(102, 126, 234, 0.2)'
              }}>
                <h3 style={{
                  fontSize: 'clamp(20px, 2.5vw, 24px)',
                  fontWeight: '600',
                  marginBottom: '16px',
                  color: 'white'
                }}>
                  1. VR Experience Learning
                </h3>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>The Idea:</strong> Master complex skills before touching real tools. VR training builds muscle memory, improves proficiency, and boosts confidence—proven to make medical students and trainees learn faster and perform better than traditional methods.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>Surgery:</strong> Practice sutures, incisions, and organ manipulation with haptic feedback. Build real skill without risk.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>Therapy & Other Skills:</strong> Learn massage, martial arts, or piloting. Feel resistance, refine technique, gain confidence.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>Why it's revolutionary:</strong> Repeated VR practice transforms beginners into capable practitioners safely and efficiently.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>Market potential:</strong> Medical training, therapy certification, high-risk skill acquisition—learn safely in VR first, perform flawlessly in reality.
                </p>
              </div>

              {/* Item 2 */}
              <div style={{
                marginBottom: '32px',
                padding: '24px',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderRadius: '16px',
                border: '1px solid rgba(102, 126, 234, 0.2)'
              }}>
                <h3 style={{
                  fontSize: 'clamp(20px, 2.5vw, 24px)',
                  fontWeight: '600',
                  marginBottom: '16px',
                  color: 'white'
                }}>
                  2. Debate Mode (Devil's Advocate AI)
                </h3>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>The Idea:</strong> You think you understand something? Omely argues the opposite position.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  Learning evolution? AI becomes a creationist and destroys your arguments. You're forced to defend with evidence, not memorized talking points.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  Learning Keynesian economics? AI becomes Austrian school. Rips your reasoning apart.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>Why it's powerful:</strong> You don't truly understand something until you can defend it against smart opposition.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>Twist:</strong> AI detects weak points in your argument in real-time, adjusts difficulty. If you're struggling, it goes easier. If you're dominating, it gets vicious.
                </p>
              </div>

              {/* Item 3 */}
              <div style={{
                marginBottom: '32px',
                padding: '24px',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderRadius: '16px',
                border: '1px solid rgba(102, 126, 234, 0.2)'
              }}>
                <h3 style={{
                  fontSize: 'clamp(20px, 2.5vw, 24px)',
                  fontWeight: '600',
                  marginBottom: '16px',
                  color: 'white'
                }}>
                  3. University Research Partnership - The Big One
                </h3>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>The Idea:</strong> Partner with cognitive science departments.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  Students use Omely. We collect anonymized learning data (with consent).
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  Publish research: "How AI-guided Socratic questioning affects retention rates vs traditional methods."
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>Goal:</strong> Peer-reviewed papers proving our methods work.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>Payoff:</strong> Academic credibility. Universities adopt us officially. NIH/NSF grants.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>Long game:</strong> Omely becomes the research platform for learning science. We're not just using research - we're generating it.
                </p>
              </div>

              {/* Item 4 */}
              <div style={{
                marginBottom: '32px',
                padding: '24px',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderRadius: '16px',
                border: '1px solid rgba(102, 126, 234, 0.2)'
              }}>
                <h3 style={{
                  fontSize: 'clamp(20px, 2.5vw, 24px)',
                  fontWeight: '600',
                  marginBottom: '16px',
                  color: 'white'
                }}>
                  4. The Nuclear Option - Personal AGI Tutor
                </h3>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>The Idea:</strong> One day, LLMs become cheap enough.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  Every user gets a fine-tuned personal model that learns their:
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  marginBottom: '12px',
                  paddingLeft: '20px'
                }}>
                  <li style={{ marginBottom: '8px', color: 'rgba(255, 255, 255, 0.95)' }}>• Learning style</li>
                  <li style={{ marginBottom: '8px', color: 'rgba(255, 255, 255, 0.95)' }}>• Knowledge gaps</li>
                  <li style={{ marginBottom: '8px', color: 'rgba(255, 255, 255, 0.95)' }}>• Interests</li>
                  <li style={{ marginBottom: '8px', color: 'rgba(255, 255, 255, 0.95)' }}>• Life context</li>
                </ul>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  It's YOUR tutor. Knows you better than any human teacher could.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  Travels with you (phone app). Available 24/7. Never forgets what you struggle with.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  This is few months out. But it's the endgame.
                </p>
              </div>

              {/* Item 5 */}
              <div style={{
                marginBottom: '32px',
                padding: '24px',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderRadius: '16px',
                border: '1px solid rgba(102, 126, 234, 0.2)'
              }}>
                <h3 style={{
                  fontSize: 'clamp(20px, 2.5vw, 24px)',
                  fontWeight: '600',
                  marginBottom: '16px',
                  color: 'white'
                }}>
                  5. Learn-By-Teaching Virtual Students
                </h3>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>The Idea:</strong> AI generates realistic student personas with specific learning challenges.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  "Alex" is 14, dyslexic, hates math, scared of failure. Teach Alex algebra.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  "Priya" is 40, engineer, overconfident, dismisses basics. Teach Priya machine learning.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  These AI students respond like real humans: they make mistakes, ask naive questions, lose focus, or get emotional. You adapt your approach in real time — patience, clarity, empathy, creativity.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>The Purpose:</strong> Instead of passively consuming lessons, you become the teacher. This trains your brain to structure knowledge, explain concepts, and build true mastery — the most powerful form of learning according to neuroscience ("the protégé effect").
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>Endgame:</strong> After teaching dozens of AI students, you've not only mastered the subject — you've developed real communication and teaching skills transferable to real people.
                </p>
              </div>

              {/* Continue with remaining items - I'll add items 6-20 in a condensed format */}
              {/* Items 6-20 follow similar pattern */}
              {/* For brevity, I'll add key items and you can expand as needed */}
              
              {/* Item 6 */}
              <div style={{
                marginBottom: '32px',
                padding: '24px',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderRadius: '16px',
                border: '1px solid rgba(102, 126, 234, 0.2)'
              }}>
                <h3 style={{
                  fontSize: 'clamp(20px, 2.5vw, 24px)',
                  fontWeight: '600',
                  marginBottom: '16px',
                  color: 'white'
                }}>
                  6. Education Impact
                </h3>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>The Idea:</strong> A fixed share of Omely's revenue funds learning hubs in developing regions, equipped with devices and free Omely access.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  For every premium user, one learner who can't afford it gets the same access — a one-for-one education model.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>The Outcome:</strong> Education equity becomes part of the system, not a marketing tool. The goal isn't charity — it's infrastructure: making advanced learning tools universally accessible.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>The Vision:</strong> Omely grows into a global learning network where opportunity scales with technology, not income or location.
                </p>
              </div>

              {/* Item 7 */}
              <div style={{
                marginBottom: '32px',
                padding: '24px',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderRadius: '16px',
                border: '1px solid rgba(102, 126, 234, 0.2)'
              }}>
                <h3 style={{
                  fontSize: 'clamp(20px, 2.5vw, 24px)',
                  fontWeight: '600',
                  marginBottom: '16px',
                  color: 'white'
                }}>
                  7. Socratic Questioning Championship
                </h3>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>The Idea:</strong> Multiplayer mode. Two users learn the same concept. Both explain it.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  AI judges who explained it better by how well they answered Socratic questions.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  Leaderboards. Rankings. Tournaments.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>Why it works:</strong> Gamification + social proof + competitive fire = motivation.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>Prize:</strong> Top explainers get featured. Build reputation as great teachers. Unlock paid teaching opportunities.
                </p>
              </div>

              {/* Item 8 */}
              <div style={{
                marginBottom: '32px',
                padding: '24px',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderRadius: '16px',
                border: '1px solid rgba(102, 126, 234, 0.2)'
              }}>
                <h3 style={{
                  fontSize: 'clamp(20px, 2.5vw, 24px)',
                  fontWeight: '600',
                  marginBottom: '16px',
                  color: 'white'
                }}>
                  8. Corporate "Bullshit Detector" Training
                </h3>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>The Idea:</strong> Upload corporate documents (whitepapers, strategy decks, PR statements).
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  Omely asks: "Explain what this actually means."
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  Most corporate speak is empty jargon. Omely forces you to extract real meaning or admit there isn't any.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>Example:</strong>
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
                  fontStyle: 'italic',
                  paddingLeft: '20px',
                  borderLeft: '2px solid rgba(102, 126, 234, 0.5)'
                }}>
                  Document: "Leveraging synergies to drive stakeholder alignment..."<br/>
                  Omely: "What does that mean in plain English?"<br/>
                  You: "Uh... working together?"<br/>
                  Omely: "So why not just say that?"
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>Market:</strong> Consultants, MBAs, anyone drowning in buzzword soup.
                </p>
              </div>

              {/* Item 9 */}
              <div style={{
                marginBottom: '32px',
                padding: '24px',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderRadius: '16px',
                border: '1px solid rgba(102, 126, 234, 0.2)'
              }}>
                <h3 style={{
                  fontSize: 'clamp(20px, 2.5vw, 24px)',
                  fontWeight: '600',
                  marginBottom: '16px',
                  color: 'white'
                }}>
                  9. Sleep Learning (Not What You Think)
                </h3>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>The Idea:</strong> Before bed, quick voice session. Explain what you learned today.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  While you sleep, Omely processes your explanation, identifies weak points, generates dream-optimized review for morning.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  You wake up to personalized quiz hitting exact gaps from yesterday.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>Science:</strong> Sleep consolidates memory. We just optimize what gets consolidated.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>Crazy extension:</strong> Text-to-speech review plays softly during specific sleep phases (theta waves). Subconscious reinforcement.
                </p>
              </div>

              {/* Item 10 */}
              <div style={{
                marginBottom: '32px',
                padding: '24px',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderRadius: '16px',
                border: '1px solid rgba(102, 126, 234, 0.2)'
              }}>
                <h3 style={{
                  fontSize: 'clamp(20px, 2.5vw, 24px)',
                  fontWeight: '600',
                  marginBottom: '16px',
                  color: 'white'
                }}>
                  10. AI Learning Therapist
                </h3>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>The Idea:</strong> Beyond limiting beliefs. Full cognitive behavioral therapy for learning anxiety.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  "I always fail tests" → AI unpacks this. When did it start? What evidence supports it? What evidence contradicts it?
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  Guided journaling. Cognitive reframing exercises. Exposure therapy (controlled test simulations).
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>Market:</strong> Test anxiety affects 40% of students. If we can fix that, we're not just a learning tool - we're mental health support.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>Disclaimer:</strong> Not replacing real therapists. But AI-assisted self-help for learning-specific issues.
                </p>
              </div>

              {/* Item 11 */}
              <div style={{
                marginBottom: '32px',
                padding: '24px',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderRadius: '16px',
                border: '1px solid rgba(102, 126, 234, 0.2)'
              }}>
                <h3 style={{
                  fontSize: 'clamp(20px, 2.5vw, 24px)',
                  fontWeight: '600',
                  marginBottom: '16px',
                  color: 'white'
                }}>
                  11. Historical Figure Debates
                </h3>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>The Idea:</strong> Learn by debating historical figures played by AI.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  Learning physics? Debate Einstein about relativity. He pokes holes in your understanding.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  Learning philosophy? Argue with Nietzsche about morality.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  Learning economics? Keynes vs Hayek debate your fiscal policy proposal.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>Why it's sick:</strong> Context-rich learning. You're not memorizing dates - you're engaging with ideas in historical context.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>Twist:</strong> AI figures evolve based on how you argue. If you bring up something they didn't know in their time, they react authentically.
                </p>
              </div>

              {/* Item 12 */}
              <div style={{
                marginBottom: '32px',
                padding: '24px',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderRadius: '16px',
                border: '1px solid rgba(102, 126, 234, 0.2)'
              }}>
                <h3 style={{
                  fontSize: 'clamp(20px, 2.5vw, 24px)',
                  fontWeight: '600',
                  marginBottom: '16px',
                  color: 'white'
                }}>
                  12. Group "Explain-Off" Sessions
                </h3>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>The Idea:</strong> 5-10 people, same topic, 10 minutes.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  Everyone explains the concept simultaneously to individual AI instances.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  AI ranks explanations by clarity, depth, and accuracy.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  Top 3 get to critique bottom 3's explanations. Everyone learns from everyone.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>Business angle:</strong> Premium feature. $5/session. Creates community.
                </p>
              </div>

              {/* Item 13 */}
              <div style={{
                marginBottom: '32px',
                padding: '24px',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderRadius: '16px',
                border: '1px solid rgba(102, 126, 234, 0.2)'
              }}>
                <h3 style={{
                  fontSize: 'clamp(20px, 2.5vw, 24px)',
                  fontWeight: '600',
                  marginBottom: '16px',
                  color: 'white'
                }}>
                  13. Learning Speedrun Mode
                </h3>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>The Idea:</strong> "I have 3 hours to understand quantum mechanics well enough to pass a conversation test."
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  Omely generates hyper-optimized learning path. No fluff. Pure essentials.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  Progress bar. Real-time assessment. Adaptive shortcuts if you grasp concepts fast.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>Target:</strong> Last-minute learners, interview prep, "I need to sound smart at this dinner" scenarios.
                </p>
              </div>

              {/* Item 14 */}
              <div style={{
                marginBottom: '32px',
                padding: '24px',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderRadius: '16px',
                border: '1px solid rgba(102, 126, 234, 0.2)'
              }}>
                <h3 style={{
                  fontSize: 'clamp(20px, 2.5vw, 24px)',
                  fontWeight: '600',
                  marginBottom: '16px',
                  color: 'white'
                }}>
                  14. "Explain Like I'm..." Custom Modes
                </h3>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>The Idea:</strong> Choose your learning persona:
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  marginBottom: '12px',
                  paddingLeft: '20px'
                }}>
                  <li style={{ marginBottom: '8px', color: 'rgba(255, 255, 255, 0.95)' }}>• Explain like I'm 5</li>
                  <li style={{ marginBottom: '8px', color: 'rgba(255, 255, 255, 0.95)' }}>• Explain like I'm a medieval peasant</li>
                  <li style={{ marginBottom: '8px', color: 'rgba(255, 255, 255, 0.95)' }}>• Explain like I'm an alien who just arrived</li>
                  <li style={{ marginBottom: '8px', color: 'rgba(255, 255, 255, 0.95)' }}>• Explain like I'm a dog (yes, really)</li>
                </ul>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  Forces absurd analogies that cement understanding.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
                  fontStyle: 'italic',
                  paddingLeft: '20px',
                  borderLeft: '2px solid rgba(102, 126, 234, 0.5)'
                }}>
                  <strong style={{ color: 'white' }}>Example:</strong> Blockchain explained to a medieval peasant = "It's like a village ledger, but everyone has a copy, and if someone tries to cheat, the whole village sees it immediately."
                </p>
              </div>

              {/* Item 15 */}
              <div style={{
                marginBottom: '32px',
                padding: '24px',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderRadius: '16px',
                border: '1px solid rgba(102, 126, 234, 0.2)'
              }}>
                <h3 style={{
                  fontSize: 'clamp(20px, 2.5vw, 24px)',
                  fontWeight: '600',
                  marginBottom: '16px',
                  color: 'white'
                }}>
                  15. "Explain to Your Past Self" Mode
                </h3>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>The Idea:</strong> You pick a date from your past. AI roleplays as you from that date.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  You explain a concept you just learned. But Past-You only knows what you knew THEN. You have to explain using only that baseline.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
                  fontStyle: 'italic',
                  paddingLeft: '20px',
                  borderLeft: '2px solid rgba(102, 126, 234, 0.5)'
                }}>
                  <strong style={{ color: 'white' }}>Example:</strong> Learning React in 2024, explaining to your 2020 self who only knew jQuery.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>Why it's genius:</strong> Forces you to build explanations from foundational knowledge, exposing gaps.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>Bonus:</strong> Record these explanations. In 5 years, listen to Past-You explaining to Even-More-Past-You. Track your cognitive growth.
                </p>
              </div>

              {/* Item 16 */}
              <div style={{
                marginBottom: '32px',
                padding: '24px',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderRadius: '16px',
                border: '1px solid rgba(102, 126, 234, 0.2)'
              }}>
                <h3 style={{
                  fontSize: 'clamp(20px, 2.5vw, 24px)',
                  fontWeight: '600',
                  marginBottom: '16px',
                  color: 'white'
                }}>
                  16. AI Co-Learner Mode
                </h3>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>The Idea:</strong> You and AI learn something TOGETHER, neither knows it initially.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  AI researches in real-time, you research, both share findings.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  You teach AI what you learned. AI teaches you. Peer learning but your peer is superintelligent.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>Why it's weird but powerful:</strong> Removes teacher-student hierarchy. You're collaborators.
                </p>
              </div>

              {/* Item 17 */}
              <div style={{
                marginBottom: '32px',
                padding: '24px',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderRadius: '16px',
                border: '1px solid rgba(102, 126, 234, 0.2)'
              }}>
                <h3 style={{
                  fontSize: 'clamp(20px, 2.5vw, 24px)',
                  fontWeight: '600',
                  marginBottom: '16px',
                  color: 'white'
                }}>
                  17. Certification Through Teaching
                </h3>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>The Idea:</strong> Want to prove you understand React?
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  Teach 10 AI students successfully. If they all "pass" their assessments after your teaching, you get Omely-certified.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  Certifications are public, shareable (LinkedIn, resume).
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>Market:</strong> Employers trust this more than online course certificates because teaching = real understanding.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>Business:</strong> Charge for certification process. $50-200 per cert.
                </p>
              </div>

              {/* Item 18 */}
              <div style={{
                marginBottom: '32px',
                padding: '24px',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderRadius: '16px',
                border: '1px solid rgba(102, 126, 234, 0.2)'
              }}>
                <h3 style={{
                  fontSize: 'clamp(20px, 2.5vw, 24px)',
                  fontWeight: '600',
                  marginBottom: '16px',
                  color: 'white'
                }}>
                  18. "Learning Autopsy" After Failure
                </h3>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>The Idea:</strong> Failed a test? Upload the test (within academic honesty rules).
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  Omely analyzes: "Question 5 - you missed this because you never actually understood X from Week 3."
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  Generates targeted review. Re-test readiness assessment.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>Market:</strong> Students who failed. They're desperate to not fail again. High willingness to pay.
                </p>
              </div>

              {/* Item 19 */}
              <div style={{
                marginBottom: '32px',
                padding: '24px',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderRadius: '16px',
                border: '1px solid rgba(102, 126, 234, 0.2)'
              }}>
                <h3 style={{
                  fontSize: 'clamp(20px, 2.5vw, 24px)',
                  fontWeight: '600',
                  marginBottom: '16px',
                  color: 'white'
                }}>
                  19. Corporate Onboarding Killer App
                </h3>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>The Idea:</strong> New hires learn by teaching back what they understand to Omely.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  They read internal docs, then explain them to the AI — Omely questions, challenges, and corrects gaps until full comprehension.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
                  fontStyle: 'italic',
                  paddingLeft: '20px',
                  borderLeft: '2px solid rgba(102, 126, 234, 0.5)'
                }}>
                  <strong style={{ color: 'white' }}>Manager Dashboard:</strong> "Sarah fully grasps the product roadmap but still struggles with the sales pipeline."
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>Pitch:</strong> "Cut onboarding time by 50%. Replace passive orientation with verified understanding."
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>Revenue Model:</strong> $100–500 per new hire. Scales fast — companies onboard thousands every year.
                </p>
              </div>

              {/* Item 20 */}
              <div style={{
                marginBottom: '32px',
                padding: '24px',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderRadius: '16px',
                border: '1px solid rgba(102, 126, 234, 0.2)'
              }}>
                <h3 style={{
                  fontSize: 'clamp(20px, 2.5vw, 24px)',
                  fontWeight: '600',
                  marginBottom: '16px',
                  color: 'white'
                }}>
                  20. Knowledge Graph Visualization
                </h3>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>The Idea:</strong> See your entire knowledge base as an interactive neural network.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  Each concept you've learned = node. Connections = how concepts relate. Strong understanding = thick lines. Shaky concepts = thin, faded lines.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  Click any node, Omely quizzes you. Weak areas glow red. Omely auto-generates review sessions for red zones.
                </p>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  marginBottom: '12px',
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  <strong style={{ color: 'white' }}>Crazy part:</strong> See how YOUR brain connects ideas differently than others. Maybe you link calculus to music theory (derivatives = rate of change = tempo). AI learns your unique association style and teaches through it.
                </p>
              </div>
              
            </section>

            <section style={{ marginBottom: '48px' }}>
              <h2 style={{
                fontSize: 'clamp(24px, 3vw, 32px)',
                fontWeight: '600',
                marginBottom: '24px',
                color: 'white',
                borderLeft: '4px solid #667eea',
                paddingLeft: '20px',
                marginLeft: '-24px'
              }}>
                Which of These Actually Happen?
              </h2>
              <p style={{
                fontSize: 'clamp(16px, 1.8vw, 18px)',
                marginBottom: '20px',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                No idea.
              </p>
              <p style={{
                fontSize: 'clamp(16px, 1.8vw, 18px)',
                marginBottom: '20px',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                Some will flop. Some will succeed beyond imagination. Some won't be technically feasible yet.
              </p>
              <p style={{
                fontSize: 'clamp(16px, 1.8vw, 18px)',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                But this is the opportunity space we're playing in.
              </p>
              <p style={{
                fontSize: 'clamp(16px, 1.8vw, 18px)',
                marginTop: '20px',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                Not content delivery. Not homework help.
              </p>
              <p style={{
                fontSize: 'clamp(16px, 1.8vw, 18px)',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                Cognitive transformation through AI.
              </p>
            </section>

            <section style={{ marginBottom: '48px' }}>
              <h2 style={{
                fontSize: 'clamp(24px, 3vw, 32px)',
                fontWeight: '600',
                marginBottom: '24px',
                color: 'white',
                borderLeft: '4px solid #667eea',
                paddingLeft: '20px',
                marginLeft: '-24px'
              }}>
                The Real Vision
              </h2>
              <p style={{
                fontSize: 'clamp(16px, 1.8vw, 18px)',
                marginBottom: '20px',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                All of these ideas share one thing: they force active learning, not passive consumption.
              </p>
              <p style={{
                fontSize: 'clamp(16px, 1.8vw, 18px)',
                marginBottom: '20px',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                The education system is built on lectures and memorization. We're building the alternative.
              </p>
              <p style={{
                fontSize: 'clamp(16px, 1.8vw, 18px)',
                marginBottom: '20px',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                An alternative where understanding is the only metric that matters.
              </p>
              <p style={{
                fontSize: 'clamp(16px, 1.8vw, 18px)',
                marginBottom: '20px',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                Where you can't fake it. Where learning is personal, adaptive, and actually sticks.
              </p>
              <p style={{
                fontSize: 'clamp(16px, 1.8vw, 18px)',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                This is what's possible when you stop thinking about education as content distribution and start thinking about it as cognitive rewiring.
              </p>
            </section>

            <section>
              <h2 style={{
                fontSize: 'clamp(24px, 3vw, 32px)',
                fontWeight: '600',
                marginBottom: '24px',
                color: 'white',
                borderLeft: '4px solid #667eea',
                paddingLeft: '20px',
                marginLeft: '-24px'
              }}>
                Ready to Shape the Future of Learning?
              </h2>
              <p style={{
                fontSize: 'clamp(16px, 1.8vw, 18px)',
                marginBottom: '24px',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                Whether you're a builder, learner, or curious mind, there's a place for you in this journey.
              </p>
              <a 
                href="https://linktr.ee/Omelyai"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '12px 24px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontWeight: '600',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(102, 126, 234, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Join Us
              </a>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
