import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import BookmarkScreen from "../screens/BookmarkScreen";
import SettingsScreen from "../screens/SettingsScreen";

import HomeIcon from "../../assets/navbar/home.svg";
import SearchIcon from "../../assets/navbar/search.svg";
import SaveIcon from "../../assets/navbar/save.svg";
import SettingsIcon from "../../assets/navbar/settings.svg";

const Tab = createBottomTabNavigator();

const selectedTabColor = (focused) => {
	return focused ? "#00AF90" : "#ffffff";
};

export default function NavigationTabs() {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: navigationStyles.navBarContainer,
				tabBarBackground: () => (
					<BlurView tint="dark" intensity={100} style={StyleSheet.absoluteFill} />
				),
			}}>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarIconStyle: navigationStyles.navBarIcon,
					tabBarIcon: ({ focused }) => (
						<View>
							<HomeIcon height={26} width={26} fill={focused ? "#00AF90" : "#fff"} />
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Search"
				component={SearchScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							<SearchIcon height={26} width={26} fill={focused ? "#00AF90" : "#fff"} />
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Bookmarks"
				component={BookmarkScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							<SaveIcon height={26} width={26} fill={focused ? "#00AF90" : "#fff"} />
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Settings"
				component={SettingsScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							<SettingsIcon height={26} width={26} fill={focused ? "#00AF90" : "#fff"} />
						</View>
					),
				}}
			/>
		</Tab.Navigator>
	);
}

const navigationStyles = StyleSheet.create({
	navBarContainer: {
		backgroundColor: "transparent",
		position: "absolute",
		padding: 0,
		margin: 0,
		left: 68,
		right: 68,
		bottom: 28,
		height: 68,
		borderRadius: 18,
		border: 0,
		shadowColor: "transparent",
		overflow: "hidden",
		zIndex: 0,
	},
	navBarIcon: {
		zIndex: 10,
	},
});
