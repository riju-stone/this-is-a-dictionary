import { View, StyleSheet } from "react-native";
import React from "react";
import CardComponent from "../card/card";

const CardStackComponent = () => {
  return (
    <View style={styles.cardStackContainer}>
      <CardComponent stackPos={0} />
      <CardComponent stackPos={1} />
      <CardComponent stackPos={2} />
      <CardComponent stackPos={3} />
    </View>
  );
};
const styles = StyleSheet.create({
  cardStackContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default CardStackComponent;
