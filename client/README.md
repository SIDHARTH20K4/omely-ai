# Omely.ai - Frontend Client

A modern, AI-powered learning platform that provides personalized mentorship through interactive chat interfaces. This React-based web application enables users to connect their wallets and engage with AI mentors in different learning modes.

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)

## 🎯 Overview

Omely.ai is a web application that connects users with AI-powered mentors. Users can:
- Connect their cryptocurrency wallets (Web3 integration)
- Choose from different learning modes (Adaptive, Feynman, Devil Mode)
- Have interactive conversations with AI mentors
- Track their learning progress

**Main Pages:**
- **Home Page** (`/`): Landing page with features and wallet connection
- **Vision Page** (`/vision`): Company vision and mission statement with translucent frosted glass design
- **Lightpaper Page** (`/lightpaper`): Future ideas and possibilities for the platform
- **Chat Page** (`/chat`): Interactive chat interface with AI mentor (requires wallet connection)

## 🛠 Tech Stack

### Core Technologies
- **React 19.1.1** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite 7.1.7** - Build tool and dev server (faster than Create React App)

### Key Libraries
- **React Router DOM 7.9.6** - Client-side routing
- **Wagmi + RainbowKit 2.2.9** - Web3 wallet connection (MetaMask, WalletConnect, etc.)
- **OpenAI 6.9.0** - AI chat functionality
- **Vanta.js 0.5.24** - Animated background effects
- **Three.js 0.134.0** - 3D graphics for Vanta backgrounds
- **Mixpanel 2.72.0** - Analytics tracking

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Type checking

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** (comes with Node.js)
   - Verify installation: `npm --version`

3. **Git** (optional, for version control)
   - Download from: https://git-scm.com/

## 🚀 Installation

### Step 1: Navigate to Project Directory

```bash
cd omely-frontend/client
```

### Step 2: Install Dependencies

This will download all required packages listed in `package.json`:

```bash
npm install
```

**What this does:**
- Reads `package.json` to see what packages are needed
- Downloads all dependencies to `node_modules/` folder
- This may take 2-5 minutes depending on your internet speed

### Step 3: Set Up Environment Variables

Create a `.env` file in the `client` directory (same level as `package.json`):

```bash
# Create .env file
touch .env
```

Add the following variables to `.env`:

```env
VITE_OPENAI_API_KEY=your_openai_api_key_here
VITE_MIXPANEL_TOKEN=your_mixpanel_token_here
```

**Where to get these:**
- **OpenAI API Key**: https://platform.openai.com/api-keys
- **Mixpanel Token**: https://mixpanel.com/ (if using analytics)

**Note:** The `VITE_` prefix is required for Vite to expose these variables to your code.

## ▶️ Running the Project

### Development Mode

Start the development server with hot-reload (changes appear instantly):

```bash
npm run dev
```

**What happens:**
- Starts a local development server (usually at `http://localhost:5173`)
- Opens in your browser automatically
- Any code changes will refresh the page automatically
- You'll see errors in the browser console and terminal

**To stop:** Press `Ctrl + C` in the terminal

### Build for Production

Create an optimized production build:

```bash
npm run build
```

**What this does:**
- Compiles TypeScript to JavaScript
- Bundles and minifies all code
- Creates a `dist/` folder with production-ready files
- These files can be deployed to any web server

### Preview Production Build

Test the production build locally:

```bash
npm run preview
```

This serves the `dist/` folder locally so you can test before deploying.

### Lint Code

Check for code quality issues:

```bash
npm run lint
```

## 📁 Project Structure

```
client/
├── src/                          # Source code directory
│   ├── api/                      # API integrations
│   │   └── openai.ts            # OpenAI API configuration
│   ├── assets/                   # Static files (images, SVGs)
│   │   ├── logo.png
│   │   └── *.svg
│   ├── components/               # React components
│   │   ├── features/            # Feature-specific components
│   │   │   ├── chat/            # Chat-related components
│   │   │   │   ├── ChatInterface.tsx
│   │   │   │   ├── ChatSidebar.tsx
│   │   │   │   └── WelcomeScreen.tsx
│   │   │   ├── CardSection.tsx
│   │   │   └── HeroSection.tsx
│   │   ├── layouts/             # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── shared/              # Shared/reusable components
│   │   │   ├── chat/            # Shared chat components
│   │   │   └── VantaBackground.tsx
│   │   └── ui/                  # UI components (buttons, cards)
│   ├── constants/               # Constant values
│   │   ├── cards.ts
│   │   └── socialLinks.ts
│   ├── pages/                   # Page components
│   │   ├── HomePage.tsx         # Landing page
│   │   ├── VisionPage.tsx       # Company vision page
│   │   ├── LightpaperPage.tsx   # Lightpaper/future ideas page
│   │   └── ChatPage.tsx         # Chat interface page
│   ├── Services/                # Service layer
│   │   ├── Analytics.ts         # Analytics service
│   │   └── MixPanel.ts          # Mixpanel integration
│   ├── types/                   # TypeScript type definitions
│   │   ├── chat.types.ts
│   │   └── component.types.ts
│   ├── App.tsx                  # Main app component (routing)
│   ├── main.tsx                 # Application entry point
│   ├── wagmi.ts                 # Web3 wallet configuration
│   └── index.css                # Global styles
├── public/                      # Public static files
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite build configuration
└── .env                         # Environment variables (create this)
```

## ✨ Key Features

### 1. Wallet Connection
- Users connect cryptocurrency wallets (MetaMask, WalletConnect, etc.)
- Uses RainbowKit for wallet connection UI
- Supports Base blockchain network
- Automatic routing to chat page upon successful connection

### 2. AI Chat Interface
- Three learning modes:
  - **🎯 Adaptive (Socratic)**: Questions-based learning
  - **🧠 Feynman**: Explain-like-I'm-5 technique
  - **😈 Devil Mode (Challenge)**: Stress-testing knowledge
- WhatsApp-style conversation layout
- Real-time chat with AI mentor
- Mode-specific icons in chat bubbles
- Conversation history in sidebar
- Welcome screen before starting conversations

### 3. Content Pages
- **Vision Page** (`/vision`): Company mission and educational philosophy
  - White translucent frosted glass design
  - Card-based content organization
  - Responsive typography
- **Lightpaper Page** (`/lightpaper`): Future ideas and platform possibilities
  - 20 innovative learning concepts
  - Same frosted glass aesthetic
  - Organized card layout for easy reading

### 4. User Interface
- Animated background (Vanta.js network effect) on all pages
- White translucent frosted glass containers for content
- Responsive design (mobile and desktop)
- Dark theme with modern UI
- Smooth transitions and hover effects

### 5. Navigation & Sidebar
- Header with logo and navigation links
- Sidebar in chat interface with:
  - User profile at bottom (shows wallet address)
  - Mode selector dropdown
  - Conversation list
  - User menu (settings, clear conversations, logout)

### 6. Analytics
- Mixpanel integration for user tracking
- Tracks wallet connections, messages, and sessions

## 🛣️ Application Routes

The application uses React Router for client-side navigation:

- **`/`** - Home page (landing page)
- **`/vision`** - Vision page (company mission and philosophy)
- **`/lightpaper`** - Lightpaper page (future ideas and possibilities)
- **`/chat`** - Chat page (protected route, requires wallet connection)

Routes are defined in `src/App.tsx`. The Chat route is protected and will redirect to home if the user is not connected.

## ⚙️ Configuration

### Web3/Wallet Configuration

Edit `src/wagmi.ts` to change blockchain network:

```typescript
export const WagmiConfig: Config = getDefaultConfig({
    appName: 'appname',
    projectId: 'your_walletconnect_project_id', // Get from https://cloud.walletconnect.com/
    chains: [base], // Change to your preferred chain
});
```

**Supported chains:** base

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-
react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) 
(or [oxc](https://oxc.rs) when used in [rolldown-vite]
(https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-
react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for 
Fast Refresh

### OpenAI Configuration

Edit `src/api/openai.ts` to modify AI prompts or behavior.

The API key is loaded from environment variable `VITE_OPENAI_API_KEY`.

## 🐛 Troubleshooting

### Issue: `npm install` fails

**Solution:**
- Delete `node_modules/` folder and `package-lock.json`
- Run `npm install` again
- If still failing, try `npm cache clean --force` first

### Issue: Port 5173 already in use

**Solution:**
- Close other applications using port 5173
- Or change port in `vite.config.ts`:
  ```typescript
  export default defineConfig({
    server: {
      port: 3000 // Change to any available port
    }
  })
  ```

### Issue: Wallet not connecting

**Solution:**
- Ensure you have a Web3 wallet installed (MetaMask, etc.)
- Check browser console for errors
- Verify `wagmi.ts` configuration is correct
- Make sure you're on a supported blockchain network

### Issue: OpenAI API errors

**Solution:**
- Verify `VITE_OPENAI_API_KEY` is set in `.env` file
- Check API key is valid and has credits
- Ensure `.env` file is in the `client/` directory (not `src/`)
- Restart dev server after changing `.env`

### Issue: TypeScript errors

**Solution:**
- Run `npm run lint` to see specific errors
- Ensure all imports are correct
- Check `tsconfig.json` configuration

### Issue: Build fails

**Solution:**
- Check for TypeScript errors: `npm run lint`
- Ensure all environment variables are set
- Clear build cache: delete `dist/` folder and rebuild

## 📝 Common Commands Reference

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check code quality
npm run lint
```

## 🔗 Important Links

- **Vite Documentation**: https://vite.dev/
- **React Documentation**: https://react.dev/
- **Wagmi Documentation**: https://wagmi.sh/
- **RainbowKit Documentation**: https://www.rainbowkit.com/
- **OpenAI API Docs**: https://platform.openai.com/docs

## 📄 License

[Add your license information here]

---

**Need Help?** If you're stuck, check the browser console (F12) for error messages, or review the troubleshooting section above.
