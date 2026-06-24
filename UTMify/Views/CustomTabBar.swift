import SwiftUI

struct CustomTabBar: View {
    @Binding var selectedTab: Int
    @EnvironmentObject var themeManager: ThemeManager
    
    var body: some View {
        HStack(spacing: 0) {
            // Tab 0: Grid (Dashboard)
            TabBarItem(
                icon: "square.grid.2x2",
                isSelected: selectedTab == 0,
                action: { selectedTab = 0 }
            )
            .environmentObject(themeManager)
            
            // Tab 1: Facebook
            TabBarItemCustom(
                isSelected: selectedTab == 1,
                action: { selectedTab = 1 }
            ) {
                // Facebook "f" logo path
                Text("f")
                    .font(.system(size: 22, weight: .bold, design: .serif))
                    .foregroundColor(selectedTab == 1 ? themeManager.tabBarActiveColor : themeManager.tabBarIconColor)
            }
            .environmentObject(themeManager)
            
            // Tab 2: Video
            TabBarItem(
                icon: "video.fill",
                isSelected: selectedTab == 2,
                action: { selectedTab = 2 }
            )
            .environmentObject(themeManager)
            
            // Tab 3: Music
            TabBarItem(
                icon: "music.note",
                isSelected: selectedTab == 3,
                action: { selectedTab = 3 }
            )
            .environmentObject(themeManager)
            
            // Tab 4: YouTube (play rectangle)
            TabBarItem(
                icon: "play.rectangle.fill",
                isSelected: selectedTab == 4,
                action: { selectedTab = 4 }
            )
            .environmentObject(themeManager)
            
            // Tab 5: Menu (hamburger)
            TabBarItem(
                icon: "line.3.horizontal",
                isSelected: selectedTab == 5,
                action: { selectedTab = 5 }
            )
            .environmentObject(themeManager)
        }
        .padding(.top, 10)
        .padding(.bottom, 24)
        .background(
            themeManager.tabBarBackgroundColor
                .shadow(color: Color.black.opacity(0.15), radius: 8, x: 0, y: -2)
        )
    }
}

struct TabBarItem: View {
    @EnvironmentObject var themeManager: ThemeManager
    let icon: String
    let isSelected: Bool
    let action: () -> Void
    
    var body: some View {
        Button(action: action) {
            Image(systemName: icon)
                .font(.system(size: 20))
                .foregroundColor(isSelected ? themeManager.tabBarActiveColor : themeManager.tabBarIconColor)
                .frame(maxWidth: .infinity)
                .frame(height: 30)
        }
    }
}

struct TabBarItemCustom<Content: View>: View {
    @EnvironmentObject var themeManager: ThemeManager
    let isSelected: Bool
    let action: () -> Void
    @ViewBuilder let content: Content
    
    var body: some View {
        Button(action: action) {
            content
                .frame(maxWidth: .infinity)
                .frame(height: 30)
        }
    }
}
