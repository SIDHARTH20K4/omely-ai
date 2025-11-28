interface HeroSectionProps {
  onLaunchApp?: () => void;
}

export default function HeroSection({ onLaunchApp }: HeroSectionProps) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: 'white',
      padding: '80px 0 20px', // Changed from '80px 0 1rem' - reduced bottom padding
      position: 'relative',
      zIndex: 1,
      whiteSpace: 'nowrap'
    }}>
      <div style={{ maxWidth: '600px' }}>
        {/* Main Heading */}
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: '700',
          marginBottom: '1rem',
          lineHeight: '1.1',
          color: 'white',
          whiteSpace: 'nowrap' 
        }}>
          Your Brain Isn't Broken.
        </h1>
        
        {/* Subtitle */}
        <p style={{
          fontSize: '1.8rem',
          fontWeight: '400',
          marginBottom: '2rem',
          color: '#e5e7eb',
          lineHeight: '1.4',
          whiteSpace: 'nowrap' 
        }}>
          Your Learning Method Is.
        </p>
        
        {/* Feature Text */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          marginBottom: '0', // Changed from '3rem' to remove bottom margin
          color: '#d1d5db',
          fontSize: '1.2rem',
          whiteSpace: 'nowrap' 
        }}>
          <span style={{ 
            color: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.08)',
            border: '1px solid rgba(16, 185, 129, 0.4)',
            padding: '0.75rem 1.5rem',
            borderRadius: '25px',
            fontWeight: '500',
            backdropFilter: 'blur(10px)',
            display: 'inline-block'
          }}>
            Built on cognitive science
          </span>
        </div>
      </div>
    </div>
  );
}