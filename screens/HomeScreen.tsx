import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function HomeScreen({ navigation }: any) {
  useEffect(() => {
    console.log("Rendering HomeScreen");
  }, []);

  return (
    <View>
      <Text>I am Home Screen</Text>
      <Button
        title="Go to Planner"
        onPress={() => navigation.navigate("Planner")}
      />
    </View>
  );
}
