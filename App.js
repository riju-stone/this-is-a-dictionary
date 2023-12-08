import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import NavigationBar from "./src/navigation/NavigationBar";

export default function App() {
	return (
		<SafeAreaProvider>
			<StatusBar style="auto" />
			<NavigationBar />
		</SafeAreaProvider>
	);
}
