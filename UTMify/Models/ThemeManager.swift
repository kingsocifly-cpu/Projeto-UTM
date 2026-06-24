import SwiftUI

class ThemeManager: ObservableObject {
    @Published var isDarkMode: Bool = true
    
    // MARK: - Background Colors
    var backgroundColor: Color {
        isDarkMode ? Color(hex: "000000") : Color(hex: "F5F5F5")
    }
    
    var cardBackgroundColor: Color {
        isDarkMode ? Color(hex: "1C1C1E") : Color.white
    }
    
    var headerBackgroundColor: Color {
        isDarkMode ? Color(hex: "000000") : Color.white
    }
    
    var tabBarBackgroundColor: Color {
        isDarkMode ? Color(hex: "1C1C1E") : Color.white
    }
    
    // MARK: - Text Colors
    var primaryTextColor: Color {
        isDarkMode ? Color.white : Color(hex: "1A1A1A")
    }
    
    var secondaryTextColor: Color {
        isDarkMode ? Color(hex: "8E8E93") : Color(hex: "757575")
    }
    
    var labelTextColor: Color {
        isDarkMode ? Color(hex: "AEAEB2") : Color(hex: "616161")
    }
    
    // MARK: - Accent Colors
    var greenColor: Color {
        Color(hex: "30D158")
    }
    
    var redColor: Color {
        Color(hex: "FF453A")
    }
    
    var blueColor: Color {
        Color(hex: "0A84FF")
    }
    
    // MARK: - Border/Separator
    var separatorColor: Color {
        isDarkMode ? Color(hex: "38383A") : Color(hex: "E5E5EA")
    }
    
    var cardBorderColor: Color {
        isDarkMode ? Color.clear : Color(hex: "E5E5EA")
    }
    
    // MARK: - Dropdown Colors
    var dropdownBackgroundColor: Color {
        isDarkMode ? Color(hex: "2C2C2E") : Color.white
    }
    
    var dropdownBorderColor: Color {
        isDarkMode ? Color(hex: "48484A") : Color(hex: "D1D1D6")
    }
    
    // MARK: - Tab Bar
    var tabBarIconColor: Color {
        isDarkMode ? Color(hex: "8E8E93") : Color(hex: "8E8E93")
    }
    
    var tabBarActiveColor: Color {
        isDarkMode ? Color(hex: "0A84FF") : Color(hex: "0A84FF")
    }
}

// MARK: - Color Extension
extension Color {
    init(hex: String) {
        let hex = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)
        var int: UInt64 = 0
        Scanner(string: hex).scanHexInt64(&int)
        let a, r, g, b: UInt64
        switch hex.count {
        case 3:
            (a, r, g, b) = (255, (int >> 8) * 17, (int >> 4 & 0xF) * 17, (int & 0xF) * 17)
        case 6:
            (a, r, g, b) = (255, int >> 16, int >> 8 & 0xFF, int & 0xFF)
        case 8:
            (a, r, g, b) = (int >> 24, int >> 16 & 0xFF, int >> 8 & 0xFF, int & 0xFF)
        default:
            (a, r, g, b) = (255, 0, 0, 0)
        }
        self.init(
            .sRGB,
            red: Double(r) / 255,
            green: Double(g) / 255,
            blue: Double(b) / 255,
            opacity: Double(a) / 255
        )
    }
}

// MARK: - Custom Font Extension
extension Font {
    static func uberMove(_ size: CGFloat, weight: Font.Weight = .regular) -> Font {
        switch weight {
        case .bold:
            return .custom("UberMoveText-Bold", size: size)
        case .medium, .semibold:
            return .custom("UberMoveText-Medium", size: size)
        case .light, .thin, .ultraLight:
            return .custom("UberMoveText-Light", size: size)
        default:
            return .custom("UberMoveText-Regular", size: size)
        }
    }
}
