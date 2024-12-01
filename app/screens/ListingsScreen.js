import React, { useEffect, useState } from 'react';
import Screen from '../components/Screen';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';
import listingsApi from '../api/listings';
import AppText from '../components/AppText/AppText';
import AppButton from '../components/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';

export default function ListingsScreen({ navigation }) {
  const {
    data: listings,
    error,
    loading,
    request: loadListing,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListing();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>failed to retrive the listings</AppText>
          <AppButton title="retry" onPress={loadListing} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            price={item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 20, backgroundColor: colors.light },
});
