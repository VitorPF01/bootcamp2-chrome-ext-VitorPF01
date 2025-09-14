chrome.runtime.onInstalled.addListener(() => {
  console.log('Bootcamp Helper instalado.');
  chrome.storage.local.set({ installs: Date.now() });
  // schedule a sample alarm to demonstrate service worker lifecycle
  chrome.alarms.create('heartbeat', { periodInMinutes: 60 });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'heartbeat') {
    console.log('Heartbeat alarm fired', new Date().toISOString());
  }
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg && msg.type === 'PING') {
    sendResponse({ ok: true, time: new Date().toISOString() });
  }
  // Returning true would indicate async response — not used here.
});
