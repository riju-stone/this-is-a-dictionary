import { View, StyleSheet } from 'react-native'
import React from 'react'
import LoginScreen from '@/screens/login/_layout'
import Register from '@/screens/register/_layout'

const _layout = () =>
{
    return (
        <View style={styles.authScreenWrapper}>
            <LoginScreen />
            <Register />
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