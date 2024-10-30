import React from 'react';
import { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import {
  Alert,
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Screen from './Screen';
import colors from '../config/colors';

function ImageInput({ imageUri, onChangeImage }) {
  const [modalVisible, setModalVisible] = useState(false);
  const requestFunction = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert('You need to enable permission to access the library');
    }
  };

  useEffect(() => {
    requestFunction();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.canceled) onChangeImage(result.assets[0].uri);
    } catch (error) {
      console.log('Error is occured', error);
    }
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert('Delete', 'Are you sure you want to delete this image', [
        {
          text: 'No',
        },
        {
          text: 'Yes',
          onPress: () => onChangeImage(null),
          style: 'destructive',
        },
      ]);
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
          {!imageUri && (
            <View
              style={{
                display: imageUri ? 'none' : 'flex',
              }}
            >
              <MaterialCommunityIcons
                name="camera"
                size={50}
                color={colors.medium}
                onPress={selectImage}
              />
            </View>
          )}
          {imageUri && (
            // <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <Image source={{ uri: imageUri }} style={styles.imageInput} />
            // </TouchableWithoutFeedback>
          )}
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="fade" visible={modalVisible}>
        <Screen>
          <Text style={styles.modalTitle}>
            Are you sure you want to delete this photo ?
          </Text>
          <View style={styles.modalButtonContainer}>
            <Button
              title="Delete"
              color="red"
              onPress={() => {
                setImageUri(null);
                setModalVisible(false);
              }}
            />
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
          </View>
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.light,
    borderRadius: 15,
    width: 100,
    height: 100,
  },
  imageInput: { borderRadius: 10, width: '100%', height: '100%' },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginTop: 20,
  },
  modalTitle: { textAlign: 'center', fontWeight: '600', fontSize: 18 },
});

export default ImageInput;
