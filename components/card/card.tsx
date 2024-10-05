import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { SharedValue } from "react-native-reanimated";
import Animated, {
  useAnimatedStyle,
  interpolate,
  withTiming,
} from "react-native-reanimated";
import {
  FlingGestureHandler,
  Directions,
  State,
} from "react-native-gesture-handler";

type CardData = {
  word: string;
  pronounciation: string;
  meaning: string;
};

type CardProps = {
  currentIndex: SharedValue<number>;
  previousIndex: SharedValue<number>;
  animatedValue: SharedValue<number>;
  stackPos: number;
  cardData: CardData;
  dataLength: number;
};

const CardComponent = (props: CardProps) => {
  const animatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      props.animatedValue.value,
      [props.stackPos - 1, props.stackPos, props.stackPos + 1],
      [-42, 1, 42],
    );
    const scale = interpolate(
      props.animatedValue.value,
      [props.stackPos - 1, props.stackPos, props.stackPos + 1],
      [0.92, 1, 1.1],
    );
    const opacity = interpolate(
      props.animatedValue.value,
      [props.stackPos - 1, props.stackPos, props.stackPos + 1],
      [1, 1, 0],
    );
    return {
      transform: [{ translateY }, { scale }],
    };
  });

  return (
    <FlingGestureHandler
      key={"right"}
      direction={Directions.RIGHT}
      onHandlerStateChange={(event) => {
        if (event.nativeEvent.state === State.END) {
          props.animatedValue.value = withTiming(
            (props.currentIndex.value += 1),
          );

          props.previousIndex.value = props.currentIndex.value - 1;
        }
      }}
    >
      <FlingGestureHandler
        key={"left"}
        direction={Directions.LEFT}
        onHandlerStateChange={(event) => {
          if (event.nativeEvent.state === State.END) {
            props.animatedValue.value = withTiming(
              (props.currentIndex.value += 1),
            );

            props.previousIndex.value = props.currentIndex.value - 1;
          }
        }}
      >
        <Animated.View
          style={[
            {
              zIndex: props.dataLength - props.stackPos,
              ...styles.wordCardContainer,
            },
            animatedStyle,
          ]}
        >
          <Text>Word Details</Text>
        </Animated.View>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
};

const styles = StyleSheet.create({
  wordCardContainer: {
    position: "absolute",
    height: "80%",
    width: "90%",
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
