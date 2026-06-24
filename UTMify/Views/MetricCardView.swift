import SwiftUI

struct MetricCardView: View {
    @EnvironmentObject var themeManager: ThemeManager
    let title: String
    let value: String
    var valueColor: Color? = nil
    var hasInfo: Bool = true
    
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            HStack {
                Text(title)
                    .font(.uberMove(13, weight: .regular))
                    .foregroundColor(themeManager.labelTextColor)
                
                Spacer()
                
                if hasInfo {
                    Image(systemName: "info.circle")
                        .font(.system(size: 15))
                        .foregroundColor(themeManager.secondaryTextColor)
                }
            }
            
            Text(value)
                .font(.uberMove(24, weight: .bold))
                .foregroundColor(valueColor ?? themeManager.primaryTextColor)
        }
        .padding(16)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(themeManager.cardBackgroundColor)
        .cornerRadius(12)
        .padding(.horizontal, 16)
    }
}
