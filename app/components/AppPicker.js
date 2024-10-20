import { useState } from 'react';
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import AppText from './AppText/AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';

function AppPicker({ icon, placeholder, items, onSelectItem, selectedItem }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          setIsVisible((c) => !c);
        }}
      >
        <View style={styles.constainer}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.lable : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name={'chevron-down'}
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={isVisible} animationType="slide">
        <Screen>
          <Button title="close" onPress={() => setIsVisible((c) => !c)} />
          <FlatList
            data={items}
            renderItem={({ item }) => (
              <PickerItem
                lable={item.lable}
                onPress={() => {
                  onSelectItem(item), setIsVisible((c) => !c);
                }}
              />
            )}
            keyExtractor={(item) => item.value.toString()}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
  },

  icon: { marginRight: 10 },
  text: { flex: 1 },
});
export default AppPicker;
