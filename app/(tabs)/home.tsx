import { Platform, View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import CardComponent from "@/components/card/card";

export default function HomeLayout() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      <CardComponent />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#24243D"
  },
});
