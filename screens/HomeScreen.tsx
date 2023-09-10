import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { Workout } from "../types/data";
import WorkoutItem from "../components/WorkoutItem";
import { MonserratText } from "../components/styled/MonserratText";
import { useEffect, useState } from "react";
import { getWorkouts } from "../storage/workout";
import { useWorkouts } from "../hooks/useWorkouts";

export default function HomeScreen({ navigation }: any) {
  const workouts = useWorkouts();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>New Workouts</Text>
      <MonserratText style={{ fontSize: 20 }}>New WorkOuts</MonserratText>

      <FlatList
        data={workouts}
        keyExtractor={(item) => item.slug}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() =>
                navigation.navigate("WorkoutDetail", { slug: item.slug })
              }
            >
              <WorkoutItem item={item} />
            </Pressable>
          );
        }}
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
    fontFamily: "montserratBold",
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
});
