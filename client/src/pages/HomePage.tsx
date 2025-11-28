// src/pages/HomePage.tsx
import VantaBackground from '../components/shared/VantaBackground';
import Header from '../components/layouts/Header';
import HeroSection from '../components/features/HeroSection';
import CardSection from '../components/features/CardSection';
import Footer from '../components/layouts/Footer';
import { socialLinks } from '../constants/socialLinks';
import { ComingSoonButton } from '../components/ui/Button/ComingSoonButton';
import { ConnectWallet } from '../components/ui/Button/ConnectWallet';
import logoImage from '../assets/logo.png';

export default function HomePage() {
  return (
    <>
      <VantaBackground />
      <div style={{ 
        position: 'relative', 
        zIndex: 1,
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Header 
          actionButton={<ConnectWallet />}
        />
        <HeroSection />
        <CardSection />
        <Footer 
          logoPath={logoImage}
          socialLinks={socialLinks}
        />
      </div>
    </>
  );
}