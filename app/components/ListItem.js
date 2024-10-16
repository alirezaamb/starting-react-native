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
  IconComponenet,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponenet}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.sibTitle}>{subTitle}</AppText>}
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
    backgroundColor: colors.white,
  },
  image: { borderRadius: 35, width: 70, height: 70 },
  title: { fontWeight: '500' },
  sibTitle: { color: colors.medium },
  detailsContainer: { marginLeft: 10, justifyContent: 'center' },
});
