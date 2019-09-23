import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Note: Any component mapped to identifiers in navigators gets the "navigation" props
const CategoriesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The categories screen!</Text>
      <Button title="Go to Meals!" onPress={() => props.navigation.replace("CategoryMeals")} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoriesScreen;
