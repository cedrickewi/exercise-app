import { View, Text, Button } from "react-native";
import { useEffect } from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function PlannerScreen({ navigation }: any) {

  useEffect(() => {
    console.log("Rendering HomeScreen");
  }, []);

  return (
    <View>
      <Text>I am Planner Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
