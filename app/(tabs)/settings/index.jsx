import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";

const index = () => {
  useEffect(() => {
    NavigationBar.setPositionAsync("absolute");
    NavigationBar.setBackgroundColorAsync("#0C0E12");
  }, []);

  return (
    <SafeAreaView>
      <View style={settingsPageStyles.settingsPageWrapper}>
        <StatusBar
          style="light"
          backgroundColor="#0C0E12"
          animated={true}
          translucent={true}
        />
        <Text>Settings Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const settingsPageStyles = StyleSheet.create({
  settingsPageWrapper: {
    height: "100%",
    backgroundColor: "#0C0E12",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default index;
