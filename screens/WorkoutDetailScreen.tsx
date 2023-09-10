import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect } from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { getWorkoutBySlug } from "../storage/workout";
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";
import PressableText from "../components/styled/PressableText";

type DetailParams = {
  route: {
    params: {
      slug: string;
    };
  };
};

type Navigation = NativeStackHeaderProps & DetailParams;

const WorkoutDetailScreen = ({ route }: Navigation) => {
  const workout = useWorkoutBySlug(route.params.slug);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{workout?.name}</Text>
      <PressableText text={"Check Sequence"} onPress={()=>{alert("Opening Modal")}}/>
    </View>
  );
};

export default WorkoutDetailScreen;

const styles = StyleSheet.create({
  container: { marginTop: 30, flex: 1 },
  header: {
    fontFamily: "montserratBold",
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
});
