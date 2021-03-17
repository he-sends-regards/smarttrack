import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import React from "react";

import {AppRoute} from "./const";
import {navigationRef} from "./routes/root-navigation";
import HomeScreen from "./screens/home-screen/home-screen";
import Menu from "./screens/menu/menu";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={AppRoute.DASHBOARD}>
        <Stack.Screen name={AppRoute.DASHBOARD} component={HomeScreen} />
        <Stack.Screen name="menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
