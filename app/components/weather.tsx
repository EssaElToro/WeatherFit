import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import axios from "axios";
import { Float } from "react-native/Libraries/Types/CodegenTypes";

interface WeatherscreenProps {
  navigation: any;
}

type Weather = {
  resolvedAddress: string;
  adress: string;
  description: string;
  days: [
    {
      datetime: String;
      tempmax: Float;
      tempmin: Float;
      temp: Float;
      feelslikemax: Float;
      feelslikemin: Float;
      feelslike: Float;
    }
  ];
};

const Weatherscreen: React.FC<WeatherscreenProps> = ({ navigation }) => {
  const [weather, setWeather] = useState<Weather | any>(null);

  useEffect(() => {
    const init = async () => {
      const api = axios.create({
        baseURL: "https://weather.visualcrossing.com",
      });
      try {
        const response = await api.get(
          "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Warsaw?unitGroup=metric&key=XKCPHSC8C8G65P9FB2Z2UKMQX&contentType=json"
        );

        if (response.status === 200) {
          const resolvedAddress = response.data.resolvedAddress;
          const address = response.data.address;
          const days = response.data.days;
          setWeather({
            resolvedAddress,
            address,
            days,
          });
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    init();
  }, []);

  return (
    <View style={styles.container}>
      {weather && (
        <View>
          <Text style={styles.adress}>{weather.resolvedAddress}</Text>
          <Text style={styles.datetime}>{weather.days[0].datetime}</Text>
          <Text style={styles.temperature}>{weather.days[0].temp}°C</Text>
          <Text style={styles.description}>{weather.days[0].description}</Text>
          <Text style={styles.temperatureM}>
            Max : {weather.days[0].tempmax}°C / Min: {weather.days[0].tempmin}°C
          </Text>
          <Text style={styles.temperatureM}>
            Feels like: {weather.days[0].feelslike}°C
          </Text>
          <Text style={styles.otherDays}>Other days:</Text>
          <Text style={styles.temperatureM}>
            {weather.days[1].datetime} = {weather.days[1].temp}°C
          </Text>
          <Text style={styles.temperatureM}>
            {weather.days[2].datetime} = {weather.days[2].temp}°C
          </Text>
          <Text style={styles.temperatureM}>
            {weather.days[3].datetime} = {weather.days[3].temp}°C
          </Text>
          <Text style={styles.temperatureM}>
            {weather.days[4].datetime} = {weather.days[4].temp}°C
          </Text>
          <Text style={styles.temperatureM}>
            {weather.days[5].datetime} = {weather.days[5].temp}°C
          </Text>
          <Text style={styles.temperatureM}>
            {weather.days[6].datetime} = {weather.days[6].temp}°C
          </Text>
          <Text style={styles.temperatureM}>
            {weather.days[7].datetime} = {weather.days[7].temp}°C
          </Text>
        </View>
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Outfits")}
        >
          <Text style={styles.buttonText}>Outfits</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#07AEE6",
  },
  adress: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 50,
    color: "white",
  },
  datetime: {
    fontSize: 18,
    marginBottom: 10,
    color: "white",
  },
  temperature: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  temperatureM: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  description: {
    fontSize: 20,
    color: "white",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: "white",
    padding: 10,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    marginTop: 60,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#07AEE6",
  },
  otherDays: {
    fontSize: 20,
    color: "white",
    marginTop: 50,
  },
});

export default Weatherscreen;
