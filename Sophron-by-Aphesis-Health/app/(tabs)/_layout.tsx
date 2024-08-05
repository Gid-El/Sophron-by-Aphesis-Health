import { Colors } from "@/constants/Colors";
import {
  FontAwesome,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";

const TabNav = () => {
  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="schedule" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="talk"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="phone-in-talk"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="visit"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="event-available" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name="history" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Fontisto name="player-settings" size={24} color="black" />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      /> */}
    </Tabs>
  );
};

export default TabNav;
