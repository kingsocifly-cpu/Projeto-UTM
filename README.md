# UTM Dashboard

App de dashboard de tracking/analytics (React Native + Expo) recriado a partir das telas de referência.

## Rodar localmente (desenvolvimento)

```bash
npm install
npx expo start
```

Escaneie o QR code com o app **Expo Go** no iPhone (mesma rede Wi-Fi).

## Gerar o `.ipa` e subir no GitHub

Você está no Windows, então o `.ipa` é compilado na nuvem com **EAS Build** (não precisa de Mac). O GitHub apenas hospeda o arquivo numa Release.

### Pré-requisitos

1. **Conta Expo** (grátis): https://expo.dev
2. **Apple Developer Program** (US$ 99/ano) — necessário para um `.ipa` que instala em iPhone real.
   - Sem conta Apple, use o perfil `preview-simulator` (gera build só para o simulador de iOS num Mac).

### Opção A — Build manual e upload manual

```bash
npm install -g eas-cli
eas login
eas init                 # cria o projeto no Expo e grava o projectId no app.json
eas build --platform ios --profile preview
```

Na primeira vez o EAS pergunta sobre as credenciais Apple (login + assinatura). Ao terminar, ele mostra um link para baixar o `.ipa`. Baixe e suba manualmente em:
`Seu repositório no GitHub > Releases > Draft a new release > anexar o .ipa`.

### Opção B — Automático via GitHub Actions (recomendado)

O workflow `.github/workflows/ios-build.yml` compila e anexa o `.ipa` numa Release sozinho.

1. Gere um token de acesso no Expo: https://expo.dev/settings/access-tokens
2. No GitHub: `Settings > Secrets and variables > Actions > New repository secret`
   - Nome: `EXPO_TOKEN`
   - Valor: o token gerado
3. Configure as credenciais Apple uma vez (localmente), para o build não-interativo funcionar:
   ```bash
   eas credentials
   ```
4. Dispare o build de uma das formas:
   - Crie uma tag: `git tag v1.0.0 && git push origin v1.0.0`
   - Ou pela aba **Actions > Build iOS > Run workflow**

O `.ipa` aparece automaticamente na aba **Releases**.

## Perfis de build (eas.json)

| Perfil               | Resultado                              | Precisa de conta Apple? |
|----------------------|----------------------------------------|--------------------------|
| `preview`            | `.ipa` assinado (distribuição interna) | Sim                      |
| `production`         | `.ipa` para a App Store                | Sim                      |
| `preview-simulator`  | build para o simulador de iOS          | Não                      |

## Estrutura

```
App.js                      # raiz: tema, header, navegação por abas
src/theme.js                # paleta clara/escura
src/data.js                 # dados/configuração dos cards (zerados)
src/components/             # Header, cards, filtros, gráfico, tab bar
src/screens/DashboardScreen.js
```
