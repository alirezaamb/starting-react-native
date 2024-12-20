import React from 'react';
import AppText from './AppText/AppText';
import { StyleSheet, TouchableOpacity } from 'react-native';

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: { padding: 20, color: 'black' },
});
export default PickerItem;
