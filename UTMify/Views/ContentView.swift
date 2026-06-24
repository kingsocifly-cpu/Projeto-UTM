import SwiftUI

struct ContentView: View {
    @EnvironmentObject var themeManager: ThemeManager
    @State private var selectedTab: Int = 0
    
    var body: some View {
        ZStack(alignment: .bottom) {
            // Main content area
            VStack(spacing: 0) {
                DashboardView()
                    .environmentObject(themeManager)
            }
            
            // Floating Action Button (clipboard icon)
            VStack {
                Spacer()
                HStack {
                    Spacer()
                    Button(action: {}) {
                        Image(systemName: "doc.on.clipboard.fill")
                            .font(.system(size: 20))
                            .foregroundColor(.white)
                            .frame(width: 50, height: 50)
                            .background(themeManager.blueColor)
                            .clipShape(Circle())
                            .shadow(color: themeManager.blueColor.opacity(0.4), radius: 8, x: 0, y: 4)
                    }
                    .padding(.trailing, 16)
                    .padding(.bottom, 72)
                }
            }
            
            // Tab Bar
            CustomTabBar(selectedTab: $selectedTab)
                .environmentObject(themeManager)
        }
        .background(themeManager.backgroundColor)
        .edgesIgnoringSafeArea(.bottom)
    }
}
