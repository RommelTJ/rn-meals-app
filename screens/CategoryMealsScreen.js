import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  return (
    <View style={styles.screen}>
      <Text>The category meal screen!</Text>
      <Button title="Go to Meal Details!" onPress={() => props.navigation.navigate({routeName: "MealDetail"})} />
      <Button title="Go Back" onPress={() => props.navigation.pop()} />
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

export default CategoryMealsScreen;
