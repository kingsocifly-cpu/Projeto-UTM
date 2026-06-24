// Dados e configuração do dashboard extraídos das telas.
// Tudo zerado, como nas fotos. Integre com sua API depois.

export const filterOptions = {
  periodo: [
    'Hoje',
    'Ontem',
    'Últimos 7 dias',
    'Este mês',
    'Mês passado',
    'Personalizado',
  ],
  conta: ['Todas'],
  plataformas: ['Qualquer'],
  produtos: ['Todos'],
  fonte: ['Qualquer', 'Meta', 'Google', 'Kwai'],
};

export const defaultFilters = {
  periodo: 'Hoje',
  conta: 'Todas',
  plataformas: 'Qualquer',
  produtos: 'Qualquer',
  fonte: 'Qualquer',
};

// Métricas principais (cards grandes em destaque)
export const summaryMetrics = [
  { key: 'faturamento', label: 'Faturamento Líquido', value: 'R$ 0,00', info: true },
  { key: 'gastos', label: 'Gastos com anúncios', value: 'R$ 0,00', report: true },
];

// Demais métricas em cards (na ordem das telas)
export const metricCards = [
  { key: 'roas', label: 'ROAS', value: 'N/A', danger: true, info: true },
  { key: 'lucro', label: 'Lucro', value: 'R$ 0,00', info: true },
  { key: 'vendasPendentes', label: 'Vendas Pendentes', value: 'R$ 0,00', report: true },
  { key: 'roi', label: 'ROI', value: 'N/A', danger: true, info: true },
  { key: 'custosProdutos', label: 'Custos de Produtos', value: 'R$ 0,00', info: true },
  { key: 'vendasReembolsadas', label: 'Vendas Reembolsadas', value: 'R$ 0,00' },
  { key: 'margemLucro', label: 'Margem de Lucro', value: 'N/A', info: true },
  { key: 'despesasAdicionais', label: 'Despesas adicionais', value: 'R$ 0,00', report: true },
  { key: 'imposto', label: 'Imposto', value: 'R$ 0,00', info: true },
  { key: 'impostoMeta', label: 'Imposto Meta Ads', value: 'R$ 0,00', info: true },
  { key: 'impostoTotal', label: 'Imposto Total', value: 'R$ 0,00', info: true },
  { key: 'chargeback', label: 'Chargeback', value: '0.0%', info: true },
  { key: 'taxas', label: 'Taxas', value: 'R$ 0,00', info: true },
  { key: 'cpa', label: 'CPA', value: 'N/A', info: true },
  { key: 'custoConversa', label: 'Custo por Conversa', value: 'N/A', info: true },
  { key: 'conversas', label: 'Conversas', value: '0', info: true },
  { key: 'arpu', label: 'ARPU', value: 'N/A', info: true },
];

// Gráfico de vendas por pagamento
export const paymentBreakdown = {
  total: 0,
  segments: [
    { key: 'pix', label: 'Pix', value: 0 },
    { key: 'cartao', label: 'Cartão', value: 0 },
    { key: 'boleto', label: 'Boleto', value: 0 },
    { key: 'outros', label: 'Outros', value: 0 },
  ],
};

export const salesByProduct = []; // vazio -> "Nenhuma venda por aqui"
export const salesBySource = []; // vazio -> "Nenhuma venda por aqui"

export const approvalRate = [
  { key: 'cartao', label: 'Cartão', value: null },
  { key: 'pix', label: 'Pix', value: null },
  { key: 'boleto', label: 'Boleto', value: null },
];

export const leadMetrics = [
  { key: 'leads', label: 'Leads', value: '0', info: true },
  { key: 'custoLead', label: 'Custo por Lead', value: 'N/A', info: true },
];
