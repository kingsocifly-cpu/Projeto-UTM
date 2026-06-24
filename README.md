# UTM Dashboard

App de dashboard de tracking/analytics (React Native + Expo) recriado a partir das telas de referência.

## Rodar localmente (desenvolvimento)

```bash
npm install
npx expo start
```

Escaneie o QR code com o app **Expo Go** no iPhone (mesma rede Wi-Fi).

## Gerar o `.ipa` no próprio GitHub

O workflow `.github/workflows/ios-build.yml` compila o app num **runner macOS do GitHub** (grátis), sem Expo/EAS e sem conta externa. Ele gera um `.ipa` **não assinado** e anexa numa Release.

### Como disparar

- Pela aba **Actions > Build iOS (.ipa) no GitHub > Run workflow**, ou
- Criando uma tag:
  ```bash
  git tag v1.0.0
  git push origin v1.0.0
  ```

O `.ipa` aparece automaticamente na aba **Releases**.

### Sobre instalar no iPhone

O `.ipa` gerado é **não assinado**. Para instalar num iPhone real você precisa de uma das opções:

- **Sideload** com [AltStore](https://altstore.io) ou [Sideloadly](https://sideloadly.io) — re-assina com seu Apple ID grátis (válido 7 dias).
- **Assinatura oficial** via **Apple Developer Program** (US$ 99/ano) — para isso é melhor usar o EAS Build (`eas build --platform ios`) que cuida das credenciais.

## Estrutura

```
App.js                      # raiz: tema, header, navegação por abas
src/theme.js                # paleta clara/escura
src/data.js                 # dados/configuração dos cards (zerados)
src/components/             # Header, cards, filtros, gráfico, tab bar
src/screens/DashboardScreen.js
```
