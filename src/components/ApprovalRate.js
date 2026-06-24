import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Card from './Card';

export default function ApprovalRate({ theme, data }) {
  return (
    <Card theme={theme} style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={[styles.title, { color: theme.text }]}>Taxa de Aprovacao</Text>
        <Ionicons name="information-circle-outline" size={20} color={theme.textMuted} />
      </View>

      {data.map((item) => (
        <View key={item.key} style={styles.row}>
          <Text style={[styles.label, { color: theme.textMuted }]}>{item.label}</Text>
          <View style={styles.right}>
            <View style={[styles.ring, { borderColor: theme.border }]} />
            <Text style={[styles.value, { color: theme.text }]}>
              {item.value == null ? 'N/A' : `${item.value}%`}
            </Text>
          </View>
        </View>
      ))}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { marginBottom: 14 },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: { fontSize: 18, fontWeight: '700' },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  label: { fontSize: 16 },
  right: { flexDirection: 'row', alignItems: 'center' },
  ring: { width: 34, height: 34, borderRadius: 17, borderWidth: 4, marginRight: 12 },
  value: { fontSize: 15, fontWeight: '600', minWidth: 38, textAlign: 'right' },
});
