import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { darkTheme, lightTheme } from './src/theme';
import Header from './src/components/Header';
import BottomTabBar from './src/components/BottomTabBar';
import DashboardScreen from './src/screens/DashboardScreen';

function Placeholder({ theme, label }) {
  return (
    <View style={[styles.placeholder, { backgroundColor: theme.bg }]}>
      <Ionicons name="construct-outline" size={48} color={theme.textMuted} />
      <Text style={[styles.placeholderText, { color: theme.textMuted }]}>{label}</Text>
    </View>
  );
}

function AppContent() {
  const insets = useSafeAreaInsets();
  const [isDark, setIsDark] = useState(true);
  const [tab, setTab] = useState('dashboard');

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <View style={[styles.root, { backgroundColor: theme.bg }]}>
      <StatusBar style={isDark ? 'light' : 'dark'} />

      <Header
        theme={theme}
        title="Principal"
        isDark={isDark}
        onToggleTheme={() => setIsDark((v) => !v)}
        topInset={insets.top}
      />

      {tab === 'dashboard' ? (
        <DashboardScreen theme={theme} bottomInset={insets.bottom} />
      ) : (
        <Placeholder theme={theme} label="Em breve" />
      )}

      <BottomTabBar
        theme={theme}
        active={tab}
        onChange={setTab}
        bottomInset={insets.bottom}
      />
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  placeholder: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  placeholderText: { marginTop: 12, fontSize: 16 },
});
