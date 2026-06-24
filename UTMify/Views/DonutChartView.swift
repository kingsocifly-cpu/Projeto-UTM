import SwiftUI

struct DonutChartView: View {
    @EnvironmentObject var themeManager: ThemeManager
    let data: DashboardData
    
    private var segments: [(value: Double, color: Color, label: String)] {
        [
            (data.vendasPix, Color(hex: "1565C0"), "Pix"),
            (data.vendasCartao, Color(hex: "42A5F5"), "Cartão"),
            (data.vendasBoleto, Color(hex: "FFC107"), "Boleto"),
            (data.vendasOutros, Color(hex: "EF5350"), "Outros")
        ]
    }
    
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            // Title
            Text("Vendas por Pagamento")
                .font(.system(size: 15, weight: .medium))
                .foregroundColor(themeManager.primaryTextColor)
                .padding(.bottom, 4)
            
            // Chart area with percentage labels
            ZStack {
                // Donut ring
                DonutShape(segments: segments.map { $0.value })
                    .frame(width: 170, height: 170)
                
                // Center "Total" label
                VStack(spacing: 1) {
                    Text("Total")
                        .font(.system(size: 13, weight: .regular))
                        .foregroundColor(themeManager.secondaryTextColor)
                    Text("\(data.totalVendas)")
                        .font(.system(size: 20, weight: .bold))
                        .foregroundColor(themeManager.primaryTextColor)
                }
                
                // Percentages around the donut
                Text("3.0%")
                    .font(.system(size: 11))
                    .foregroundColor(themeManager.secondaryTextColor)
                    .offset(x: -15, y: -100)
                
                Text("6.0%")
                    .font(.system(size: 11))
                    .foregroundColor(themeManager.secondaryTextColor)
                    .offset(x: -85, y: -40)
                
                Text("24.7%")
                    .font(.system(size: 11))
                    .foregroundColor(themeManager.secondaryTextColor)
                    .offset(x: -85, y: 50)
                
                Text("66.4%")
                    .font(.system(size: 11))
                    .foregroundColor(themeManager.secondaryTextColor)
                    .offset(x: 85, y: 60)
            }
            .frame(maxWidth: .infinity)
            .frame(height: 220)
            
            // Legend row
            HStack(spacing: 0) {
                Spacer()
                ForEach(0..<segments.count, id: \.self) { index in
                    HStack(spacing: 4) {
                        Circle()
                            .fill(segments[index].color)
                            .frame(width: 8, height: 8)
                        Text(segments[index].label)
                            .font(.system(size: 11, weight: .regular))
                            .foregroundColor(themeManager.secondaryTextColor)
                    }
                    if index < segments.count - 1 {
                        Spacer()
                    }
                }
                Spacer()
            }
        }
        .padding(16)
        .background(themeManager.cardBackgroundColor)
        .cornerRadius(12)
        .padding(.horizontal, 16)
    }
}

struct DonutShape: View {
    let segments: [Double]
    private let lineWidth: CGFloat = 28
    
    private let colors: [Color] = [
        Color(hex: "1565C0"),
        Color(hex: "42A5F5"),
        Color(hex: "FFC107"),
        Color(hex: "EF5350")
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
