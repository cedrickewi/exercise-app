import { useEffect, useState } from "react";
import { Workout } from "../types/data";
import { getWorkoutBySlug, getWorkouts } from "../storage/workout";

export const useWorkoutBySlug = (slug: string) => {
  const [workout, setWorkout] = useState<Workout>();

  useEffect(() => {
    const getData = async () => {
      const _workout = await getWorkoutBySlug(slug);
      setWorkout(_workout);
    };
    getData();
  }, []);

  return workout;
};
