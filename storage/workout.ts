import { containskey, getData, removeItem, storeData } from "./index";
import data from "../data.json";
import { Workout } from "../types/data";

export const getWorkouts = async (): Promise<Workout[]> => {
  const workouts = await getData("workout-data");
  return workouts;
};

export const getWorkoutBySlug = async (slug: string): Promise<Workout> => {
  const workouts = await getWorkouts();
  const workout = workouts.filter((workout) => workout.slug === slug)[0];
  return workout;
};

export const initWorkouts = async () => {
  const hasworkouts = await containskey("workout-data");
  if (!hasworkouts) {
    await storeData("workout-data", data);
    return true;
  }

  return false;
};

export const clearWorkouts = async () => {
  await removeItem("workout-data");
};
