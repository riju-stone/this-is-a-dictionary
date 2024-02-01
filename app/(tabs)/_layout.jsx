import { Tabs } from "expo-router";
import { AntDesign, Feather } from "@expo/vector-icons";

export default () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="home" size={24} color="green" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />
        <Tabs.Screen
          name="saved"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="paperclip" size={24} color="green" />
              ) : (
                <AntDesign name="paperclip" size={24} color="black" />
              ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="search1" size={24} color="green" />
              ) : (
                <AntDesign name="search1" size={24} color="black" />
              ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Feather name="settings" size={24} color="green" />
              ) : (
                <Feather name="settings" size={24} color="black" />
              ),
          }}
        />
      </Tabs>
    </>
  );
};
