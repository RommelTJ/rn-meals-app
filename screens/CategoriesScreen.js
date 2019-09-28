import React from 'react';
import { FlatList, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";


// Note: Any component mapped to identifiers in navigators gets the "navigation" props
const CategoriesScreen = (props) => {

  const renderGridItem = (itemData) => {
    return <CategoryGridTile />;
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories"
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoriesScreen;
