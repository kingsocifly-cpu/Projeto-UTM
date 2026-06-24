import SwiftUI

struct ResumoFilterView: View {
    @EnvironmentObject var themeManager: ThemeManager
    @State private var periodoVisualizacao = "Hoje"
    @State private var contaAnuncio = "Todas"
    @State private var plataforma = "Qualquer"
    @State private var produto = "Qualquer"
    @State private var fonteTrafego = "Qualquer"
    
    var body: some View {
        VStack(alignment: .leading, spacing: 14) {
            // Title "Resumo"
            Text("Resumo")
                .font(.system(size: 22, weight: .medium))
                .foregroundColor(themeManager.primaryTextColor)
            
            // "Atualizado agora mesmo" + "Atualizar" button row
            HStack {
                Text("Atualizado agora mesmo")
                    .font(.system(size: 13, weight: .semibold))
                    .foregroundColor(themeManager.primaryTextColor)
                
                Spacer()
                
                Button(action: {}) {
                    Text("Atualizar")
                        .font(.system(size: 13, weight: .semibold))
                        .foregroundColor(.white)
                        .padding(.horizontal, 20)
                        .padding(.vertical, 10)
                        .background(Color(hex: "2563EB"))
                        .cornerRadius(6)
                }
            }
            
            // Separator
            Rectangle()
                .fill(themeManager.separatorColor)
                .frame(height: 0.5)
            
            // Row 1: Período + Conta
            HStack(spacing: 12) {
                DropdownField(
                    label: "Período de visualização",
                    value: $periodoVisualizacao,
                    showInfo: true
                )
                .environmentObject(themeManager)
                
                DropdownField(
                    label: "Conta de anúncio",
                    value: $contaAnuncio,
                    showInfo: false
                )
                .environmentObject(themeManager)
            }
            
            // Row 2: Plataformas + Produto
            HStack(spacing: 12) {
                DropdownField(
                    label: "Plataformas",
                    value: $plataforma,
                    showInfo: false
                )
                .environmentObject(themeManager)
                
                DropdownField(
                    label: "Produto",
                    value: $produto,
                    showInfo: false
                )
                .environmentObject(themeManager)
            }
            
            // Row 3: Fonte de Tráfego (full width)
            DropdownField(
                label: "Fonte de Tráfego",
                value: $fonteTrafego,
                showInfo: false
            )
            .environmentObject(themeManager)
        }
        .padding(16)
        .background(themeManager.cardBackgroundColor)
        .cornerRadius(12)
        .padding(.horizontal, 16)
    }
}

struct DropdownField: View {
    @EnvironmentObject var themeManager: ThemeManager
    let label: String
    @Binding var value: String
    var showInfo: Bool = false
    
    var body: some View {
        VStack(alignment: .leading, spacing: 6) {
            HStack(spacing: 4) {
                Text(label)
                    .font(.system(size: 12, weight: .regular))
                    .foregroundColor(themeManager.labelTextColor)
                    .lineLimit(1)
                
                if showInfo {
                    Image(systemName: "info.circle")
                        .font(.system(size: 10))
                        .foregroundColor(themeManager.secondaryTextColor)
                }
            }
            
            HStack {
                Text(value)
                    .font(.system(size: 14, weight: .regular))
                    .foregroundColor(themeManager.primaryTextColor)
                
                Spacer()
                
                Image(systemName: "chevron.down")
                    .font(.system(size: 10, weight: .medium))
                    .foregroundColor(themeManager.secondaryTextColor)
            }
            .padding(.horizontal, 12)
            .padding(.vertical, 11)
            .background(themeManager.dropdownBackgroundColor)
            .cornerRadius(8)
            .overlay(
                RoundedRectangle(cornerRadius: 8)
                    .stroke(themeManager.dropdownBorderColor, lineWidth: 1)
            )
        }
    }
}
