import { StyleSheet, Text, TextInput } from 'react-native';
import Screen from './app/components/Screen';
import { useState } from 'react';
import AppTextInput from './app/components/AppTextInput';

export default function App() {
  const [firstName, setFirstName] = useState('');
  return (
    <Screen>
      <AppTextInput icon="email" placeholder="email" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f4f4',
    padding: 20,
    paddingTop: 100,
  },
  cardContainer: {
    borderRadius: 20,
  },
  cardPhoto: { width: '100%', height: 70, objectFit: 'cover' },
});
