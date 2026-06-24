import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FilterSelect({ theme, label, value, onPress, style }) {
  return (
    <View style={[styles.wrap, style]}>
      <Text style={[styles.label, { color: theme.textMuted }]} numberOfLines={1}>
        {label}
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={[styles.field, { backgroundColor: theme.inputBg, borderColor: theme.border }]}
      >
        <Text style={[styles.value, { color: theme.text }]} numberOfLines={1}>
          {value}
        </Text>
        <Ionicons name="chevron-down" size={18} color={theme.textMuted} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginBottom: 16 },
  label: { fontSize: 14, marginBottom: 8 },
  field: {
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  value: { fontSize: 15, flexShrink: 1, marginRight: 8 },
});
