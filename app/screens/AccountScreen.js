import React from 'react';
import ListItem from '../components/ListItem';
import { StyleSheet, View, FlatList } from 'react-native';
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeprator from '../components/ListItemSeprator';

const menuItems = [
  {
    title: 'My listings',
    icon: { name: 'format-list-bulleted', backgroundColor: colors.primary },
  },
  {
    title: 'My messages',
    icon: { name: 'email', backgroundColor: colors.secondary },
  },
];

export default function AccountScreen() {
  return (
    <View>
      <View style={styles.container}>
        <ListItem
          title="Alireza amb"
          subTitle="ababaei78@gmail.com"
          image={require('../assets/alireza.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={ListItemSeprator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponenet={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="log out"
        IconComponenet={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 20 },
});
