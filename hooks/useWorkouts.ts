import { useEffect, useState } from "react";
import { Workout } from "../types/data";
import { getWorkouts } from "../storage/workout";
import { useIsFocused } from "@react-navigation/native";

export const useWorkouts = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    const getData = async () => {
      //   console.log("Getting Data");

      const _workouts = await getWorkouts();
      setWorkouts(_workouts);
    };
    getData();
  }, [isFocused]);
  return workouts;
};
