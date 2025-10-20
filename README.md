# My Chrome Extension — Entrega II

## Como rodar localmente
```bash
npm ci
npx playwright install --with-deps chromium
npm run test
```

## Usando Docker
```bash
docker compose build
docker compose run --rm e2e
```

## CI no GitHub Actions
- Workflow: `.github/workflows/ci.yml`
- Gera: `playwright-report` e `dist/extension.zip`
