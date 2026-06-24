import SwiftUI

struct TaxaAprovacaoView: View {
    @EnvironmentObject var themeManager: ThemeManager
    let data: DashboardData
    
    var body: some View {
        VStack(alignment: .leading, spacing: 16) {
            HStack {
                Text("Taxa de Aprovação")
                    .font(.uberMove(16, weight: .medium))
                    .foregroundColor(themeManager.primaryTextColor)
                
                Spacer()
                
                Image(systemName: "info.circle")
                    .font(.system(size: 15))
                    .foregroundColor(themeManager.secondaryTextColor)
            }
            
            // Cartão row
            ApprovalRow(
                label: "Cartão",
                value: data.aprovacaoCartao != nil ? String(format: "%.1f%%", data.aprovacaoCartao!) : "N/A",
                progress: data.aprovacaoCartao.map { $0 / 100 }
            )
            .environmentObject(themeManager)
            
            // Pix row
            ApprovalRow(
                label: "Pix",
                value: data.aprovacaoPix != nil ? String(format: "%.1f%%", data.aprovacaoPix!) : "N/A",
                progress: data.aprovacaoPix.map { $0 / 100 }
            )
            .environmentObject(themeManager)
            
            // Boleto row
            ApprovalRow(
                label: "Boleto",
                value: data.aprovacaoBoleto != nil ? String(format: "%.1f%%", data.aprovacaoBoleto!) : "N/A",
                progress: data.aprovacaoBoleto.map { $0 / 100 }
            )
            .environmentObject(themeManager)
        }
        .padding(16)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(themeManager.cardBackgroundColor)
        .cornerRadius(12)
        .padding(.horizontal, 16)
    }
}

struct ApprovalRow: View {
    @EnvironmentObject var themeManager: ThemeManager
    let label: String
    let value: String
    let progress: Double?
    
    var body: some View {
        HStack {
            Text(label)
                .font(.uberMove(14, weight: .regular))
                .foregroundColor(themeManager.primaryTextColor)
            
            Spacer()
            
            // Circular progress ring
            ZStack {
                Circle()
                    .stroke(themeManager.separatorColor, lineWidth: 2.5)
                    .frame(width: 26, height: 26)
                
                if let progress = progress {
                    Circle()
                        .trim(from: 0, to: progress)
                        .stroke(themeManager.blueColor, style: StrokeStyle(lineWidth: 2.5, lineCap: .round))
                        .frame(width: 26, height: 26)
                        .rotationEffect(.degrees(-90))
                }
            }
            
            Text(value)
                .font(.uberMove(14, weight: .regular))
                .foregroundColor(themeManager.primaryTextColor)
                .frame(width: 40, alignment: .trailing)
        }
    }
}
