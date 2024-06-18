import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const CardComponent = ({ stackPos }: { stackPos: number }) => {
  return (
    <View
      style={{
        zIndex: stackPos,
        width: `${85 + stackPos * 2}%`,
        bottom: `-${stackPos * 2}%`,
        ...styles.wordCardContainer,
      }}
    >
      <Text>Word Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wordCardContainer: {
    position: "absolute",
    height: "80%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.primaryColor,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0.4 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
  },
});

export default CardComponent;
