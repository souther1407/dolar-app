import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";
import Text from "./components/atoms/Text/Text";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/molecules/LoadingScreen/LoadingScreen";
import { LinearGradient } from "expo-linear-gradient";

import { GLOBALS } from "./globals";
export default function App() {
  const [cotizacion, setCottizacion] = useState({ venta: "", compra: "" });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("https://dolarapi.com/v1/dolares/blue")
      .then((response) => response.json())
      .then((data) =>
        setCottizacion({ venta: data.venta, compra: data.compra })
      )
      .finally(() => setLoading(false));
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
      {loading && <LoadingScreen />}
      <Text type={"title"} bold>
        Bievenidos :D
      </Text>
      <View style={styles.cotizacionContainer}>
        <Text bold type={"subtitle"}>
          Compra:{" "}
        </Text>
        <Text bold color="green" type={"title"}>
          {cotizacion.compra}
        </Text>
        <View style={{ paddingVertical: 8, width: 1, height: 1 }}></View>
        <Text bold type={"subtitle"}>
          Venta:{" "}
        </Text>
        <Text bold color="green" type={"title"}>
          {cotizacion.venta}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GLOBALS.colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
  cotizacionContainer: {
    marginTop: 16,
    backgroundColor: GLOBALS.colors.lightBlack,
    padding: 16,
    alignItems: "center",
    borderRadius: 8,
  },
});
