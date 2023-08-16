import { View, Text, Button } from "react-native";
import { useEffect } from "react";

export default function PlannerScreen({ navigation }: any) {
  useEffect(() => {
    console.log("Rendering HomeScreen");
  }, []);

  return (
    <View>
      <Text>I am Planner Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.push("Home")} />
    </View>
  );
}
