import Screen from './app/components/Screen';
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';
import { useState } from 'react';
import LoginScreen from './app/screens/LoginScreen';
import AccountScreen from './app/screens/AccountScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ListingEditScreen from './app/screens/ListingEditScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
export default function App() {
  return (
    <GestureHandlerRootView>
      <ListingEditScreen />
    </GestureHandlerRootView>
  );
}
