import SwiftUI

struct CustomTabBar: View {
    @Binding var selectedTab: Int
    @EnvironmentObject var themeManager: ThemeManager
    
    var body: some View {
        HStack(spacing: 0) {
            // Tab 0: Grid (Dashboard) — square.grid.2x2
            tabButton(icon: "square.grid.2x2", index: 0)
            
            // Tab 1: Facebook "f"
            Button(action: { selectedTab = 1 }) {
                Text("f")
                    .font(.system(size: 22, weight: .bold, design: .serif))
                    .foregroundColor(selectedTab == 1 ? themeManager.tabBarActiveColor : themeManager.tabBarIconColor)
                    .frame(maxWidth: .infinity)
                    .frame(height: 28)
            }
            
            // Tab 2: Video camera
            tabButton(icon: "video.fill", index: 2)
            
            // Tab 3: Music note
            tabButton(icon: "music.note", index: 3)
            
            // Tab 4: YouTube play button
            tabButton(icon: "play.rectangle.fill", index: 4)
            
            // Tab 5: Menu hamburger
            tabButton(icon: "line.3.horizontal", index: 5)
        }
        .padding(.top, 12)
        .padding(.bottom, 28)
        .background(themeManager.tabBarBackgroundColor)
    }
    
    @ViewBuilder
    private func tabButton(icon: String, index: Int) -> some View {
        Button(action: { selectedTab = index }) {
            Image(systemName: icon)
                .font(.system(size: 20))
                .foregroundColor(selectedTab == index ? themeManager.tabBarActiveColor : themeManager.tabBarIconColor)
                .frame(maxWidth: .infinity)
                .frame(height: 28)
        }
    }
}
