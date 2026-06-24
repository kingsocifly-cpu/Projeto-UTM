import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Card from './Card';

export default function ListCard({ theme, title, items, emptyText }) {
  return (
    <Card theme={theme} style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={[styles.title, { color: theme.text }]}>{title}</Text>
        <Ionicons name="information-circle-outline" size={20} color={theme.textMuted} />
      </View>

      {items && items.length > 0 ? (
        items.map((item, i) => (
          <View key={i} style={styles.row}>
            <Text style={[styles.itemLabel, { color: theme.text }]}>{item.label}</Text>
            <Text style={[styles.itemValue, { color: theme.text }]}>{item.value}</Text>
          </View>
        ))
      ) : (
        <Text style={[styles.empty, { color: theme.textMuted }]}>{emptyText}</Text>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { marginBottom: 14 },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: { fontSize: 18, fontWeight: '700' },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  itemLabel: { fontSize: 15 },
  itemValue: { fontSize: 15, fontWeight: '600' },
  empty: { fontSize: 15 },
});
