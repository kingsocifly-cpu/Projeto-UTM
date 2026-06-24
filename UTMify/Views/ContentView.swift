import SwiftUI

struct ContentView: View {
    @EnvironmentObject var themeManager: ThemeManager
    @State private var selectedTab: Int = 0
    
    var body: some View {
        ZStack(alignment: .bottom) {
            // Main content area - full screen
            DashboardView()
                .environmentObject(themeManager)
            
            // Floating Action Button (clipboard icon) — acima da tab bar, canto direito
            VStack {
                Spacer()
                HStack {
                    Spacer()
                    Button(action: {}) {
                        Image(systemName: "doc.on.clipboard.fill")
                            .font(.system(size: 18))
                            .foregroundColor(.white)
                            .frame(width: 48, height: 48)
                            .background(Color(hex: "2563EB"))
                            .clipShape(Circle())
                            .shadow(color: Color(hex: "2563EB").opacity(0.3), radius: 6, x: 0, y: 3)
                    }
                    .padding(.trailing, 16)
                    .padding(.bottom, 68)
                }
            }
            
            // Tab Bar
            CustomTabBar(selectedTab: $selectedTab)
                .environmentObject(themeManager)
        }
        .background(themeManager.backgroundColor)
    }
}
