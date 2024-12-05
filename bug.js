In React Native, when working with FlatList and rendering large lists of data, you might encounter a performance issue where scrolling becomes jerky or laggy. This is often due to inefficient rendering or updates of list items.  One uncommon cause is improper use of React.memo or useMemo in conjunction with complex item components or dynamic data updates.  For example, if you are not correctly memoizing components based on props that cause re-renders, or if your memoization function doesn't effectively identify if the component's props have changed, this can lead to unnecessary re-renders and performance degradation.

Here's an example of a poorly optimized FlatList item component:

```javascript
const ItemComponent = ({ item }) => {
  // ... some complex calculation or data fetching based on item
  return (
    <View>
      <Text>{item.name}</Text>
      <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }}/>
    </View>
  );
};
```

Without `React.memo` or an effective use of `useMemo`, this component will re-render every time the `FlatList` updates, even if the underlying item data hasn't changed. This can be easily solved by using `React.memo` correctly.