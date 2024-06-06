import { Fontisto, Octicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Platform, StyleSheet } from "react-native";

import { BlurView } from "expo-blur";

import Colors from "@/constants/Colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        tabBarStyle:
          Platform.OS === "ios" ? styles.tabBarIos : styles.tabBarAndroid,
        headerShown: false,
        tabBarShowLabel: false,

        tabBarBackground: () => (
          <BlurView
            tint="light"
            intensity={20}
            style={StyleSheet.absoluteFillObject}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Octicons name="home" size={24} color={Colors.focusedColor} />
            ) : (
              <Octicons name="home" size={24} color={Colors.unfocusedColor} />
            ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Octicons name="search" size={24} color={Colors.focusedColor} />
            ) : (
              <Octicons name="search" size={24} color={Colors.unfocusedColor} />
            ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Fontisto
                name="paperclip"
                size={24}
                color={Colors.focusedColor}
              />
            ) : (
              <Fontisto
                name="paperclip"
                size={24}
                color={Colors.unfocusedColor}
              />
            ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Octicons name="gear" size={24} color={Colors.focusedColor} />
            ) : (
              <Octicons name="gear" size={24} color={Colors.unfocusedColor} />
            ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarAndroid: {
    position: "absolute",
    backgroundColor: "rgba(36, 36, 61, 0.6)",
    elevation: 0,
    height: 80,
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 30,
    borderTopWidth: 0,
    overflow: "hidden",
    borderRadius: 20,
  },
  tabBarIos: {
    position: "absolute",
    backgroundColor: "rgba(42, 42, 72, 0.8)",
    elevation: 10,
    paddingTop: 20,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 30,
    borderTopWidth: 0,
    overflow: "hidden",
    borderRadius: 20,
  },
});
