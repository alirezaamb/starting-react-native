import React from 'react';
import AppText from './AppText/AppText';
import { StyleSheet, TouchableOpacity } from 'react-native';

function PickerItem({ lable, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{lable}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: { padding: 20 },
});
export default PickerItem;
