import Foundation

struct DashboardData {
    var faturamentoBruto: Double = 1105166.58
    var faturamentoLiquido: Double = 926582.72
    var gastosAnuncios: Double = 200.00
    var roas: Double = 5525.83
    var lucro: Double = 926382.72
    var roi: Double? = nil
    var custosProdutos: Double = 0.00
    var vendasReembolsadas: Double = 0.00
    var margemLucro: Double? = nil
    var despesasAdicionais: Double = 0.00
    var imposto: Double = 0.00
    var impostoMetaAds: Double = 0.00
    var impostoTotal: Double = 0.00
    var chargeback: Double = 0.0
    var taxas: Double = 0.00
    var cpa: Double? = nil
    var custoPorConversa: Double? = nil
    var conversas: Int = 0
    var arpu: Double? = nil
    var leads: Int = 0
    var custoPorLead: Double? = nil
    var vendasPendentes: Double = 0.00
    
    // Vendas por Pagamento
    var vendasPix: Double = 66.4
    var vendasCartao: Double = 24.7
    var vendasBoleto: Double = 6.0
    var vendasOutros: Double = 3.0
    var totalVendas: Int = 12735
    
    // Taxa de Aprovação
    var aprovacaoCartao: Double? = nil
    var aprovacaoPix: Double? = nil
    var aprovacaoBoleto: Double? = nil
}

struct FilterOptions {
    var periodoVisualizacao: String = "Hoje"
    var contaAnuncio: String = "Todas"
    var plataforma: String = "Qualquer"
    var produto: String = "Qualquer"
    var fonteTrafego: String = "Qualquer"
}
