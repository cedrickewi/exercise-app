import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import data from "../data.json";
import { Workout } from "../types/data";
import WorkoutItem from "../components/WorkoutItem";

export default function HomeScreen({ navigation }: any) {


  return (
    <View style={styles.container}>
      <Text style={styles.header}>New Workouts</Text>
      <FlatList
        data={data as Array<Workout>}
        keyExtractor={(item) => item.slug}
        renderItem={WorkoutItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize:20,
    marginBottom:20,
    fontWeight: "bold"
  }
});
