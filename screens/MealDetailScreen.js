import React from 'react';
import { ScrollView, Image, View, Text, StyleSheet, Button } from 'react-native';
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <ScrollView>
      <Image />
      <View style={{...styles.mealRow, ...styles.mealDetail}}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      <Text>List of ingredients...</Text>
      <Text style={styles.title}>Steps</Text>
      <Text>List of steps...</Text>
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='Favorite' iconName='ios-star' onPress={() => {console.log('mark as favorite!')}} />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealDetailScreen;
