import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';
import ListItemSeprator from '../components/ListItemSeprator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const initialmessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/alireza.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/alireza.jpg'),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialmessages);
  const [refreshing, setRefreshing] = useState(false);
  const deleteHandler = (message) => {
    setMessages(messages.filter((item) => item.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            subTitle={item.description}
            title={item.title}
            onPress={() => console.log('clicked', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => deleteHandler(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeprator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'T2',
              description: 'D2',
              image: require('../assets/alireza.jpg'),
            },
          ]);
        }}
      />
    </Screen>
  );
}

export default MessagesScreen;

const styles = StyleSheet.create({});
