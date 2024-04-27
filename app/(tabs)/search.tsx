import { StyleSheet, Platform, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import SearchScreen from "@/screens/search/_layout";

export default function SearchLayout() {
  return (
    <View style={styles.container}>
      <SearchScreen />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
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
