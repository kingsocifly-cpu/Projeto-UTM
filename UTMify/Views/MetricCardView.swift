import SwiftUI

/// Card de métrica genérico. Pode ter label colorido OU valor colorido.
struct MetricCardView: View {
    @EnvironmentObject var themeManager: ThemeManager
    let title: String
    let value: String
    var titleColor: Color? = nil   // cor do label (ex: ROAS verde, ROI vermelho)
    var valueColor: Color? = nil   // cor do valor
    var hasInfo: Bool = true
    
    var body: some View {
        VStack(alignment: .leading, spacing: 6) {
            HStack {
                Text(title)
                    .font(.uberMove(13, weight: .regular))
                    .foregroundColor(titleColor ?? themeManager.labelTextColor)
                
                Spacer()
                
                if hasInfo {
                    Image(systemName: "info.circle")
                        .font(.system(size: 14))
                        .foregroundColor(themeManager.secondaryTextColor)
                }
            }
            
            Text(value)
                .font(.uberMove(22, weight: .bold))
                .foregroundColor(valueColor ?? themeManager.primaryTextColor)
        }
        .padding(16)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(themeManager.cardBackgroundColor)
        .cornerRadius(12)
        .padding(.horizontal, 16)
    }
}
