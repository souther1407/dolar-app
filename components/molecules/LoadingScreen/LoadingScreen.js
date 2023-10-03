import React from "react";
import { View } from "react-native";
import Spinner from "../../atoms/Spinner/Spinner";
import { styles } from "./styles";
const LoadingScreen = () => {
  return (
    <View style={styles.screen}>
      <Spinner size={80} />
    </View>
  );
};

export default LoadingScreen;
