import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText/AppText';

function Card({ title, price, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.details}>
        <AppText>{title}</AppText>
        <AppText>${price}</AppText>
      </View>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  image: { width: '100%', height: 200 },
  details: {
    padding: 20,
  },
});
