import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The category meal screen!</Text>
      <Button title="Go to Meal Details!" onPress={() => props.navigation.navigate({routeName: "MealDetail"})} />
      <Button title="Go Back" onPress={() => props.navigation.pop()} />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(x => x.id === catId);
  return {
    headerTitle: selectedCategory.title
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;
