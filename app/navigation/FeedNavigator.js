import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import routes from './routes';

const FeedNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.LISTING} component={ListingsScreen} />
      <Stack.Screen
        name={routes.LISTING_DETAILS}
        component={ListingDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
