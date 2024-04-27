import { Platform, View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "@/screens/home/_layout";

export default function HomeLayout() {
  return (
    <View style={styles.container}>
      <HomeScreen />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "dark"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#24243D",
  },
});
