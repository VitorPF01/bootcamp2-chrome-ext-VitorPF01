const btn = document.getElementById('ping');
const statusEl = document.getElementById('status');
const openDocs = document.getElementById('open-docs');

btn.addEventListener('click', async () => {
  try {
    const res = await chrome.runtime.sendMessage({ type: 'PING' });
    statusEl.textContent = `Background está vivo: ${res.time}`;
  } catch (err) {
    statusEl.textContent = `Erro ao pingar background: ${err.message}`;
  }
});

openDocs.addEventListener('click', (e) => {
  e.preventDefault();
  const url = chrome.runtime.getURL('../../docs/index.html');
  window.open(url);
});
