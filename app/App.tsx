import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Button } from "react-native";
import React from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.bitmojiContainer}></View>
      <View style={styles.buttonContainer}>
        <Button title="Weather" onPress={() => {}} />
        <Pressable style={{ flex: 1 }} onPress={() => {}}>
          <Text>addada</Text>
        </Pressable>
        <Button title="Profile" onPress={() => {}} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  bitmojiContainer: {
    flexGrow: 100,
  },
});
