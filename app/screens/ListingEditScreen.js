import React, { useState } from 'react';
import * as yup from 'yup';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import AppFormPicker from '../components/forms/AppFormPicker';
import Screen from '../components/Screen';
import ImageInput from '../components/ImageInput';

const validationSchema = yup.object().shape({
  title: yup.string().required().min(1).label('Title'),
  price: yup.number().required().min(1).max(10000).label('Price'),
  description: yup.string().label('Description'),
  category: yup.object().required().nullable().label('Category'),
});
const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Camera', value: 3 },
];

function ListingEditScreen(props) {
  const [imageUri, setImageUri] = useState();

  return (
    <Screen>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <ImageInput
          imageUri={imageUri}
          onChangeImage={(uri) => setImageUri(uri)}
        />
        <AppFormField name="title" placeholder="Title" />
        <AppFormField name="price" keyboardType="numeric" placeholder="Price" />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
        />
        <AppFormField name="description" placeholder="Description" multiline />
        <SubmitButton title="Submit" />
      </AppForm>
    </Screen>
  );
}

export default ListingEditScreen;
