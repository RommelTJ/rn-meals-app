import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
      if (existingIndex >= 0) {
        const updatedFavoriteMeals = [...state.favoriteMeals].splice(existingIndex, 1);
        return {...state, favoriteMeals: updatedFavoriteMeals};
      } else {
        const meal = state.meals.find(meal => meal.id === action.mealId);
        const updatedFavoriteMeals = state.favoriteMeals.concat(meal);
        return {...state, favoriteMeals: updatedFavoriteMeals};
      }
    default:
      return state;
  }
};

export default mealsReducer;
