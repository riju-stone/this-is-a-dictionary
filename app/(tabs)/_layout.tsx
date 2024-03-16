import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Platform, StyleSheet } from 'react-native';

import { BlurView } from "expo-blur";

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
})
{
  return <FontAwesome size={28} {...props} />;
}

export default function TabLayout()
{
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        tabBarStyle: Platform.OS === "ios" ? styles.tabBarIos : styles.tabBarAndroid,
        headerShown: false,
        tabBarShowLabel: false,

        tabBarBackground: () => (
          <BlurView
            tint="light"
            intensity={20}
            style={StyleSheet.absoluteFillObject}
          />
        ),
      }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="paperclip" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="gear" color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarAndroid: {
    position: "absolute",
    backgroundColor: "rgba(36, 36, 61, 0.6)",
    bottom: 40,
    left: 45,
    right: 45,
    height: 80,
    borderRadius: 18,
    elevation: 0,
    borderTopWidth: 0,
    overflow: "hidden"
  },
  tabBarIos: {
    position: "absolute",
    backgroundColor: "rgba(42, 42, 72, 0.6)",
    bottom: 40,
    left: 45,
    right: 45,
    height: 80,
    borderRadius: 18,
    elevation: 0,
    borderTopWidth: 0,
    overflow: "hidden",
    padding: 25
  }
})
