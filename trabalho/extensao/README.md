# Bootcamp Helper — Extensão Chrome (Manifest V3)

Extensão de exemplo para o Bootcamp II. Objetivo: demonstrar um fluxo mínimo MV3 com popup, service worker e content script

## Instalação local (developer mode)
1. Acesse `chrome://extensions`.
2. Ative **Developer mode** (canto superior direito).
3. Clique em **Load unpacked** e selecione a pasta do projeto (a raiz onde está `manifest.json`).

## Uso
- Abra o popup pelo ícone da extensão.
- Clique em **Ping background** para testar a comunicação com o service worker.
- O content script (opcional) destaca links em `https://developer.chrome.com/*`.

## Estrutura
Veja `docs/index.html` para uma visualização simples e o link de download.

## Empacotamento / Release
- Faça um `zip` da pasta (já fornecido em `my-chrome-extension.zip`).
- No GitHub: crie um Release e anexe o .zip.

## Licença
MIT — veja o arquivo LICENSE.
