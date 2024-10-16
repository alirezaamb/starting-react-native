import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';
import ListItemSeprator from '../components/ListItemSeprator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialmessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/mosh.jpg'),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialmessages);
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
      />
    </Screen>
  );
}

export default MessagesScreen;

const styles = StyleSheet.create({});
