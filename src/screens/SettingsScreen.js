import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function SettingsScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>SettingsScreen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#0C0E12",
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		color: "#fff",
	},
});
