import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";

import { BlurView } from "expo-blur";
import { Home, Paperclip, Search, Settings } from "lucide-react-native";

export default () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarStyle: navBarStyles.navBarWrapper,
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
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Home size={24} color="#00AF90" />
              ) : (
                <Home size={24} color="#0C0E12" />
              ),
          }}
        />
        <Tabs.Screen
          name="saved"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Paperclip size={24} color="#00AF90" />
              ) : (
                <Paperclip size={24} color="#0C0E12" />
              ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Search size={24} color="#00AF90" />
              ) : (
                <Search size={24} color="#0C0E12" />
              ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Settings size={24} color="#00AF90" />
              ) : (
                <Settings size={24} color="#0C0E12" />
              ),
          }}
        />
      </Tabs>
    </>
  );
};

const navBarStyles = StyleSheet.create({
  navBarWrapper: {
    position: "absolute",
    backgroundColor: "rgba(5, 5, 35, 0.4)",
    borderRadius: 14,
    height: 65,
    overflow: "hidden",
    elevation: 0,
    bottom: 25,
    left: 60,
    right: 60,
    border: 0,
    margin: 0,
    borderTopWidth: 0,
  },
});
