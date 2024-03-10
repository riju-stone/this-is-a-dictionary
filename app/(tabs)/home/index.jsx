import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";

const index = () => {
  useEffect(() => {
    NavigationBar.setPositionAsync("absolute");
    NavigationBar.setBackgroundColorAsync("rgba(0, 0, 0, 0.005)");
  }, []);

  return (
    <View style={homePageStyles.homePageWrapper}>
      <StatusBar
        style="light"
        backgroundColor="#0C0E12"
        animated={true}
        translucent={true}
      />
      <Text style={homePageStyles.headerText}>Home Screen</Text>
    </View>
  );
};

const homePageStyles = StyleSheet.create({
  homePageWrapper: {
    height: "100%",
    backgroundColor: "#0C0E12",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
  },
});

export default index;
