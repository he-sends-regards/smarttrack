import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";

import Navbar from "./components/navbar/navbar";
import { AppRoute } from "./const";
import HomeScreen from "./screens/home-screen/home-screen";
import Menu from "./screens/menu/menu";

const Stack = createStackNavigator();

const App = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <SafeAreaView>
      <NavigationContainer>
        <Navbar isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />

        {isMenuOpened ? (
          <Menu />
        ) : (
          <Stack.Navigator initialRouteName={AppRoute.DASHBOARD}>
            <Stack.Screen name={AppRoute.DASHBOARD} component={HomeScreen} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
