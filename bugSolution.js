```javascript
import React, { memo } from 'react';
import { FlatList, View, Text, Image } from 'react-native';

const ItemComponent = React.memo(({ item }) => {
  // ... some complex calculation or data fetching based on item
  return (
    <View>
      <Text>{item.name}</Text>
      <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }}/>
    </View>
  );
});

const MyFlatList = () => {
  const data = [/* ... your data array ...*/ ];

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ItemComponent item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MyFlatList;
```
By using `React.memo`, the `ItemComponent` will only re-render if its props change.  This prevents unnecessary re-renders, thus improving performance significantly.