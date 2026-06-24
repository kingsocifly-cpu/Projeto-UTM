import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Pressable, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SelectModal({ theme, visible, title, options, selected, onSelect, onClose }) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <Pressable style={[styles.overlay, { backgroundColor: theme.overlay }]} onPress={onClose}>
        <Pressable style={[styles.sheet, { backgroundColor: theme.menuBg, borderColor: theme.borderSoft }]}>
          <View style={[styles.head, { borderBottomColor: theme.borderSoft }]}>
            <Text style={[styles.title, { color: theme.text }]}>{title}</Text>
            <TouchableOpacity onPress={onClose} hitSlop={10}>
              <Ionicons name="close" size={22} color={theme.textMuted} />
            </TouchableOpacity>
          </View>

          <FlatList
            data={options}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
              const active = item === selected;
              return (
                <TouchableOpacity
                  style={[styles.row, { borderBottomColor: theme.borderSoft }]}
                  onPress={() => onSelect(item)}
                  activeOpacity={0.7}
                >
                  <Text style={[styles.rowText, { color: active ? theme.primary : theme.text }]}>
                    {item}
                  </Text>
                  {active ? <Ionicons name="checkmark" size={20} color={theme.primary} /> : null}
                </TouchableOpacity>
              );
            }}
          />
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, justifyContent: 'flex-end' },
  sheet: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: StyleSheet.hairlineWidth,
    maxHeight: '70%',
    paddingBottom: 24,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 18,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title: { fontSize: 17, fontWeight: '700' },
  row: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  rowText: { fontSize: 16 },
});
