import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Outfitsscreen from "./components/outfits";
import profilescreen from "./components/profile";
import weatherscreen from "./components/weather";

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Outfits">
        <Stack.Screen
          name="Outfits"
          options={{ title: "Outfits" }}
          component={Outfitsscreen}
        />
        <Stack.Screen name="Profile" component={profilescreen} />
        <Stack.Screen name="Weather" component={weatherscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
