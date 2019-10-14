import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealList from "../components/MealList";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import {useSelector} from "react-redux";

const FavoritesScreen = (props) => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);

  if (!favMeals || favMeals.length === 0) {
    return (
      <View style={styles.content}>
        <Text>No Favorite Meals Found! Start adding some.</Text>
      </View>
    );
  }

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = (navData) => {
  return (
    {
      headerTitle: "Your Favorites",
      headerLeft: (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => navData.navigation.toggleDrawer()}
          />
        </HeaderButtons>
      )
    }
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavoritesScreen;
