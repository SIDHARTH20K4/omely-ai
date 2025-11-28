import mixpanel from "mixpanel-browser";

const token = 'ce527da814efa8b390277b58170dd2f3';

if (token) {
  mixpanel.init(token, {
    debug: true,
    autocapture: true,
    record_sessions_percent: 100,
    api_host: 'https://api-eu.mixpanel.com',
  });
  console.log('✅ Mixpanel initialized!');
} else {
  console.warn('⚠️ Mixpanel token not found!');
}

export default mixpanel;