import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { View } from 'react-native';
import AppText from './AppText/AppText';
import colors from '../config/colors';

function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.sibTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: { borderRadius: 35, width: 70, height: 70, marginRight: 10 },
  title: { fontWeight: '500' },
  sibTitle: { color: colors.medium },
});
