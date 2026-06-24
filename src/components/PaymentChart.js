import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from './Card';
import { paymentColors } from '../theme';

// Donut simples sem dependências externas. Como os dados estão zerados,
// exibe um anel vazio com "Total / 0" no centro, igual às telas.
export default function PaymentChart({ theme, data }) {
  return (
    <Card theme={theme} style={styles.card}>
      <Text style={[styles.title, { color: theme.text }]}>Vendas por Pagamento</Text>

      <View style={styles.chartArea}>
        <View style={[styles.ring, { borderColor: theme.borderSoft }]}>
          <View style={styles.center}>
            <Text style={[styles.totalLabel, { color: theme.textMuted }]}>Total</Text>
            <Text style={[styles.totalValue, { color: theme.text }]}>{data.total}</Text>
          </View>
        </View>
      </View>

      <View style={styles.legend}>
        {data.segments.map((s) => (
          <View key={s.key} style={styles.legendItem}>
            <View style={[styles.dot, { backgroundColor: paymentColors[s.key] }]} />
            <Text style={[styles.legendText, { color: theme.textMuted }]}>{s.label}</Text>
          </View>
        ))}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { marginBottom: 14 },
  title: { fontSize: 18, fontWeight: '700', marginBottom: 8 },
  chartArea: { alignItems: 'center', justifyContent: 'center', paddingVertical: 24 },
  ring: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: { alignItems: 'center' },
  totalLabel: { fontSize: 14 },
  totalValue: { fontSize: 18, fontWeight: '700', marginTop: 2 },
  legend: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  legendItem: { alignItems: 'center' },
  dot: { width: 10, height: 10, borderRadius: 5, marginBottom: 6 },
  legendText: { fontSize: 13 },
});
