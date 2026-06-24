import SwiftUI

struct HeaderView: View {
    @EnvironmentObject var themeManager: ThemeManager
    
    var body: some View {
        HStack(spacing: 0) {
            // Logo UTMify
            HStack(spacing: 4) {
                // "U" logo icon - rounded square with U
                ZStack {
                    RoundedRectangle(cornerRadius: 5)
                        .fill(themeManager.isDarkMode ? Color.white : Color(hex: "1A1A1A"))
                        .frame(width: 26, height: 26)
                    
                    Text("U")
                        .font(.uberMove(16, weight: .bold))
                        .foregroundColor(themeManager.isDarkMode ? Color(hex: "1A1A1A") : Color.white)
                }
                
                Text("utmify")
                    .font(.uberMove(18, weight: .bold))
                    .foregroundColor(themeManager.primaryTextColor)
            }
            
            Spacer()
            
            // "Principal" text - center
            Text("Principal")
                .font(.uberMove(16, weight: .medium))
                .foregroundColor(themeManager.primaryTextColor)
            
            Spacer()
            
            // Right icons: edit + moon
            HStack(spacing: 18) {
                // Edit icon (feather edit)
                Button(action: {}) {
                    Image(systemName: "square.and.pencil")
                        .font(.system(size: 18, weight: .regular))
                        .foregroundColor(themeManager.primaryTextColor)
                }
                
                // Moon/Dark mode toggle
                Button(action: {
                    withAnimation(.easeInOut(duration: 0.3)) {
                        themeManager.isDarkMode.toggle()
                    }
                }) {
                    Image(systemName: "moon")
                        .font(.system(size: 18, weight: .regular))
                        .foregroundColor(themeManager.primaryTextColor)
                }
            }
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 14)
        .background(themeManager.headerBackgroundColor)
    }
}
