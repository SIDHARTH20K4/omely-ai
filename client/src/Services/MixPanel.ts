import mixpanel from "mixpanel-browser";

const token = import.meta.env.VITE_MIXPANEL_TOKEN;

if (token) {
  mixpanel.init(token, {
    debug: import.meta.env.DEV, // Only debug in development
    track_pageview: true,
    persistence: 'localStorage',
    api_host: 'https://api-eu.mixpanel.com',
  });
  console.log('✅ Mixpanel initialized!');
} else {
  console.warn('⚠️ Mixpanel token not found!');
}

export default mixpanel;