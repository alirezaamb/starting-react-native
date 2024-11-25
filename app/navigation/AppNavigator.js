import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AccountScreen from '../screens/AccountScreen';
import ListingEditScreen from '../screens/ListingEditScreen';
import ListingsScreen from '../screens/ListingsScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigation';
import NewListingButton from './NewListingButton';
import routes from './routes';

const AppNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <GestureHandlerRootView>
      <Tab.Navigator>
        <Tab.Screen
          name={routes.FEED}
          component={FeedNavigator}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialCommunityIcons name="home" size={size} color={color} />
              );
            },
          }}
        />
        <Tab.Screen
          name={routes.LISTING_EDIT}
          component={ListingEditScreen}
          options={({ navigation }) => ({
            tabBarButton: () => (
              <NewListingButton
                onPress={() => navigation.navigate(routes.LISTING_EDIT)}
              />
            ),

            headerTitleStyle: {},
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialCommunityIcons
                  name="plus-circle"
                  size={size}
                  color={color}
                />
              );
            },
          })}
        />
        <Tab.Screen
          name={routes.ACCOUNT}
          component={AccountNavigator}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialCommunityIcons
                  name="account"
                  size={size}
                  color={color}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </GestureHandlerRootView>
  );
};

export default AppNavigator;
