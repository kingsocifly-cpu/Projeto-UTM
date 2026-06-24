import React, { useState, useCallback } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import SummaryCard from '../components/SummaryCard';
import MetricCard from '../components/MetricCard';
import PaymentChart from '../components/PaymentChart';
import ApprovalRate from '../components/ApprovalRate';
import ListCard from '../components/ListCard';
import SelectModal from '../components/SelectModal';

import {
  filterOptions,
  defaultFilters,
  summaryMetrics,
  metricCards,
  paymentBreakdown,
  approvalRate,
  leadMetrics,
  salesByProduct,
  salesBySource,
} from '../data';

const FILTER_TITLES = {
  periodo: 'Período de visualização',
  conta: 'Conta de anúncio',
  plataformas: 'Plataformas',
  produtos: 'Produtos',
  fonte: 'Fonte de tráfego',
};

export default function DashboardScreen({ theme, bottomInset }) {
  const [filters, setFilters] = useState(defaultFilters);
  const [openFilter, setOpenFilter] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1200);
  }, []);

  const handleSelect = (value) => {
    setFilters((prev) => ({ ...prev, [openFilter]: value }));
    setOpenFilter(null);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={[styles.content, { paddingBottom: bottomInset + 24 }]}
        showsVerticalScrollIndicator={false}
      >
        <SummaryCard
          theme={theme}
          filters={filters}
          updatedLabel="Atualizado agora mesmo"
          refreshing={refreshing}
          onRefresh={handleRefresh}
          onOpenFilter={setOpenFilter}
        />

        {/* Métricas em destaque */}
        {summaryMetrics.map((m) => (
          <MetricCard key={m.key} theme={theme} metric={m} />
        ))}

        {/* ROAS e Lucro */}
        <MetricCard theme={theme} metric={metricCards[0]} />
        <MetricCard theme={theme} metric={metricCards[1]} />

        {/* Gráfico de pagamentos */}
        <PaymentChart theme={theme} data={paymentBreakdown} />

        {/* Restante das métricas */}
        {metricCards.slice(2).map((m) => (
          <MetricCard key={m.key} theme={theme} metric={m} />
        ))}

        {/* Listagens */}
        <ListCard
          theme={theme}
          title="Vendas por Produto"
          items={salesByProduct}
          emptyText="Nenhuma venda por aqui"
        />
        <ListCard
          theme={theme}
          title="Vendas por Fonte"
          items={salesBySource}
          emptyText="Nenhuma venda por aqui"
        />

        <ApprovalRate theme={theme} data={approvalRate} />

        {leadMetrics.map((m) => (
          <MetricCard key={m.key} theme={theme} metric={m} />
        ))}
      </ScrollView>

      <SelectModal
        theme={theme}
        visible={!!openFilter}
        title={openFilter ? FILTER_TITLES[openFilter] : ''}
        options={openFilter ? filterOptions[openFilter] : []}
        selected={openFilter ? filters[openFilter] : null}
        onSelect={handleSelect}
        onClose={() => setOpenFilter(null)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: { paddingHorizontal: 16, paddingTop: 18 },
});
