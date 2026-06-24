import SwiftUI

struct ResumoFilterView: View {
    @EnvironmentObject var themeManager: ThemeManager
    @State private var periodoVisualizacao = "Hoje"
    @State private var contaAnuncio = "Todas"
    @State private var plataforma = "Qualquer"
    @State private var produto = "Qualquer"
    @State private var fonteTrafego = "Qualquer"
    
    var body: some View {
        VStack(alignment: .leading, spacing: 16) {
            // "Resumo" title
            Text("Resumo")
                .font(.uberMove(24, weight: .medium))
                .foregroundColor(themeManager.primaryTextColor)
            
            // "Atualizado agora mesmo" + "Atualizar" button
            HStack {
                Text("Atualizado agora mesmo")
                    .font(.uberMove(13, weight: .bold))
                    .foregroundColor(themeManager.primaryTextColor)
                
                Spacer()
                
                Button(action: {}) {
                    Text("Atualizar")
                        .font(.uberMove(14, weight: .medium))
                        .foregroundColor(.white)
                        .padding(.horizontal, 24)
                        .padding(.vertical, 10)
                        .background(themeManager.blueColor)
                        .cornerRadius(6)
                }
            }
            
            // Separator line
            Rectangle()
                .fill(themeManager.separatorColor)
                .frame(height: 1)
            
            // Row 1: Período de visualização + Conta de anúncio
            HStack(spacing: 12) {
                FilterDropdown(
                    label: "Período de visualização",
                    value: $periodoVisualizacao,
                    hasInfoIcon: true
                )
                .environmentObject(themeManager)
                
                FilterDropdown(
                    label: "Conta de anúncio",
                    value: $contaAnuncio,
                    hasInfoIcon: false
                )
                .environmentObject(themeManager)
            }
            
            // Row 2: Plataformas + Produto
            HStack(spacing: 12) {
                FilterDropdown(
                    label: "Plataformas",
                    value: $plataforma,
                    hasInfoIcon: false
                )
                .environmentObject(themeManager)
                
                FilterDropdown(
                    label: "Produto",
                    value: $produto,
                    hasInfoIcon: false
                )
                .environmentObject(themeManager)
            }
            
            // Row 3: Fonte de Tráfego (full width)
            FilterDropdown(
                label: "Fonte de Tráfego",
                value: $fonteTrafego,
                hasInfoIcon: false
            )
            .environmentObject(themeManager)
        }
        .padding(20)
        .background(themeManager.cardBackgroundColor)
        .cornerRadius(12)
        .padding(.horizontal, 16)
    }
}

struct FilterDropdown: View {
    @EnvironmentObject var themeManager: ThemeManager
    let label: String
    @Binding var value: String
    var hasInfoIcon: Bool = false
    
    var body: some View {
        VStack(alignment: .leading, spacing: 6) {
            // Label
            HStack(spacing: 4) {
                Text(label)
                    .font(.uberMove(12, weight: .regular))
                    .foregroundColor(themeManager.labelTextColor)
                    .lineLimit(1)
                
                if hasInfoIcon {
                    Image(systemName: "info.circle")
                        .font(.system(size: 11))
                        .foregroundColor(themeManager.secondaryTextColor)
                }
            }
            
            // Dropdown button
            HStack {
                Text(value)
                    .font(.uberMove(14, weight: .regular))
                    .foregroundColor(themeManager.primaryTextColor)
                
                Spacer()
                
                Image(systemName: "chevron.down")
                    .font(.system(size: 11, weight: .medium))
                    .foregroundColor(themeManager.secondaryTextColor)
            }
            .padding(.horizontal, 12)
            .padding(.vertical, 12)
            .background(themeManager.dropdownBackgroundColor)
            .cornerRadius(8)
            .overlay(
                RoundedRectangle(cornerRadius: 8)
                    .stroke(themeManager.dropdownBorderColor, lineWidth: 1)
            )
        }
    }
}
