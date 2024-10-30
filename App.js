import { useState } from 'react';
import ImageInputList from './app/components/ImageInputList';
import ListingEditScreen from './app/screens/ListingEditScreen';

export default function App() {
  const [imageUris, setImageUris] = useState([]);
  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };
  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((image) => image !== uri));
  };
  return (
    <ImageInputList
      imageUris={imageUris}
      onAddImage={handleAdd}
      onRemoveImage={handleRemove}
    />
  );
}
