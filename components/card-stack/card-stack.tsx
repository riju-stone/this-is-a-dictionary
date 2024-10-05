import { View, StyleSheet } from "react-native";
import React from "react";
import { useSharedValue } from "react-native-reanimated";
import CardComponent from "../card/card";

const cardData = [
  {
    word: "accept",
    pronounciation: "Akcept",
    meaning: "To consider something",
  },
  {
    word: "accept",
    pronounciation: "Akcept",
    meaning: "To consider something",
  },
  {
    word: "accept",
    pronounciation: "Akcept",
    meaning: "To consider something",
  },
  {
    word: "accept",
    pronounciation: "Akcept",
    meaning: "To consider something",
  },
];

const CardStackComponent = () => {
  const animatedValue = useSharedValue(0);
  const currentIndex = useSharedValue(0);
  const previousIndex = useSharedValue(0);

  return (
    <View style={styles.cardStackContainer}>
      {cardData.map((data, index) => {
        return (
          <CardComponent
            key={`card-${index}`}
            stackPos={index}
            currentIndex={currentIndex}
            previousIndex={previousIndex}
            animatedValue={animatedValue}
            cardData={data}
            dataLength={cardData.length}
          />
        );
      })}
      {/* <CardComponent stackPos={0} /> */}
      {/* <CardComponent stackPos={1} /> */}
      {/* <CardComponent stackPos={2} /> */}
      {/* <CardComponent stackPos={3} /> */}
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
