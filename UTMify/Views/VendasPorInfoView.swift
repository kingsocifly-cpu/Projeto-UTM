import SwiftUI

struct VendasPorProdutoView: View {
    @EnvironmentObject var themeManager: ThemeManager
    
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            HStack {
                Text("Vendas por Produto")
                    .font(.uberMove(16, weight: .medium))
                    .foregroundColor(themeManager.primaryTextColor)
                
                Spacer()
                
                Image(systemName: "info.circle")
                    .font(.system(size: 15))
                    .foregroundColor(themeManager.secondaryTextColor)
            }
            
            Text("Nenhuma venda por aqui")
                .font(.uberMove(14, weight: .regular))
                .foregroundColor(themeManager.secondaryTextColor)
        }
        .padding(16)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(themeManager.cardBackgroundColor)
        .cornerRadius(12)
        .padding(.horizontal, 16)
    }
}

struct VendasPorFonteView: View {
    @EnvironmentObject var themeManager: ThemeManager
    
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            HStack {
                Text("Vendas por Fonte")
                    .font(.uberMove(16, weight: .medium))
                    .foregroundColor(themeManager.primaryTextColor)
                
                Spacer()
                
                Image(systemName: "info.circle")
                    .font(.system(size: 15))
                    .foregroundColor(themeManager.secondaryTextColor)
            }
            
            Text("Nenhuma venda por aqui")
                .font(.uberMove(14, weight: .regular))
                .foregroundColor(themeManager.secondaryTextColor)
        }
        .padding(16)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(themeManager.cardBackgroundColor)
        .cornerRadius(12)
        .padding(.horizontal, 16)
    }
}
