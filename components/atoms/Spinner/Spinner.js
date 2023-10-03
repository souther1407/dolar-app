import React from "react";
import { ActivityIndicator } from "react-native";
import { GLOBALS } from "../../../globals";

const Spinner = ({ size = "large", color = "green" }) => {
  return <ActivityIndicator size={size} color={GLOBALS.colors[color]} />;
};

export default Spinner;
