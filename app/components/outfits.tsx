import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

interface OutfitsscreenProps {
  navigation: any;
}

const Outfitsscreen: React.FC<OutfitsscreenProps> = ({ navigation }) => {
  return (
    <View style={styles.Header}>
      <Text style={styles.text}>Match your outfit</Text>
      <Text style={styles.text}>Soon...</Text>
      <View style={styles.Button}>
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

const styles = StyleSheet.create({
  Button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  Header: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
  },
});

export default Outfitsscreen;
