import { StyleSheet } from "react-native";
import { GLOBALS } from "../../../globals";
export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    zIndex: 10000,
    position: "absolute",
    backgroundColor: GLOBALS.colors.black,
  },
});
