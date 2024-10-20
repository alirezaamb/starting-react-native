import Screen from './app/components/Screen';
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';
import { useState } from 'react';

const categories = [
  { lable: 'furniture', value: 1 },
  { lable: 'clothing', value: 2 },
  { lable: 'camera', value: 3 },
];

export default function App() {
  const [category, setCategory] = useState('');
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="category"
      />
      <AppTextInput icon="email" placeholder="email" />
    </Screen>
  );
}
