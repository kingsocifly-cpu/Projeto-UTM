import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5, Feather } from '@expo/vector-icons';

const TABS = [
  { key: 'dashboard', lib: 'ion', icon: 'grid-outline' },
  { key: 'facebook', lib: 'fa', icon: 'facebook-f' },
  { key: 'video', lib: 'feather', icon: 'video' },
  { key: 'music', lib: 'ion', icon: 'musical-notes' },
  { key: 'player', lib: 'feather', icon: 'youtube' },
  { key: 'menu', lib: 'feather', icon: 'menu' },
];

function TabIcon({ lib, icon, color, size }) {
  if (lib === 'fa') return <FontAwesome5 name={icon} size={size} color={color} />;
  if (lib === 'feather') return <Feather name={icon} size={size} color={color} />;
  return <Ionicons name={icon} size={size} color={color} />;
}

export default function BottomTabBar({ theme, active, onChange, bottomInset }) {
  return (
    <View
      style={[
        styles.bar,
        {
          backgroundColor: theme.tabBar,
          borderTopColor: theme.borderSoft,
          paddingBottom: Math.max(bottomInset, 10),
        },
      ]}
    >
      {TABS.map((t) => {
        const isActive = t.key === active;
        return (
          <TouchableOpacity
            key={t.key}
            style={styles.tab}
            activeOpacity={0.7}
            onPress={() => onChange(t.key)}
          >
            <TabIcon
              lib={t.lib}
              icon={t.icon}
              size={24}
              color={isActive ? theme.tabActive : theme.tabInactive}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingTop: 12,
  },
  tab: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
