import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CardComponent = () => {
  return (
    <View style={styles.wordCardContainer}>
      <Text>Word Details</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wordCardContainer: {
    height: "80%",
    width: "90%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#e407",
    padding: 20,
  },
});

export default CardComponent;
