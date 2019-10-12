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
      const exitsIndex = state.favoriteMeals.findIndex((meal) => meal.id === action.mealId);
      if(exitsIndex >= 0) {
        return { ...state, favoriteMeals: state.favoriteMeals.filter((meal) => meal.id !== action.mealId) }
      } else {
        const favMeal = state.meals.find((meal) => meal.id === action.mealId);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(favMeal) };
      }
    default:
      return state;
  }
};

export default mealsReducer;
