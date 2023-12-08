import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTabs from "./NavigationTabs";

const Stack = createNativeStackNavigator();

export default function NavigationBar() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Root"
				screenOptions={{
					headerShown: false,
				}}>
				<Stack.Screen name="Root" component={NavigationTabs} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
