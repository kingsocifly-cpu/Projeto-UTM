import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Card from './Card';

export default function MetricCard({ theme, metric }) {
  const valueColor = metric.danger ? theme.danger : theme.text;
  const iconColor = metric.danger ? theme.danger : theme.textMuted;

  return (
    <Card theme={theme} style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={[styles.label, { color: theme.textMuted }]}>{metric.label}</Text>
        {metric.info ? (
          <Ionicons name="information-circle-outline" size={20} color={iconColor} />
        ) : null}
      </View>

      <Text style={[styles.value, { color: valueColor }]}>{metric.value}</Text>

      {metric.report ? (
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.reportBtn, { backgroundColor: theme.primary }]}
        >
          <Ionicons name="clipboard-outline" size={20} color={theme.primaryText} />
        </TouchableOpacity>
      ) : null}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 14,
    minHeight: 96,
    justifyContent: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 15,
    fontWeight: '500',
    flexShrink: 1,
  },
  value: {
    fontSize: 30,
    fontWeight: '700',
    marginTop: 8,
  },
  reportBtn: {
    position: 'absolute',
    right: 14,
    bottom: 14,
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
