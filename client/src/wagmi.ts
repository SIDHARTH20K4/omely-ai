import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { base } from 'wagmi/chains';
import type { Config } from 'wagmi';

export const WagmiConfig: Config = getDefaultConfig({
    appName: 'LigerGames',
    projectId: '1cc1e96486a549f456accfbadfa9ad16', // Get from https://cloud.walletconnect.com/
    chains: [base], // Add more chains like `polygon`, `optimism`
});