import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import {Provider} from "react-redux";

import {navigationRef} from "../routes/root-navigation";
import {AppRoute} from "./const";
import Alerts from "./screens/alerts/alerts";
import Dashboard from "./screens/dashboard/dashboard";
import Menu from "./screens/menu/menu";
import Sequence from "./screens/sequence/sequence";
import Stuff from "./screens/stuff/stuff";
import store from "./store/store";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName={AppRoute.DASHBOARD}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name={AppRoute.DASHBOARD} component={Dashboard} />
          <Stack.Screen name={AppRoute.STUFF} component={Stuff} />
          <Stack.Screen name={AppRoute.ALERTS} component={Alerts} />
          <Stack.Screen name={AppRoute.SEQUENCE} component={Sequence} />
          <Stack.Screen name="Menu" component={Menu} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
