import { View, Text, StyleSheet } from "react-native";
import React from "react";

const SearchScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Search Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default SearchScreen;
