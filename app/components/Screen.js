import React from 'react';
import Constasns from 'expo-constants';
import { SafeAreaView, StyleSheet, View } from 'react-native';

function Screen({ children }) {
  return (
    <SafeAreaView style={styles.screen}>
      <View>{children}</View>
    </SafeAreaView>
  );
}

export default Screen;

const styles = StyleSheet.create({
  screen: { paddingTop: Constasns.statusBarHeight },
});
