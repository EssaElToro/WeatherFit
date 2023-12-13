import React from "react";
import { View, Text, Button } from "react-native";

interface ProfilescreenProps {
  navigation: any;
}

const Profilescreen: React.FC<ProfilescreenProps> = ({ navigation }) => {
  return (
    <View>
      <Button title="Outfits" onPress={() => navigation.navigate("Outfits")} />
      <Button title="Weather" onPress={() => navigation.navigate("Weather")} />
    </View>
  );
};

export default Profilescreen;
