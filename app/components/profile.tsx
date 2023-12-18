import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

interface ProfilescreenProps {
  navigation: any;
}

const Profilescreen: React.FC<ProfilescreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/klodnicki.png")}
          style={styles.avatar}
        />
        <Text style={styles.username}>Jakub Kłodnicki</Text>
        <Text style={styles.bio}>Jem sobie bananka a co?</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.sectionContent}>Pozdrawiam Tomasza Ogrodnika</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.buttonE}
          onPress={() => navigation.navigate("EditProfile")}
        >
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate("Outfits")}>
          <Text style={styles.buttonText}>Outfits</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Weather")}>
          <Text style={styles.buttonText}>Weather</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    paddingVertical: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  bio: {
    fontSize: 16,
    color: "#555",
    marginTop: 5,
  },
  body: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: "#333",
  },
  footer: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#3498db",
    padding: 25,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  buttonE: {
    backgroundColor: "#3498db",
    padding: 20,
    borderRadius: 25,
    marginTop: 25,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Profilescreen;
