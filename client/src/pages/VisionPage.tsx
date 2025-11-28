// src/pages/VisionPage.tsx
import VantaBackground from '../components/shared/VantaBackground';
import Header from '../components/layouts/Header';
import { ConnectWallet } from '../components/ui/Button/ConnectWallet';

export default function VisionPage() {
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
              Our Vision
            </h1>

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
                The Broken Promise of Education
              </h2>
              <p style={{
                fontSize: 'clamp(16px, 1.8vw, 18px)',
                marginBottom: '20px',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                Schools still operate on a Victorian assembly line: cram information before exams, forget it by summer, repeat. We call it "learning," but neuroscience calls it theater. Performance without retention, motion without meaning.
              </p>
              <p style={{
                fontSize: 'clamp(16px, 1.8vw, 18px)',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                The system optimizes for grades, not growth. Students memorize dates they'll never recall, formulas they'll never apply, concepts they never truly understood. Then we wonder why curiosity dies somewhere between freshman year and the real world.
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
                Our Conviction
              </h2>
              <p style={{
                fontSize: 'clamp(16px, 1.8vw, 18px)',
                marginBottom: '20px',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                We believe the next generation of learners won't tolerate one-size-fits-all. They'll demand tools that respect their agency, mirror their complexity, and refuse to let them settle for surface-level understanding.
              </p>
              <p style={{
                fontSize: 'clamp(16px, 1.8vw, 18px)',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                Omely is not a shortcut. It's a rewiring. A mentor in your pocket that asks the hard questions, sits with your confusion, and won't let you mistake memorization for mastery.
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
                The Real Barriers Are Internal
              </h2>
              <p style={{
                fontSize: 'clamp(16px, 1.8vw, 18px)',
                marginBottom: '20px',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                Before you can learn anything, you must unlearn everything holding you back.
              </p>
              <p style={{
                fontSize: 'clamp(16px, 1.8vw, 18px)',
                marginBottom: '20px',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                "I'm not a math person." "I can't remember things." "Learning is supposed to be hard and boring." These aren't facts. They're limiting beliefs, invisible governors on your cognitive engine. They whisper failure before you've begun.
              </p>
              <p style={{
                fontSize: 'clamp(16px, 1.8vw, 18px)',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                Traditional education doesn't address them. It doesn't even see them. It hands you a textbook and wishes you luck.
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
                Intelligence Needs Embodiment
              </h2>
              <p style={{
                fontSize: 'clamp(16px, 1.8vw, 18px)',
                marginBottom: '20px',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                We reject the myth of the disembodied tutor. The AI that regurgitates answers on command, the assistant that solves your homework but leaves your understanding hollow.
              </p>
              <p style={{
                fontSize: 'clamp(16px, 1.8vw, 18px)',
                marginBottom: '20px',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                Knowledge without integration is data. Understanding without application is fantasy.
              </p>
              <p style={{
                fontSize: 'clamp(16px, 1.8vw, 18px)',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                Omely is a mentor, not a search bar. It doesn't just answer; it interrogates. It doesn't just explain; it challenges you to explain back. It catches the gaps in your reasoning before they calcify into misconceptions.
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
                Neuroscience-Backed, Human-Centered
              </h2>
              <p style={{
                fontSize: 'clamp(16px, 1.8vw, 18px)',
                marginBottom: '24px',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                We build on what works:
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                marginBottom: '24px'
              }}>
                <li style={{
                  marginBottom: '20px',
                  paddingLeft: '32px',
                  position: 'relative',
                  padding: '16px 20px',
                  backgroundColor: 'rgba(102, 126, 234, 0.1)',
                  borderRadius: '12px',
                  border: '1px solid rgba(102, 126, 234, 0.2)',
                  transition: 'all 0.3s ease'
                }}>
                  
                  <strong style={{ color: 'white', display: 'block', marginBottom: '4px' }}>Active Recall Over Passive Review.</strong>
                  <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Your brain remembers what it retrieves, not what it rereads.</span>
                </li>
                <li style={{
                  marginBottom: '20px',
                  paddingLeft: '32px',
                  position: 'relative',
                  padding: '16px 20px',
                  backgroundColor: 'rgba(102, 126, 234, 0.1)',
                  borderRadius: '12px',
                  border: '1px solid rgba(102, 126, 234, 0.2)',
                  transition: 'all 0.3s ease'
                }}>
                  <strong style={{ color: 'white', display: 'block', marginBottom: '4px' }}>The Feynman Principle.</strong>
                  <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>If you can't teach it simply, you don't understand it deeply.</span>
                </li>
                <li style={{
                  marginBottom: '20px',
                  paddingLeft: '32px',
                  position: 'relative',
                  padding: '16px 20px',
                  backgroundColor: 'rgba(102, 126, 234, 0.1)',
                  borderRadius: '12px',
                  border: '1px solid rgba(102, 126, 234, 0.2)',
                  transition: 'all 0.3s ease'
                }}>
                  <strong style={{ color: 'white', display: 'block', marginBottom: '4px' }}>Spaced Accountability.</strong>
                  <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Consistency beats intensity. Daily practice reshapes neural pathways; weekend binges don't.</span>
                </li>
                <li style={{
                  marginBottom: '20px',
                  paddingLeft: '32px',
                  position: 'relative',
                  padding: '16px 20px',
                  backgroundColor: 'rgba(102, 126, 234, 0.1)',
                  borderRadius: '12px',
                  border: '1px solid rgba(102, 126, 234, 0.2)',
                  transition: 'all 0.3s ease'
                }}>
                  <strong style={{ color: 'white', display: 'block', marginBottom: '4px' }}>Identify, Challenge, Rewrite.</strong>
                  <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Surface the beliefs that sabotage you. Question them. Replace them with evidence.</span>
                </li>
              </ul>
              <p style={{
                fontSize: 'clamp(16px, 1.8vw, 18px)',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                This isn't theory. It's cognitive science meeting conversational AI.
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
                Personalized, Not Productized
              </h2>
              <p style={{
                fontSize: 'clamp(16px, 1.8vw, 18px)',
                marginBottom: '20px',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                Every learner is a unique topology of strengths, gaps, motivations, and fears. Cookie-cutter curricula are efficient for institutions, catastrophic for individuals.
              </p>
              <p style={{
                fontSize: 'clamp(16px, 1.8vw, 18px)',
                marginBottom: '20px',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                Omely adapts to you. Your pace, your confusion points, your aha moments. It meets you where you are, not where a syllabus says you should be.
              </p>
              <p style={{
                fontSize: 'clamp(16px, 1.8vw, 18px)',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                It remembers your struggles. It celebrates your breakthroughs. It refuses to let you ghost your own potential.
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
                Unlearn to Learn
              </h2>
              <p style={{
                fontSize: 'clamp(16px, 1.8vw, 18px)',
                marginBottom: '20px',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                The most radical act of education is unlearning. Stripping away the borrowed doubts, the inherited anxieties, the secondhand stories about who you're allowed to become.
              </p>
              <p style={{
                fontSize: 'clamp(16px, 1.8vw, 18px)',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>
                Once the static clears, learning stops being labor. It becomes play. Exploration. Reclamation.
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

