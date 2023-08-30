import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
	ThemeProvider,
	DarkTheme,
	DefaultTheme,
	useTheme,
} from "@react-navigation/native";
import NavigationBar from "./components/NavigationBar";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Open up App to start working on your app!</Text>
			<StatusBar style="auto" />
			<NavigationBar />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
