import React from "react";
import { Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MapScreen,
  TowersScreen,
  UsefulScreen,
  SettingsScreen,
} from "@/screens/main";
import { MapIcon, TowerIcon, UsefulIcon, SettingsIcon } from "@/components/icons";
import { MainTabParamList } from "@/types";
import { COLORS } from "@/constants";

const { height } = Dimensions.get("window");
const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: "#F3F4F6",
          height: 85,
          paddingBottom: height * 0.02 + 20,
          paddingTop: 10,
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: "#2C2C2C",
        tabBarLabelStyle: {
          fontFamily: "Roboto_500Medium",
          fontSize: 11,
          marginTop: 4,
        },
        animation: "shift",
      }}
    >
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarLabel: "Карта",
          tabBarIcon: ({ color }) => <MapIcon color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name="Towers"
        component={TowersScreen}
        options={{
          tabBarLabel: "Вышки",
          tabBarIcon: ({ color }) => <TowerIcon color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name="Useful"
        component={UsefulScreen}
        options={{
          tabBarLabel: "Полезное",
          tabBarIcon: ({ color }) => <UsefulIcon color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Настройки",
          tabBarIcon: ({ color }) => <SettingsIcon color={color} size={24} />,
        }}
      />
    </Tab.Navigator>
  );
};
