import React from 'react';
import { View, Text } from 'react-native';
import MealList from "../components/MealList";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import {useSelector} from "react-redux";

const FavoritesScreen = (props) => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);

  if (!favMeals || favMeals.length === 0) {
    return (
      <View>
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

export default FavoritesScreen;
