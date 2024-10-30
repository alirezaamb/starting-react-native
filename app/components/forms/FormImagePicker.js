import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageInputList from '../ImageInputList';
import { useFormikContext } from 'formik';
import ErrorMessage from './ErrorMessage';

function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const handleAdd = (uri) => {
    setFieldValue(name, [...values[name], uri]);
  };
  const handleRemove = (uri) => {
    setFieldValue(
      name,
      values[name].filter((image) => image !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
