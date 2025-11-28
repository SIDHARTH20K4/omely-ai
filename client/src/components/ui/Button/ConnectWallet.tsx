import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {mixpanel} from '../../../index';

export const ConnectWallet = () => {
  const { address, isConnected } = useAccount();
  const navigate = useNavigate();

  useEffect(() => {
    // Safety check: make sure mixpanel is loaded and wallet is connected
    if (isConnected && address && mixpanel) {
      try {
        // Identify user by wallet address
        mixpanel.identify(address);
        
        // Track wallet connection event
        mixpanel.track('Wallet Connected', {
          wallet_address: address,
          timestamp: new Date().toISOString(),
          platform: 'web'
        });

        // Set user profile
        mixpanel.people.set({
          $wallet_address: address,
          $last_seen: new Date().toISOString()
        });

        console.log('✅ Wallet tracked:', address);
      } catch (error) {
        console.error('❌ Mixpanel error:', error);
      }
    }

    // Navigate to chat page when wallet is connected
    if (isConnected && address) {
      navigate('/chat');
    }
  }, [isConnected, address, navigate]);

  return (
    <div className="connect-button-overrides">
      <ConnectButton 
        chainStatus="icon"
        showBalance={false}
        label="Start Learning"
        accountStatus="address"
      />
    </div>
  );
};