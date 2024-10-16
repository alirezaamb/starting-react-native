import React from 'react';
import { Image, StyleSheet, TouchableHighlight } from 'react-native';
import { View } from 'react-native';
import AppText from './AppText/AppText';
import colors from '../config/colors';
import { Swipeable } from 'react-native-gesture-handler';

export default function ListItem({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.sibTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  image: { borderRadius: 35, width: 70, height: 70, marginRight: 10 },
  title: { fontWeight: '500' },
  sibTitle: { color: colors.medium },
});
