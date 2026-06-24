import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function Header({ theme, title, isDark, onToggleTheme, topInset }) {
  return (
    <View
      style={[
        styles.header,
        { backgroundColor: theme.headerBg, paddingTop: topInset + 8, borderBottomColor: theme.borderSoft },
      ]}
    >
      <View style={styles.logo}>
        <View style={[styles.logoMark, { backgroundColor: theme.primary }]}>
          <Ionicons name="trending-up" size={18} color="#fff" />
        </View>
        <Text style={[styles.logoText, { color: theme.text }]} numberOfLines={1}>
          UTM
        </Text>
      </View>

      <Text style={[styles.title, { color: theme.text }]}>{title}</Text>

      <View style={styles.actions}>
        <TouchableOpacity hitSlop={10} style={styles.iconBtn}>
          <Feather name="edit" size={20} color={theme.text} />
        </TouchableOpacity>
        <TouchableOpacity hitSlop={10} style={styles.iconBtn} onPress={onToggleTheme}>
          <Ionicons name={isDark ? 'moon-outline' : 'sunny-outline'} size={22} color={theme.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  logo: { flexDirection: 'row', alignItems: 'center', width: 110 },
  logoMark: {
    width: 30,
    height: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  logoText: { fontSize: 18, fontWeight: '800', letterSpacing: 0.5 },
  title: { fontSize: 18, fontWeight: '600' },
  actions: { flexDirection: 'row', alignItems: 'center', width: 110, justifyContent: 'flex-end' },
  iconBtn: { padding: 6, marginLeft: 6 },
});
