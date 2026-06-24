import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Card from './Card';
import FilterSelect from './FilterSelect';

export default function SummaryCard({
  theme,
  filters,
  updatedLabel,
  refreshing,
  onRefresh,
  onOpenFilter,
}) {
  return (
    <Card theme={theme} style={styles.card}>
      <Text style={[styles.title, { color: theme.text }]}>Resumo</Text>

      <View style={styles.refreshRow}>
        <Text style={[styles.updated, { color: theme.textMuted }]}>{updatedLabel}</Text>
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={onRefresh}
          style={[styles.refreshBtn, { backgroundColor: theme.primary, opacity: refreshing ? 0.7 : 1 }]}
        >
          {refreshing ? (
            <ActivityIndicator size="small" color={theme.primaryText} />
          ) : (
            <Text style={[styles.refreshText, { color: theme.primaryText }]}>Atualizar</Text>
          )}
        </TouchableOpacity>
      </View>

      <View style={[styles.divider, { backgroundColor: theme.borderSoft }]} />

      <View style={styles.row}>
        <FilterSelect
          theme={theme}
          label="Período de visualizaç..."
          value={filters.periodo}
          onPress={() => onOpenFilter('periodo')}
          style={styles.half}
        />
        <FilterSelect
          theme={theme}
          label="Conta de anúncio"
          value={filters.conta}
          onPress={() => onOpenFilter('conta')}
          style={styles.half}
        />
      </View>

      <View style={styles.row}>
        <FilterSelect
          theme={theme}
          label="Plataformas"
          value={filters.plataformas}
          onPress={() => onOpenFilter('plataformas')}
          style={styles.half}
        />
        <FilterSelect
          theme={theme}
          label="Produtos"
          value={filters.produtos}
          onPress={() => onOpenFilter('produtos')}
          style={styles.half}
        />
      </View>

      <FilterSelect
        theme={theme}
        label="Fonte de tráfego"
        value={filters.fonte}
        onPress={() => onOpenFilter('fonte')}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { marginBottom: 18 },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 14 },
  refreshRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  updated: { fontSize: 15 },
  refreshBtn: {
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 110,
  },
  refreshText: { fontSize: 15, fontWeight: '600' },
  divider: { height: StyleSheet.hairlineWidth, marginBottom: 18 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  half: { width: '48%' },
});
