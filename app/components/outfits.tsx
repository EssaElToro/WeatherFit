import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

interface OutfitsscreenProps {
  navigation: any;
}

const Outfitsscreen: React.FC<OutfitsscreenProps> = ({ navigation }) => {
  return (
    <View>
      <View>
        <Button
          title="Weather"
          onPress={() => navigation.navigate("Weather")}
        />
        <Button
          title="Profile"
          onPress={() => navigation.navigate("Profile")}
        />
      </View>
    </View>
  );
};

export default Outfitsscreen;
