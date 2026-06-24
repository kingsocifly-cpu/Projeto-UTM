import SwiftUI

struct HeaderView: View {
    @EnvironmentObject var themeManager: ThemeManager
    
    var body: some View {
        HStack {
            // Logo: "U" box + "utmify"
            HStack(spacing: 6) {
                ZStack {
                    RoundedRectangle(cornerRadius: 6)
                        .fill(themeManager.isDarkMode ? Color.white : Color(hex: "1A1A1A"))
                        .frame(width: 28, height: 28)
                    
                    Text("U")
                        .font(.system(size: 17, weight: .heavy))
                        .foregroundColor(themeManager.isDarkMode ? Color.black : Color.white)
                }
                
                Text("utmify")
                    .font(.system(size: 18, weight: .bold))
                    .foregroundColor(themeManager.primaryTextColor)
            }
            
            // "Principal" centered
            Spacer()
            
            Text("Principal")
                .font(.system(size: 15, weight: .medium))
                .foregroundColor(themeManager.primaryTextColor)
            
            Spacer()
            
            // Edit + Moon icons
            HStack(spacing: 20) {
                Button(action: {}) {
                    Image(systemName: "square.and.pencil")
                        .font(.system(size: 18))
                        .foregroundColor(themeManager.primaryTextColor)
                }
                
                Button(action: {
                    withAnimation(.easeInOut(duration: 0.3)) {
                        themeManager.isDarkMode.toggle()
                    }
                }) {
                    Image(systemName: "moon.fill")
                        .font(.system(size: 18))
                        .foregroundColor(themeManager.primaryTextColor)
                }
            }
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 12)
        .background(themeManager.headerBackgroundColor)
    }
}
