import SwiftUI

struct DashboardView: View {
    @EnvironmentObject var themeManager: ThemeManager
    @State private var dashboardData = DashboardData()
    
    var body: some View {
        VStack(spacing: 0) {
            // Fixed Header
            HeaderView()
                .environmentObject(themeManager)
            
            // Scrollable Dashboard Content
            ScrollView(.vertical, showsIndicators: false) {
                VStack(spacing: 12) {
                    
                    // 1. Resumo / Filters Card
                    ResumoFilterView()
                        .environmentObject(themeManager)
                    
                    // 2. Faturamento Bruto
                    MetricCardView(
                        title: "Faturamento Bruto",
                        value: formatCurrency(dashboardData.faturamentoBruto),
                        hasInfo: true
                    )
                    .environmentObject(themeManager)
                    
                    // 3. Gastos com anúncios
                    MetricCardView(
                        title: "Gastos com anúncios",
                        value: formatCurrency(dashboardData.gastosAnuncios),
                        hasInfo: false
                    )
                    .environmentObject(themeManager)
                    
                    // 4. Faturamento Líquido
                    MetricCardView(
                        title: "Faturamento Líquido",
                        value: formatCurrency(dashboardData.faturamentoLiquido),
                        hasInfo: true
                    )
                    .environmentObject(themeManager)
                    
                    // 5. ROAS (green value)
                    MetricCardView(
                        title: "ROAS",
                        value: String(format: "%.2f", dashboardData.roas),
                        valueColor: themeManager.greenColor,
                        hasInfo: true
                    )
                    .environmentObject(themeManager)
                    
                    // 6. Lucro (green value)
                    MetricCardView(
                        title: "Lucro",
                        value: formatCurrency(dashboardData.lucro),
                        valueColor: themeManager.greenColor,
                        hasInfo: true
                    )
                    .environmentObject(themeManager)
                    
                    // 7. Vendas por Pagamento (Donut Chart)
                    DonutChartView(data: dashboardData)
                        .environmentObject(themeManager)
                    
                    // 8. Vendas Pendentes
                    MetricCardView(
                        title: "Vendas Pendentes",
                        value: formatCurrency(dashboardData.vendasPendentes),
                        hasInfo: false
                    )
                    .environmentObject(themeManager)
                    
                    // 9. ROI (red value)
                    MetricCardView(
                        title: "ROI",
                        value: dashboardData.roi != nil ? String(format: "%.1f%%", dashboardData.roi!) : "N/A",
                        valueColor: themeManager.redColor,
                        hasInfo: true
                    )
                    .environmentObject(themeManager)
                    
                    // 10. Custos de Produtos
                    MetricCardView(
                        title: "Custos de Produtos",
                        value: formatCurrency(dashboardData.custosProdutos),
                        hasInfo: true
                    )
                    .environmentObject(themeManager)
                    
                    // 11. Vendas Reembolsadas
                    MetricCardView(
                        title: "Vendas Reembolsadas",
                        value: formatCurrency(dashboardData.vendasReembolsadas),
                        hasInfo: false
                    )
                    .environmentObject(themeManager)
                    
                    // 12. Margem de Lucro
                    MetricCardView(
                        title: "Margem de Lucro",
                        value: dashboardData.margemLucro != nil ? String(format: "%.1f%%", dashboardData.margemLucro!) : "N/A",
                        hasInfo: true
                    )
                    .environmentObject(themeManager)
                    
                    // 13. Despesas adicionais
                    MetricCardView(
                        title: "Despesas adicionais",
                        value: formatCurrency(dashboardData.despesasAdicionais),
                        hasInfo: false
                    )
                    .environmentObject(themeManager)
                    
                    // 14. Imposto
                    MetricCardView(
                        title: "Imposto",
                        value: formatCurrency(dashboardData.imposto),
                        hasInfo: true
                    )
                    .environmentObject(themeManager)
                    
                    // 15. Imposto Meta Ads
                    MetricCardView(
                        title: "Imposto Meta Ads",
                        value: formatCurrency(dashboardData.impostoMetaAds),
                        hasInfo: true
                    )
                    .environmentObject(themeManager)
                    
                    // 16. Imposto Total
                    MetricCardView(
                        title: "Imposto Total",
                        value: formatCurrency(dashboardData.impostoTotal),
                        hasInfo: true
                    )
                    .environmentObject(themeManager)
                    
                    // 17. Chargeback
                    MetricCardView(
                        title: "Chargeback",
                        value: String(format: "%.1f%%", dashboardData.chargeback),
                        hasInfo: true
                    )
                    .environmentObject(themeManager)
                    
                    // 18. Taxas
                    MetricCardView(
                        title: "Taxas",
                        value: formatCurrency(dashboardData.taxas),
                        hasInfo: true
                    )
                    .environmentObject(themeManager)
                    
                    // 19. CPA
                    MetricCardView(
                        title: "CPA",
                        value: dashboardData.cpa != nil ? formatCurrency(dashboardData.cpa!) : "N/A",
                        hasInfo: true
                    )
                    .environmentObject(themeManager)
                    
                    // 20. Custo por Conversa
                    MetricCardView(
                        title: "Custo por Conversa",
                        value: dashboardData.custoPorConversa != nil ? formatCurrency(dashboardData.custoPorConversa!) : "N/A",
                        hasInfo: true
                    )
                    .environmentObject(themeManager)
                    
                    // 21. Conversas
                    MetricCardView(
                        title: "Conversas",
                        value: "\(dashboardData.conversas)",
                        hasInfo: true
                    )
                    .environmentObject(themeManager)
                    
                    // 22. ARPU
                    MetricCardView(
                        title: "ARPU",
                        value: dashboardData.arpu != nil ? formatCurrency(dashboardData.arpu!) : "N/A",
                        hasInfo: true
                    )
                    .environmentObject(themeManager)
                    
                    // 23. Vendas por Produto
                    VendasPorProdutoView()
                        .environmentObject(themeManager)
                    
                    // 24. Vendas por Fonte
                    VendasPorFonteView()
                        .environmentObject(themeManager)
                    
                    // 25. Taxa de Aprovação
                    TaxaAprovacaoView(data: dashboardData)
                        .environmentObject(themeManager)
                    
                    // 26. Leads
                    MetricCardView(
                        title: "Leads",
                        value: "\(dashboardData.leads)",
                        hasInfo: true
                    )
                    .environmentObject(themeManager)
                    
                    // 27. Custo por Lead
                    MetricCardView(
                        title: "Custo por Lead",
                        value: dashboardData.custoPorLead != nil ? formatCurrency(dashboardData.custoPorLead!) : "N/A",
                        hasInfo: true
                    )
                    .environmentObject(themeManager)
                    
                    // Bottom padding for tab bar + FAB
                    Spacer()
                        .frame(height: 100)
                }
                .padding(.top, 12)
            }
        }
        .background(themeManager.backgroundColor)
    }
    
    // MARK: - Brazilian Currency Formatter
    private func formatCurrency(_ value: Double) -> String {
        let formatter = NumberFormatter()
        formatter.numberStyle = .decimal
        formatter.minimumFractionDigits = 2
        formatter.maximumFractionDigits = 2
        formatter.groupingSeparator = "."
        formatter.decimalSeparator = ","
        let formatted = formatter.string(from: NSNumber(value: value)) ?? "0,00"
        return "R$ \(formatted)"
    }
}
