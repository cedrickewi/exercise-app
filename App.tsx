import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import Navigation from "./navigation";
import useCachedResources from "./hooks/useCachedResources";

export default function App() {
  const isLoaded = useCachedResources();

  if (isLoaded) {
    return (
      <>
        <Navigation />
        <StatusBar style="auto" />
      </>
    );
  } else {
    return null;
  }
}
