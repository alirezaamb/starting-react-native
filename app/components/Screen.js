import React from 'react';
import Constasns from 'expo-constants';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function Screen({ children, style }) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={[styles.screen, style]}>
        <View>{children}</View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default Screen;

const styles = StyleSheet.create({
  screen: { paddingTop: Constasns.statusBarHeight, flex: 1 },
});
