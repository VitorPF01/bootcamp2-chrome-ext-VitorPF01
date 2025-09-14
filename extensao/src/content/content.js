// Exemplo simples de content script: destaca todos os links da página alvo (developer.chrome.com)
for (const a of document.querySelectorAll('a')) {
  a.style.outline = '2px solid #ec0089';
}
console.log('Bootcamp Helper: content script ativo');
