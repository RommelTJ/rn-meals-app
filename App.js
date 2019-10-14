import React, {useState} from 'react';
import * as Font from 'expo-font';
import { AppLoading } from "expo";
import { useScreens } from "react-native-screens";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import MealsNavigator from "./navigation/MealsNavigator";
import mealsReducer from "./store/reducers/meals";


useScreens();


const rootReducer = combineReducers({
  meals: mealsReducer
});
const store = createStore(rootReducer);


const fetchFonts = async () => {
  await Font.loadAsync({
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
      onError={(err) => console.log(err)}
    />;
  }

  return (
    <Provider store={store}>
      <MealsNavigator/>
    </Provider>
  );
}
