import React from 'react';
import { FlatList, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { CATEGORIES } from "../data/dummy-data";


// Note: Any component mapped to identifiers in navigators gets the "navigation" props
const CategoriesScreen = (props) => {

  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity style={styles.gridItem} onPress={() => {
        props.navigation.navigate({routeName: "CategoryMeals"})
      }}>
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
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
  headerTitle: "Meal Categories",
  headerStyle: {
    backgroundColor: "red"
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default CategoriesScreen;
