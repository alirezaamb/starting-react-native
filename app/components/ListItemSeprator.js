import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import colors from '../config/colors';

export default function ListItemSeprator() {
  return <View style={style.separator} />;
}

const style = StyleSheet.create({
  separator: { width: '100%', height: 1, backgroundColor: colors.light },
});
