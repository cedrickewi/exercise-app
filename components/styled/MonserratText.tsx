import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const MonserratText = (props:Text["props"]) => {
  return <Text {...props} style={[{ fontFamily: "montserrat" },props.style]} />;
};

const styles = StyleSheet.create({});
