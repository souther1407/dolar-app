import React from "react";
import { Text as RNText } from "react-native";
import { styles } from "./styles";
import { GLOBALS } from "../../../globals";
const Text = ({ children, bold, type, color = "white", ...otherProps }) => {
  return (
    <RNText
      style={[
        styles.text,
        styles[type],
        bold && styles.bold,
        { color: GLOBALS.colors[color] },
      ]}
      {...otherProps}
    >
      {children}
    </RNText>
  );
};

export default Text;
