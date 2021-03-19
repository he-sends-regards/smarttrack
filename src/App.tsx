import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import React from "react";

import {navigationRef} from "../routes/root-navigation";
import {AppRoute} from "./const";
import Allerts from "./screens/allerts/allerts";
import Dashboard from "./screens/dashboard/dashboard";
import Menu from "./screens/menu/menu";
import Sequence from "./screens/sequence/sequence";
import Stuff from "./screens/stuff/stuff";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={AppRoute.DASHBOARD}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={AppRoute.DASHBOARD} component={Dashboard} />
        <Stack.Screen name={AppRoute.STUFF} component={Stuff} />
        <Stack.Screen name={AppRoute.ALLERTS} component={Allerts} />
        <Stack.Screen name={AppRoute.SEQUENCE} component={Sequence} />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
