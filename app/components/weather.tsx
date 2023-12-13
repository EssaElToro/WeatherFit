import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

interface WeatherscreenProps {
  navigation: any;
}

const Weatherscreen: React.FC<WeatherscreenProps> = ({ navigation }) => {
  const [weatherData, setWeatherData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/weather?latitude=52.2298&longitude=21.0118"
        );

        const data = await response.json();
        console.log("Weather data:", data);
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <View>
        {weatherData ? (
          <View>
            <Text>Temperature: {weatherData.current_weather.temperature}</Text>
            <Text>Condition: {weatherData.current_weather.weathercode}</Text>
            {/* Add more information as needed */}
          </View>
        ) : (
          <Text>Loading weather data...</Text>
        )}
      </View>
      <View>
        <Button
          title="Outfits"
          onPress={() => navigation.navigate("Outfits")}
        />
        <Button
          title="Profile"
          onPress={() => navigation.navigate("Profile")}
        />
      </View>
    </View>
  );
};

export default Weatherscreen;
