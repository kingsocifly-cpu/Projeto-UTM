import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Card({ theme, style, children }) {
  return (
    <View
      style={[
        styles.card,
        { backgroundColor: theme.card, borderColor: theme.borderSoft },
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 18,
  },
});
