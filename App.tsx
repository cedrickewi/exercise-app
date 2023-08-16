import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import Navigation from "./navigation";

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar style="auto"/>
    </>
  );
}
