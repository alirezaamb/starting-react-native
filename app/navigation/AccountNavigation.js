import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';
import routes from './routes';

const AccountNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.ACCOUNT}
        component={AccountScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
