import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function BookmarkScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>BookmarkScreen</Text>
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
