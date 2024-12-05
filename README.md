# React Native FlatList Performance Issue

This repository demonstrates a common performance problem in React Native's FlatList component when rendering complex list items without proper memoization.  The `bug.js` file shows an example of an inefficiently rendered FlatList, leading to jerky scrolling and performance issues with large datasets. The `bugSolution.js` file provides a solution using `React.memo` for optimized rendering.

## How to Reproduce

1. Clone the repository.
2. Run `npm install` or `yarn install`.
3. Run the app on your device or emulator.
4. Scroll the FlatList.  Observe the performance difference in the original versus optimized versions.  For a noticeable impact, increase the number of items in the data array.

## Solution

The key improvement is the use of `React.memo` to prevent unnecessary re-renders of the `ItemComponent`. This greatly reduces the rendering overhead, improving scrolling performance. 