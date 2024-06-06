import { View, StyleSheet } from 'react-native'
import React from 'react'

const _layout = () => {
  return (
    <View style={styles.authScreenWrapper}>
    </View>
  )
}

const styles = StyleSheet.create({
  authScreenWrapper: {
    flex: 1,
    backgroundColor: "#24243D",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
})

export default _layout
