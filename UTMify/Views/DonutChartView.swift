import SwiftUI

struct DonutChartView: View {
    @EnvironmentObject var themeManager: ThemeManager
    let data: DashboardData
    
    private var segments: [(value: Double, color: Color, label: String)] {
        [
            (data.vendasPix, Color(hex: "1565C0"), "Pix"),       // Dark blue
            (data.vendasCartao, Color(hex: "42A5F5"), "Cartão"), // Light blue
            (data.vendasBoleto, Color(hex: "FFC107"), "Boleto"), // Yellow/Amber
            (data.vendasOutros, Color(hex: "EF5350"), "Outros")  // Red/Pink
        ]
    }
    
    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            // Title with percentages
            HStack {
                Text("Vendas por Pagamento")
                    .font(.uberMove(16, weight: .medium))
                    .foregroundColor(themeManager.primaryTextColor)
                
                Spacer()
            }
            
            // Percentage labels around chart
            ZStack {
                // Main donut
                DonutShape(segments: segments.map { $0.value })
                    .frame(width: 180, height: 180)
                
                // Center label
                VStack(spacing: 2) {
                    Text("Total")
                        .font(.uberMove(14, weight: .regular))
                        .foregroundColor(themeManager.secondaryTextColor)
                    Text("\(data.totalVendas)")
                        .font(.uberMove(22, weight: .bold))
                        .foregroundColor(themeManager.primaryTextColor)
                }
                
                // Percentage labels positioned around donut
                // Top-left area: 3.0% (Outros)
                Text("3.0%")
                    .font(.uberMove(11, weight: .regular))
                    .foregroundColor(themeManager.secondaryTextColor)
                    .offset(x: -20, y: -100)
                
                // Left area: 6.0% (Boleto)
                Text("6.0%")
                    .font(.uberMove(11, weight: .regular))
                    .foregroundColor(themeManager.secondaryTextColor)
                    .offset(x: -80, y: -50)
                
                // Bottom-left: 24.7% (Cartão)
                Text("24.7%")
                    .font(.uberMove(11, weight: .regular))
                    .foregroundColor(themeManager.secondaryTextColor)
                    .offset(x: -90, y: 40)
                
                // Bottom-right: 66.4% (Pix)
                Text("66.4%")
                    .font(.uberMove(11, weight: .regular))
                    .foregroundColor(themeManager.secondaryTextColor)
                    .offset(x: 80, y: 70)
            }
            .frame(maxWidth: .infinity)
            .padding(.vertical, 20)
            
            // Legend
            HStack(spacing: 16) {
                Spacer()
                ForEach(0..<segments.count, id: \.self) { index in
                    HStack(spacing: 5) {
                        Circle()
                            .fill(segments[index].color)
                            .frame(width: 8, height: 8)
                        Text(segments[index].label)
                            .font(.uberMove(12, weight: .regular))
                            .foregroundColor(themeManager.secondaryTextColor)
                    }
                }
                Spacer()
            }
        }
        .padding(20)
        .background(themeManager.cardBackgroundColor)
        .cornerRadius(12)
        .padding(.horizontal, 16)
    }
}

struct DonutShape: View {
    let segments: [Double]
    private let lineWidth: CGFloat = 32
    
    private let colors: [Color] = [
        Color(hex: "1565C0"), // Pix - Dark blue
        Color(hex: "42A5F5"), // Cartão - Light blue
        Color(hex: "FFC107"), // Boleto - Yellow
        Color(hex: "EF5350")  // Outros - Red
    ]
    
    private func startAngle(for index: Int) -> Angle {
        let total = segments.reduce(0, +)
        var angle = -90.0
        for i in 0..<index {
            angle += 360 * segments[i] / total
        }
        return Angle.degrees(angle)
    }
    
    private func endAngle(for index: Int) -> Angle {
        let total = segments.reduce(0, +)
        var angle = -90.0
        for i in 0...index {
            angle += 360 * segments[i] / total
        }
        return Angle.degrees(angle)
    }
    
    var body: some View {
        GeometryReader { geometry in
            let center = CGPoint(x: geometry.size.width / 2, y: geometry.size.height / 2)
            let radius = min(geometry.size.width, geometry.size.height) / 2 - lineWidth / 2
            
            ForEach(0..<segments.count, id: \.self) { index in
                Path { path in
                    path.addArc(
                        center: center,
                        radius: radius,
                        startAngle: startAngle(for: index),
                        endAngle: endAngle(for: index),
                        clockwise: false
                    )
                }
                .stroke(colors[index], style: StrokeStyle(lineWidth: lineWidth, lineCap: .butt))
            }
        }
    }
}
