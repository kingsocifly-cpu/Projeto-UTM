import SwiftUI

@main
struct UTMifyApp: App {
    @StateObject private var themeManager = ThemeManager()
    
    init() {
        // Register custom fonts
        registerFonts()
    }
    
    var body: some Scene {
        WindowGroup {
            ContentView()
                .environmentObject(themeManager)
                .preferredColorScheme(themeManager.isDarkMode ? .dark : .light)
        }
    }
    
    private func registerFonts() {
        let fontNames = [
            "UberMoveTextRegular",
            "UberMoveTextBold",
            "UberMoveTextMedium",
            "UberMoveTextLight"
        ]
        
        for fontName in fontNames {
            if let fontURL = Bundle.main.url(forResource: fontName, withExtension: "otf") {
                CTFontManagerRegisterFontsForURL(fontURL as CFURL, .process, nil)
            }
        }
    }
}
