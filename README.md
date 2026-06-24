# UTMify - iOS App (SwiftUI)

Réplica fiel do app UTMify para iPhone, construído em SwiftUI nativo com base no APK original (Flutter).

## Setup no Xcode

1. Abra o Xcode → **File** → **New** → **Project**
2. Selecione **iOS** → **App** → **SwiftUI** → **Next**
3. Nome: `UTMify`, Bundle ID: `com.utmify.app`
4. **Delete** todos os arquivos gerados pelo template
5. **Arraste** toda a pasta `UTMify/` para dentro do projeto no Xcode
6. Certifique-se de marcar **"Copy items if needed"** e **"Create folder references"** para Assets
7. No target → **Build Phases** → **Copy Bundle Resources**, adicione as fontes `.otf`
8. Build (⌘+B) e Run (⌘+R) no simulador

## Para gerar o IPA

```bash
# Archive
xcodebuild archive -scheme UTMify -archivePath build/UTMify.xcarchive

# Export IPA
xcodebuild -exportArchive -archivePath build/UTMify.xcarchive -exportPath build/ -exportOptionsPlist ExportOptions.plist
```

## Estrutura do Projeto

```
UTMify/
├── UTMifyApp.swift              # Entry point + font registration
├── Info.plist                   # Config com fontes UIAppFonts
├── Fonts/
│   ├── UberMoveTextRegular.otf  # Fonte original do app
│   ├── UberMoveTextBold.otf
│   ├── UberMoveTextMedium.otf
│   └── UberMoveTextLight.otf
├── Assets.xcassets/
│   ├── AppIcon.appiconset/      # Ícone original do app
│   ├── Logo.imageset/           # Logos dark/light
│   └── AccentColor.colorset/
├── Models/
│   ├── ThemeManager.swift       # Dark/Light mode + cores + Font helper
│   └── DashboardData.swift      # Modelo de dados
└── Views/
    ├── ContentView.swift        # Layout principal + FAB + TabBar
    ├── HeaderView.swift         # Header com logo UTMify
    ├── CustomTabBar.swift       # 6 tabs: Grid, Facebook, Video, Music, YouTube, Menu
    ├── ResumoFilterView.swift   # Card filtros com dropdowns
    ├── DashboardView.swift      # ScrollView com todos os cards
    ├── MetricCardView.swift     # Card genérico de métrica
    ├── DonutChartView.swift     # Gráfico donut "Vendas por Pagamento"
    ├── TaxaAprovacaoView.swift  # Card com progress circles
    └── VendasPorInfoView.swift  # Vendas por Produto/Fonte
```

## Features

- ✅ Dark Mode / Light Mode (toggle no header)
- ✅ Fonte UberMove original (extraída do APK)
- ✅ Cards de métricas: ROAS (verde), Lucro (verde), ROI (vermelho)
- ✅ Gráfico donut "Vendas por Pagamento" (Pix, Cartão, Boleto, Outros)
- ✅ Filtros: Período, Conta, Plataforma, Produto, Fonte de Tráfego
- ✅ Tab Bar com 6 ícones Feather
- ✅ FAB azul (clipboard)
- ✅ Taxa de Aprovação com rings circulares
- ✅ Vendas por Produto / Fonte
- ✅ Todas as métricas na ordem exata do app original
- ✅ Formatação brasileira R$ (ponto milhar, vírgula decimal)

## Requisitos

- iOS 16.0+
- Xcode 15.0+
- Swift 5.9+
